import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomTextInput from '../../../components/CustomInput';
import {hp, wp} from '../../../constants/scaling';
import {colors, fonts} from '../../../constants/theme';
import {textStyles} from '../../../styles/textStyles';

const BillingDetailsComponent = ({billing_data, dipatchBillingReducer}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.infoText}>Enter your Billing Details</Text>
      <TouchableOpacity style={styles.IconButton}>
        <Text style={styles.IconButtonText}>Biiling Details</Text>
      </TouchableOpacity>

      <View style={styles.bodyContainer}>
        <CustomTextInput
          label={'Full Address *'}
          placeholder={'full address'}
          onChangeText={text =>
            dipatchBillingReducer({
              type: 'full_address',
              payload: text.replace(
                /[`~0-9!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
                '',
              ),
            })
          }
          value={billing_data.full_address}
        />
        <CustomTextInput
          label={'City *'}
          placeholder={'city'}
          onChangeText={text =>
            dipatchBillingReducer({
              type: 'city',
              payload: text.replace(
                /[`~0-9!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
                '',
              ),
            })
          }
          value={billing_data.city}
        />
        <CustomTextInput
          label={'State/Province*'}
          placeholder={'state/province'}
          onChangeText={text =>
            dipatchBillingReducer({
              type: 'state_provience',
              payload: text.replace(
                /[`~0-9!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
                '',
              ),
            })
          }
          value={billing_data.state_provience}
        />
        <CustomTextInput
          label={'Zip Code'}
          placeholder={'zip code'}
          onChangeText={text =>
            dipatchBillingReducer({
              type: 'zip_code',
              payload: text.replace(/[^0-9]/g, ''),
            })
          }
          value={billing_data.zip_code}
        />
        <CustomTextInput
          label={'Country'}
          placeholder={'country'}
          onChangeText={text =>
            dipatchBillingReducer({
              type: 'country',
              payload: text.replace(
                /[`~0-9!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
                '',
              ),
            })
          }
          value={billing_data.country}
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

export default BillingDetailsComponent;
