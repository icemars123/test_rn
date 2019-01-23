import React, { Component, Context } from 'react';
import 
{ 
    Platform, 
    StatusBar, 
    StyleSheet, 
    View, 
    Button, 
    Image,
    TouchableOpacity,
    Text,
} from 'react-native';
import 
{ 
    createSwitchNavigator, 
    createDrawerNavigator, 
    createStackNavigator,
    DrawerActions, 
} from 'react-navigation';
import MainTabNavigator1 from './MainTabNavigator1';
import MainTabNavigator from './MainTabNavigator';
import MyHome from "./../screens/Home";
import MyCamera from '../screens/Camera';


class MyHomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./../assets/home-icon.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    render() {
        return <MyHome />
        // (
        //     <View style={{ paddingTop: 50 }}>
        //         <Button
        //             onPress={() => this.props.navigation.navigate('Notifications')}
        //             title="Go to notifications"
        //         />
        //     </View>
            
        // );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./../assets/notif-icon.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    render() {
        return (
            <View style={{ paddingTop: 50 }}>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back home1"
                />
            </View>
            
        );
    }
}


const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

const DrawerNavigator = createDrawerNavigator(
    {
        Home: 
        {
            screen: MainTabNavigator,
            navigationOptions: 
            {
                drawerLabel: 'Home',
                drawerIcon: ({ tintColor }) => (
                    <Image
                        source={require('./../assets/home-icon.png')}
                        style={[styles.icon, { tintColor: tintColor }]}
                    />
                ),
            },
        },
        Notifications: 
        {
            screen: MyNotificationsScreen,
        }
    },
    {
        drawerPosition: 'left',
        initialRouteName: 'Home',
        drawerBackgroundColor: 'white',
        // contentComponent: DrawerScreen,
        drawerWidth: 300
    },
);

const MenuImage = ({ navigation }) => {
    if (!navigation.state.isDrawerOpen) {
        return <Image style={{ width: 30, height: 30, marginLeft: 5 }} source={require('./../assets/menu-button.png')} />
    }
    else if (navigation.state.isDrawerOpen) {
        return <Image style={{ width: 30, height: 30, marginLeft: 5 }} source={require('./../assets/menu-button.png')} />
    }
}

const AppNavigator = createStackNavigator(
    {
        DrawerNavigator:
        {
            screen: DrawerNavigator
        },
    },
    {
        navigationOptions: ({ navigation }) => (
            {
                title: 'test',
                headerLeft: 
                    <TouchableOpacity onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()) }}>
                        <MenuImage style="styles.bar" navigation={navigation} />
                    </TouchableOpacity>,
                headerStyle: {backgroundColor: '#fff',},
                headerTintColor: '#333',
                headerTitleStyle: { fontWeight: 'bold',},
                
            }
        )
    }
);




export default AppNavigator;