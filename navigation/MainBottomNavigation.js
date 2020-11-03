import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../containers';
import ListPage from '../containers';
import ProfilePage from '../containers';

const Tab = createBottomTabNavigator()

class MainBottomNavigation extends React.Component {
    render() {
        return(
            <Tab.Navigator
                activeColor="#f0edf6"
                inactiveColor="#3e2465">
                <Tab.Screen name={"Beranda"} component={HomePage}/>
                <Tab.Screen name={"Listku"} component={ListPage}/>
                <Tab.Screen name={"Profil"} component={ProfilePage}/>
            </Tab.Navigator>
        );
    }
}

export default MainBottomNavigation;