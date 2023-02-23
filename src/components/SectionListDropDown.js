import React, {useState} from 'react';
import {
  ActivityIndicator,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {RFValue} from 'react-native-responsive-fontsize';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {hp, wp} from '../constants/scaling';
import {colors, fonts} from '../constants/theme';
import {titleCase} from '../functions/commonfunction';
import {textStyles} from '../styles/textStyles';
const Item = ({item, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: wp(90),
        height: hp(6),
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: colors.inputBgColor,
        borderBottomWidth: 1,
      }}>
      <FontAwesome
        name={'map-marker'}
        style={{marginRight: wp(2)}}
        color={'#a1aac4'}
        size={wp(6)}
      />
      <Text
        numberOfLines={1}
        style={{
          ...textStyles.Label,
          textAlign: 'center',
          fontFamily: fonts.Medium,
        }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

const SectionListDropDown = ({
  isModalVisible,
  setIsModalVisible,
  setSelectedValue,
}) => {
  const [loading, setLoading] = useState(false);
  const [suggestionsList, setSuggestionsList] = useState([]);
  const [search, setSearch] = useState('');
  const getSuggestions = query => {
    const filterToken = query.toLowerCase();
    if (query.length < 3) {
      setLoading(false);
      return;
    }

    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      'Basic MzQ1Njo0ZWZmZjhlZi02MDhiLTQ2NmItOTBjZS1jMTk0MTE4OWUwN2Y=',
    );
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      query: filterToken,
      language: 'en',
    });
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };
    fetch(
      'https://api.worldota.net/api/b2b/v3/search/multicomplete',
      requestOptions,
    )
      .then(response => response.json())
      .then(response => {
        const sections = [];
        Object.keys(response.data).map((item, i) => {
          sections.push({
            title: item,
            data: response.data[item],
          });
        });
        setSuggestionsList(sections);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <Modal
      style={{
        justifyContent: 'flex-end',
        margin: 0,
      }}
      useNativeDriver={true}
      backdropColor={colors.primaryColor}
      backdropOpacity={1}
      hideModalContentWhileAnimating={true}
      backdropTransitionOutTiming={0}
      animationInTiming={500}
      animationOutTiming={500}
      isVisible={isModalVisible}
      onBackdropPress={setIsModalVisible}>
      <View style={styles.main_view}>
        <View
          style={{
            width: wp(90),
            flexDirection: 'row',
            alignItems: 'center',
            //backgroundColor: colors.inputBgColor,
            height: hp(7),
            marginBottom: wp(2),
          }}>
          <TouchableOpacity onPress={setIsModalVisible}>
            <Entypo name="cross" size={wp(7)} color={colors.textPrimaryColor} />
          </TouchableOpacity>
          <Text
            style={{
              ...textStyles.heading,
              marginLeft: wp(4),
              fontFamily: fonts.Bold,
            }}>
            Departure
          </Text>
        </View>
        <SectionList
          showsVerticalScrollIndicator={false}
          sections={suggestionsList}
          keyboardShouldPersistTaps={'always'}
          ListEmptyComponent={
            <Text
              style={{
                ...textStyles.Label,
                textAlign: 'center',
                paddingTop: wp(30),
                fontFamily: fonts.Bold,
              }}>
              {search.trim().length < 3
                ? 'Please Enter a least three characters'
                : ''}
            </Text>
          }
          scrollEventThrottle={500}
          ListHeaderComponent={
            <TouchableOpacity
              style={{
                backgroundColor: colors.inputBgColor,
                height: hp(7),
                alignItems: 'center',
                flexDirection: 'row',
                paddingHorizontal: wp(5),
                borderRadius: wp(2),
                marginBottom: wp(2),
                width: wp(90),
              }}>
              <FontAwesome
                name={'circle-o'}
                style={{marginRight: wp(2)}}
                color={'#a1aac4'}
                size={wp(6)}
              />
              <TextInput
                value={search}
                onChangeText={text => {
                  setSearch(text), getSuggestions(text);
                }}
                placeholderTextColor={colors.secondaryTextColor}
                placeholder="Search here your destination"
                style={{
                  width: wp(72),
                  fontFamily: fonts.Medium,
                  includeFontPadding: false,
                  borderRadius: wp(2),
                  paddingHorizontal: wp(2),
                  backgroundColor: colors.inputBgColor,
                  justifyContent: 'center',
                  color: colors.textPrimaryColor,
                  fontSize: RFValue(14),
                  alignItems: 'center',
                  alignSelf: 'center',
                  height: hp(7),
                }}
              />
            </TouchableOpacity>
          }
          keyExtractor={(item, index) => item + index}
          renderItem={({item, section}) => {
            return (
              <Item
                item={item}
                onPress={() => {
                  if (section.title == 'regions') {
                    setSelectedValue({...item, is_region: true});
                  } else {
                    setSelectedValue({...item, is_region: false});
                  }
                }}
              />
            );
          }}
          renderSectionHeader={({section: {title}}) => (
            <View
              style={{
                backgroundColor: colors.primaryColor,
                width: wp(90),
                height: hp(7),
                flexDirection: 'row',
                marginVertical: wp(2),
                borderRadius: wp(1),
                alignItems: 'center',
                paddingHorizontal: wp(2),
              }}>
              {title == 'hotels' ? (
                <FontAwesome
                  name={'hotel'}
                  style={{marginRight: wp(2)}}
                  color={'#fff'}
                  size={wp(6)}
                />
              ) : (
                <FontAwesome
                  name={'circle-o'}
                  style={{marginRight: wp(2)}}
                  color={'#fff'}
                  size={wp(6)}
                />
              )}
              <Text
                style={{
                  ...textStyles.heading,
                  fontFamily: fonts.Bold,
                  color: colors.white,
                }}>
                {titleCase(title)}
              </Text>
            </View>
          )}
        />
        {loading && (
          <View style={styles.loadingView}>
            <ActivityIndicator color={colors.textPrimaryColor} size={'large'} />
            <Text
              style={{
                ...textStyles.Label,
                textAlign: 'center',
                paddingTop: wp(3),
                fontFamily: fonts.Bold,
              }}>
              Please wait loading
            </Text>
          </View>
        )}
      </View>
    </Modal>
  );
};
export default SectionListDropDown;

const styles = StyleSheet.create({
  main_view: {
    justifyContent: 'center',
    backgroundColor: colors.white,
    padding: wp(5),
    paddingVertical: wp(2),
    flex: 1,
  },
  loadingView: {
    flex: 1,
    backgroundColor: '#0001',
    position: 'absolute',
    left: 0,
    right: 0,
    top: hp(60),
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
