import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {RFValue} from 'react-native-responsive-fontsize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {hp, wp} from '../constants/scaling';
import {colors, fonts} from '../constants/theme';
import {textStyles} from '../styles/textStyles';
const CustomDatePicker = ({label, value, placeholder, onChangeText}) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  return (
    <View style={styles.mainView}>
      <Text
        style={{
          ...textStyles.Label,
          color: colors.white,
          alignSelf: 'flex-start',
          marginBottom: wp(1),
        }}>
        {label}
      </Text>

      <TouchableOpacity style={styles.InputView} onPress={() => setOpen(true)}>
        {value === '' ? (
          <Text style={styles.textStyle}>{placeholder}</Text>
        ) : (
          <Text style={styles.textStyle}>{value}</Text>
        )}

        <View style={styles.touchableIcon}>
          <FontAwesome
            name={'calendar'}
            size={RFValue(16)}
            color={colors.white}
          />
        </View>
      </TouchableOpacity>
      <DatePicker
        modal
        open={open}
        date={date}
        minimumDate={new Date()}
        mode={'date'}
        onConfirm={date => {
          setOpen(false);
          onChangeText(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default CustomDatePicker;

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
