import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {ROUTE_NAMES} from 'routes/RouteKeys';

const Intro = ({navigation}) => {
  const handleSettings = () => {
    navigation.navigate(ROUTE_NAMES.SETTINGS);
  };
  return (
    <View>
      <Text>Intro</Text>
      <Button
        mode="contained"
        onPress={handleSettings}
        style={styles.button}
        theme={{colors: {primary: '#FF5D8F'}}}>
        go To Home
      </Button>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  button: {
    width: 120,
    marginTop: 8,
  },
});
