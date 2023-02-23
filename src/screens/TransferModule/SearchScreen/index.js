import moment from 'moment';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Checkbox} from 'react-native-paper';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import CustomButton from '../../../components/CustomButton';
import CustomDropDownInput from '../../../components/CustomDropDownInput';
import CustomHeader from '../../../components/CustomHeader';
import CustomTextInput from '../../../components/CustomPromoInput';
import DatePicker from '../../../components/DatePicker';
import NumberInput from '../../../components/NumberInput';
import MainRoutes from '../../../constants/MainRoutes';
import {hp, wp} from '../../../constants/scaling';
import {colors} from '../../../constants/theme';
import {setSearchData} from '../../../store/actions/SearchActions';
import {textStyles} from '../../../styles/textStyles';
import transferformvalidation from '../../../validation/transferformvalidation';
import DropDownInput from './DropDownInput';
const HotelSearchScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const setData = data => dispatch(setSearchData(data));
  const [isLoading, setIsLoading] = useState(false);
  const [pickup_date, setPickUpDate] = useState(
    moment().add(20, 'days').format('YYYY-MM-DD'),
  );

  const [pick_up_location, setPickupLocation] = useState({
    code: 'DXB',
    country: 'AE',
    iataCode: 'DXB',
    id: 5235,
    label: 'Dubai International Airport (DXB)',
    lat: 25.2527999,
    lng: 55.3643989,
    locationType: 'AP',
    municipality: 'Dubai',
    name: 'Dubai International Airport',
    supplier: 'transfers service',
    types: ['IATA', 'airport'],
  });
  const [drop_off_location, setDropoffLocation] = useState(null);
  const [child_age_array, setChildAgeArray] = useState([]);
  const [drop_off_date, setDropOffDate] = useState(
    moment().add(27, 'days').format('YYYY-MM-DD'),
  );
  const [pickup_time, setPickUpTime] = useState('09:00');
  const [promo_code, setPromoCode] = useState('');
  const [drop_off_time, setDropOffTime] = useState('09:00');
  const [child, setChild] = useState(0);
  const [adults, setADults] = useState(1);
  const [is_return, setReturn] = useState(false);
  const validate_data = () => {
    transferformvalidation({
      pick_up_location,
      drop_off_location,
      pickup_date,
      drop_off_date,
      is_return,
    })
      .then(data => {
        // console.log(pick_up_location, drop_off_location);
        request_data();
      })
      .catch(err => {
        Toast.show({
          type: 'error',
          text1: 'Form Error',
          position: 'bottom',
          text2: err.message,
        });
      });
  };
  const request_data = () => {
    if ((pick_up_location != null) & (drop_off_location != null)) {
      let p_type = pick_up_location.locationType == 'AP' ? 'IATA' : 'TTI';
      let d_type = drop_off_location.locationType == 'AP' ? 'IATA' : 'TTI';
      let url = `https://api.holidayextras.co.uk/v1/transfers/search.js?ABTANumber=AJ166&Password=PAXML&Initials=p&key=parkingzone&token=829152491&PickUpType=${p_type}&PickUp=${
        pick_up_location.code
      }&DropOffType=${d_type}&DropOff=${
        drop_off_location.code
      }&Adults=${adults}&FromDate=${pickup_date}&FromTime=${pickup_time.replace(
        ':',
        '',
      )}&ReturnDate=${drop_off_date}&ReturnTime=${drop_off_time.replace(
        ':',
        '',
      )}`;

      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      setIsLoading(true);
      fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => {
          setIsLoading(false);
          if (result.API_Reply.ATTRIBUTES.Result == 'OK') {
            setData({
              pick_up_location: pick_up_location,
              drop_off_location: drop_off_location,
              pickup_time: pickup_time,
              drop_off_date: drop_off_date,
              is_return: is_return,
              pickup_date: pickup_date,
              drop_off_time: drop_off_time,
            });
            navigation.navigate(MainRoutes.TransferListingScreen, {
              item: JSON.stringify(result.API_Reply.Transfers),
            });
          } else {
            Toast.show({
              type: 'error',
              text1: 'Form Error',
              position: 'bottom',
              text2: result.API_Reply.Error.Message,
            });
          }
        })
        .catch(error => {
          console.log(error);
          Toast.show({
            type: 'error',
            text1: 'Form Error',
            position: 'bottom',
            text2: 'some thing went wrong',
          });
          setIsLoading(false);
        });
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
      <CustomHeader
        title={'Search Transfer'}
        show_backButton={true}
        isdrawer={false}
        onPress={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <LinearGradient
          colors={colors.GradientColors}
          style={styles.linearGradient}>
          <View style={{height: wp(2)}} />
          <DropDownInput
            select_hotel={pick_up_location}
            title={'Pick up'}
            disabled={false}
            setSelectedHotel={text => {
              setPickupLocation(text);
              setDropoffLocation(null);
            }}
          />
          <View style={{height: wp(10)}} />
          <DropDownInput
            first_location={pick_up_location}
            select_hotel={drop_off_location}
            title={'Drop off'}
            disabled={pick_up_location == null ? true : false}
            setSelectedHotel={setDropoffLocation}
          />
          <View style={{height: wp(10)}} />

          <DatePicker
            label={'Pick up date'}
            value={pickup_date}
            onChangeText={data => {
              setPickUpDate(moment(data).format('YYYY-MM-DD'));
              setDropOffDate(moment(data).add(8, 'days').format('YYYY-MM-DD'));
            }}
          />
          <View style={{height: wp(4)}} />
          <CustomDropDownInput
            label={'Pick Up Time'}
            placeholder={'PICKUP TIME'}
            value={pickup_time}
            setValue={setPickUpTime}
          />
          <View
            style={{
              ...styles.chooseFileView,
              flexDirection: 'row',

              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Checkbox
              color={colors.secondaryColor}
              uncheckedColor={'#fff'}
              status={is_return ? 'checked' : 'unchecked'}
              onPress={() => {
                setReturn(!is_return);
              }}
            />
            <View>
              <Text
                style={{
                  ...textStyles.Label,
                  color: colors.white,
                }}>
                {is_return ? 'Not returning ?' : 'Want a return?'}
              </Text>
            </View>
          </View>
          {is_return && (
            <View>
              <DatePicker
                label={'Drop off date'}
                value={drop_off_date}
                onChangeText={data => {
                  setDropOffDate(moment(data).format('YYYY-MM-DD'));
                }}
              />
              <View style={{height: wp(4)}} />
              <CustomDropDownInput
                label={'Drop off Time'}
                placeholder={'DROP OFF TIME'}
                value={drop_off_time}
                setValue={setDropOffTime}
              />
            </View>
          )}
          <View
            style={{
              width: wp(96),
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <NumberInput
              label={'Adult(+12)'}
              width={wp(45)}
              placeholder={'Adults'}
              onChangeText={text => {
                if (text == '+') {
                  if (adults < 5) {
                    setADults(adults => adults + 1);
                  }
                } else {
                  if (adults > 1) {
                    setADults(adults => adults - 1);
                  }
                }
              }}
              value={adults}
            />
            <NumberInput
              label={'Child'}
              width={wp(45)}
              placeholder={'Child'}
              onChangeText={text => {
                if (text == '+') {
                  if (child < 4) {
                    let temp_array = [...child_age_array];
                    temp_array.push({
                      index: child + 1,
                      age: 1,
                    });
                    setChildAgeArray(temp_array);
                    setChild(child => child + 1);
                  }
                } else {
                  if (child > 0) {
                    let temp_array = [...child_age_array];
                    temp_array.pop();
                    setChildAgeArray(temp_array);
                    setChild(child => child - 1);
                  }
                }
              }}
              value={child}
            />
          </View>

          <CustomTextInput
            label={'Promo Code'}
            placeholder={'Enter promo code here'}
            onChangeText={text => setPromoCode(text)}
            value={promo_code}
          />
          <View style={{height: hp(2)}} />
          <CustomButton
            title={'GET QUOTE'}
            isLoading={isLoading}
            loadingText={'Please wait'}
            onPress={() => validate_data()}
            backgroundColor={colors.transparentbgColor}
          />
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HotelSearchScreen;
const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
});
