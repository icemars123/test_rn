import React, { Component } from "react";
import { AppRegistry, Platform, StatusBar, StyleSheet, View, Text, ScrollView } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component
{
  render()
  {
    return (
      // <ScrollView>
        <AppNavigator />
      // </ScrollView>
    );
  }
}