import {useNavigation} from '@react-navigation/native';
import React, {memo, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MainRoutes from '../../../../constants/MainRoutes';
import {hp, wp} from '../../../../constants/scaling';
import {colors} from '../../../../constants/theme';
import getAmenitiesIcons from '../../../../hooks/getAmenitiesIcons';
import getStarsFromNumber from '../../../../hooks/getNumberOfStars';
import {textStyles} from '../../../../styles/textStyles';
const HotelRegionCard = ({item, user_search_data}) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [hotel_info, setHotelInfo] = useState(null);
  const [error, setError] = useState(false);
  const [error_message, setErrorMessage] = useState('');

  useEffect(() => {
    try {
      if (item.rates.length > 0) {
        var formdata = new FormData();
        formdata.append('hotelid', `${item.id}`);
        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow',
        };
        fetch('https://travelez.co.uk/hotelresults_mobile.php', requestOptions)
          .then(response => response.json())
          .then(result => {
            setHotelInfo(result);
            setLoading(false);
          })
          .catch(error => {
            setError(true);
            setLoading(false);
            console.log(error);
          });
      } else {
        setError(true);
        setLoading(false);
      }
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }, []);
  if (error) {
    return null;
  }
  if (loading) {
    return (
      <View style={styles.mainCardView}>
        <View
          style={{width: wp(30), backgroundColor: '#0005', padding: wp(2)}}
        />
        <View
          style={{
            padding: wp(2),
            height: hp(20),
            justifyContent: 'center',
            alignItems: 'center',
            width: wp(66),
          }}>
          <ActivityIndicator
            style={{marginVertical: wp(2)}}
            color={colors.primaryColor}
          />
        </View>
      </View>
    );
  }
  return (
    <View style={styles.mainCardView}>
      <ImageBackground
        resizeMethod={'resize'}
        resizeMode={'stretch'}
        style={{width: wp(30), padding: wp(2)}}
        source={{
          uri: `${hotel_info?.data?.images[0]}`.replace('{size}', '240x240'),
        }}>
        <View
          style={{
            backgroundColor: '#0009',
            position: 'absolute',
            width: wp(30),
            padding: wp(2),
            bottom: 0,
          }}>
          <View>
            <Text
              style={{
                ...textStyles.mediumheading,
                color: colors.white,
                fontSize: RFValue(11),
              }}>
              {hotel_info?.data?.name}
            </Text>

            <View
              style={{
                flexDirection: 'row',
              }}>
              {getStarsFromNumber(hotel_info?.data?.star_rating).map(item => {
                return (
                  <FontAwesome
                    color={colors.secondaryColor}
                    name={item}
                    style={{marginRight: wp(1)}}
                    size={RFValue(12)}
                  />
                );
              })}
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={{padding: wp(2), width: wp(66)}}>
        <View style={{flexDirection: 'row'}}>
          <FontAwesome
            name="map-marker"
            color={'#000'}
            style={{marginRight: wp(1), marginTop: 2}}
            size={RFValue(14)}
          />
          <Text
            numberOfLines={2}
            style={{
              ...textStyles.heading,
              color: colors.textPrimaryColor,
              fontSize: RFValue(11),
            }}>
            {hotel_info?.data?.address}
          </Text>
        </View>
        <View
          style={{
            //    flexDirection: 'row',
            marginVertical: wp(1),
            //alignItems: 'center'
          }}>
          <View
            style={{
              flexDirection: 'row',

              alignItems: 'center',
            }}>
            <FontAwesome
              name="clock-o"
              color={colors.secondaryTextColor}
              style={{marginRight: wp(1)}}
              size={RFValue(14)}
            />
            <Text style={styles.check_in_out_text}>
              CheckIn: {hotel_info?.data?.check_in_time}
            </Text>
          </View>
          <View style={styles.timeRowView}>
            <FontAwesome
              name="clock-o"
              color={colors.secondaryTextColor}
              style={{marginRight: wp(1)}}
              size={RFValue(14)}
            />
            <Text style={styles.check_in_out_text}>
              CheckOut: {hotel_info?.data?.check_out_time}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: wp(1),
              flexWrap: 'wrap',
              width: '69%',
              alignItems: 'center',
            }}>
            {getAmenitiesIcons(hotel_info?.data?.amenity_groups).map(item => {
              return (
                <View style={styles.amenitiesIconsView}>
                  <FontAwesome
                    color={colors.primaryColor}
                    name={item}
                    size={RFValue(12)}
                  />
                </View>
              );
            })}
          </View>
          <View style={styles.price_view}>
            <Text style={styles.from_text}>from</Text>
            <Text style={styles.price_text}>
              {/* £{hotel_info?.data?.metapolicy_struct?.deposit[0]?.price} */}£
              {item?.rates[0]?.daily_prices[0]}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate(MainRoutes.HotelRoomLisitngScreen, {
              item: {...item, ...hotel_info?.data},
            });
          }}
          style={styles.book_now}>
          <Text
            style={{
              ...textStyles.heading,
              fontSize: RFValue(14),
              color: '#fff',
            }}>
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default memo(HotelRegionCard);
const styles = StyleSheet.create({
  mainCardView: {
    elevation: 5,
    borderRadius: wp(2),
    overflow: 'hidden',
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: wp(2),
    marginBottom: 0,
    width: wp(96),
  },
  timeRowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  check_in_out_text: {
    ...textStyles.mediumheading,
    color: colors.secondaryTextColor,
    fontSize: RFValue(11),
  },
  amenitiesIconsView: {
    width: RFValue(16),
    backgroundColor: '#0001',
    borderRadius: RFValue(2),
    height: RFValue(16),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RFValue(5),
    marginRight: RFValue(5),
  },
  price_view: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'baseline',
  },
  from_text: {
    ...textStyles.mediumheading,
    alignSelf: 'flex-end',
    color: colors.primaryColor,
    fontSize: RFValue(12),
  },
  price_text: {
    ...textStyles.heading,
    alignSelf: 'flex-end',
    color: colors.primaryColor,
    fontSize: RFValue(15),
  },
  book_now: {
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    height: wp(10),
    width: '100%',
    borderRadius: wp(2),
    marginTop: wp(1),
    backgroundColor: colors.primaryColor,
    color: colors.white,
  },
});
