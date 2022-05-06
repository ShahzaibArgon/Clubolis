import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/Login/Login';
import Login2 from '../screen/Login2/Login2';
import SignUp from '../screen/SignUp/SignUp';
import SplashScreen from '../screen/SplashScreen/SplashScreen';
import OtpVerification from '../screen/OtpVerification/OtpVerification';
import OtpMobileVerification from '../screen/OtpMobileVerification/OtpMobileVerification';
import { BOTTOMTAB, OTPEMAILVERIFICATION, OTPMOBILEVERIIFCATION } from '../constants/Navigation';
import OtpEmailVerification from '../screen/OtpEmailVerify/OtpEmailVerification';
import BottomNavigator from './Bottomtab';
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'OtpVerification'}
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Login2" component={Login2} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="OtpVerification" component={OtpVerification} />
        <Stack.Screen name={OTPMOBILEVERIIFCATION} component={OtpMobileVerification} />
        <Stack.Screen name={OTPEMAILVERIFICATION} component={OtpEmailVerification} />
        <Stack.Screen name={BOTTOMTAB} component={BottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;