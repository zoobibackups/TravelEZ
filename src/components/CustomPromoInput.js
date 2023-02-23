import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {RFValue} from 'react-native-responsive-fontsize';
import {hp, wp} from '../constants/scaling';
import {colors, fonts} from '../constants/theme';
import {textStyles} from '../styles/textStyles';
const CustomPromoInput = ({
  label,
  placeholder,
  value,
  width = wp(96),
  editable = true,
  onChangeText,
}) => {
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

      <TextInput
        style={{
          ...styles.InputView,
          width: width,
        }}
        editable={editable}
        placeholder={placeholder}
        placeholderTextColor={'rgba(255,255,255,.5)'}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default CustomPromoInput;

const styles = StyleSheet.create({
  mainView: {
    alignSelf: 'center',
    width: wp(96),
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
    paddingLeft: wp(4),
    alignItems: 'center',
    borderRadius: wp(2),
    borderWidth: 1,
    borderColor: colors.white,
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
    width: wp(10),
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0)',
    height: hp(7),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
