import moment from 'moment';
import React, {useEffect, useReducer, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Toast from 'react-native-toast-message';
import Entypo from 'react-native-vector-icons/Entypo';
import {useSelector} from 'react-redux';
import api from '../../../api/index';
import CustomButton from '../../../components/CustomButton';
import CustomHeader from '../../../components/CustomHeader';
import ErrorModal from '../../../components/ErrorModal';
import SuccessModal from '../../../components/SuccessModal';
import MainRoutes from '../../../constants/MainRoutes';
import {hp, wp} from '../../../constants/scaling';
import {colors, fonts} from '../../../constants/theme';
import {textStyles} from '../../../styles/textStyles';
import {
  HotelPersonalInformation,
  validate_billing_info,
} from '../../../validation/bookingsubmitformValidation';
import BillingDetailsComponent from './BillingDetailsComponent';
import CreateCircle from './Circle';
import InfoComponenet from './InfoComponent';
import PaymentModal from './PaymentModal';
import PersonalDetailsComponent from './PersonalDetailsComponent';
const personal_details = {
  first_name: 'Aftab',
  last_name: 'Ameen',
  email_address: 'engr.aftabufaq@gmail.com',
  confrim_email_address: 'engr.aftabufaq@gmail.com',
  mobile_number: '+923408906107',
};
function reducer(state, action) {
  switch (action.type) {
    case 'first_name':
      return {...state, first_name: action.payload};
    case 'last_name':
      return {...state, last_name: action.payload};
    case 'email_address':
      return {...state, email_address: action.payload};
    case 'confrim_email_address':
      return {...state, confrim_email_address: action.payload};
    case 'mobile_number':
      return {...state, mobile_number: action.payload};
    default:
      return personal_details;
  }
}

const billing_details = {
  full_address: 'this is pakistan and we are here',
  city: 'this is swabi',
  state_provience: 'kpk pakistan',
  zip_code: '3213',
  country: 'Pakistan',
};

const billing_reducer = (state, action) => {
  switch (action.type) {
    case 'full_address':
      return {
        ...state,
        full_address: action.payload,
      };
    case 'city':
      return {
        ...state,
        city: action.payload,
      };
    case 'state_provience':
      return {
        ...state,
        state_provience: action.payload,
      };
    case 'zip_code':
      return {
        ...state,
        zip_code: action.payload,
      };
    case 'country':
      return {
        ...state,
        country: action.payload,
      };
  }
};
const HotelBookingFormScreen = ({navigation, route}) => {
  const booking_details = route.params.item;
  const {search_data} = useSelector(state => state.SearchReducer);
  const [is_submit_booking, setSubmitBooking] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [paymentIntentMine, setPaymentIntent] = useState(null);
  const [booking_server_request_data, setBookingServerRequestData] =
    useState(null);
  const [is_success_modal, setIsSuccessModal] = useState(false);
  const [is_error_modal, setIsErrorModal] = useState(false);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      amount: `${booking_details.payment_options.payment_types[0].amount}`,
      currency: 'GBP',
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(`${api}/hotel_bookings/intent_create`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setPaymentIntent(result);
      })
      .catch(error => console.log('error', error));
  }, []);

  const [currentStep, setCurrentStep] = useState(1);
  const [personal_info, personal_info_dispatch] = useReducer(
    reducer,
    personal_details,
  );
  const [billing_data, dipatchBillingReducer] = useReducer(
    billing_reducer,
    billing_details,
  );

  const submitbookingData = () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    setSubmitBooking(true);
    const booking_item = {
      book_hash: booking_details.match_hash,
      room_name: booking_details.room_name,
      hotel_id: booking_details.hotel_id,
      hotel_address: booking_details.hotel_address,
      hotel_country: booking_details.region.country_code,
      hotel_name: booking_details.hotel_name,
      bedding_type: booking_details.room_data_trans.bedding_type,
      adults: search_data.guests[0].adults,
      children: search_data.guests[0].children.length,
      child1_age:
        search_data.guests[0].children.length > 0
          ? search_data.guests[0].children[0]
          : 0,
      child2_age:
        search_data.guests[0].children.length > 1
          ? search_data.guests[0].children[1]
          : 0,
      child3_age:
        search_data.guests[0].children.length > 2
          ? search_data.guests[0].children[2]
          : 0,
      child4_age:
        search_data.guests[0].children.length > 3
          ? search_data.guests[0].children[3]
          : 0,
      citizenship: search_data.selected_country_code,
      first_name: personal_info.first_name,
      last_name: personal_info.last_name,
      email: personal_info.email_address,
      phone_number: personal_info.mobile_number,
      fulladdress: billing_data.full_address,
      town: billing_data.state_provience,
      postal_code: billing_data.zip_code,
      checkindate: search_data.checkin,
      check_in_time: booking_details.check_in_time,
      check_out_time: booking_details.check_out_time,
      checkoutdate: search_data.checkout,
      cancel_date: moment(
        booking_details?.payment_options?.payment_types[0]
          .cancellation_penalties.free_cancellation_before,
      ).format('YYYY-MM-DD'),
      is_cancelable: moment('YYYY-MM-DD').isBefore(
        moment(
          booking_details?.payment_options?.payment_types[0]
            .cancellation_penalties.free_cancellation_before,
        ),
      )
        ? 'No'
        : 'Yes',
      base_price: booking_details.payment_options.payment_types[0].amount,
      booking_amount: booking_details.payment_options.payment_types[0].amount,
      total_amount: booking_details.payment_options.payment_types[0].amount,
      intentid: paymentIntentMine.id,
      payment_status: 'Pending',
      booking_status: 'Abandon',
      status: 'Yes',
      traffic_src: 'MOBILE_APP',
    };

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(booking_item),
      redirect: 'follow',
    };

    fetch(`${api}/hotel_bookings`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setBookingServerRequestData(result.data);
        setIsModalVisible(true);
      })
      .catch(error => {
        setSubmitBooking(false);
        setIsErrorModal(true);
      });
  };
  const createProgressSteps = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: wp(5),
          marginBottom: wp(3),
        }}>
        <CreateCircle
          value={1}
          title={'Guest Details'}
          current={
            currentStep == 1 || currentStep == 2 || currentStep == 3
              ? true
              : false
          }
        />
        <CreateCircle
          value={2}
          title={'Billing Info'}
          current={currentStep == 2 || currentStep == 3 ? true : false}
        />
        <CreateCircle
          value={3}
          title={'Confirm'}
          current={currentStep == 3 ? true : false}
        />
      </View>
    );
  };
  const Promise_function = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setSubmitBooking(false);
        resolve();
      }, 2000);
    });
  };
  const update_booking_and_create_transication = () => {
    let data = {
      id: `${booking_server_request_data.insertId}`,
      referenceNo: `TBH-${moment(booking_details.checkindate).format(
        'DDMMYY',
      )}${booking_server_request_data.insertId}`,
    };
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: 'follow',
    };

    fetch(`${api}/hotel_bookings/addTransication`, requestOptions)
      .then(response => response.json())
      .then(result => {
        Promise_function()
          .then(() => {
            if (result.status == true) {
              setIsSuccessModal(true);
            } else {
              setIsErrorModal(true);
            }
          })
          .catch(ee => {
            console.log(ee);
          });
      })
      .catch(error => {
        setSubmitBooking(false);
        setIsErrorModal(true);
      });
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <CustomHeader
        title={'Book Now'}
        show_backButton={true}
        isdrawer={true}
        onPress={() => navigation.openDrawer()}
      />
      {createProgressSteps()}
      {currentStep == 1 && (
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: '#fff',
          }}
          showsVerticalScrollIndicator={false}>
          <View style={styles.item}>
            <TouchableOpacity style={styles.IconButton}>
              <View style={styles.IconButtonInnerIconView}>
                <Entypo color={'#fff'} name={'info-with-circle'} size={wp(5)} />
              </View>
              <Text style={styles.IconButtonText}>Booking Details</Text>
            </TouchableOpacity>

            <View style={styles.bodyContainer}>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>Check In</Text>
                <Text style={styles.detailsText}>{search_data.checkin}</Text>
              </View>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>Check Out</Text>
                <Text style={styles.detailsText}>{search_data.checkout}</Text>
              </View>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>No of Days</Text>
                <Text style={styles.detailsText}>
                  {moment(search_data.checkout).diff(
                    moment(search_data.checkin),
                    'days',
                  ) + 1}
                </Text>
              </View>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>Booking Price</Text>
                <Text style={styles.detailsText}>
                  £ {booking_details.payment_options.payment_types[0].amount}
                </Text>
              </View>
            </View>
          </View>
          <PersonalDetailsComponent
            data={personal_info}
            dispatch={personal_info_dispatch}
          />
          <CustomButton
            onPress={() =>
              HotelPersonalInformation(personal_info)
                .then(data => {
                  setCurrentStep(2);
                })
                .catch(err => {
                  Toast.show({
                    type: 'error',
                    text1: 'Personal form validation Error',
                    position: 'bottom',
                    text2: err.message,
                  });
                })
            }
            title="Billing Info"
          />
        </ScrollView>
      )}
      {currentStep == 2 && (
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: '#fff',
          }}
          showsVerticalScrollIndicator={false}>
          <BillingDetailsComponent
            billing_data={billing_data}
            dipatchBillingReducer={dipatchBillingReducer}
          />

          <CustomButton
            onPress={() =>
              validate_billing_info(billing_data)
                .then(data => {
                  setCurrentStep(3);
                })
                .catch(err => {
                  Toast.show({
                    type: 'error',
                    text1: 'Personal form validation Error',
                    position: 'bottom',
                    text2: err.message,
                  });
                })
            }
            title="Confirm Info"
          />
        </ScrollView>
      )}
      {currentStep == 3 && (
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: '#fff',
          }}
          showsVerticalScrollIndicator={false}>
          <InfoComponenet
            personal_info={personal_info}
            billing_details={billing_data}
            is_submit_booking={is_submit_booking}
            onPress={() => submitbookingData()}
          />
          <PaymentModal
            paymentIntentMine={paymentIntentMine.client_secret}
            isModalVisible={isModalVisible}
            setIsModalVisible={() => {
              update_booking_and_create_transication();
              setIsModalVisible(!isModalVisible);
            }}
          />
        </ScrollView>
      )}
      <SuccessModal
        isVisible={is_success_modal}
        onClose={() => {
          setIsSuccessModal(!is_success_modal);
          navigation.navigate(MainRoutes.HotelBookingPaymentDetailsScreen, {
            item: JSON.stringify({
              booking_details: booking_details,
              personal_details: personal_details,
              booking_server_request_data: booking_server_request_data,
            }),
          });
        }}
      />
      <ErrorModal
        isVisible={is_error_modal}
        onClose={() => setIsErrorModal(!is_error_modal)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    margin: wp(2),
    borderRadius: wp(2),
    width: wp(96),
    alignSelf: 'center',
    elevation: 10,

    padding: wp(2),
  },
  IconButton: {
    width: wp(92),
    marginTop: wp(2),
    paddingLeft: wp(5),
    borderTopLeftRadius: wp(2),
    borderTopRightRadius: wp(2),
    elevation: 5,
    height: hp(7),
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.borderColor,
    backgroundColor: colors.primaryColor,
  },
  IconButtonInnerIconView: {
    height: wp(6),
    justifyContent: 'center',
    alignItems: 'center',
    height: wp(6),
    marginRight: wp(2),
    backgroundColor: '#0000',
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyContainer: {
    alignSelf: 'center',
  },
  headerText: {
    ...textStyles.smallheading,
    fontSize: RFValue(12),
    color: colors.primaryColor,
  },
  IconButtonText: {
    ...textStyles.smallheading,
    fontSize: RFValue(12),
    color: colors.white,
  },
  AnimatedIconView: {
    width: hp(7),
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(7),
    position: 'absolute',
    right: 0,
    alignSelf: 'flex-end',
    backgroundColor: '#0000',
  },
  detailsText: {
    ...textStyles.Label,
    marginTop: wp(2),
    fontFamily: fonts.Bold,
    color: colors.primaryColor,
    textAlign: 'justify',
  },
  IconTextRow: {
    flexDirection: 'row',
    width: wp(92),
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: wp(0.5),
    marginLeft: wp(2),
    borderBottomColor: colors.borderColor,
  },
  ticket_info_row_view: {
    flexDirection: 'row',
    width: wp(92),
    padding: wp(2),
    borderBottomWidth: 0.5,
    borderBottomColor: colors.secondaryColor,
    justifyContent: 'space-between',
  },
  InfoiLabeltext: {
    ...textStyles.Label,
    fontSize: RFValue(12),
    fontFamily: fonts.Medium,
    width: wp(85),
    marginLeft: wp(1),
    color: colors.textPrimaryColor,
  },
});

export default HotelBookingFormScreen;
