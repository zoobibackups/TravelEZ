import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {hp, wp} from '../constants/scaling';
import {colors} from '../constants/theme';
import {textStyles} from '../styles/textStyles';
import SectionListDropDown from './SectionListDropDown';
const HotelDropDownInput = ({select_hotel, setSelectedHotel}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View
      style={{
        alignSelf: 'center',
        height: hp(7),
        width: wp(96),
        alignItems: 'center',
      }}>
      <Text
        style={{
          ...textStyles.Label,
          color: colors.white,
          alignSelf: 'flex-start',
          marginBottom: wp(1),
        }}>
        Destination
      </Text>
      <TouchableOpacity
        onPress={() => setIsModalVisible(true)}
        style={styles.InputView}>
        <View style={{flexDirection: 'row'}}>
          <FontAwesome
            name={'circle-o'}
            style={{marginRight: wp(2)}}
            color={'#a1aac4'}
            size={RFValue(20)}
          />
          {select_hotel == null ? (
            <Text style={{...textStyles.Label, color: 'rgba(255,255,255,.6)'}}>
              United Arab Emirates
            </Text>
          ) : (
            <Text
              numberOfLines={1}
              style={{...textStyles.Label, width: wp(60), color: '#fff'}}>
              {select_hotel?.name}
            </Text>
          )}
        </View>
        <View style={styles.iconsStyle}>
          <Entypo color={colors.white} name={'chevron-down'} size={wp(8)} />
        </View>
      </TouchableOpacity>
      <SectionListDropDown
        setIsModalVisible={() => setIsModalVisible(false)}
        isModalVisible={isModalVisible}
        setSelectedValue={item => {
          setSelectedHotel(item), setIsModalVisible(false);
        }}
      />
    </View>
  );
};

export default HotelDropDownInput;

const styles = StyleSheet.create({
  iconsStyle: {
    width: hp(7),
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(7),
    borderTopRightRadius: wp(2),
    borderBottomRightRadius: wp(2),
    backgroundColor: colors.lightPrimaryColor,
  },
  InputView: {
    flexDirection: 'row',
    width: wp(96),
    overflow: 'hidden',
    paddingLeft: wp(4),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: wp(2),
    height: hp(7),
    justifyContent: 'space-between',
    backgroundColor: colors.transparentbgColor,
  },
});
