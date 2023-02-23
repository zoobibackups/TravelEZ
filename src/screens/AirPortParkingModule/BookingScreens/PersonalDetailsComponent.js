import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomTextInput from '../../../components/CustomInput';
import HelpDiskDropDown from '../../../components/HelpDiskDropDown';
import {hp, wp} from '../../../constants/scaling';
import {colors, fonts} from '../../../constants/theme';
import {textStyles} from '../../../styles/textStyles';

const PersonalDetailsComponent = ({data, dispatch}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.infoText}>Enter your personal information</Text>
      <TouchableOpacity style={styles.IconButton}>
        <Text style={styles.IconButtonText}>Personal Details</Text>
      </TouchableOpacity>

      <View style={styles.bodyContainer}>
        <View
          style={{
            height: hp(1),
          }}
        />
        <HelpDiskDropDown
          value={data.title}
          label={'Title'}
          placeholder={'Mr.'}
          setValue={text => {
            dispatch({
              type: 'title',
              payload: text,
            });
          }}
          data={[
            {label: 'Mr', value: 'Mr'},
            {label: 'Mrs', value: 'Mrs'},
            {label: 'Miss', value: 'Miss'},
            {label: 'Ms', value: 'Ms'},
          ]}
        />
        <CustomTextInput
          label={'First Name *'}
          placeholder={'first name'}
          onChangeText={text => dispatch({type: 'first_name', payload: text})}
          value={data.first_name}
        />
        <CustomTextInput
          label={'Last Name *'}
          placeholder={'last name'}
          onChangeText={text => dispatch({type: 'last_name', payload: text})}
          value={data.last_name}
        />
        <CustomTextInput
          label={'Email Address *'}
          placeholder={'xyx@gmail.com'}
          onChangeText={text =>
            dispatch({type: 'email_address', payload: text})
          }
          value={data.email_address}
        />

        <CustomTextInput
          label={'Confirm Email Address *'}
          placeholder={'xyx@gmail.com'}
          onChangeText={text =>
            dispatch({
              type: 'confrim_email_address',
              payload: text,
            })
          }
          value={data.confrim_email_address}
        />

        <View
          style={{
            height: hp(1),
          }}
        />

        <CustomTextInput
          label={'Mobile Number *'}
          multiline={false}
          placeholder={'Mobile'}
          onChangeText={text =>
            dispatch({
              type: 'mobile_number',
              payload: text,
            })
          }
          value={data.mobile_number}
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
  IconButtonText: {
    ...textStyles.smallheading,
    fontSize: RFValue(12),
    color: colors.white,
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

export default PersonalDetailsComponent;
