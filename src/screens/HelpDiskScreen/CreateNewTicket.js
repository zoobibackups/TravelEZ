import React, {useReducer, useState} from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {RFValue} from 'react-native-responsive-fontsize';
import Toast from 'react-native-toast-message';
import api from '../../api';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomInput';
import HelpDiskDropDown from '../../components/HelpDiskDropDown';
import SuccessModal from '../../components/SuccessModal';
import UpLoadComponent from '../../components/uploadComponent';
import MainRoutes from '../../constants/MainRoutes';
import {hp, wp} from '../../constants/scaling';
import {colors, fonts} from '../../constants/theme';
import {textStyles} from '../../styles/textStyles';
import {helpdiskFormValidation} from '../../validation/helpDiskFromValidation';

const initialState = {
  booking_ref: '',
  name: '',
  email: '',
  contact: '',
  department: '',
  urgency: '',
  title: '',
  ticket_message: '',
  file: '',
  term_of_services: true,
};
function reducer(state, action) {
  switch (action.type) {
    case 'booking_ref':
      return {...state, booking_ref: action.payload};
    case 'name':
      return {...state, name: action.payload};
    case 'email':
      return {...state, email: action.payload};

    case 'contact':
      return {...state, contact: action.payload};
    case 'department':
      return {...state, department: action.payload};
    case 'urgency':
      return {...state, urgency: action.payload};
    case 'title':
      return {...state, title: action.payload};
    case 'ticket_message':
      return {...state, ticket_message: action.payload};
    case 'file':
      return {...state, file: action.payload};
    case 'term_of_services':
      return {...state, term_of_services: action.payload};
    default:
      return initialState;
  }
}

