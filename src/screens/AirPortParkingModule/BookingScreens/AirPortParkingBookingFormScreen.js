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
import api from '../../../api';
import CustomButton from '../../../components/CustomButton';
import CustomHeader from '../../../components/CustomHeader';
import ErrorModal from '../../../components/ErrorModal';
import SuccessModal from '../../../components/SuccessModal';
import MainRoutes from '../../../constants/MainRoutes';
import {hp, wp} from '../../../constants/scaling';
import {colors, fonts} from '../../../constants/theme';
import {textStyles} from '../../../styles/textStyles';
import {
  personalformvalidation,
  vehicleformvalidation,
} from '../../../validation/bookingsubmitformValidation';
import CreateCircle from './Circle';
import InfoComponenet from './InfoComponent';
import PaymentModal from './PaymentModal';
import PersonalDetailsComponent from './PersonalDetailsComponent';
import TravelDetailsComponent from './TravelDetailsComponent';
import VehicleDetailsCompenet from './VehicleDetailsCompenet';
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
const initialStateFindTicket = {
  vehicle_registration: 'VTC 123',
  vehicle_make: 'Nissan',
  vehicle_color: '#000',
  vehicle_model: 'Altima',
};
function reducerFindTicket(state, action) {
  switch (action.type) {
    case 'vehicle_registration':
      return {...state, vehicle_registration: action.payload};
    case 'vehicle_make':
      return {...state, vehicle_make: action.payload};
    case 'vehicle_color':
      return {...state, vehicle_color: action.payload};
    case 'vehicle_model':
      return {...state, vehicle_model: action.payload};
    default:
      return initialState;
  }
}
const travel_detilas_data = {
  drop_off_terminal: '1',
  return_terminal: '1',
  return_flight_number: '',
};
function travel_detilas_data_reducer(state, action) {
  switch (action.type) {
    case 'drop_off_terminal':
      return {...state, drop_off_terminal: action.payload};
    case 'return_terminal':
      return {...state, return_terminal: action.payload};
    case 'return_flight_number':
      return {...state, return_flight_number: action.payload};
    default:
      return travel_detilas_data;
  }
}
const AirPortParkingBookingFormScreen = ({navigation, route}) => {
  const [personal_info, personal_info_dispatch] = useReducer(
    reducer,
    personal_details,
  );
  const [vehicle_data, dispatchFindTicket] = useReducer(
    reducerFindTicket,
    initialStateFindTicket,
  );
  const [travel_data, travel_detilas_data_dispatch] = useReducer(
    travel_detilas_data_reducer,
    travel_detilas_data,
  );

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
      airport_id: booking_details.airport_id,
      amount: parseFloat(booking_details.price + 1.99).toFixed(2),
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
          title={'Vechile Info'}
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

  const submitbookingData = () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    setSubmitBooking(true);
    var raw = JSON.stringify({
      airportID: booking_details.airport_id,
      companyId: booking_details.companyID,
      product_code:
        booking_details.park_api == 'global'
          ? `${booking_details.sku}`
          : `${booking_details.ProductCode}`, //booking_details.sku,
      edit_by: '0',
      title: personal_details.title,
      first_name: personal_details.first_name,
      last_name: personal_details.last_name,
      email: personal_details.email_address,
      phone_number: personal_details.mobile_number,
      passenger: '1',
      referenceNo: '',
      departDate: `${moment(booking_details.valid_departure_date).format(
        'YYYY-MM-DD',
      )} ${booking_details.pickup_time}:00`,
      deprTerminal: travel_data.drop_off_terminal,
      deptFlight: '',
      returnDate: `${moment(booking_details.valid_pickup_date).format(
        'YYYY-MM-DD',
      )} ${booking_details.departure_time}:00`,
      returnTerminal: travel_data.return_terminal,
      returnFlight: travel_data.return_flight_number,
      no_of_days: `${moment(booking_details.valid_departure_date).diff(
        moment(booking_details.valid_pickup_date),
        'days',
      )}`,
      discount_code: '',
      discount_amount: '0.00',
      booking_amount: booking_details.price,
      booking_extra: '0',
      extra_amount: '0',
      smsfee: '0',
      postal_fee: '0',
      booking_fee: '1.99',
      cancelfee: '0',
      leavy_fee: '0',
      total_amount: `${parseFloat(parseFloat(booking_details.price)).toFixed(
        2,
      )}`,
      booking_status: 'Abandon',
      booking_action: 'Abandon',
      payment_status: 'Pending',
      PayerID: paymentIntentMine.id,
      token: '',
      ext_ref: '',
      speed_ref: '',
      status: 'Yes',
      booked_type: booking_details.parking_type,
      browser_data: '',
      email_status: 'No',
      sms_status: 'No',
      payment_method: 'stripe',
      email_respond: '',
      removed: 'No',
      parent_id: '0',
      api_error: '',
      api_res: '',
      traffic_src: 'ORG',
      agentID: '3',
      user_ip: '192.168.100.148',
      incomplete_email: '0',
      mailchip_email: '1',
      make: vehicle_data.vehicle_make,
      color: vehicle_data.vehicle_color,
      model: vehicle_data.vehicle_model,
      registration: vehicle_data.vehicle_registration,
      park_api: booking_details.park_api,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(`${api}/bookings`, requestOptions)
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
      companyId: booking_details.companyID,
      referenceNo: `ZMDL-${moment(booking_details.valid_pickup_date).format(
        'DDMMYY',
      )}${booking_server_request_data.insertId}`,
      orderID: `${booking_server_request_data.insertId}`,
      discount_amount: '0.00',
      booking_amount: `${booking_details.price}`,
      park_api: `${booking_details.park_api}`,
      extra_amount: '0',
      no_of_days: `${moment(booking_details.valid_departure_date).diff(
        moment(booking_details.valid_pickup_date),
        'days',
      )}`,
      booking_fee: '0',
      amount_type: 'credit',
      cancelfee: '0',
      smsfee: '0.00',
      payable: `${parseFloat(parseFloat(booking_details.price)).toFixed(2)}`,
      total_amount: `${parseFloat(parseFloat(booking_details.price)).toFixed(
        2,
      )}`,
      booking_status: 'Completed',
      PayerID: `${paymentIntentMine.id}`,
      payment_method: 'stripe',
      payment_action: '',
      payment_case: 'done',
      payment_medium: 'Payment Gateway',
      palenty_to: '',
      palenty_amount: '0.00',
      comments: '',
      email_respond: '',
      postal_fee: '0',
      status: '1',
      product_code:
        booking_details.park_api == 'global'
          ? `${booking_details.sku}`
          : `${booking_details.ProductCode}`,
      valet_charges: '0',
      extra_charges: '0',
      levy_charges: '0',
      tilte: `${personal_details.title}`,
      first_name: `${personal_details.first_name}`,
      last_name: `${personal_details.last_name}`,
      email: `${personal_details.email_address}`,
      phone_number: `${personal_details.mobile_number}`,
      passenger: '1',
      make: `${vehicle_data.vehicle_make}`,
      color: `${vehicle_data.vehicle_color}`,
      model: `${vehicle_data.vehicle_model}`,
      registration: `${vehicle_data.vehicle_registration}`,
      departure_date: `${moment(booking_details.valid_pickup_date).format(
        'YYYY-MM-DD',
      )}`,
      departure_time: `${booking_details.pickup_time}`,
      departure_terminal: '',
      departure_flight_no: travel_data.return_flight_number,
      arrival_date: `${moment(booking_details.valid_departure_date).format(
        'YYYY-MM-DD',
      )}`,
      arrival_time: `${booking_details.departure_time}`,
      arrival_terminal: '',
      arrival_flight_no: '',
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(`${api}/bookings/addTransication`, requestOptions)
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
                <Text style={styles.detailsText}>Drop-Off</Text>
                <Text style={styles.detailsText}>
                  {booking_details.pickup_date} at{' '}
                  {booking_details.departure_time}
                </Text>
              </View>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>Return</Text>
                <Text style={styles.detailsText}>
                  {booking_details.departure_date} at{' '}
                  {booking_details.pickup_time}
                </Text>
              </View>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>No of Days</Text>
                <Text style={styles.detailsText}>
                  {booking_details.no_of_days}
                </Text>
              </View>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>Booking Price</Text>
                <Text style={styles.detailsText}>
                  £ {booking_details.price}
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
            title="Vehicle  Info"
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
          <VehicleDetailsCompenet
            vehicle_data={vehicle_data}
            dispatchFindTicket={dispatchFindTicket}
          />
          <TravelDetailsComponent
            data={travel_data}
            terminals={paymentIntentMine.airport_terminals}
            travel_detilas_data_dispatch={travel_detilas_data_dispatch}
          />
          <CustomButton
            onPress={() =>
              vehicleformvalidation(vehicle_data)
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
            terminals={paymentIntentMine.airport_terminals}
            personal_info={personal_info}
            vehicle_data={vehicle_data}
            travel_data={travel_data}
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
          navigation.navigate(
            MainRoutes.AirPortParkingBookingPaymentDetailsScreen,
            {
              item: JSON.stringify({
                booking_details: booking_details,
                vehicle_data: vehicle_data,
                personal_details: personal_details,
                booking_server_request_data: booking_server_request_data,
              }),
            },
          );
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

export default AirPortParkingBookingFormScreen;
