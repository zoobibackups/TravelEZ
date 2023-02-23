import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors, fonts} from '../constants/theme';
const IconButton = ({icon, onPress, style, title = 'Done'}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.button,
        ...style,
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: wp(10),
          alignItems: 'center',
        }}>
        {icon}
        <Text
          style={{
            ...styles.text,
            marginLeft: wp(5),
            color: colors.white,
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryColor,
    height: hp(7),
    width: wp(90),
    alignSelf: 'center',
    marginVertical: wp(2),
    borderRadius: wp(2),
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
    fontSize: RFValue(14),
    includeFontPadding: false,
    fontFamily: fonts.Bold,
  },
});

export default IconButton;
