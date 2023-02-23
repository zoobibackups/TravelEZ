import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import CustomHeader from '../../../components/CustomHeader';
import {wp} from '../../../constants/scaling';
import {colors} from '../../../constants/theme';
import {useAddHotelSearchByRegionIdQuery} from '../../../store/services/hotelApi';
import {textStyles} from '../../../styles/textStyles';
import HotelRegionCard from './HotelComponents/HotelRegionCard';
const HotelLisitingByAreaScreen = ({navigation, route}) => {
  const {data, isLoading, isError, error, isFetching, isSuccess} =
    useAddHotelSearchByRegionIdQuery(JSON.parse(route.params.item));

  const renderItem = ({item, index}) => {
    return <HotelRegionCard item={item} index={index} />;
  };

  if (isSuccess) {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader
          title={'Region Listing'}
          show_backButton={true}
          isdrawer={true}
          onPress={() => navigation.openDrawer()}
        />
        <FlatList
          legacyImplementation={true}
          horizontal={false}
          windowSize={150}
          removeClippedSubviews={true}
          initialNumToRender={26}
          updateCellsBatchingPeriod={30}
          onEndReachedThreshold={0.7}
          refreshing={true}
          maxToRenderPerBatch={20}
          data={data.data.hotels}
          contentContainerStyle={{paddingBottom: wp(5)}}
          renderItem={renderItem}
        />
      </SafeAreaView>
    );
  } else if (isError) {
    return (
      <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
        <CustomHeader
          title={'Region Listing'}
          show_backButton={true}
          isdrawer={true}
          onPress={() => navigation.openDrawer()}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{...textStyles.heading, marginTop: 10}}>Error</Text>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
        <CustomHeader
          title={'Region Listing'}
          show_backButton={true}
          isdrawer={true}
          onPress={() => navigation.openDrawer()}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color={colors.lightPrimaryColor} />
          <Text style={{...textStyles.heading, marginTop: 10}}>
            Loading ...
          </Text>
        </View>
      </SafeAreaView>
    );
  }
};

export default HotelLisitingByAreaScreen;