const CreateNewTicket = ({navigation}) => {
  const [booking_type, setBookingType] = useState('airport_parking');
  const [data, dispatch] = useReducer(reducer, initialState);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [show_success_modal, setSuccessModal] = useState(false);

  const [api_data, setApiData] = useState(false);

  const submitForm = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      title: data.title,
      booking_ref: data.booking_ref,
      user_id: '131',
      company_admin_id: '1',
      name: data.name,
      email: data.email,
      contact: data.contact,
      department: data.department,
      urgency: data.urgency,
      ticket_message: data.ticket_message,
      file: data.file,
      booking_type: booking_type,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(`${api}/tickets`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status) {
          setApiData(result.data);
          setTimeout(() => {
            setSuccessModal(true);
            setLoading(false);
          }, 1000);
        } else {
          setTimeout(() => {
            setLoading(false);
          }, 1000);
          Toast.show({
            type: 'error',
            text1: 'Form Error',
            position: 'bottom',
            text2: result.error,
          });
        }
      })
      .catch(error => {
        setLoading(false);
        Toast.show({
          type: 'error',
          text1: 'Form Error',
          position: 'bottom',
          text2: error.message,
        });
      });
  };
  const closeModal = () => {
    return new Promise((resolve, reject) => {
      setSuccessModal(false);
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.headerRow}>
        <Text style={styles.headerText}>Create New Ticket</Text>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: '#fff',
          width: wp(92),
          paddingHorizontal: wp(1),
          paddingVertical: wp(5),
          overflow: 'hidden',
        }}>
        <View style={styles.bodyContainer}>
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
            placeholder={'AP-XXXXXXXX'}
            onChangeText={text =>
              dispatch({
                type: 'booking_ref',
                payload: text,
              })
            }
            value={data.booking_ref}
          />
          <CustomTextInput
            label={'Full Name *'}
            placeholder={'fast name'}
            onChangeText={text => dispatch({type: 'name', payload: text})}
            value={data.name}
          />
          <CustomTextInput
            label={'Email Address *'}
            placeholder={'Enter Booking Reference'}
            onChangeText={text => dispatch({type: 'email', payload: text})}
            value={data.email}
          />
          <CustomTextInput
            label={'Contact No.*'}
            placeholder={'+92XXXXXXXXXX'}
            onChangeText={text => dispatch({type: 'contact', payload: text})}
            value={data.contact}
          />
          <View
            style={{
              height: hp(1),
            }}
          />
          <HelpDiskDropDown
            value={data.department}
            label={'Support Department *'}
            placeholder={'support department'}
            setValue={text => {
              dispatch({
                type: 'department',
                payload: text,
              });
            }}
            data={[
              {label: 'Booking', value: '1'},
              {label: 'Complaint', value: '2'},
              {label: 'Amendment', value: '3'},
              {label: 'Cancellation', value: '4'},
            ]}
          />
          <View
            style={{
              height: hp(2),
            }}
          />
          <HelpDiskDropDown
            value={data.urgency}
            label={'Ticket Priority *'}
            placeholder={'ticket priority'}
            setValue={text => {
              dispatch({
                type: 'urgency',
                payload: text,
              });
            }}
            data={[
              {label: 'High', value: 'High'},
              {label: 'Medium', value: 'Medium'},
              {label: 'Low', value: 'Low'},
            ]}
          />
          <View
            style={{
              height: hp(1),
            }}
          />
          <CustomTextInput
            label={'Ticket Subject *'}
            placeholder={'ticket subject'}
            onChangeText={text =>
              dispatch({
                type: 'title',
                payload: text,
              })
            }
            value={data.title}
          />
          <CustomTextInput
            label={'Ticket Message *'}
            multiline={true}
            placeholder={'ticket message'}
            onChangeText={text =>
              dispatch({
                type: 'ticket_message',
                payload: text,
              })
            }
            value={data.ticket_message}
          />
          <View style={styles.chooseFileView}>
            <Text
              style={{
                ...textStyles.Label,
                color: colors.textPrimaryColor,
                alignSelf: 'flex-start',
                marginBottom: wp(1),
              }}>
              Upload File
            </Text>
            <TouchableOpacity
              onPress={() => setIsModalVisible(true)}
              style={styles.fileInput}>
              <Text
                style={{
                  ...textStyles.Label,
                  color: 'rgba(0,0,0,.4)',
                }}>
                {data.file == '' ? 'Choose File' : data.file}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              ...styles.chooseFileView,
              flexDirection: 'row',
              height: hp(7),
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Checkbox
              color={colors.secondaryColor}
              uncheckedColor={'#fff'}
              status={data.term_of_services ? 'checked' : 'unchecked'}
              onPress={() => {
                dispatch({
                  type: 'term_of_services',
                  payload: !data.term_of_services,
                });
              }}
            />
            <View>
              <Text
                style={{
                  ...textStyles.Label,
                  color: colors.textPrimaryColor,
                }}>
                <TouchableOpacity>
                  <Text
                    style={{
                      ...textStyles.Label,
                      fontSize: RFValue(12),
                      color: colors.textPrimaryColor,
                    }}>
                    Travelez{' '}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL(
                      'https://www.parkingzone.co.uk/terms-and-conditions',
                    ).catch(err => {});
                  }}>
                  <Text
                    style={{
                      ...textStyles.Label,
                      fontSize: RFValue(12),
                      color: colors.primaryColor,
                    }}>
                    Support Policy
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={{
                      ...textStyles.Label,
                      fontSize: RFValue(12),
                      color: colors.primaryColor,
                    }}>
                    {' '}
                    &{' '}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL(
                      'https://www.parkingzone.co.uk/terms-and-conditions',
                    ).catch(err => {});
                  }}>
                  <Text
                    style={{
                      ...textStyles.Label,

                      fontSize: RFValue(12),
                      color: colors.primaryColor,
                    }}>
                    Terms of Service
                  </Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>

          <CustomButton
            title={'Create new ticket'}
            isLoading={loading}
            buttonStyle={{width: wp(90)}}
            loadingText={'Please wait'}
            onPress={() =>
              helpdiskFormValidation(data)
                .then(data => {
                  submitForm();
                })
                .catch(err => {
                  Toast.show({
                    type: 'error',
                    text1: 'Form Error',
                    position: 'bottom',
                    text2: err.message,
                  });
                })
            }
            backgroundColor={colors.secondaryColor}
          />
        </View>
      </View>
      <UpLoadComponent
        isModalVisible={isModalVisible}
        setFilePath={data => {
          dispatch({type: 'file', payload: data});
        }}
        setIsModalVisible={() => setIsModalVisible(false)}
      />

      <SuccessModal
        isVisible={show_success_modal}
        message={api_data.ticket_ref}
        title={
          'This is your token. Plese save it. Click on the button below to show details of your tikcet'
        }
        onClose={() => {
          closeModal().then(() => {
            navigation.navigate(MainRoutes.TicketDetailsScreen, {
              item: JSON.stringify(api_data),
            });
          });
        }}
        buttonText={'View Details'}
      />
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

export default CreateNewTicket;
