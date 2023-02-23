import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LoungesBookingInfoModal from '../../../components/LoungesBookingInfoModal';
import MainRoutes from '../../../constants/MainRoutes';
import {hp, wp} from '../../../constants/scaling';
import {colors, fonts} from '../../../constants/theme';
import getAirportFeatureIcons from '../../../hooks/getAirportFeatureIcons';
import {useGetLoungesInfoQuery} from '../../../store/services/loungesApi';
import {textStyles} from '../../../styles/textStyles';
const LoungeListingItem = ({item, index}) => {
  const navigation = useNavigation();
  const {data, isLoading, isError, isFetching, isSuccess, error} =
    useGetLoungesInfoQuery({
      MoreInfoURL: item.MoreInfoURL,
      ABTANumber: 'AJ166',
      Password: 'PAXML',
      Initials: 'p',
      key: 'parkingzone',
      token: '949736227',
    });
  const [isModalVisible, setIsModalVisible] = useState(false);

  if (isLoading || isError || isFetching)
    return (
      <View
        style={{...styles.mainView, justifyContent: 'center', height: hp(20)}}>
        <ActivityIndicator color={colors.primaryColor} />
      </View>
    );
  const img_url = `https://holidayextras.imgix.net/${
    data.API_Reply.Product[0].tripappimages.split(';')[0]
  }`
    .replace('/imageLibrary', 'libraryimages')
    .replace('//', '/');
  return (
    <View style={styles.mainView}>
      <View style={{flexDirection: 'row', width: wp(96)}}>
        <View style={styles.ImgBg}>
          <Image
            style={styles.ImageView}
            resizeMode={'contain'}
            source={{
              uri: img_url,
            }}
          />
        </View>
        <View style={{width: wp(62), padding: wp(2)}}>
          <Text style={styles.nameText}>{data.API_Reply.Product[0].name}</Text>
          <Text style={styles.PriceText}>£ {item.Price}</Text>
          <TouchableOpacity
            onPress={() => setIsModalVisible(true)}
            style={styles.InfoTouch}>
            <AntDesign name={'infocirlce'} color={colors.white} size={wp(4)} />
            <Text
              style={{
                ...styles.InfoiLabeltext,
                fontSize: RFValue(11),
                marginLeft: wp(1),
                color: '#fff',
              }}>
              info
            </Text>
          </TouchableOpacity>
          <View style={styles.FeaturesView}>
            <Text
              style={{
                ...styles.InfoiLabeltext,
                fontFamily: fonts.Medium,
                marginLeft: 0,
              }}>
              Features
            </Text>
            <View style={styles.IconsRow}>
              {getAirportFeatureIcons([
                'CCTV',
                'SECURE BARRIER',
                'DISABILITY FRIENDLY',
                'FENCING',
                'PATROLLED',
                'YOU LEAVE YOUR KEYS',
                'BUSINESS FRENDLY',
                'FAMILY FRENDLY',
              ]).map((item, index) => (
                <TouchableOpacity key={`${index}`} style={styles.IconBg}>
                  <FontAwesome
                    name={item}
                    size={RFValue(14)}
                    color={colors.primaryColor}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(MainRoutes.LoungeBookingFormScreen, {
                item: {...item, ...data.API_Reply.Product[0]},
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
      <LoungesBookingInfoModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        item={{...item, ...data.API_Reply.Product[0]}}
      />
    </View>
  );
};

export default LoungeListingItem;

const styles = StyleSheet.create({
  mainView: {
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
    width: wp(60),
    borderRadius: wp(1),
    marginTop: wp(2),
    justifyContent: 'center',
  },
  PriceText: {
    ...textStyles.heading,
    color: colors.secondaryColor,
    fontSize: RFValue(18),
  },
  nameText: {
    ...textStyles.heading,
    fontSize: RFValue(13),
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
    fontSize: RFValue(12),
    fontFamily: fonts.Medium,

    color: colors.textPrimaryColor,
  },
});
