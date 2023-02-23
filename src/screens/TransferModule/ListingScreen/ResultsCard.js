import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MainRoutes from '../../../constants/MainRoutes';
import {hp, wp} from '../../../constants/scaling';
import {colors, fonts} from '../../../constants/theme';
import {textStyles} from '../../../styles/textStyles';
const ResultsCard = ({item, filters, index}) => {
  const navigation = useNavigation();
  let myImgurl = `${item.Images[0].Src}`;
  if (!/^https?:\/\//i.test(`${item.Images[0].Src}`)) {
    myImgurl = 'https://' + myImgurl;
  }
  return (
    <View style={styles.mainCardView}>
      <View style={{flexDirection: 'row', width: wp(93)}}>
        <View style={styles.ImgBg}>
          <Image
            style={styles.ImageView}
            resizeMode={'contain'}
            source={{
              uri: myImgurl,
            }}
          />
        </View>
        <View style={{width: wp(62), padding: wp(2)}}>
          <View style={{width: wp(58), flexDirection: 'row'}}>
            <View style={{width: wp(31)}}>
              <Text style={styles.nameText}>{item.Name}</Text>
              <Text style={styles.PriceText}>£ {item.TotalPrice}</Text>

              <View style={{...styles.FeaturesView}}></View>
            </View>
            <View
              style={{
                width: wp(28),
                padding: wp(1),
                backgroundColor: '#00000009',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <FontAwesome
                  name="users"
                  size={RFValue(10)}
                  color={colors.primaryColor}
                />
                <Text
                  style={{
                    ...styles.InfoiLabeltext,
                    fontFamily: fonts.Medium,
                    marginLeft: wp(2),
                  }}>
                  Capacity: {item.VehicleDetails.MaxCapacity}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <FontAwesome
                  name="shopping-bag"
                  size={RFValue(10)}
                  color={colors.primaryColor}
                />
                <Text
                  style={{
                    ...styles.InfoiLabeltext,
                    fontFamily: fonts.Medium,
                    marginLeft: wp(2),
                  }}>
                  Bags: {item.VehicleDetails.Bags}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <FontAwesome
                  name="cab"
                  size={RFValue(10)}
                  color={colors.primaryColor}
                />
                <Text
                  style={{
                    ...styles.InfoiLabeltext,
                    fontFamily: fonts.Medium,
                    marginLeft: wp(2),
                  }}>
                  Private: {item.VehicleDetails.IsPrivate ? 'Yes' : 'No'}
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(MainRoutes.TransferBookingFormScreen, {
                item: {...filters, ...item},
              })
            }
            style={{
              width: wp(57),
              borderRadius: wp(2),
              height: wp(10),
              marginTop: wp(1),
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.primaryColor,
            }}>
            <Text
              style={{
                ...textStyles.mediumheading,
                color: '#fff',
              }}>
              Book Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ResultsCard;
const styles = StyleSheet.create({
  mainCardView: {
    elevation: 5,
    borderRadius: wp(2),
    backgroundColor: '#fff',
    margin: wp(2),
    width: wp(96),
  },
  IconBg: {
    backgroundColor: '#00000009',
    width: RFValue(20),
    height: RFValue(20),
    marginRight: wp(1),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(2),
  },
  ImgBg: {
    width: wp(32),
    justifyContent: 'center',
    alignItems: 'center',
    margin: wp(1),
    borderRadius: wp(1),
    overflow: 'hidden',

    overflow: 'hidden',
    backgroundColor: '#00000010',
  },
  ImageView: {
    width: wp(32),
    borderRadius: wp(1),
    flex: 1,
  },
  FeaturesView: {
    justifyContent: 'center',
  },
  PriceText: {
    ...textStyles.heading,
    color: colors.secondaryColor,
    fontSize: RFValue(14),
  },
  nameText: {
    ...textStyles.heading,
    fontSize: RFValue(10),
    color: colors.primaryColor,
  },
  InfoTouch: {
    backgroundColor: colors.primaryColor,
    position: 'absolute',
    top: wp(10),
    width: wp(15),
    height: wp(5),
    flexDirection: 'row',
    paddingHorizontal: wp(1),
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: wp(5),
    right: 10,
  },
  IconsRow: {
    flexDirection: 'row',
    width: wp(60),
    marginTop: hp(0.5),
    justifyContent: 'flex-start',
  },
  InfoiLabeltext: {
    ...textStyles.Label,
    fontSize: RFValue(10),
    fontFamily: fonts.Medium,
    color: colors.primaryColor,
  },
});
