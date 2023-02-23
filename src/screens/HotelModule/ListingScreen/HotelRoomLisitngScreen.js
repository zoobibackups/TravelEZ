import React, {useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {TabBar, TabView} from 'react-native-tab-view';
import CustomHeader from '../../../components/CustomHeader';
import {colors, fonts} from '../../../constants/theme';
import useIsReady from '../../../hooks/useIsReady';
import DetailsTab from './HotelComponents/DetailsTab';
import FacilitiesTab from './HotelComponents/FacilitiesTab';
import RoomTab from './HotelComponents/RoomsTab';

const HotelRoomLisitngScreen = ({navigation, route}) => {
  const isReady = useIsReady();
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const hotel_data = route.params.item;
  const [routes] = useState([
    {
      key: 'RoomTab',
      title: 'Rooms',
    },
    {
      key: 'FacilitiesTab',
      title: 'Facilities',
    },
    {
      key: 'DetailsTab',
      title: 'Details',
    },
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'RoomTab':
        return <RoomTab item={hotel_data} />;
      case 'FacilitiesTab':
        return <FacilitiesTab item={hotel_data.amenity_groups} />;
      case 'DetailsTab':
        return (
          <DetailsTab
            item={{
              policy: hotel_data.metapolicy_extra_info,
              data: hotel_data.description_struct,
            }}
          />
        );
      default:
        return null;
    }
  };
  if (!isReady) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size={'large'} color={colors.primaryColor} />
      </View>
    );
  }
  const renderTabBar = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={{backgroundColor: 'white'}}
        getLabelText={({route}) => route.title}
        renderLabel={({route, focused, color}) => (
          <Text
            numberOfLines={1}
            style={{
              color: colors.white,
              fontFamily: fonts.Medium,
            }}>
            {route.title}
          </Text>
        )}
        style={{backgroundColor: colors.primaryColor}}
      />
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <CustomHeader
        title={'Avaliable Hotel Rooms'}
        show_backButton={true}
        isdrawer={true}
        onPress={() => navigation.openDrawer()}
      />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        scrollEnabled={true}
        lazy={true}
        optimizationsEnabled={true}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </SafeAreaView>
  );
};

export default HotelRoomLisitngScreen;
