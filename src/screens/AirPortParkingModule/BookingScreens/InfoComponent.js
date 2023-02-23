import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomButton from '../../../components/CustomButton';
import {hp, wp} from '../../../constants/scaling';
import {colors, fonts} from '../../../constants/theme';
import {textStyles} from '../../../styles/textStyles';

const InfoComponenet = ({
  terminals,
  personal_info,
  vehicle_data,
  travel_data,
  is_submit_booking,
  onPress,
}) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.item}>
        <TouchableOpacity style={styles.IconButton}>
          <Text style={styles.IconButtonText}>Personal Info</Text>
        </TouchableOpacity>

        <View style={styles.bodyContainer}>
          <View style={styles.ticket_info_row_view}>
            <Text style={styles.detailsText}>
              Name:{personal_info.first_name} {personal_info.last_name}
            </Text>
          </View>
          <View style={styles.ticket_info_row_view}>
            <Text style={styles.detailsText}>
              Email: {personal_info.email_address}{' '}
            </Text>
          </View>
          <View style={styles.ticket_info_row_view}>
            <Text style={styles.detailsText}>
              Mobile: {personal_info.mobile_number}
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
              Registration: {vehicle_data.vehicle_registration}
            </Text>
          </View>
          <View style={styles.ticket_info_row_view}>
            <Text style={styles.detailsText}>
              Make & Modal: {vehicle_data.vehicle_make},{' '}
              {vehicle_data.vehicle_model}
            </Text>
          </View>
          <View style={styles.ticket_info_row_view}>
            <Text style={styles.detailsText}>
              Color: {vehicle_data.vehicle_color}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.item}>
        <TouchableOpacity style={styles.IconButton}>
          <Text style={styles.IconButtonText}>Travels Details</Text>
        </TouchableOpacity>

        <View style={styles.bodyContainer}>
          <View style={styles.ticket_info_row_view}>
            <Text style={styles.detailsText}>
              Drop-Off Terminal:{' '}
              {
                terminals.find(item => item.id == travel_data.drop_off_terminal)
                  ?.name
              }
            </Text>
          </View>
          <View style={styles.ticket_info_row_view}>
            <Text style={styles.detailsText}>
              Return Terminal:{' '}
              {
                terminals.find(item => item.id == travel_data.return_terminal)
                  ?.name
              }
            </Text>
          </View>
          <View style={styles.ticket_info_row_view}>
            <Text style={styles.detailsText}>
              Return Flight Number: {travel_data.return_flight_number}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          alignSelf: 'center',
          position: 'absolute',
          bottom: 10,
        }}>
        <CustomButton
          loading={is_submit_booking}
          loadingText={'Processing your request'}
          title={'Pay Now'}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default InfoComponenet;

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
    paddingLeft: wp(5),
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
    marginTop: wp(2),
    fontFamily: fonts.Medium,
    color: colors.textPrimaryColor,
    textAlign: 'justify',
  },
  ticket_info_row_view: {
    flexDirection: 'row',
    width: wp(92),
    paddingHorizontal: wp(2),
    paddingVertical: wp(1),
    justifyContent: 'flex-start',
  },
});
