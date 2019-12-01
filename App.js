import React from 'react';
import { View, StyleSheet } from 'react-native';

import Component from './Component';


export default function App() {

  return (
    <View style={styles.container}>
      <Component />
    </View>
  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFF5DE',
    alignItems: 'center',
    justifyContent: 'center',
  }

});