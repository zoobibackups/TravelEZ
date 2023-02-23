import {useNavigation} from '@react-navigation/native';
import React, {useReducer, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Toast from 'react-native-toast-message';
import api from '../../api';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomInput';
import HelpDiskDropDown from '../../components/HelpDiskDropDown';
import MainRoutes from '../../constants/MainRoutes';
import {hp, wp} from '../../constants/scaling';
import {colors, fonts, regex_email} from '../../constants/theme';
const initialStateFindTicket = {
  email: '',
  ticket_reference: '',
};
function reducerFindTicket(state, action) {
  switch (action.type) {
    case 'email':
      return {...state, email: action.payload};
    case 'ticket_reference':
      return {...state, ticket_reference: action.payload};
    default:
      return initialState;
  }
}
const FindExistingTicket = () => {
  const navigation = useNavigation();
  const [booking_type, setBookingType] = useState('airport_parking');
  const [is_loading, setIsLoading] = useState(false);
  const [data_find_ticket, dispatchFindTicket] = useReducer(
    reducerFindTicket,
    initialStateFindTicket,
  );

  const getTicketDetails = () => {
    if (!regex_email.test(data_find_ticket.email)) {
      Toast.show({
        type: 'error',
        text1: 'Form Error',
        position: 'bottom',
        text2: 'Please enter a valid email',
      });
      return;
    }
    if (data_find_ticket.ticket_reference.trim() == '') {
      Toast.show({
        type: 'error',
        text1: 'Form Error',
        position: 'bottom',
        text2: 'Please enter a ticket refrenece',
      });
      return;
    }

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    setIsLoading(true);
    fetch(
      `${api}/tickets?ticket_refrence=${data_find_ticket.ticket_reference}&email=${data_find_ticket.email}&booking_type=${booking_type}`,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        setIsLoading(false);
        if (result.status == true) {
          navigation.navigate(MainRoutes.TicketDetailsScreen, {
            item: JSON.stringify(result.data),
          });
        } else {
          Toast.show({
            type: 'error',
            text1: 'Form Error',
            position: 'bottom',
            text2: `${result.data}`,
          });
        }
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error);
        Toast.show({
          type: 'error',
          text1: 'Form Error',
          position: 'bottom',
          text2: `Sorry, Please check your email and ticket reference carefully`,
        });
      });
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.headerRow}>
        <Text style={styles.headerText}>Find Existing Ticket</Text>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: '#fff',
          width: wp(92),
          paddingHorizontal: wp(1),
          paddingVertical: wp(5),
          overflow: 'hidden',
        }}>
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
        <View style={styles.bodyContainer}>
          <CustomTextInput
            label={'Ticket Reference *'}
            placeholder={'PZT-XXXXXXXXX'}
            onChangeText={text =>
              dispatchFindTicket({
                type: 'ticket_reference',
                payload: text,
              })
            }
            value={data_find_ticket.ticket_reference}
          />
          <CustomTextInput
            label={'Email Address *'}
            placeholder={'email address'}
            onChangeText={text =>
              dispatchFindTicket({type: 'email', payload: text})
            }
            value={data_find_ticket.email}
          />
          <CustomButton
            buttonStyle={{width: wp(90)}}
            title={'Search Ticket'}
            isLoading={is_loading}
            onPress={() => {
              getTicketDetails();
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoText: {
    fontSize: RFValue(14),
    color: colors.primaryColor,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginBottom: wp(1),
    fontFamily: fonts.Medium,
  },
  headerText: {
    fontSize: RFValue(14),
    color: colors.white,
    textAlign: 'left',
    paddingLeft: wp(3),
    marginVertical: wp(3),
    fontFamily: fonts.Bold,
  },
  headerRow: {
    width: wp(92),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopLeftRadius: wp(2),
    borderTopRightRadius: wp(2),
    backgroundColor: colors.primaryColor,
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: wp(96),
    borderRadius: wp(2),
    elevation: 15,
    padding: wp(2),
    margin: wp(2),
    alignSelf: 'center',
  },
  bodyContainer: {
    minHeight: hp(10),
    alignSelf: 'center',
  },
  chooseFileView: {
    alignSelf: 'center',
    width: wp(92),
    height: hp(12),
    justifyContent: 'center',
  },
  fileInput: {
    width: wp(92),
    paddingLeft: wp(5),
    borderRadius: wp(2),
    borderWidth: 1,
    elevation: 5,
    height: hp(7),
    justifyContent: 'center',
    borderColor: colors.borderColor,
    backgroundColor: colors.white,
  },
});

export default FindExistingTicket;
