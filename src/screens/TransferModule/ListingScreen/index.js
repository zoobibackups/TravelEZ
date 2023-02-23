import React, {useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import CustomHeader from '../../../components/CustomHeader';
import ResultsCard from './ResultsCard';

const TransferListingScreen = ({navigation, route}) => {
  const [data, setData] = useState(JSON.parse(route.params.item));

  const renderItem = ({item, index}) => {
    return <ResultsCard item={item} index={index} />;
  };

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
        data={data}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default TransferListingScreen;
