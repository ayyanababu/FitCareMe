/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import Routes from 'routes';
import {NavigationContainer} from '@react-navigation/native';

function SplashScreen(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Routes />
        {/* <Text>Index</Text> */}
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SplashScreen;
