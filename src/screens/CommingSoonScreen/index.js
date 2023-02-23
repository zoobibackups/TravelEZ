import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LOUNGES from '../../assets/svgs/lounge.svg';
import CustomHeader from '../../components/CustomHeader';
import IconButton from '../../components/IconButton';
import {wp} from '../../constants/scaling';
import {colors} from '../../constants/theme';
import {textStyles} from '../../styles/textStyles';
const CommingSoonScreen = ({navigation, route}) => {
  let item = route.params.item;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
      <CustomHeader
        title={item}
        show_backButton={true}
        isdrawer={false}
        onPress={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.cardView}>
          <Text style={styles.text}>Comming</Text>
          <Text style={styles.text}>Soon</Text>
        </View>
        <TouchableOpacity style={styles.cardView}>
          <Text style={styles.text}>GET NOTIFIED</Text>
          <Text style={{...styles.text, fontSize: RFValue(20)}}>
            When we Launch
          </Text>
          <Ionicons
            style={{position: 'absolute', right: wp(0), alignSelf: 'center'}}
            name={'ios-notifications'}
            color={colors.white}
            size={RFValue(90)}
          />
        </TouchableOpacity>
        <View
          style={{position: 'absolute', bottom: wp(2), alignSelf: 'center'}}>
          <IconButton
            icon={<LOUNGES width={wp(8)} height={wp(8)} />}
            style={{
              width: wp(96),
            }}
            title={'Go Back'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CommingSoonScreen;
const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  cardView: {
    width: wp(96),
    alignSelf: 'center',
    justifyContent: 'center',
    margin: wp(2),
    borderRadius: wp(2),
    elevation: 10,
    padding: wp(5),
    backgroundColor: colors.primaryColor,
  },
  text: {
    ...textStyles.heading,
    color: colors.white,
    fontSize: RFValue(30),
  },
});
