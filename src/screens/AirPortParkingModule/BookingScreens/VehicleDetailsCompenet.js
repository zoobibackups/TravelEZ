import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomTextInput from '../../../components/CustomInput';
import {hp, wp} from '../../../constants/scaling';
import {colors, fonts} from '../../../constants/theme';
import {textStyles} from '../../../styles/textStyles';

const VehicleDetailsCompenet = ({vehicle_data, dispatchFindTicket}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.infoText}>Enter your vehicle Details</Text>
      <TouchableOpacity style={styles.IconButton}>
        <Text style={styles.IconButtonText}>Vehicle Details</Text>
      </TouchableOpacity>

      <View style={styles.bodyContainer}>
        <CustomTextInput
          label={'Vehicle Registration *'}
          placeholder={'vehicle registration'}
          onChangeText={text =>
            dispatchFindTicket({
              type: 'vehicle_registration',
              payload: text,
            })
          }
          value={vehicle_data.vehicle_registration}
        />
        <CustomTextInput
          label={'Vehicle Make *'}
          placeholder={'vehicle make'}
          onChangeText={text =>
            dispatchFindTicket({
              type: 'vehicle_make',
              payload: text,
            })
          }
          value={vehicle_data.vehicle_make}
        />
        <CustomTextInput
          label={'Vehicle Color *'}
          placeholder={'vehicle color'}
          onChangeText={text =>
            dispatchFindTicket({
              type: 'vehicle_color',
              payload: text,
            })
          }
          value={vehicle_data.vehicle_color}
        />
        <CustomTextInput
          label={'Vehicle Model *'}
          placeholder={'vehicle model'}
          onChangeText={text =>
            dispatchFindTicket({
              type: 'vehicle_model',
              payload: text,
            })
          }
          value={vehicle_data.vehicle_model}
        />
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

    fontFamily: fonts.Medium,
  },

  IconButton: {
    width: wp(92),

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

  IconButtonText: {
    ...textStyles.smallheading,
    fontSize: RFValue(12),
    color: colors.white,
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

export default VehicleDetailsCompenet;
