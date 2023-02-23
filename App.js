import {NavigationContainer} from '@react-navigation/native';
import {StripeProvider} from '@stripe/stripe-react-native';
import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {colors} from './src/constants/theme';
import StackNavigator from './src/navigation/mainStack';
import {store} from './src/store/index';
const App = () => {
  return (
    <StripeProvider
      publishableKey={
        'pk_test_51LlZ1WIZ39EgqF7OWwxNGHSuxEopPt63wHOLU0UEKtys2nah0CpnBPA5D3HVOzKfKmBRIngKsGkRYtPt3d90C5UT00diCUGb1B'
      }
      urlScheme="com.parkingzone" // required for 3D Secure and bank redirects
    >
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar backgroundColor={colors.statusbarColor} />
          <StackNavigator />
        </NavigationContainer>
        <Toast />
      </Provider>
    </StripeProvider>
  );
};

export default App;
