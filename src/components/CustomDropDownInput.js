import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {hp, wp} from '../constants/scaling';
import {colors, fonts} from '../constants/theme';
import {textStyles} from '../styles/textStyles';

const CustomDropDownInput = ({label, placeholder, value, setValue}) => {
  const [show, setShow] = useState(false);
  const [date] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setValue(moment(currentDate).format('HH:mm'));
  };

  return (
    <View style={{alignSelf: 'center', height: hp(12)}}>
      <Text
        style={{
          ...textStyles.Label,
          color: colors.white,
          alignSelf: 'flex-start',
        }}>
        {label}
      </Text>
      <TouchableOpacity style={styles.InputView} onPress={() => setShow(true)}>
        {value === '' ? (
          <Text style={styles.textStyle}>{placeholder}</Text>
        ) : (
          <Text style={styles.textStyle}>{value}</Text>
        )}

        <View style={styles.touchableIcon}>
          <FontAwesome
            name={'clock-o'}
            size={RFValue(22)}
            color={colors.white}
          />
        </View>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'time'}
          is24Hour={true}
          //   onTouchCancel={() => setShow(false)}
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default CustomDropDownInput;

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
    flexDirection: 'row',
    width: wp(96),
    overflow: 'hidden',
    paddingLeft: wp(4),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: wp(2),
    height: hp(7),
    justifyContent: 'space-between',
    backgroundColor: colors.transparentbgColor,
  },
  touchableIcon: {
    width: hp(7),
    alignSelf: 'flex-end',
    backgroundColor: colors.lightPrimaryColor,
    height: hp(7),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
