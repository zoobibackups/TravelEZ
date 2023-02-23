import { NativeBaseProvider, Select } from 'native-base';
import React from 'react';
import { Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { hp, wp } from '../constants/scaling';
import { colors, fonts } from '../constants/theme';
import selectStyles from '../styles/selectStyles';
import Entypo from 'react-native-vector-icons/Entypo';
import { textStyles } from '../styles/textStyles';
const HelpDiskDropDown = ({ label, placeholder, data, value, setValue }) => {
    return (
        <View
            style={{
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'flex-end',
                height: hp(10)
            }}>
            <NativeBaseProvider>
                <Text
                    style={{
                        ...textStyles.Label,
                        color: colors.textPrimaryColor,
                        alignSelf: 'flex-start'
                    }}>
                    {label}
                </Text>

                <Select
                    useNativeDriver={true}
                    selectedValue={value}
                    minWidth={wp(92)}
                    accessibilityLabel={placeholder}
                    placeholder={placeholder}
                    placeholderTextColor={'rgba(0,0,0,.6)'}
                    _item={selectStyles._item}
                    dropdownCloseIcon={
                        <View
                            style={{
                                width: hp(7),
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: hp(7),
                                backgroundColor: '#0001'
                            }}>
                            <Entypo
                                color={'#000'}
                                name={'chevron-down'}
                                size={wp(6)}
                            />
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
                                backgroundColor: '#0001'
                            }}>
                            <Entypo
                                color={'#000'}
                                name={'chevron-up'}
                                size={wp(6)}
                            />
                        </View>
                    }
                    _selectedItem={selectStyles._selectedItem}
                    mt={1}
                    mb={1}
                    borderWidth={1}
                    borderRadius={wp(2)}
                    borderColor={colors.borderColor}
                    elevation={5}
                    justifyContent={'center'}
                    alignItems={'center'}
                    h={hp(7)}
                    backgroundColor={colors.white}
                    fontFamily={fonts.Medium}
                    color={'#000'}
                    fontSize={RFValue(13)}
                    style={{
                        backgroundColor: '#fff',
                        borderWidth: 0,
                        maxWidth: wp(85)
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

export default HelpDiskDropDown; //, compareProps);
