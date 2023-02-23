import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {RFValue} from 'react-native-responsive-fontsize';
import Entypo from 'react-native-vector-icons/Entypo';
import {hp, wp} from '../constants/scaling';
import {colors, fonts} from '../constants/theme';
import {textStyles} from '../styles/textStyles';
const ChildAgeInput = ({label, value, width = wp(96), onChangeText}) => {
  return (
    <View
      style={{
        ...styles.mainView,
        overflow: 'hidden',
        marginRight: wp(5),
        width: width,
      }}>
      <Animated.Text
        style={{
          ...textStyles.Label,
          color: colors.white,

          marginLeft: wp(1),
          alignSelf: 'flex-start',
          marginBottom: wp(1),
        }}>
        Age of : {label}
      </Animated.Text>
      <View
        style={{
          ...styles.InputView,
          width: width,
          overflow: 'hidden',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            ...textStyles.Label,
            color: colors.white,
            fontSize: RFValue(15),
            fontFamily: fonts.Bold,
          }}>
          {value}
        </Text>
        <View>
          <TouchableOpacity
            onPress={() => onChangeText('+')}
            style={styles.touchableIcon}>
            <Entypo name="chevron-up" color={'#fff'} size={RFValue(15)} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onChangeText('-')}
            style={{...styles.touchableIcon, marginBottom: 0}}>
            <Entypo name="chevron-down" color={'#fff'} size={RFValue(15)} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChildAgeInput;

const styles = StyleSheet.create({
  mainView: {
    alignSelf: 'center',
    width: wp(96),
    height: hp(12),
    justifyContent: 'center',
  },
  InputView: {
    width: wp(96),
    paddingLeft: wp(4),
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
    backgroundColor: colors.lightPrimaryColor,
    flex: 1,
    width: wp(6),
    marginBottom: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
