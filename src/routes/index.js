import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from 'home';
import SettingsScreen from 'settings';
// import IntroScreen from 'intro';
// import LoginScreen from 'login/Login';
import {ROUTE_NAMES} from './RouteKeys';

const RootStack = createStackNavigator();
// const Auth = createStackNavigator();
const App = createStackNavigator();

// const AuthStack = () => (
//   <Auth.Navigator initialRouteName={ROUTE_NAMES.INTRO}>
//     <Auth.Screen
//       name={ROUTE_NAMES.INTRO}
//       component={IntroScreen}
//       options={{
//         headerTransparent: true,
//         headerShadowVisible: false,
//         headerShown: true,
//       }}
//     />
//     <Auth.Screen
//       name={ROUTE_NAMES.LOGIN}
//       component={LoginScreen}
//       options={{
//         headerTransparent: true,
//         headerShadowVisible: false,
//         headerShown: true,
//       }}
//     />
//   </Auth.Navigator>
// );

const AppStack = () => (
  <App.Navigator initialRouteName={ROUTE_NAMES.HOME}>
    <App.Screen name={ROUTE_NAMES.HOME} component={HomeScreen} />
    <App.Screen name={ROUTE_NAMES.SETTINGS} component={SettingsScreen} />
  </App.Navigator>
);

const Routes = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log('#### inside routes');
  }, []);
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="Auth" component={AppStack} />
      {/* {false && <RootStack.Screen name="App" component={AppStack} />} */}
    </RootStack.Navigator>
  );
};

export default Routes;
