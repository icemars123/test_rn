import React, { Component } from "react";
import { AppRegistry, Platform, StatusBar, StyleSheet, View, Text, ScrollView } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";

export default class Home extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                <Text>
                    Welcome to Home!!!
                </Text>
            </View>
        );
    }
}