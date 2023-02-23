import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {hp, wp} from '../constants/scaling';
import {colors, fonts} from '../constants/theme';
const CustomButton = ({
  onPress,
  loadingTextStyle,
  buttonStyle,
  titleStyle,
  isLoading,
  title = 'Done',
  loadingText,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...buttonStyle,
      }}
      onPress={onPress}
      disabled={isLoading}>
      {isLoading ? (
        <View style={styles.LoadingView}>
          <ActivityIndicator
            style={{
              marginRight: wp(10),
            }}
            color={colors.white}
          />
          <Text style={{...styles.text, ...loadingTextStyle}}>
            {loadingText}
          </Text>
        </View>
      ) : (
        <Text style={{...styles.text, ...titleStyle}}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondaryColor,
    width: wp(96),
    height: hp(7),
    alignSelf: 'center',
    marginVertical: wp(2),
    borderRadius: wp(2),

    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.textPrimaryColor,
    fontSize: RFValue(16),
    includeFontPadding: false,
    fontFamily: fonts.Bold,
  },
  LoadingView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomButton;
