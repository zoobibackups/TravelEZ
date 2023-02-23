import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {RFValue} from 'react-native-responsive-fontsize';
import {hp, wp} from '../constants/scaling';
import {colors, fonts} from '../constants/theme';
import {textStyles} from '../styles/textStyles';
const CustomTextInput = ({
  label,
  placeholder,
  value,
  editable = true,
  multiline = false,
  onChangeText,
}) => {
  return (
    <View style={{...styles.mainView, height: multiline ? hp(20) : hp(12)}}>
      <Animated.Text
        style={{
          ...textStyles.Label,
          color: colors.textPrimaryColor,

          marginLeft: wp(1),
          alignSelf: 'flex-start',
          marginBottom: wp(1),
        }}>
        {label}
      </Animated.Text>

      <TextInput
        style={{
          ...styles.InputView,
          textAlignVertical: multiline ? 'top' : 'center',
          height: multiline ? hp(15) : hp(7),
        }}
        editable={editable}
        multiline={multiline}
        placeholder={placeholder}
        placeholderTextColor={'rgba(0,0,0,.5)'}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  mainView: {
    alignSelf: 'center',
    width: wp(92),
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
    width: wp(92),
    paddingLeft: wp(4),
    alignItems: 'center',
    borderRadius: wp(2),
    borderWidth: 1,
    height: hp(7),
    borderColor: colors.borderColor,
    fontFamily: fonts.Medium,
    includeFontPadding: false,
    fontSize: RFValue(13),
    elevation: 5,

    justifyContent: 'space-between',
    backgroundColor: colors.white,
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
