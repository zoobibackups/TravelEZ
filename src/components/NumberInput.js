import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {RFValue} from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {hp, wp} from '../constants/scaling';
import {colors, fonts} from '../constants/theme';
import {textStyles} from '../styles/textStyles';
const NumberInput = ({label, value, width = wp(96), onChangeText}) => {
  return (
    <View style={{...styles.mainView, width: width}}>
      <Animated.Text
        style={{
          ...textStyles.Label,
          color: colors.white,

          marginLeft: wp(1),
          alignSelf: 'flex-start',
          marginBottom: wp(1),
        }}>
        {label}
      </Animated.Text>
      <View
        style={{
          ...styles.InputView,
          width: width,
          overflow: 'hidden',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => onChangeText('-')}
          style={styles.touchableIcon}>
          <AntDesign name="minuscircle" color={'#fff'} size={RFValue(25)} />
        </TouchableOpacity>
        <Text
          style={{
            ...textStyles.Label,
            color: colors.white,
            fontSize: RFValue(15),
            fontFamily: fonts.Bold,
          }}>
          {value}
        </Text>
        <TouchableOpacity
          onPress={() => onChangeText('+')}
          style={styles.touchableIcon}>
          <AntDesign name="pluscircle" color={'#fff'} size={RFValue(25)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NumberInput;

const styles = StyleSheet.create({
  mainView: {
    alignSelf: 'center',
    width: wp(96),
    overflow: 'hidden',
    height: hp(12),
    justifyContent: 'center',
  },
  textStyle: {
    ...textStyles.smallheading,
    fontSize: RFValue(14),
    fontFamily: fonts.Medium,
    color: '#fff',
  },
  InputView: {
    width: wp(96),

    alignItems: 'center',
    borderRadius: wp(2),
    borderWidth: 0,
    height: hp(7),
    borderColor: colors.white,
    fontFamily: fonts.Medium,
    includeFontPadding: false,
    fontSize: RFValue(16),
    color: '#fff',
    justifyContent: 'space-between',
    backgroundColor: colors.transparentbgColor,
  },
  touchableIcon: {
    width: wp(12),
    backgroundColor: colors.lightPrimaryColor,
    height: hp(7),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
