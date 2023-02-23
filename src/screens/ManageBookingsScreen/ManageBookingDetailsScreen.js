import moment from 'moment';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomHeader from '../../components/CustomHeader';
import {hp, wp} from '../../constants/scaling';
import {colors, fonts} from '../../constants/theme';
import {textStyles} from '../../styles/textStyles';
const ManageBookingDetailsScreen = ({navigation, route}) => {
  let data = JSON.parse(route.params.item);
  console.log(data);
  if (data.booking_type == 'lounge_booking') {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <CustomHeader
          title={'Bookings Details'}
          show_backButton={true}
          isdrawer={false}
          onPress={() => navigation.goBack()}
        />

        <ScrollView>
          <View style={styles.mainContainer}>
            <View style={styles.item}>
              <TouchableOpacity style={styles.IconButton}>
                <Text style={styles.IconButtonText}>Booking Details</Text>
              </TouchableOpacity>

              <View style={styles.bodyContainer}>
                <View style={styles.ticket_info_row_view}>
                  <Text style={styles.detailsText}>
                    <Text style={styles.IconButtonText}>Customer Name: </Text>
                    {data.first_name} {data.last_name}
                  </Text>
                </View>
                <View style={styles.ticket_info_row_view}>
                  <Text style={styles.detailsText}>
                    <Text style={styles.IconButtonText}>Loung Name: </Text>
                    {data.lounge_name}
                  </Text>
                </View>
                <View style={styles.ticket_info_row_view}>
                  <Text style={styles.detailsText}>
                    <Text style={styles.IconButtonText}>Ref No: </Text>
                    {data.booking_ref}
                  </Text>
                </View>
                <View style={styles.ticket_info_row_view}>
                  <Text style={styles.detailsText}>
                    <Text style={styles.IconButtonText}>Check In: </Text>

                    {moment(data.check_in).format('DD-MMM-YYYY')}
                  </Text>
                </View>

                <View style={styles.ticket_info_row_view}>
                  <Text style={styles.detailsText}>
                    <Text style={styles.IconButtonText}>Booking Status:</Text>{' '}
                    {data.booking_action}
                  </Text>
                </View>
                <View style={styles.ticket_info_row_view}>
                  <Text style={styles.detailsText}>
                    <Text style={styles.IconButtonText}>Payment Status: </Text>
                    {data.payment_status}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.item}>
              <TouchableOpacity style={styles.IconButton}>
                <Text style={styles.IconButtonText}>Booking Confirmation</Text>
              </TouchableOpacity>

              <View style={styles.bodyContainer}>
                <View style={styles.ticket_info_row_view}>
                  <Text style={{...styles.detailsText, fontSize: RFValue(11)}}>
                    Thank you for booking with Travelez, this is your booking
                    confirmation with all your travelpng details. Please take a
                    print out of this email as you might need to present this at
                    the time of dropping off your vehicle. Please check the
                    details of your booking confirmation as Travelez cannot be
                    held responsible if you do not advise amendments required.
                  </Text>
                </View>

                <View style={styles.ticket_info_row_view}>
                  <Text style={styles.detailsText}>
                    <Text style={styles.IconButtonText}>Payment Method : </Text>
                    {data.payment_method}
                  </Text>
                </View>
                <View style={styles.ticket_info_row_view}>
                  <Text style={styles.detailsText}>
                    <Text style={styles.IconButtonText}>Payment Status : </Text>
                    {data.payment_status}
                  </Text>
                </View>
                <View style={styles.ticket_info_row_view}>
                  <Text style={styles.detailsText}>
                    <Text style={styles.IconButtonText}>Amount :</Text>{' '}
                    {data.payable}{' '}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <CustomHeader
        title={'Bookings Details'}
        show_backButton={true}
        isdrawer={false}
        onPress={() => navigation.goBack()}
      />

      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.item}>
            <TouchableOpacity style={styles.IconButton}>
              <Text style={styles.IconButtonText}>Booking Details</Text>
            </TouchableOpacity>

            <View style={styles.bodyContainer}>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>
                  <Text style={styles.IconButtonText}>Name: </Text>
                  {data.first_name} {data.last_name}
                </Text>
              </View>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>
                  <Text style={styles.IconButtonText}>Ref: </Text>
                  {data.referenceNo}
                </Text>
              </View>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>
                  <Text style={styles.IconButtonText}>Start Date: </Text>

                  {moment(data.departDate).format('DD-MMM-YYYY')}
                </Text>
              </View>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>
                  <Text style={styles.IconButtonText}>End Date: </Text>

                  {moment(data.departDate).format('DD-MMM-YYYY')}
                </Text>
              </View>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>
                  <Text style={styles.IconButtonText}>Booking Status:</Text>{' '}
                  {data.booking_status}
                </Text>
              </View>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>
                  <Text style={styles.IconButtonText}>Payment Status: </Text>
                  {data.payment_status}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.item}>
            <TouchableOpacity style={styles.IconButton}>
              <Text style={styles.IconButtonText}>Booking Confirmation</Text>
            </TouchableOpacity>

            <View style={styles.bodyContainer}>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>
                  Thank you for booking with Travelez, this is your booking
                  confirmation with all your travelpng details. Please take a
                  print out of this email as you might need to present this at
                  the time of dropping off your vehicle. Please check the
                  details of your booking confirmation as Travelez cannot be
                  held responsible if you do not advise amendments required.
                </Text>
              </View>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>
                  <Text style={styles.IconButtonText}>Email : </Text>
                  {data.first_name} {data.last_name}
                </Text>
              </View>

              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>
                  <Text style={styles.IconButtonText}>
                    Company Booked with :{' '}
                  </Text>
                  {data.name}
                </Text>
              </View>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>
                  <Text style={styles.IconButtonText}>Parking Type : </Text>
                  {data.parking_type}
                </Text>
              </View>

              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>
                  <Text style={styles.IconButtonText}>Number Of days : </Text>
                  {data.no_of_days}
                </Text>
              </View>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>
                  <Text style={styles.IconButtonText}>Flight No : </Text>
                  {data.returnFlight}
                </Text>
              </View>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>
                  <Text style={styles.IconButtonText}>
                    Vehicle Registration :{' '}
                  </Text>
                  {data.registration}
                </Text>
              </View>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>
                  <Text style={styles.IconButtonText}>
                    Vehicle Model , Make, Color :{' '}
                  </Text>
                  {data.model}, {data.make} ,{data.color}
                </Text>
              </View>

              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>
                  <Text style={styles.IconButtonText}>Payment Method : </Text>
                  {data.payment_method}
                </Text>
              </View>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>
                  <Text style={styles.IconButtonText}>Payment Status : </Text>
                  {data.payment_status}
                </Text>
              </View>
              <View style={styles.ticket_info_row_view}>
                <Text style={styles.detailsText}>
                  <Text style={styles.IconButtonText}>Amount :</Text>{' '}
                  {data.payable}{' '}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ManageBookingDetailsScreen;
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    margin: wp(2),
    borderRadius: wp(2),
    width: wp(96),
    alignSelf: 'center',
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: colors.borderColor,
  },
  IconButton: {
    width: wp(96),
    padding: wp(2),
    borderBottomWidth: 2,
    borderColor: colors.borderColor,
    paddingLeft: wp(4.5),
    height: hp(5),
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
    color: colors.primaryColor,
    textAlign: 'justify',
  },
  ticket_info_row_view: {
    flexDirection: 'row',
    width: wp(92),
    borderBottomColor: 'rgba(0,0,0,.03)',
    borderBottomWidth: 1,
    paddingHorizontal: wp(2),
    paddingVertical: wp(1),
    justifyContent: 'flex-start',
  },
});
