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
import {wp} from '../../../constants/scaling';
import {colors, fonts} from '../../../constants/theme';
import useIsReady from '../../../hooks/useIsReady';
import {
  useAddHotelInfoByIdQuery,
  useAddHotelSearchByIdQuery,
} from '../../../store/services/hotelApi';
import {textStyles} from '../../../styles/textStyles';
import DetailsTab from './HotelComponents/DetailsTab';
import FacilitiesTab from './HotelComponents/FacilitiesTab';
import RoomTab from './HotelComponents/RoomsTab';

const HotelRoomListingByIdScreen = ({navigation, route}) => {
  let search_data = JSON.parse(route.params.item);
  const {
    data: hotel_data,
    isLoading,
    isError,
    error,
    isFetching,
    isSuccess,
  } = useAddHotelSearchByIdQuery(search_data);
  const {
    data: hotel_info,
    isLoading: hi_isLoading,
    isError: hi_isError,
    error: hi_error,
    isFetching: hi_isFetching,
    isSuccess: hi_isSuccess,
  } = useAddHotelInfoByIdQuery({id: search_data.id, language: 'en'});
  const isReady = useIsReady();
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
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
        return (
          <RoomTab
            item={{
              ...hotel_data?.data?.hotels[0],
              images: hotel_info?.data?.images,
            }}
          />
        );
      case 'FacilitiesTab':
        return <FacilitiesTab item={hotel_info.data.amenity_groups} />;
      case 'DetailsTab':
        return (
          <DetailsTab
            item={{
              policy: hotel_info.data.metapolicy_extra_info,
              data: hotel_info.data.description_struct,
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
  if (isLoading || isFetching || hi_isLoading || hi_isFetching)
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <CustomHeader
          title={'Avaliable Rooms'}
          show_backButton={true}
          isdrawer={true}
          onPress={() => navigation.openDrawer()}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{...textStyles.heading, marginBottom: wp(5)}}>
            Loading
          </Text>
          <ActivityIndicator size={'large'} color={colors.primaryColor} />
        </View>
      </SafeAreaView>
    );
  if (hi_isError || isError)
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <CustomHeader
          title={'Avaliable Rooms'}
          show_backButton={true}
          isdrawer={true}
          onPress={() => navigation.openDrawer()}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{...textStyles.heading, marginBottom: wp(5)}}>
            Something went wrong
          </Text>
        </View>
      </SafeAreaView>
    );
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <CustomHeader
        title={'Avaliable Rooms'}
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

export default HotelRoomListingByIdScreen;
