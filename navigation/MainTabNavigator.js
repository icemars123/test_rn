import React from 'react';
import 
{ 
    Button, 
    Text, 
    View,
    StyleSheet,
    Platform,
    Image,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Home from "../screens/Home";
import Contact from "../screens/Contact";
import Create from "../screens/Create";
import Search from "../screens/Search";
import Link from "../screens/Link";


const Tabs = createBottomTabNavigator(
    {
        Home: Home,
        Search: Search,
        Create: Create,
        Link: Link,
        Contact: Contact
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-home${focused ? '' : '-outline'}`;
                } 
                else if (routeName === 'Search') {
                    iconName = `ios-search${focused ? '' : '-outline'}`;
                }
                else if (routeName === 'Create') {
                    iconName = `ios-add${focused ? '' : '-outline'}`;
                }
                else if (routeName === 'Link') {
                    iconName = `ios-link${focused ? '' : '-outline'}`;
                }
                else if (routeName === 'Contact') {
                    iconName = `ios-contact${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={35} color={tintColor} />;
            },
        }),
        tabBarOptions:
        {
            activeTintColor: '#000',
            inactiveTintColor: 'gray',
            style:{ backgroundColor: '#fff',},
            indicatorStyle: { backgroundColor: '#000', },
            showLabel: false,
        }
    }
)

export default Tabs;