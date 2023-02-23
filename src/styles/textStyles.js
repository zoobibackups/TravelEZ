import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors, fonts} from '../constants/theme';
export const textStyles = StyleSheet.create({
  heading: {
    fontFamily: fonts.Bold,
    fontSize: RFValue(14),
    includeFontPadding: false,
    textAlign: 'left',
    color: colors.textPrimaryColor,
    backgroundColor: '#0000',
  },
  mediumheading: {
    fontFamily: fonts.Medium,
    fontSize: RFValue(12),
    includeFontPadding: false,
    color: colors.secondaryTextColor,
    backgroundColor: '#0000',
  },
  smallheading: {
    fontFamily: fonts.Bold,
    fontSize: RFValue(11),
    includeFontPadding: false,
    color: colors.textPrimaryColor,
    backgroundColor: '#0000',
  },
  title: {
    fontFamily: fonts.Medium,
    includeFontPadding: false,
    fontSize: RFValue(12),
    color: 'rgba(0,0,0,.8)',
    backgroundColor: '#0000',
  },
  paragraph: {
    fontFamily: fonts.Regular,
    includeFontPadding: false,
    fontSize: RFValue(14),
    color: colors.textPrimaryColor,
    backgroundColor: '#0000',
  },
  Label: {
    fontFamily: fonts.Medium,
    includeFontPadding: false,
    fontSize: RFValue(14),
    textAlign: 'left',
    color: colors.textPrimaryColor,
    backgroundColor: '#0000',
  },
  small: {
    fontFamily: fonts.Light,
    includeFontPadding: false,
    fontSize: RFValue(12),
    color: colors.textPrimaryColor,
    backgroundColor: '#0000',
  },
  skills_text: {
    fontFamily: fonts.Medium,
    fontSize: RFValue(11),
    includeFontPadding: false,
    color: colors.textPrimaryColor,
    backgroundColor: '#0000',
  },
  errorText: {
    fontFamily: fonts.Medium,
    fontSize: RFValue(10),
    color: colors.errorTextColor,
    includeFontPadding: false,
    backgroundColor: '#0000',
  },
  disabletext: {
    fontFamily: fonts.Regular,
    fontSize: RFValue(14),
    textAlign: 'center',
    color: 'rgba(0,0,0,.5)',
    includeFontPadding: false,
    backgroundColor: '#0000',
  },
  tableLabel: {
    fontFamily: fonts.Medium,
    includeFontPadding: false,
    fontSize: RFValue(10),
    color: colors.textPrimaryColor,
    backgroundColor: '#0000',
    includeFontPadding: false,
  },
});
