import moment from 'moment';
import React, {useEffect} from 'react';
import {
  BackHandler,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomButton from '../../../components/CustomButton';
import CustomHeader from '../../../components/CustomHeader';
import MainRoutes from '../../../constants/MainRoutes';
import {wp} from '../../../constants/scaling';
import {colors, fonts} from '../../../constants/theme';
import {textStyles} from '../../../styles/textStyles';
const AirPortParkingBookingPaymentDetailsScreen = ({navigation, route}) => {
  let data = JSON.parse(route.params.item);
  let personal_details = data.personal_details;
  let vehicle_data = data.vehicle_data;
  let booking_details = data.booking_details;
  let booking_server_request_data = data.booking_server_request_data;
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <CustomHeader
        title={'Bookings Confrim'}
        show_backButton={true}
        isdrawer={true}
        onPress={() => navigation.openDrawer()}
      />

      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.item}>
            <TouchableOpacity
              style={{
                ...styles.IconButton,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  ...styles.IconButtonText,
                  color: colors.secondaryColor,
                  textAlign: 'center',
                  fontSize: RFValue(16),
                  alignSelf: 'center',
                }}>
                Booking has been confirmed
              </Text>
            </TouchableOpacity>
            <View style={styles.bodyContainer}>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>
                  Thank you for completeing booking this is your confirmation
                  with all your travel details. Email has been sent to you i n
                  regards to your booking. If you have questions in the mean
                  time please do not hesitate to contact us on
                  {'\n'}
                  <Text style={styles.IconButtonText}>
                    bookings@parkingzone.co.uk
                  </Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.item}>
            <TouchableOpacity style={styles.IconButton}>
              <Text style={styles.IconButtonText}>Your Details</Text>
            </TouchableOpacity>

            <View style={styles.bodyContainer}>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>
                  <Text style={styles.IconButtonText}>Name: </Text>
                  {personal_details.first_name} {personal_details.last_name}
                </Text>
              </View>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>
                  <Text style={styles.IconButtonText}>Phone: </Text>
                  {personal_details.mobile_number}
                </Text>
              </View>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>
                  <Text style={styles.IconButtonText}>Email: </Text>
                  {personal_details.email_address}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.item}>
            <TouchableOpacity style={styles.IconButton}>
              <Text style={styles.IconButtonText}>Vehicle Details</Text>
            </TouchableOpacity>

            <View style={styles.bodyContainer}>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>
                  <Text style={styles.IconButtonText}>Vehicle Color: </Text>
                  {vehicle_data.vehicle_color}
                </Text>
              </View>

              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>
                  <Text style={styles.IconButtonText}>Vehicle Make : </Text>
                  {vehicle_data.vehicle_make}
                </Text>
              </View>

              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>
                  <Text style={styles.IconButtonText}>
                    Vehicle Registration :{' '}
                  </Text>
                  {vehicle_data.vehicle_registration}
                </Text>
              </View>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>
                  <Text style={styles.IconButtonText}>Vehicle Model </Text>
                  {vehicle_data.vehicle_model}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.item}>
            <TouchableOpacity style={styles.IconButton}>
              <Text style={styles.IconButtonText}>Booking Details</Text>
            </TouchableOpacity>

            <View style={styles.bodyContainer}>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>
                  <Text style={styles.IconButtonText}>Booking Refrence: </Text>
                  {`ZMDL-${moment(booking_details.valid_pickup_date).format(
                    'DDMMYY',
                  )}${booking_server_request_data.insertId}`}
                </Text>
              </View>

              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>
                  <Text style={styles.IconButtonText}>Description : </Text>
                  {booking_details.name} {booking_details.no_of_days} Days
                </Text>
              </View>

              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>
                  <Text style={styles.IconButtonText}>Price : </Text>
                  {booking_details.price}
                </Text>
              </View>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>
                  <Text style={styles.IconButtonText}>Total Price </Text>
                  {booking_details.price}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <CustomButton
          title="Home"
          onPress={() => navigation.navigate(MainRoutes.BottomTabs)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AirPortParkingBookingPaymentDetailsScreen;
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    margin: wp(2),
    borderRadius: wp(2),
    width: wp(96),
    alignSelf: 'center',
    elevation: 5,
    overflow: 'hidden',
    borderColor: colors.borderColor,
  },
  IconButton: {
    width: wp(96),
    padding: wp(2),
    borderBottomWidth: 2,
    borderColor: colors.borderColor,

    paddingVertical: wp(3),
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.borderColor,
    backgroundColor: colors.white,
  },

  bodyContainer: {
    alignSelf: 'center',
    padding: wp(2),
  },
  IconButtonText: {
    ...textStyles.smallheading,
    fontSize: RFValue(12),
    color: colors.primaryColor,
  },
  detailsText: {
    ...textStyles.Label,
    fontFamily: fonts.Medium,
    color: colors.textPrimaryColor,
    textAlign: 'justify',
  },
  ticket_info_row_view: {
    flexDirection: 'row',
    width: wp(96),
    borderBottomColor: 'rgba(0,0,0,.03)',
    borderBottomWidth: 1,
    paddingHorizontal: wp(2),
    paddingVertical: wp(1),
    justifyContent: 'flex-start',
  },
});
