import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {ROUTE_NAMES} from 'routes/RouteKeys';

const Home = ({navigation}) => {
  const handleSettings = () => {
    navigation.navigate(ROUTE_NAMES.SETTINGS);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Whereas recognition</Text>
      <Button
        mode="contained"
        onPress={handleSettings}
        style={styles.button}
        theme={{colors: {primary: '#FF5D8F'}}}>
        Settings
      </Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontFamily: 'poppins-medium',
  },
  button: {
    width: 120,
    marginTop: 8,
  },
});
