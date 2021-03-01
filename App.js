import { StatusBar, useState } from 'expo-status-bar';
import React, { StrictMode } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Landing from './landing'
import Header from './header'
import List from './list'

export default function App() {

  return (
    // <View style={styles.container} >
    //   <Landing />
    // </View>

    <View style={styles.container}>
      <Header />
      <Landing />
      {/* <List /> */}

    </View >

  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#e6f3ff',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    // flexWrap: 'wrap'
  },


});
