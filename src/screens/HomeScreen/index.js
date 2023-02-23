import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import images from '../../assets/images/images';
import LOUNGES from '../../assets/svgs/lounge.svg';
import PARKING from '../../assets/svgs/parking.svg';
import TRANSFER from '../../assets/svgs/transfer.svg';
import CustomHeader from '../../components/CustomHeader';
import IconButton from '../../components/IconButton';
import {TextStroke} from '../../components/StrokeText';
import MainRoutes from '../../constants/MainRoutes';
import {hp, wp} from '../../constants/scaling';
import {colors, fonts} from '../../constants/theme';
import {textStyles} from '../../styles/textStyles';
const HomeScreen = ({}) => {
  const navigation = useNavigation();
  StatusBar.setBackgroundColor(colors.statusbarColor);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (active < images.length - 1) {
        setActive(active + 1);
      } else {
        setActive(0);
      }
    }, 2000);
    return () => clearInterval(intervalId);
  }, [active]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingBottom: hp(10),
        backgroundColor: colors.primaryColor,
      }}>
      <CustomHeader
        title={'PARKING ZONE'}
        show_backButton={true}
        isdrawer={true}
        onPress={() => navigation.openDrawer()}
      />

      <ImageBackground
        source={images[active]?.img}
        resizeMethod={'resize'}
        resizeMode={'cover'}
        style={{
          width: '100%',

          backgroundColor: colors.primaryColor,
          flex: 1,
        }}>
        <View
          style={{
            backgroundColor: 'rgba(49, 18, 75, .3)',
            position: 'absolute',
            width: wp(100),
            height: hp(40),
          }}
        />
        {true && (
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
            }}
            contentInsetAdjustmentBehavior="automatic">
            <View style={styles.mainContainer}>
              <View style={styles.cardView}>
                <Text style={styles.getuptoText}>GET UPTO</Text>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: wp(5),
                    backgroundColor: '#0000',
                  }}>
                  <TextStroke stroke={2} color={colors.primaryColor}>
                    <Text
                      style={{
                        ...textStyles.heading,
                        color: colors.secondaryColor,
                        fontSize: RFValue(30),
                      }}>
                      30 % OFF
                    </Text>
                  </TextStroke>
                </View>

                <IconButton
                  icon={<PARKING width={wp(8)} height={wp(8)} />}
                  onPress={() =>
                    navigation.navigate(MainRoutes.AirPortParkingSearchScreen)
                  }
                  title={'AIRPORT PARKING'}
                />
                <IconButton
                  icon={<TRANSFER width={wp(8)} height={wp(8)} />}
                  onPress={() =>
                    navigation.navigate(MainRoutes.HotelSearchScreen, {
                      item: 'Transfer',
                    })
                  }
                  title={'HOTEL'}
                />
                <IconButton
                  icon={<LOUNGES width={wp(8)} height={wp(8)} />}
                  onPress={() =>
                    navigation.navigate(MainRoutes.LoungesSearchScreen, {
                      item: 'Lounges',
                    })
                  }
                  title={'LOUNGES'}
                />
                <IconButton
                  icon={<TRANSFER width={wp(8)} height={wp(8)} />}
                  onPress={() =>
                    navigation.navigate(MainRoutes.TransferSearchScreen, {
                      item: 'Transfer',
                    })
                  }
                  title={'TRANSFER'}
                />
              </View>
            </View>
          </ScrollView>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  getuptoText: {
    ...textStyles.heading,
    fontFamily: fonts.Bold,
  },
  mainContainer: {
    marginTop: hp(30),
    borderTopRightRadius: wp(5),
    borderTopLeftRadius: wp(5),
    paddingTop: wp(5),
    elevation: 10,
    backgroundColor: colors.primaryColor,
    padding: widthPercentageToDP(1),
    flex: 1,
  },
  cardView: {
    backgroundColor: colors.white,
    margin: wp(2),
    elevation: 4,
    borderRadius: wp(2),
    padding: wp(2),
    width: wp(94),
  },
  innerCard: {
    margin: wp(2),
    borderRadius: wp(2),
    padding: wp(0),
    paddingTop: 0,
    paddingHorizontal: 0,
    overflow: 'hidden',
    width: wp(90),
    elevation: 5,
    marginLeft: 0,
    padding: wp(2),
    backgroundColor: '#fff',
  },
});
