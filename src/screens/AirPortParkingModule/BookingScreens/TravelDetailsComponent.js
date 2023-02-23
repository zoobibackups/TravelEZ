import React, {useRef, useState} from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomTextInput from '../../../components/CustomInput';
import HelpDiskDropDown from '../../../components/HelpDiskDropDown';
import {hp, wp} from '../../../constants/scaling';
import {colors, fonts} from '../../../constants/theme';
import {textStyles} from '../../../styles/textStyles';

const TravelDetailsComponent = ({
  terminals,
  data,
  travel_detilas_data_dispatch,
}) => {
  const [open, setOpen] = useState(false);
  const animatedController = useRef(new Animated.Value(0)).current;
  const [bodySectionHeight, setBodySectionHeight] = useState(hp(80));

  const bodyHeight = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, bodySectionHeight],
  });
  const toggleListItem = () => {
    if (open) {
      Animated.timing(animatedController, {
        duration: 500,
        toValue: 0,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animatedController, {
        duration: 500,
        toValue: 1,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    }
    setOpen(!open);
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.infoText}>Enter your personal information</Text>
      <View style={styles.travelDetails}>
        <View style={{...styles.IconButton, height: hp(7)}}>
          <Text style={styles.IconButtonText}>Travel Details</Text>
        </View>
        <View
          style={{
            ...styles.IconButton,
            paddingLeft: 0,
            backgroundColor: '#fff',
          }}>
          <Text
            style={{
              ...styles.IconButtonText,
              fontSize: RFValue(12),
              color: colors.primaryColor,
              fontFamily: fonts.Medium,
            }}>
            Do you have Travel details?{' '}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'flex-end',
              alignItems: 'center',
              height: hp(5),
              justifyContent: 'center',
            }}>
            <Text
              style={{
                ...styles.IconButtonText,
                fontSize: RFValue(12),
                color: colors.primaryColor,
                fontFamily: fonts.Medium,
              }}>
              Yes
            </Text>
            <TouchableOpacity
              onPress={() => toggleListItem()}
              style={{
                width: wp(4),
                borderColor: !open ? '#0008' : colors.secondaryColor,
                borderWidth: wp(0.3),
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: wp(2),
                borderRadius: wp(5),
                backgroundColor: '#fff',
                height: wp(4),
              }}>
              <View
                style={{
                  width: wp(1),
                  height: wp(1),
                  borderRadius: wp(2),
                  backgroundColor: !open ? '#0008' : colors.secondaryColor,
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                ...styles.IconButtonText,
                fontSize: RFValue(12),
                color: colors.primaryColor,
                fontFamily: fonts.Medium,
              }}>
              No
            </Text>
            <TouchableOpacity
              onPress={() => toggleListItem()}
              style={{
                width: wp(4),
                borderColor: open ? '#0008' : colors.secondaryColor,
                borderWidth: wp(0.3),
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: wp(2),
                marginRight: 0,
                borderRadius: wp(5),
                backgroundColor: '#0000',
                height: wp(4),
              }}>
              <View
                style={{
                  width: wp(1),
                  height: wp(1),
                  borderRadius: wp(2),
                  backgroundColor: open ? '#0008' : colors.secondaryColor,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Animated.View
        style={{
          backgroundColor: '#fff',
          width: wp(92),
          paddingHorizontal: wp(1),
          height: bodyHeight,
          overflow: 'hidden',
        }}>
        <View
          style={styles.bodyContainer}
          onLayout={event => {
            setBodySectionHeight(event.nativeEvent.layout.height);
          }}>
          <View
            style={{
              height: hp(1),
            }}
          />
          <HelpDiskDropDown
            value={data.drop_off_terminal}
            label={'Drop-Off Terminal: *'}
            placeholder={'drop-off terminal'}
            setValue={text => {
              travel_detilas_data_dispatch({
                type: 'drop_off_terminal',
                payload: text,
              });
            }}
            data={terminals.map(({name: label, id: value}) => ({
              value,
              label,
            }))}
          />
          <View
            style={{
              height: hp(1),
            }}
          />
          <HelpDiskDropDown
            value={data.return_terminal}
            label={'Return Terminal: *'}
            placeholder={'return terminal'}
            setValue={text => {
              travel_detilas_data_dispatch({
                type: 'return_terminal',
                payload: text,
              });
            }}
            data={terminals.map(({name: label, id: value}) => ({
              value,
              label,
            }))}
          />

          <CustomTextInput
            label={'Return Flight Number:'}
            multiline={false}
            placeholder={'return flight number'}
            onChangeText={text =>
              travel_detilas_data_dispatch({
                type: 'return_flight_number',
                payload: text,
              })
            }
            value={data.return_flight_number}
          />
        </View>
      </Animated.View>
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
  travelDetails: {
    width: wp(92),
    borderTopLeftRadius: wp(2),
    borderTopRightRadius: wp(2),

    overflow: 'hidden',
    height: hp(12),
    borderColor: colors.borderColor,
    backgroundColor: colors.primaryColor,
  },
  IconButton: {
    width: wp(92),
    paddingLeft: wp(5),

    height: hp(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    minHeight: hp(10),
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
  },
});

export default TravelDetailsComponent;
