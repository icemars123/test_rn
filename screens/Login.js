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
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage,
} from "react-native";
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { AppLoading, Asset, Font, Icon } from "expo";

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    componentDidMount() {
        this._loadInitialState().done();
    }

    _loadInitialState = async () => {

        var value = await AsyncStorage.getItem('user');
        if (value !== null) {
            this.props.navigation.navigate('Profile');
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

                <View style={styles.container}>

                    <Text style={styles.header}>-Login-</Text>

                    <TextInput
                        style={styles.textInput} placeholder='Username'
                        onChangeText={(username) => this.setState({ username })}
                        underlineColorAndroid='transparent'
                    />

                    <TextInput
                        style={styles.textInput} placeholder='Password'
                        onChangeText={(password) => this.setState({ password })}
                        secureTextEntry={true} underlineColorAndroid='transparent'
                    />

                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this.login}>
                        <Text> Log In</Text>
                    </TouchableOpacity>

                </View>

            </KeyboardAvoidingView>
        );
    }

    login = () => {
        // alert(this.state.username);

        fetch('http://192.168.91.26:3000/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        })
            .then((response) => response.json())
            .then((res) => {
                if (res.success === true) {
                    alert(res.user);
                    alert('hello')
                    AsyncStorage.setItem('user', res.user);
                    this.props.navigation.navigate('Profile');
                }
                else {
                    alert(res.message);
                }
            })
            .done();
    }

}

const styles = StyleSheet.create({
    wrapper:
    {
        flex: 1,
    },
    container:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2896d3',
        paddingLeft: 40,
        paddingRight: 40,
    },
    header:
    {
        fontSize: 24,
        marginBottom: 60,
        color: '#fff',
        fontWeight: 'bold',
    },
    textInput:   
    {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    btn:
    {
        alignSelf: 'stretch',
        backgroundColor: '#01c853',
        padding: 20,
        alignItems: 'center',
    }

});