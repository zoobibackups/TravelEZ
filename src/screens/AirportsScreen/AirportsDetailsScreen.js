import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomHeader from '../../components/CustomHeader';
import LoadingComponent from '../../components/LoadingComponent';
import MainRoutes from '../../constants/MainRoutes';
import {wp} from '../../constants/scaling';
import {colors} from '../../constants/theme';
import useIsReady from '../../hooks/useIsReady';
import {textStyles} from '../../styles/textStyles';
import RenderHTMLComponent from './RenderHTML';
const RenderItem = ({img, h, p}) => {
  return (
    <View style={styles.parkingTypecardView}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={{uri: img}}
          style={{
            width: wp(10),
            resizeMode: 'contain',
            height: wp(10),
            borderRadius: wp(1),
          }}
        />
        <Text
          style={{
            ...styles.heading,
            marginLeft: wp(5),
            color: '#fff',
          }}>
          {h}
        </Text>
      </View>
      <Text
        style={{
          ...styles.sparapgraph,
          marginTop: wp(5),
          width: wp(92),
          color: '#fff',
        }}>
        {p}
      </Text>
    </View>
  );
};
const RenderAirportsComponent = ({item, index, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      key={`${index}`}
      style={styles.airportCard}>
      <Image
        source={{
          uri: `https://www.parkingzone.co.uk/storage/app/${item.profile_image}`,
        }}
        style={{
          width: wp(84),
          resizeMode: 'cover',
          height: wp(40),
        }}
      />
      <Text style={styles.airportnameText}>{item.page_title}</Text>
    </TouchableOpacity>
  );
};

const AirportsDetailsScreen = ({navigation, route}) => {
  const {item, airports} = route.params;
  const isReady = useIsReady();

  const renderAirports = ({item, index}) => {
    return (
      <RenderAirportsComponent
        item={item}
        index={index}
        onPress={() => {
          navigation.replace(MainRoutes.AirportsDetailsScreen, {
            item: item,
            airports: airports,
          });
        }}
      />
    );
  };
  if (!isReady) return <LoadingComponent navigation={navigation} />;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <CustomHeader
        title={'Airport Details'}
        show_backButton={true}
        isdrawer={false}
        onPress={() => navigation.goBack()}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.cardView}>
          <RenderHTMLComponent source={item.description} />
        </View>
        <View style={styles.cardView}>
          <RenderHTMLComponent source={item.content} />
        </View>

        <View style={{...styles.cardView}}>
          <Text style={styles.heading}>Our Alluring Parking Services</Text>
          <Text style={styles.parapgraph}>{item.alluring}</Text>
          <ScrollView horizontal={true}>
            <RenderItem
              img={'https://www.parkingzone.co.uk/assets/images/greet.png'}
              h={'Meet & Greet'}
              p={item.alluring_meetandgreet}
            />
            <RenderItem
              img={'https://www.parkingzone.co.uk/assets/images/ride.png'}
              h={'Park & Ride'}
              p={item.alluring_parkandride}
            />
            <RenderItem
              img={'https://www.parkingzone.co.uk/assets/images/on.png'}
              h={'on Airport'}
              p={item.alluring_onairport}
            />
          </ScrollView>
        </View>

        <View style={{...styles.cardView}}>
          <Text style={styles.heading}>Other Airport Options</Text>

          <FlatList
            legacyImplementation={true}
            windowSize={150}
            removeClippedSubviews={true}
            initialNumToRender={26}
            updateCellsBatchingPeriod={30}
            onEndReachedThreshold={0.7}
            refreshing={true}
            maxToRenderPerBatch={20}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={airports}
            keyExtractor={(item, index) => `${index}`}
            renderItem={renderAirports}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AirportsDetailsScreen;
const styles = StyleSheet.create({
  cardView: {
    padding: wp(5),
    margin: wp(3),
    borderRadius: wp(2),
    elevation: 5,
    backgroundColor: '#fff',
  },
  parkingTypecardView: {
    padding: wp(5),
    marginRight: wp(3),
    borderRadius: wp(2),
    elevation: 5,
    width: wp(84),
    backgroundColor: colors.primaryColor,
  },
  airportCard: {
    marginRight: wp(3),
    borderRadius: wp(2),
    elevation: 5,
    overflow: 'hidden',
    width: wp(84),

    backgroundColor: colors.primaryColor,
    borderWidth: 0,
  },
  tabMianView: {
    paddingHorizontal: wp(2),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: wp(3),
    borderRadius: wp(1),
    elevation: 5,
    width: wp(42),
    backgroundColor: colors.primaryColor,
  },
  heading: {
    ...textStyles.smallheading,
    paddingVertical: wp(2),
    fontSize: RFValue(14),
    lineHeight: RFValue(14) * 1.5,
    textAlign: 'justify',
  },
  airportnameText: {
    ...textStyles.smallheading,
    fontSize: RFValue(14),
    paddingVertical: wp(2),
    color: colors.white,
    lineHeight: RFValue(14) * 1.5,
    textAlign: 'center',
  },
  parapgraph: {
    ...textStyles.Label,
    fontSize: RFValue(12),
    paddingBottom: wp(3),
    lineHeight: RFValue(12) * 1.5,
    textAlign: 'justify',
  },
  sparapgraph: {
    ...textStyles.Label,
    fontSize: RFValue(12),
    maxWidth: wp(74),

    lineHeight: RFValue(12) * 1.5,
    textAlign: 'justify',
  },
});
