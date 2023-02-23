import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import {colors} from '../constants/theme';

import AirPortParkingListingScreen from '../screens/AirPortParkingModule/AirPortParkingListingScreen/index';
import AirPortParkingSearchScreen from '../screens/AirPortParkingModule/AirPortParkingSearchScreen/index';
import AirPortParkingBookingFormScreen from '../screens/AirPortParkingModule/BookingScreens/AirPortParkingBookingFormScreen';
import AirPortParkingBookingPaymentDetailsScreen from '../screens/AirPortParkingModule/BookingScreens/AirPortParkingBookingPaymentDetailsScreen';

import HotelBookingFormScreen from '../screens/HotelModule/BookingScreens/HotelBookingFormScreen';
import HotelBookingPaymentDetailsScreen from '../screens/HotelModule/BookingScreens/HotelBookingPaymentDetailsScreen';
import HotelLisitingByAreaScreen from '../screens/HotelModule/ListingScreen/HotelLisitingByAreaScreen';
import HotelRoomLisitngScreen from '../screens/HotelModule/ListingScreen/HotelRoomLisitngScreen';
import HotelRoomListingByIdScreen from '../screens/HotelModule/ListingScreen/HotelRoomListingByIdScreen';
import HotelSearchScreen from '../screens/HotelModule/SearchScreen/index';

import LoungeBookingFormScreen from '../screens/LoungesModule/BookingScreens/LoungeBookingFormScreen';
import LoungesListingScreen from '../screens/LoungesModule/LoungesListingScreen';
import LoungesSearchScreen from '../screens/LoungesModule/LoungesSearchScreen';

import FaqScreen from '../screens/FaqScreen/FaqScreen';
import HelpDiskScreen from '../screens/HelpDiskScreen/index';
import TicketDetailsScreen from '../screens/HelpDiskScreen/TicketDetailsScreen';
import ManageBookingsScreen from '../screens/ManageBookingsScreen/index';
import ManageBookingDetailsScreen from '../screens/ManageBookingsScreen/ManageBookingDetailsScreen';

import AboutUsScreen from '../screens/AboutUsScreen/AboutUsScreen';
import AirportGuideScreen from '../screens/AirportGuideScreen/AirportGuideScreen';
import AirportsDetailsScreen from '../screens/AirportsScreen/AirportsDetailsScreen';
import AirportsListScreen from '../screens/AirportsScreen/AirportsListScreen';
import BlogDetailsScreen from '../screens/BlogsScreen/BlogDetailsScreen';
import BlogsScreen from '../screens/BlogsScreen/BlogsScreen';
import CommingSoonScreen from '../screens/CommingSoonScreen/index';
import ContactUsScreen from '../screens/ContactUsScreen';
import LoungeBookingPaymentDetailsScreen from '../screens/LoungesModule/BookingScreens/LoungeBookingPaymentDetailsScreen';
import ParkingTypesScreen from '../screens/ParkingTypesScreen';
import SiteSecurityScreen from '../screens/SiteSecurityScreen/SiteSecurityScreen';
import TermsAndCondiditionsScreen from '../screens/TermsAndCondiditionsScreen/TermsAndCondiditionsScreen';

