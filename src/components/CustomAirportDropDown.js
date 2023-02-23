import {NativeBaseProvider, Select} from 'native-base';
import React from 'react';
import {Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import Entypo from 'react-native-vector-icons/Entypo';

import {hp, wp} from '../constants/scaling';
import {colors, fonts} from '../constants/theme';
import selectStyles from '../styles/selectStyles';
import {textStyles} from '../styles/textStyles';
const CustomAirportDropDown = ({label, placeholder, data, value, setValue}) => {
  return (
    <View style={{alignSelf: 'center', height: hp(12)}}>
      <NativeBaseProvider>
        <Text
          style={{
            ...textStyles.Label,
            color: colors.white,
            alignSelf: 'flex-start',
          }}>
          {label}
        </Text>

        <Select
          useNativeDriver={true}
          selectedValue={value}
          minWidth={wp(96)}
          accessibilityLabel={placeholder}
          placeholder={placeholder}
          placeholderTextColor={'rgba(255,255,255,1)'}
          _item={selectStyles._item}
          dropdownCloseIcon={
            <View
              style={{
                width: hp(7),
                justifyContent: 'center',
                alignItems: 'center',
                height: hp(7),
                backgroundColor: colors.lightPrimaryColor,
              }}>
              <Entypo color={colors.white} name={'chevron-down'} size={wp(8)} />
            </View>
          }
          dropdownOpenIcon={
            <View
              style={{
                width: hp(7),
                height: hp(7),

                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 100,
                backgroundColor: colors.lightPrimaryColor,
              }}>
              <Entypo color={colors.white} name={'chevron-up'} size={wp(6)} />
            </View>
          }
          _selectedItem={selectStyles._selectedItem}
          mt={1}
          borderWidth={1}
          borderRadius={wp(2)}
          h={hp(7)}
          backgroundColor={colors.transparentbgColor}
          fontFamily={fonts.Medium}
          color={'#fff'}
          fontSize={RFValue(14)}
          borderColor={colors.white}
          style={{
            backgroundColor: '#0000',
            borderWidth: 0,
          }}
          onValueChange={itemValue => setValue(itemValue)}>
          {data.map((item, index) => {
            return (
              <Select.Item
                label={item.label}
                value={item.value}
                key={`${index}`}
              />
            );
          })}
        </Select>
      </NativeBaseProvider>
    </View>
  );
};

export default CustomAirportDropDown;
