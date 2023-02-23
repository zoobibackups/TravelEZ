import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import CAR from '../../assets/images/car.svg';
import CustomHeader from '../../components/CustomHeader';
import {wp} from '../../constants/scaling';
import {colors} from '../../constants/theme';
import {textStyles} from '../../styles/textStyles';
import {AIRPORTGUIDES} from './data';
const AirportGuideScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <CustomHeader
        title={'AIRPORT GUIDE'}
        show_backButton={true}
        isdrawer={true}
        onPress={() => navigation.openDrawer()}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.cardView}>
          <Text style={styles.heading}>{AIRPORTGUIDES.title}</Text>
          <Text style={styles.parapgraph}>{AIRPORTGUIDES.para}</Text>
        </View>

        {AIRPORTGUIDES.data.map((item, index) => (
          <View style={styles.innerCard}>
            <View style={styles.innercardHeaderView}>
              <View
                style={{
                  width: wp(25),
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: wp(2),
                  backgroundColor: colors.primaryColor,
                }}>
                {item.id == 4 ? (
                  <CAR width={wp(15)} height={wp(15)} />
                ) : (
                  <Image
                    source={{uri: item.image}}
                    style={{
                      width: item.id == 1 ? wp(15) : wp(20),
                      resizeMode: 'center',
                      height: item.id == 1 ? wp(15) : wp(20),
                      borderRadius: wp(1),
                      marginVertical: wp(4),
                    }}
                  />
                )}
              </View>
              <View style={{paddingLeft: 10}}>
                <Text
                  style={{
                    ...textStyles.heading,
                    color: colors.primaryColor,
                  }}>
                  {item.id}. {item.heading}
                </Text>
                <Text
                  style={{
                    ...textStyles.mediumheading,
                    color: colors.primaryColor,
                    textAlign: 'justify',
                    width: wp(60),
                  }}>
                  {item.paragraph}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AirportGuideScreen;
const styles = StyleSheet.create({
  cardView: {
    padding: wp(5),
    margin: wp(3),
    borderRadius: wp(2),
    elevation: 5,
    backgroundColor: '#fff',
  },
  heading: {
    ...textStyles.smallheading,
    fontSize: RFValue(16),
    lineHeight: RFValue(16) * 1.5,
    textAlign: 'justify',
  },
  parapgraph: {
    ...textStyles.Label,
    color: colors.primaryColor,
    fontSize: RFValue(12),
    lineHeight: RFValue(12) * 1.5,
    textAlign: 'justify',
  },

  innerCard: {
    borderRadius: wp(2),
    paddingTop: 0,
    paddingHorizontal: 0,
    overflow: 'hidden',
    alignSelf: 'center',
    width: wp(95),
    elevation: 5,
    margin: wp(2),
    padding: wp(2),
    backgroundColor: '#fff',
  },
  innercardHeaderView: {
    backgroundColor: '#0000',
    flexDirection: 'row',
    padding: wp(2),
    paddingBottom: 0,
  },
  headingTextNumber: {
    ...textStyles.heading,
    color: colors.primaryColor,
    textAlign: 'center',
    alignSelf: 'center',
    textAlignVertical: 'center',
  },
});