import TransferBookingFormScreen from '../screens/TransferModule/BookingScreens/TransferBookingFormScreen';
import TransferBookingPaymentDetailsScreen from '../screens/TransferModule/BookingScreens/TransferBookingPaymentDetailsScreen';
import TransferListingScreen from '../screens/TransferModule/ListingScreen';
import TransferSearchScreen from '../screens/TransferModule/SearchScreen';
import BottomTabs from './bottomTab';
import CustomDrawer from './DrawerContent';
StatusBar.setBackgroundColor(colors.primaryColor);
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName={'BottomTabs'}
      screenOptions={{
        cardStyle: {backgroundColor: '#fff'},
        swipeEnabled: true,
        headerShown: false,
      }}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />

      <Stack.Screen
        name="AirPortParkingSearchScreen"
        component={AirPortParkingSearchScreen}
      />
      <Stack.Screen
        name="AirPortParkingListingScreen"
        component={AirPortParkingListingScreen}
      />
      <Stack.Screen
        name="AirPortParkingBookingFormScreen"
        component={AirPortParkingBookingFormScreen}
      />
      <Stack.Screen
        name="AirPortParkingBookingPaymentDetailsScreen"
        component={AirPortParkingBookingPaymentDetailsScreen}
      />

      <Stack.Screen name="HotelSearchScreen" component={HotelSearchScreen} />
      <Stack.Screen
        name="HotelLisitingByAreaScreen"
        component={HotelLisitingByAreaScreen}
      />
      <Stack.Screen
        name="HotelRoomListingByIdScreen"
        component={HotelRoomListingByIdScreen}
      />
      <Stack.Screen
        name="HotelRoomLisitngScreen"
        component={HotelRoomLisitngScreen}
      />
      <Stack.Screen
        name="HotelBookingFormScreen"
        component={HotelBookingFormScreen}
      />
      <Stack.Screen
        name="HotelBookingPaymentDetailsScreen"
        component={HotelBookingPaymentDetailsScreen}
      />

      <Stack.Screen
        name="LoungesSearchScreen"
        component={LoungesSearchScreen}
      />
      <Stack.Screen
        name="LoungesListingScreen"
        component={LoungesListingScreen}
      />

      <Stack.Screen
        name="LoungeBookingFormScreen"
        component={LoungeBookingFormScreen}
      />
      <Stack.Screen
        name={'LoungeBookingPaymentDetailsScreen'}
        component={LoungeBookingPaymentDetailsScreen}
      />

      <Stack.Screen
        name="TransferListingScreen"
        component={TransferListingScreen}
      />
      <Stack.Screen
        name="TransferSearchScreen"
        component={TransferSearchScreen}
      />
      <Stack.Screen
        name="TransferBookingPaymentDetailsScreen"
        component={TransferBookingPaymentDetailsScreen}
      />

      <Stack.Screen
        name="TransferBookingFormScreen"
        component={TransferBookingFormScreen}
      />

      {/* Static Pages  */}
      <Stack.Screen
        name="TermsAndCondiditionsScreen"
        component={TermsAndCondiditionsScreen}
      />
      <Stack.Screen name="CommingSoonScreen" component={CommingSoonScreen} />
      <Stack.Screen name="SiteSecurityScreen" component={SiteSecurityScreen} />
      <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
      <Stack.Screen name="ContactUsScreen" component={ContactUsScreen} />

      <Stack.Screen name="FaqScreen" component={FaqScreen} />
      <Stack.Screen
        name="ManageBookingsScreen"
        component={ManageBookingsScreen}
      />

      <Stack.Screen
        name="TicketDetailsScreen"
        component={TicketDetailsScreen}
      />
      <Stack.Screen
        name="ManageBookingDetailsScreen"
        component={ManageBookingDetailsScreen}
      />
      <Stack.Screen name="HelpDiskScreen" component={HelpDiskScreen} />
      <Stack.Screen name="ParkingTypesScreen" component={ParkingTypesScreen} />
      <Stack.Screen name="AirportsListScreen" component={AirportsListScreen} />
      <Stack.Screen
        name="AirportsDetailsScreen"
        component={AirportsDetailsScreen}
      />
      <Stack.Screen name="AirportGuideScreen" component={AirportGuideScreen} />
      <Stack.Screen name="BlogsScreen" component={BlogsScreen} />
      <Stack.Screen name="BlogDetailsScreen" component={BlogDetailsScreen} />
    </Stack.Navigator>
  );
}
const StackNavigator = () => (
  <Drawer.Navigator
    gestureEnabled={false}
    screenOptions={{
      swipeEnabled: true,
      headerShown: false,
    }}
    drawerContent={props => <CustomDrawer {...props} />}>
    <Drawer.Screen name="MainStack" headerShown={false}>
      {props => <MainStack {...props} />}
    </Drawer.Screen>
  </Drawer.Navigator>
);

export default StackNavigator;
