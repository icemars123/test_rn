import React, { Component } from "react";
import { AppRegistry, Platform, StatusBar, StyleSheet, View, Text, ScrollView } from "react-native";
import { AppLoading, Asset, Font, Icon, Camera } from "expo";
import MyCamera from './../screens/Camera';

export default class Home extends React.Component {
    // static navigationOptions = ({ navigation }) => {
    //     const params = navigation.state.params || {};

    //     return {
    //         headerRight: (
    //             <Button
    //                 onPress={() => navigation.navigate('MyCamera')}
    //                 title="Info"
    //                 color="#fff"
    //             />
    //         ),
    //     };
    // };


    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                <Text>
                    Create new life !!!!
                </Text>
            </View>
        );
    }
}

class CameraScreen extends React.Component {
    render() 
    {
        return <MyCamera />
    }
}

