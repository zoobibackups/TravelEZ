import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Toast from 'react-native-toast-message';
import api from '../../api';
import CustomButton from '../../components/CustomButton';
import CustomHeader from '../../components/CustomHeader';
import CustomTextInput from '../../components/CustomInput';
import HelpDiskDropDown from '../../components/HelpDiskDropDown';
import MainRoutes from '../../constants/MainRoutes';
import {hp, wp} from '../../constants/scaling';
import {colors, fonts, regex_email} from '../../constants/theme';
const ManageBookingsScreen = ({navigation}) => {
  const [booking_type, setBookingType] = useState('airport_parking');
  const [booking_reference, setReference] = useState('ZMDL-221014575');
  const [last_name, setLastName] = useState('Ameen');
  const [email_address, setEmailAddress] = useState('engr.aftabufaq@gmail.com');
  const [is_loading, setIsLoading] = useState(false);

  const submitBooking = () => {
    if (
      booking_reference.trim() == '' ||
      last_name.trim() == '' ||
      email_address.trim() == '' ||
      !regex_email.test(email_address)
    ) {
      Toast.show({
        type: 'error',
        text1: 'Form Error',
        position: 'bottom',
        text2: 'Please check your data',
      });
      return;
    }

    setIsLoading(true);
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `${api}/bookings?booking_reference=${booking_reference}&booking_type=${booking_type}&last_name=${last_name}&email_address=${email_address}`,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        setIsLoading(false);
        if (result.status) {
          navigation.navigate(MainRoutes.ManageBookingDetailsScreen, {
            item: JSON.stringify({...result.data, booking_type: booking_type}),
          });
        } else {
          setIsLoading(false);
          alert(result.error);
        }
      })
      .catch(error => {
        setIsLoading(false);
        alert('Booking Not Found');
        console.log(error);
      });
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <CustomHeader
        title={'Manage Bookings'}
        show_backButton={true}
        isdrawer={true}
        onPress={() => navigation.openDrawer()}
      />
      <ScrollView>
        <View style={styles.mainContainer}>
          <Text
            style={{
              fontSize: RFValue(18),
              color: colors.primaryColor,
              textAlign: 'center',

              fontFamily: fonts.Medium,
            }}>
            Please Enter
          </Text>
          <Text
            style={{
              fontSize: RFValue(18),
              color: colors.primaryColor,
              textAlign: 'center',
              paddingBottom: wp(10),
              fontFamily: fonts.Bold,
            }}>
            Bookings Summary
          </Text>
          <HelpDiskDropDown
            value={booking_type}
            label={'Booking type'}
            placeholder={'Hotel'}
            setValue={text => {
              setBookingType(text);
            }}
            data={[
              {label: 'Airport Parking', value: 'airport_parking'},
              {label: 'Hotel Booking', value: 'hotel_booking'},
              {label: 'Lounge Booking', value: 'lounge_booking'},
              {label: 'Transfer Booking', value: 'transfer_booking'},
            ]}
          />
          <CustomTextInput
            label={'Booking Reference No.*'}
            placeholder={'Enter Booking Reference'}
            onChangeText={text => setReference(text)}
            value={booking_reference}
          />
          <CustomTextInput
            label={'Last Name *'}
            placeholder={'Last name'}
            onChangeText={text => setLastName(text)}
            value={last_name}
          />
          <CustomTextInput
            label={'Email Address *'}
            placeholder={'Enter Booking Reference'}
            onChangeText={text => setEmailAddress(text)}
            value={email_address}
          />

          <CustomButton
            buttonStyle={{
              width: wp(90),
              heigth: hp(6),
            }}
            title={'Submit Request'}
            isLoading={is_loading}
            onPress={() => submitBooking()}
            loadingText={'Processing'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ManageBookingsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingTop: wp(30),
  },
});
