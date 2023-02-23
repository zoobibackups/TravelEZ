import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import CustomHeader from '../../../components/CustomHeader';
import ErrorComponent from '../../../components/ErrorComponent';
import LoadingComponent from '../../../components/LoadingComponent';
import {useSearchQuery} from '../../../store/services/tasksApi';
import ResultsCard from './ResultsCard';

const AirPortParkingListingScreen = ({navigation, route}) => {
  const {data, isLoading, isError, error, isFetching, isSuccess} =
    useSearchQuery(JSON.parse(route.params.item));
  console.log(data, error, isError);
  const renderItem = ({item, index}) => {
    return (
      <ResultsCard
        item={item}
        filters={JSON.parse(route.params.item)}
        index={index}
      />
    );
  };
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
          title={'Avaliable Slots'}
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
          data={data.data}
          renderItem={renderItem}
        />
      </SafeAreaView>
    );
  }
};

export default AirPortParkingListingScreen;
const styles = StyleSheet.create({});
