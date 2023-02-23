import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {wp} from '../../../constants/scaling';
import {colors, fonts} from '../../../constants/theme';
createLine = current => {
  return (
    <View
      style={{
        height: wp(2),
        width: wp(70),
        alignSelf: 'center',
        backgroundColor: current ? colors.primaryColor : colors.borderColor,
      }}
    />
  );
};
const CreateCircle = ({value, title, current = true}) => {
  return (
    <View>
      <TouchableOpacity style={{flexDirection: 'row'}}>
        <View
          style={{
            width: wp(10),
            height: wp(10),
            borderRadius: wp(40),
            backgroundColor: current ? colors.primaryColor : colors.borderColor,
            borderWidth: 0,
            borderColor: current ? colors.primaryColor : colors.borderColor,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: current ? colors.white : colors.primaryColor,
              fontFamily: fonts.Bold,
              paddingVertical: wp(2),
              paddingHorizontal: wp(2),
              fontSize: RFValue(13),
            }}>
            {value}
          </Text>
        </View>
        {value != 2 && createLine(current)}
      </TouchableOpacity>
      <Text
        style={{
          color: current ? colors.primaryColor : colors.inputBgColor,
          fontFamily: fonts.Bold,
          fontSize: RFValue(12),
          marginTop: wp(1),
          marginLeft: wp(-2),
        }}>
        {title}
      </Text>
    </View>
  );
};

export default CreateCircle;
