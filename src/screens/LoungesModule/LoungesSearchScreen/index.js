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
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
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
import {setSearchData} from '../../../store/actions/SearchActions';
import {useAirportsQuery} from '../../../store/services/tasksApi';
import {LoungesBookingFormValidation} from '../../../validation/LoungesBookingFormValidation';
const LoungesSearchScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const setData = data => dispatch(setSearchData(data));
  const {data, isLoading, isError, isFetching, isSuccess} = useAirportsQuery();
  const [airport_id, setAirPort] = useState(1);
  const [adults, setAdults] = useState('1');
  const [childs, setChilds] = useState('0');
  const [pickup_time, setPickUpTime] = useState('09:00');
  const [pickup_date, setPickUpDate] = useState(
    moment().add(126, 'days').format('YYYY-MM-DD'),
  );

  const [promo_code, setPromoCode] = useState('');
  const SubmitSearchForm = () => {
    LoungesBookingFormValidation(airport_id, pickup_time, pickup_date)
      .then(() => {
        setData({
          airport_id2: airport_id,
          airport_id: data.data.find(item => item.value == airport_id)
            .iata_code,
          pickup_time: pickup_time.replace(':', ''),
          pickup_date,
          adults,
          childs,
        });
        navigation.navigate(MainRoutes.LoungesListingScreen, {
          item: {
            airport_id: data.data.find(item => item.value == airport_id)
              .iata_code,
            pickup_time: pickup_time.replace(':', ''),
            pickup_date,
            adults,
            childs,
          },
        });
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
          title={'Lounges Search'}
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
              <CustomAirportDropDown
                label={'Adults'}
                placeholder={'ADULTS'}
                data={[
                  {label: '1', value: '1'},
                  {label: '2', value: '2'},
                  {label: '3', value: '3'},
                  {label: '4', value: '4'},
                ]}
                value={adults}
                setValue={value => setAdults(value)}
              />
              <CustomAirportDropDown
                label={'Children'}
                placeholder={'CHILDREN'}
                data={[
                  {label: '0', value: '0'},
                  {label: '1', value: '1'},
                  {label: '2', value: '2'},
                  {label: '3', value: '3'},
                  {label: '4', value: '4'},
                ]}
                value={childs}
                setValue={value => setChilds(value)}
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

export default LoungesSearchScreen;
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
