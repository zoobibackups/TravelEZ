import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MainRoutes from '../../../constants/MainRoutes';
import {wp} from '../../../constants/scaling';
import {colors} from '../../../constants/theme';
import getStarsFromNumber from '../../../hooks/getNumberOfStars';
import {textStyles} from '../../../styles/textStyles';

const RoomBookingItem = ({item, images}) => {
  const navigation = useNavigation();
  const [hotel_info] = useState(item);

  return (
    <View style={styles.mainCardView}>
      <ImageBackground
        resizeMethod={'resize'}
        resizeMode={'stretch'}
        style={{width: wp(30), padding: wp(2)}}
        source={{
          uri: `${images[0]}`.replace('{size}', '1024x768'),
        }}>
        <View
          style={{
            backgroundColor: '#0009',
            position: 'absolute',
            // borderTopLeftRadius: wp(2),
            // borderTopRightRadius: wp(2),
            width: wp(30),
            padding: wp(2),
            bottom: 0,
          }}>
          <View>
            <Text
              numberOfLines={1}
              adjustsFontSizeToFit={true}
              style={{
                ...textStyles.mediumheading,
                color: colors.white,
                fontSize: RFValue(9),
              }}>
              {hotel_info?.room_data_trans?.main_room_type}
            </Text>

            <View
              style={{
                flexDirection: 'row',
              }}>
              {getStarsFromNumber(5).map(item => {
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
        <Text
          numberOfLines={2}
          style={{
            ...textStyles.heading,
            color: colors.textPrimaryColor,
            fontSize: RFValue(15),
          }}>
          {item?.room_data_trans?.main_room_type}
        </Text>

        {['private-bathroom', 'tea-or-coffee', 'tv', 'wifi'].map(item =>
          hotel_info?.amenities_data.includes(item) ? (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {item == 'private-bathroom' ? (
                <FontAwesome
                  name="bath"
                  color={'#000'}
                  style={{marginRight: wp(1)}}
                  size={RFValue(14)}
                />
              ) : item == 'tea-or-coffee' ? (
                <Image
                  source={require('../../../assets/images/cup.png')}
                  style={{
                    marginRight: wp(1),
                    width: RFValue(14),
                    height: RFValue(14),
                  }}
                />
              ) : item == 'tv' ? (
                <FontAwesome
                  name="tv"
                  color={'#000'}
                  style={{marginRight: wp(1), marginTop: 2}}
                  size={RFValue(14)}
                />
              ) : item == 'wifi' ? (
                <FontAwesome
                  name="wifi"
                  color={'#000'}
                  style={{marginRight: wp(1), marginTop: 2}}
                  size={RFValue(14)}
                />
              ) : (
                ''
              )}

              <Text
                numberOfLines={2}
                style={{
                  ...textStyles.Label,
                  color: colors.textPrimaryColor,
                  fontSize: RFValue(11),
                }}>
                {item == 'private-bathroom'
                  ? 'Private Bathroom'
                  : item == 'tea-or-coffee'
                  ? 'Tea/Coffee'
                  : item == 'tv'
                  ? 'TV'
                  : item == 'wifi'
                  ? 'Free Wifi'
                  : ''}
              </Text>
            </View>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 1,
                alignItems: 'center',
              }}>
              {item == 'private-bathroom' ? (
                <FontAwesome
                  name="bath"
                  color={'#000'}
                  style={{marginRight: wp(1), marginTop: 2}}
                  size={RFValue(14)}
                />
              ) : item == 'tea-or-coffee' ? (
                <Image
                  source={require('../../../assets/images/cup.png')}
                  style={{
                    marginRight: wp(1),
                    width: RFValue(14),
                    height: RFValue(14),
                  }}
                />
              ) : item == 'tv' ? (
                <FontAwesome
                  name="tv"
                  color={'#000'}
                  style={{marginRight: wp(1)}}
                  size={RFValue(14)}
                />
              ) : item == 'wifi' ? (
                <FontAwesome
                  name="wifi"
                  color={'#000'}
                  style={{marginRight: wp(1)}}
                  size={RFValue(14)}
                />
              ) : (
                ''
              )}
              <Text
                numberOfLines={2}
                style={{
                  ...textStyles.Label,
                  color: colors.textPrimaryColor,
                  fontSize: RFValue(11),
                }}>
                {item == 'private-bathroom'
                  ? 'Bathroom'
                  : item == 'tea-or-coffee'
                  ? 'No Tea/Coffee'
                  : item == 'tv'
                  ? 'No TV'
                  : item == 'wifi'
                  ? 'No Wifi'
                  : ''}
              </Text>
            </View>
          ),
        )}

        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,

              alignItems: 'baseline',
            }}>
            <Text
              style={{
                ...textStyles.mediumheading,
                alignSelf: 'flex-end',
                color: colors.primaryColor,
                fontSize: RFValue(12),
              }}>
              from
            </Text>
            <Text
              style={{
                ...textStyles.Label,
                alignSelf: 'flex-end',
                color: colors.primaryColor,
                fontSize: RFValue(15),
              }}>
              £{hotel_info?.payment_options.payment_types[0].amount} for{' '}
              {hotel_info?.daily_prices?.length} nights
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: wp(1),
            backgroundColor: '#00000000',
            borderRadius: wp(2),
            alignItems: 'center',
            flex: 1,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(MainRoutes.HotelBookingFormScreen, {
                item: hotel_info,
              })
            }
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 5,
              height: wp(10),
              width: '100%',
              borderRadius: wp(2),
              backgroundColor: colors.primaryColor,
              color: colors.white,
            }}>
            <Text
              style={{
                ...textStyles.heading,
                fontSize: RFValue(14),
                color: '#fff',
              }}>
              Book
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RoomBookingItem;
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
});
