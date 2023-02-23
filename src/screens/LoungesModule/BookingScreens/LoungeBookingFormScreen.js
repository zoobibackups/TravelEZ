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
import api from '../../../api';
import CustomButton from '../../../components/CustomButton';
import CustomHeader from '../../../components/CustomHeader';
import ErrorModal from '../../../components/ErrorModal';
import SuccessModal from '../../../components/SuccessModal';
import MainRoutes from '../../../constants/MainRoutes';
import {hp, wp} from '../../../constants/scaling';
import {colors, fonts} from '../../../constants/theme';
import {textStyles} from '../../../styles/textStyles';
import {personalformvalidation} from '../../../validation/bookingsubmitformValidation';
import CreateCircle from './Circle';
import InfoComponenet from './InfoComponent';
import PaymentModal from './PaymentModal';
import PersonalDetailsComponent from './PersonalDetailsComponent';
const personal_details = {
  title: 'Mr',
  first_name: 'Aftab',
  last_name: 'Ameen',
  email_address: 'engr.aftabufaq@gmail.com',
  confrim_email_address: 'engr.aftabufaq@gmail.com',
  mobile_number: '+923408906107',
};
function reducer(state, action) {
  switch (action.type) {
    case 'title':
      return {...state, title: action.payload};
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

const LoungeBookingFormScreen = ({navigation, route}) => {
  const [personal_info, personal_info_dispatch] = useReducer(
    reducer,
    personal_details,
  );
  const {search_data} = useSelector(state => state.SearchReducer);
  const booking_details = route.params.item;
  const [currentStep, setCurrentStep] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [paymentIntentMine, setPaymentIntent] = useState(null);
  const [is_submit_booking, setSubmitBooking] = useState(false);
  const [is_success_modal, setIsSuccessModal] = useState(false);
  const [is_error_modal, setIsErrorModal] = useState(false);

  const [booking_server_request_data, setBookingServerRequestData] =
    useState(null);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    var raw = JSON.stringify({
      currency: 'GBP',
      airport_id: search_data.airport_id2,
      amount: parseFloat(booking_details.Price + 1.99).toFixed(2),
      email: '',
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(`${api}/payments/createIntent`, requestOptions)
      .then(data => data.json())
      .then(data => {
        setPaymentIntent(data);
      })
      .catch(err => {
        setIsErrorModal(true);
      });
  }, []);

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
          title={'Personal Info'}
          current={
            currentStep == 1 || currentStep == 2 || currentStep == 3
              ? true
              : false
          }
        />

        <CreateCircle
          value={2}
          title={'Confirm'}
          current={currentStep == 2 ? true : false}
        />
      </View>
    );
  };

  const submitbookingData = () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    setSubmitBooking(true);
    const body = JSON.stringify({
      airportID: search_data.airport_id2,
      airport_code: search_data.airport_id,
      lounge_id: '0',
      lounge_name: booking_details.Name,
      lounge_code: booking_details.Code,
      title: personal_info.title,
      first_name: personal_info.first_name,
      last_name: personal_info.last_name,
      email: personal_info.email_address,
      phone_number: personal_info.mobile_number,
      passenger: parseInt(search_data.adults) + parseInt(search_data.childs),
      additional_pass_details: '',
      referenceNo: '',
      referenceNo_ext: '',
      referenceLink_ext: '',
      check_in: search_data.pickup_date,
      check_in_time: search_data.pickup_time,
      adults: search_data.adults,
      infants: '',
      children: search_data.childs,
      discount_code: '',
      discount_amount: '0.00',
      booking_amount: booking_details.Price,
      extra_amount: '0',
      smsfee: '0',
      postal_fee: '0',
      booking_fee: '1.99',
      cancelfee: '0',
      total_amount: parseFloat(booking_details.Price).toFixed(2) + 1.99,
      currency_allowed: '',
      booking_status: 'Abandon',
      booking_action: 'Abandon',
      payment_status: 'Pending',
      PayerID: paymentIntentMine.id,
      status: 'Yes',
      email_status: 'No',
      sms_status: 'No',
      payment_method: 'stripe',
      email_respond: '',
      removed: 'No',
      traffic_src: 'MOBILE_APP',
      lounge_available: '',
      intent_id: paymentIntentMine.id,
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: body,
      redirect: 'follow',
    };

    fetch(`${api}/lounges_bookings`, requestOptions)
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

  const Promise_function = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setSubmitBooking(false);
        resolve();
      }, 2000);
    });
  };
  const update_booking_and_create_transication = () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      loungeID: 0,
      edit_by: '0',
      orderID: booking_server_request_data.insertId,
      referenceNo: `ZMDL-${moment(booking_details.pickup_date).format(
        'DDMMYY',
      )}${booking_server_request_data.insertId}`,
      token: paymentIntentMine.id,
      discount_amount: '0',
      booking_amount: booking_details.Price,
      extra_amount: 'credit',
      smsfee: '0',
      booking_fee: '1.99',
      cancelfee: '0.00',
      code: booking_details.Code,
      total_amount: parseFloat(booking_details.Price).toFixed(2) + 1.99,
      payable: parseFloat(booking_details.Price).toFixed(2) + 1.99,
      amount_type: 'Completed',
      payment_method: 'stripe',
      payment_action: '',
      payment_case: '',
      payment_medium: '',
      palenty_to: '',
      palenty_amount: '0.00',
      comments: 'comments',
      booking_status: 'Completed',
      check_in: search_data.pickup_date,
      check_in_time: search_data.pickup_time,
      adults: search_data.adults,
      infants: '',
      children: search_data.childs,
      title: personal_info.title,
      first_name: personal_info.first_name,
      last_name: personal_info.last_name,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(`${api}/lounges_bookings/addTransication`, requestOptions)
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
        console.log(error);
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
                <Text style={styles.detailsText}>Check-in Date</Text>
                <Text style={styles.detailsText}>
                  {search_data.pickup_date} at {search_data.pickup_time}
                </Text>
              </View>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>Adults & Childs</Text>
                <Text style={styles.detailsText}>{search_data.adults}</Text>
              </View>

              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>Booking Price</Text>
                <Text style={styles.detailsText}>
                  £ {booking_details.Price}
                </Text>
              </View>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>Booking Fee</Text>
                <Text style={styles.detailsText}>£1.99</Text>
              </View>
            </View>
          </View>
          <PersonalDetailsComponent
            data={personal_info}
            dispatch={personal_info_dispatch}
          />
          <CustomButton
            onPress={() =>
              personalformvalidation(personal_info)
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
            title="Confrim"
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
          <InfoComponenet
            personal_info={personal_info}
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
          navigation.navigate(MainRoutes.LoungeBookingPaymentDetailsScreen, {
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

export default LoungeBookingFormScreen;
