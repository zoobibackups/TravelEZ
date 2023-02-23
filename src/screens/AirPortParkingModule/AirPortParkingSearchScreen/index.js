import moment from 'moment';
import React, {useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomAirportDropDown from '../../../components/CustomAirportDropDown';
import CustomButton from '../../../components/CustomButton';
import CustomDropDownInput from '../../../components/CustomDropDownInput';
import CustomHeader from '../../../components/CustomHeader';
import CustomTextInput from '../../../components/CustomPromoInput';
import DatePicker from '../../../components/DatePicker';
import ErrorComponent from '../../../components/ErrorComponent';
import LoadingComponent from '../../../components/LoadingComponent';
import MainRoutes from '../../../constants/MainRoutes';
import {hp, wp} from '../../../constants/scaling';
import {colors} from '../../../constants/theme';

import {useAirportsQuery} from '../../../store/services/tasksApi';
import {searchFromValidation} from '../../../validation/searchFormValidation';
const FiltersScreen = ({navigation}) => {
  const {data, isLoading, isError, isFetching, isSuccess} = useAirportsQuery();
  const [airport_id, setAirPort] = useState(1);
  const [departure_time, setDropOffTime] = useState('09:00');
  const [pickup_time, setPickUpTime] = useState('09:00');
  const [pickup_date, setPickUpDate] = useState(
    moment().add(126, 'days').format('YYYY-MM-DD'),
  );
  const [departure_date, setDropOffDate] = useState(
    moment().add(127, 'days').format('YYYY-MM-DD'),
  );
  const [promo_code, setPromoCode] = useState('');
  const SubmitSearchForm = () => {
    searchFromValidation(
      airport_id,
      departure_time,
      pickup_time,
      pickup_date,
      departure_date,
    )
      .then(data => {
        navigation.navigate(MainRoutes.AirPortParkingListingScreen, {
          item: JSON.stringify({
            airport_id,
            departure_time,
            pickup_time,
            valid_departure_date: departure_date,
            valid_pickup_date: pickup_date,
            no_of_days:
              moment(departure_date).diff(moment(pickup_date), 'days') + 1,
            bookingfor: 'airport_parking',
            promo: '',
            promo2: '',
            filter1: '',
            filter2: 'low-to-high',
            filter3: '',
            pickup_date: moment(pickup_date).format('DD-MMM-YYYY'),
            departure_date: moment(departure_date).format('DD-MMM-YYYY'),
          }),
        });
      })
      .catch(err => {
        //  alert(JSON.stringify(err));
      });
  };
  if (isLoading || isFetching) {
    return <LoadingComponent navigation={navigation} />;
  }
  if (isError) {
    return <ErrorComponent navigation={navigation} />;
  }
  if (isSuccess) {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
        <CustomHeader
          title={'Airport Parking'}
          show_backButton={true}
          isdrawer={false}
          onPress={() => navigation.goBack()}
        />
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <ImageBackground
            style={{flex: 1, width: wp(100)}}
            source={require('../../../assets/images/bg.jpg')}
            resizeMethod={'resize'}
            resizeMode={'cover'}>
            <LinearGradient
              colors={colors.GradientColors}
              style={styles.linearGradient}>
              <View style={{height: wp(5)}} />

              <CustomAirportDropDown
                label={'Airport'}
                placeholder={'AIRPORT'}
                data={data.data}
                value={airport_id}
                setValue={setAirPort}
              />
              <DatePicker
                label={'Pick up date'}
                value={pickup_date}
                onChangeText={data => {
                  setPickUpDate(moment(data).format('YYYY-MM-DD'));
                  setDropOffDate(
                    moment(data).add(8, 'days').format('YYYY-MM-DD'),
                  );
                }}
              />
              <View style={{height: wp(4)}} />
              <CustomDropDownInput
                label={'Pick Up Time'}
                placeholder={'PICKUP TIME'}
                value={pickup_time}
                setValue={setPickUpTime}
              />
              <DatePicker
                label={'Drop off date'}
                value={departure_date}
                onChangeText={data => {
                  setDropOffDate(moment(data).format('YYYY-MM-DD'));
                }}
              />
              <View style={{height: wp(4)}} />
              <CustomDropDownInput
                label={'Drop off Time'}
                placeholder={'DROP OFF TIME'}
                value={departure_time}
                setValue={setDropOffTime}
              />

              <CustomTextInput
                label={'Promo Code'}
                placeholder={'Enter promo code here'}
                onChangeText={text => setPromoCode(text)}
                value={promo_code}
              />
              <View style={{height: hp(5)}} />
              <CustomButton
                title={'GET QUOTE'}
                onPress={() => SubmitSearchForm()}
                backgroundColor={colors.secondaryColor}
              />
            </LinearGradient>
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    );
  }
};

export default FiltersScreen;
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
