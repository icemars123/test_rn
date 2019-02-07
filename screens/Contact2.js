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
    Button
} from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";

export default class Contact extends React.Component {

    state =
        {
            username: '',
            password: '',
            // confirmationCode:'',
            user: {}

        }
    onChangeText(key, value) {
        this.setState({
            [key]: value
        })
    }

    signIn() {
        const { username, password } = this.state

        console.log('successful sign in!');

    }


    render() {
        // return (
        //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
        //         <Text>
        //             Me!!!
        //         </Text>
        //     </View>
        // );
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center', backgroundColor: '#fff' }}>
                <TextInput
                    onChangeText={value => this.onChangeText('username', value)}
                    style={styles.input}
                    placeholder='username'
                />
                <TextInput
                    onChangeText={value => this.onChangeText('password', value)}
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder='password'
                />
                <Button
                    title="Sign In"
                // onPress={this.signIn.bind(this)} 
                />
            </View>
        );
    }
}
//<Button title="Sign In" onPress={this.signIn.bind(this)} />
const styles = StyleSheet.create({
    input: {
        height: 50,
        borderBottomColor: 2,
        borderBottomColor: '#2196F3',
        margin: 10
    },
    // container: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
});