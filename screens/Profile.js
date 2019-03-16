import React, { Component } from "react";
import {
    AppRegistry,
    Platform,
    StatusBar,
    StyleSheet,
    View,
    Text,
    ScrollView,
    TextInput,
    Button,
} from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

export default class Profile extends React.Component { 

    render() {
        return (
                <View style={styles.container}>
                    <Text style={styles.header}> Welcome to the Member Area </Text> 
                </View>
        );
    }

    

}

const styles = StyleSheet.create({
    container:
    {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2896d3',
    },
    text: 
    {
        color: '#fff',   
    }

});