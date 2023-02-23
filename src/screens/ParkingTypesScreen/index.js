import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomHeader from '../../components/CustomHeader';
import {hp, wp} from '../../constants/scaling';
import {colors} from '../../constants/theme';
import {textStyles} from '../../styles/textStyles';
import {parkingtypes} from './data';
const ParkingTypesScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, paddingBottom: hp(10), backgroundColor: colors.white}}>
      <CustomHeader
        title={'Parking Types'}
        show_backButton={true}
        isdrawer={true}
        onPress={() => navigation.openDrawer()}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.cardView}>
          <Text style={styles.heading}>TYPES OF AIRPORT PARKING</Text>

          <Text style={styles.parapgraph}>
            We have some strict security policies and we only choose those
            parking lots which fulfill our security criteria. The airport
            parking rates we are providing starts from £4 per day and the rates
            are a lot less if you book the parking slot for a whole week. You
            can find the following car parking options from our website.
          </Text>
        </View>
        {parkingtypes.map((item, index) => (
          <View key={`${index}`} style={styles.parkingTypecardView}>
            {item.icon}

            <View style={{paddingHorizontal: wp(2)}}>
              <Text style={styles.heading}>
                {item.id}. {item.heading}
              </Text>

              <Text
                style={{
                  ...styles.parapgraph,
                  width: wp(69),
                }}>
                {item.paragraph}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ParkingTypesScreen;
const styles = StyleSheet.create({
  cardView: {
    padding: wp(2),
    margin: wp(2),
    borderRadius: wp(2),
    elevation: 5,
    backgroundColor: '#fff',
  },
  parkingTypecardView: {
    elevation: 5,
    flexDirection: 'row',
    borderRadius: wp(2),
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginHorizontal: wp(1),
    marginVertical: wp(2),
    padding: wp(2),
    width: wp(96),
  },
  heading: {
    ...textStyles.smallheading,
    fontSize: RFValue(14),
    lineHeight: RFValue(14) * 1.5,
    textAlign: 'justify',
  },
  parapgraph: {
    ...textStyles.Label,
    fontSize: RFValue(12),
    lineHeight: RFValue(12) * 1.5,
    textAlign: 'justify',
  },
});
