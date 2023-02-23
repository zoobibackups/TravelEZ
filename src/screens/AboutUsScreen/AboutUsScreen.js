import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomHeader from '../../components/CustomHeader';
import {wp} from '../../constants/scaling';
import {colors} from '../../constants/theme';
import {textStyles} from '../../styles/textStyles';
import {aboutsus, paragraphps} from './data';

const AboutUsScreen = ({navigation}) => {
  console.log(paragraphps.length);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <CustomHeader
        title={'About Us'}
        show_backButton={true}
        isdrawer={true}
        onPress={() => navigation.openDrawer()}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {aboutsus.map((item, index) => (
          <View key={`${index}`} style={styles.cardView}>
            <Text style={styles.heading}>{item.heading}</Text>
            {item.image !== null && (
              <Image
                source={{uri: item.image}}
                style={{
                  width: wp(92),
                  height: wp(60),
                  marginBottom: wp(2),
                  borderRadius: wp(1),
                }}
              />
            )}
            <Text style={styles.parapgraph}>{item.paragraph}</Text>
          </View>
        ))}
        <View
          style={{
            ...styles.cardView,
            padding: 0,
            elevation: 0,
            borderWidth: 0,
            borderColor: '#f2f2f2',
            overflow: 'hidden',
          }}>
          <Text
            style={{
              ...textStyles.heading,
            }}>
            OUR VALUES
          </Text>

          <FlatList
            data={paragraphps}
            legacyImplementation={true}
            horizontal={false}
            windowSize={150}
            removeClippedSubviews={true}
            initialNumToRender={26}
            updateCellsBatchingPeriod={30}
            onEndReachedThreshold={0.7}
            refreshing={true}
            maxToRenderPerBatch={20}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => item.id}
            renderItem={({item, index}) => {
              return (
                <View style={styles.innerCard}>
                  <View style={styles.innercardHeaderView}>
                    <View
                      style={{
                        width: wp(20),
                        alignItems: 'center',
                      }}>
                      <Image
                        source={item.image}
                        style={{width: wp(16), height: wp(16)}}
                      />
                    </View>
                    <View style={{paddingLeft: wp(2)}}>
                      <Text
                        style={{
                          ...textStyles.heading,
                          color: colors.primaryColor,
                        }}>
                        {item.id}.{item.heading}
                      </Text>
                      <Text
                        style={{
                          ...styles.parapgraph,
                          textAlign: 'justify',
                          width: wp(66),
                        }}>
                        {item.paragraph}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutUsScreen;
const styles = StyleSheet.create({
  cardView: {
    padding: wp(5),
    margin: wp(3),
    borderRadius: wp(2),
    // elevation: 5,
    backgroundColor: '#fff',
  },
  parkingTypecardView: {
    padding: wp(5),
    margin: wp(3),
    borderRadius: wp(2),
    elevation: 5,
    backgroundColor: colors.primaryColor,
  },
  heading: {
    ...textStyles.smallheading,
    paddingBottom: wp(2),
    fontSize: RFValue(16),
    lineHeight: RFValue(16) * 1.5,
    textAlign: 'justify',
  },
  parapgraph: {
    ...textStyles.Label,
    color: colors.textPrimaryColor,
    fontSize: RFValue(12),
    lineHeight: RFValue(12) * 1.5,
    textAlign: 'justify',
  },
  cardView: {
    backgroundColor: '#0000',
    margin: wp(2),
    borderRadius: wp(2),
    padding: wp(2),
    width: wp(94),
  },
  innerCard: {
    margin: wp(2),
    borderRadius: wp(2),
    paddingTop: 0,
    paddingHorizontal: 0,
    overflow: 'hidden',
    width: wp(93),
    elevation: 5,
    marginLeft: wp(0.5),
    padding: wp(2),
    backgroundColor: '#fff',
  },
  ButtonBox: {
    position: 'absolute',
    flexDirection: 'row',
    right: 0,
    justifyContent: 'space-between',
    width: wp(20),
    padding: wp(2),
  },
  innercardHeaderView: {
    backgroundColor: '#0000',
    flexDirection: 'row',
    padding: wp(2),
    paddingBottom: 0,
  },
  headingTextNumber: {
    ...textStyles.heading,
    color: colors.primaryColor,
    textAlign: 'center',
    alignSelf: 'center',
    textAlignVertical: 'center',
  },
  description: {
    ...textStyles.mediumheading,
    paddingHorizontal: wp(2),
    textAlign: 'justify',
  },
});
