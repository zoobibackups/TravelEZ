import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import CustomHeader from '../../../components/CustomHeader';
import ErrorComponent from '../../../components/ErrorComponent';
import LoadingComponent from '../../../components/LoadingComponent';
import {useSearchLoungesQuery} from '../../../store/services/loungesApi';
import LoungeListingItem from './LoungListingItem';
const renderItem = ({item, index}) => {
  return <LoungeListingItem item={item} index={index} />;
};
const LoungesListingScreen = ({navigation, route}) => {
  let item = route.params.item;

  const {data, isError, isFetching, isLoading, error, isSuccess} =
    useSearchLoungesQuery({
      ABTANumber: 'AJ166',
      Password: 'PAXML',
      Initials: 'p',
      key: 'parkingzone',
      token: '949736227',
      ArrivalDate: item.pickup_date,
      ArrivalTime: item.pickup_time,
      Adults: item.adults,
      Children: item.childs,
      airport_id: item.airport_id,
    });

  if (isLoading || isFetching) {
    return <LoadingComponent navigation={navigation} />;
  }
  if (isError) {
    return <ErrorComponent navigation={navigation} />;
  }
  if (isSuccess) {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader
          title={'Avaliable Lounges'}
          show_backButton={true}
          isdrawer={false}
          onPress={() => navigation.goBack()}
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
          data={data.API_Reply.Lounge}
          renderItem={renderItem}
        />
      </SafeAreaView>
    );
  }
};

export default LoungesListingScreen;
