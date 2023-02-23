import moment from 'moment';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RFValue} from 'react-native-responsive-fontsize';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import ChildAgeInput from '../../../components/ChildAgeInput';
import CountryModal from '../../../components/CountryModal';
import CustomButton from '../../../components/CustomButton';
import CustomHeader from '../../../components/CustomHeader';
import DatePicker from '../../../components/DatePicker';
import HotelDropDownInput from '../../../components/HotelDropDownInput';
import NumberInput from '../../../components/NumberInput';
import MainRoutes from '../../../constants/MainRoutes';
import {hp, wp} from '../../../constants/scaling';
import {colors} from '../../../constants/theme';
import {setSearchData} from '../../../store/actions/SearchActions';
import {textStyles} from '../../../styles/textStyles';
import hotelSearchFromValidation from '../../../validation/hotelSearchFromValidation';
import Countries from './countries';
const HotelSearchScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const setData = data => dispatch(setSearchData(data));

  const [pickup_date, setPickUpDate] = useState(
    moment().add(20, 'days').format('YYYY-MM-DD'),
  );
  const [selected_country_code, setSelectCountryCode] = useState('US');
  const [countries_modal_visible, setCountryModalVisibe] = useState(false);
  const [select_hotel, setSelectedHotel] = useState(null);
  const [child_age_array, setChildAgeArray] = useState([]);
  const [departure_date, setDropOffDate] = useState(
    moment().add(27, 'days').format('YYYY-MM-DD'),
  );
  const [child, setChild] = useState(0);
  const [adults, setADults] = useState(1);
  const validate_data = () => {
    hotelSearchFromValidation(select_hotel, pickup_date, departure_date)
      .then(data => {
        if (select_hotel.is_region) {
          setData({
            id: select_hotel.id,
            checkin: pickup_date,
            checkout: departure_date,
            child_age_array: child_age_array,
            selected_country_code: selected_country_code,
            language: 'en',
            currency: 'GBP',
            guests: [
              {
                adults: adults,
                children: child_age_array,
              },
            ],
            destination: select_hotel.name,
            hotels_limit: 5,
          });
          navigation.navigate(MainRoutes.HotelLisitingByAreaScreen, {
            item: JSON.stringify({
              region_id: select_hotel.id,
              checkin: pickup_date,
              checkout: departure_date,
              language: 'en',
              currency: 'GBP',
              guests: [
                {
                  adults: adults,
                  children: child_age_array,
                },
              ],
              destination: select_hotel.name,
              hotels_limit: 5,
            }),
          });
        } else {
          let item = {
            id: select_hotel.id,
            checkin: pickup_date,
            checkout: departure_date,
            selected_country_code: selected_country_code,
            language: 'en',
            child_age_array: child_age_array,
            currency: 'GBP',
            guests: [
              {
                adults: adults,
                children: child_age_array,
              },
            ],
            destination: select_hotel.name,
            hotels_limit: 5,
          };
          setData(item);
          navigation.navigate(MainRoutes.HotelRoomListingByIdScreen, {
            item: JSON.stringify(item),
          });
        }
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
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
      <CustomHeader
        title={'FIND HOTEL'}
        show_backButton={true}
        isdrawer={false}
        onPress={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <LinearGradient
          colors={colors.GradientColors}
          style={styles.linearGradient}>
          <View style={{height: wp(2)}} />
          <Text
            style={{
              ...textStyles.heading,
              backgroundColor: '#0000',
              marginBottom: wp(5),
              fontSize: RFValue(18),
              textAlign: 'center',
              alignSelf: 'center',
              color: '#fff',
            }}>
            FIND CHEAP{'\n'}HOTEL
          </Text>
          <HotelDropDownInput
            select_hotel={select_hotel}
            setSelectedHotel={setSelectedHotel}
          />
          <View style={{height: wp(10)}} />
          <CountryModal
            placeholder={'your citizen ship'}
            items={Countries}
            selectedItems={selected_country_code}
            setSelectItems={setSelectCountryCode}
            isVisible={countries_modal_visible}
            setIsVisible={setCountryModalVisibe}
          />
          <DatePicker
            label={'Pick up date'}
            value={pickup_date}
            onChangeText={data => {
              setPickUpDate(moment(data).format('YYYY-MM-DD'));
              setDropOffDate(moment(data).add(8, 'days').format('YYYY-MM-DD'));
            }}
          />

          <DatePicker
            label={'Drop off date'}
            value={departure_date}
            onChangeText={data => {
              setDropOffDate(moment(data).format('YYYY-MM-DD'));
            }}
          />
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
                  setADults(adults => adults + 1);
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
          {child > 0 && (
            <View
              style={{
                width: wp(96),
                alignSelf: 'center',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              {child_age_array.map((item, index) => {
                return (
                  <ChildAgeInput
                    key={`${index}`}
                    label={index + 1}
                    width={wp(20)}
                    placeholder={'Child'}
                    onChangeText={text => {
                      if (text == '+') {
                        let temp_array = [...child_age_array];
                        temp_array[index].age += 1;
                        setChildAgeArray(temp_array);
                      } else {
                        let temp_array = [...child_age_array];
                        if (temp_array[index].age > 1) {
                          let temp_array = [...child_age_array];
                          temp_array[index].age -= 1;
                          setChildAgeArray(temp_array);
                        }
                      }
                    }}
                    value={item.age}
                  />
                );
              })}
            </View>
          )}
          <View style={{height: hp(2)}} />
          <CustomButton
            title={'GET QUOTE'}
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
