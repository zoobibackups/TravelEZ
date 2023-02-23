import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Help from '../assets/svgs/Help.svg';
import Manage from '../assets/svgs/Manage.svg';
import {hp, wp} from '../constants/scaling';
import {colors} from '../constants/theme';
import HelpDiskScreen from '../screens/HelpDiskScreen';
import HomeScreen from '../screens/HomeScreen';
import ManageBookingScreen from '../screens/ManageBookingsScreen';
import ParkyingTypesScreen from '../screens/ParkingTypesScreen';
const Tab = createBottomTabNavigator();

export default function BottonTab() {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <View style={{flex: 1, backgroundColor: colors.primaryColor}}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          showLabel: false,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.white,
            position: 'absolute',
            bottom: hp(0.51),
            marginHorizontal: wp(2),
            height: hp(8),
            borderRadius: wp(2),
            shadowColor: '#000',
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10,
            },
            paddingHorizontal: 20,
          },
        }}>
        <Tab.Screen
          name={'Home'}
          component={HomeScreen}
          options={{
            title: 'Home',
            showLabel: false,
            tabBarIcon: ({focused}) => (
              <View>
                <FontAwesome5
                  name="home"
                  size={wp(6)}
                  color={
                    focused ? colors.primaryColor : colors.secondaryTextColor
                  }
                />
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        />

        <Tab.Screen
          name={'HelpDiskScreen'}
          component={HelpDiskScreen}
          options={{
            title: 'HelpDisk',
            tabBarIcon: ({focused}) => (
              <View>
                <Help
                  width={wp(6)}
                  height={wp(6)}
                  color={
                    focused ? colors.primaryColor : colors.secondaryTextColor
                  }
                />
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 1.22,
                useNativeDriver: true,
              }).start();
            },
          })}
        />

        <Tab.Screen
          name={'ManageBookingScreen'}
          component={ManageBookingScreen}
          options={{
            title: 'Manage',
            tabBarIcon: ({focused}) => (
              <View>
                <Manage
                  width={wp(6)}
                  height={wp(6)}
                  color={
                    focused ? colors.primaryColor : colors.secondaryTextColor
                  }
                />
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 2.52,
                useNativeDriver: true,
              }).start();
            },
          })}
        />

        <Tab.Screen
          name={'ParkyingTypesScreen'}
          component={ParkyingTypesScreen}
          options={{
            title: 'Parking',
            tabBarIcon: ({focused}) => (
              <View>
                <Feather
                  name="type"
                  size={wp(6)}
                  color={
                    focused ? colors.primaryColor : colors.secondaryTextColor
                  }
                />
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3.82,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
      </Tab.Navigator>

      <Animated.View
        style={{
          width: getWidth(),
          marginLeft: getWidth() * 0.58,
          height: 2,
          backgroundColor: colors.primaryColor,
          bottom: hp(7),
          borderRadius: 20,
          transform: [{translateX: tabOffsetValue}],
        }}></Animated.View>
    </View>
  );
}

function getWidth() {
  return wp(100) / 6;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
