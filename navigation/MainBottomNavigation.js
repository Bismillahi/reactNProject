import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../containers/HomeScreen';
import ListScreen from '../containers/ListScreen';
import ProfileScreen from '../containers/ProfileScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator()

const MainBottomNavigation = () => {
    return (
        <Tab.Navigator
            style={styles.tabBarContainer}
            initialRouteName={'Beranda'}
            tabBarOptions={{
                activeColor: "#f0edf6",
                inactiveColor: "#3e2465"
            }}>
            <Tab.Screen
                name={"Beranda"}
                style={styles.tabBarContainer}
                component={HomeScreen}
                options={{
                    tabBarlabel: "Beranda",
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons name={"home"} color={color} size={size}/>
                    )
                }}/>
            <Tab.Screen
                name={"List"}
                component={ListScreen}
                options={{
                    tabBarlabel: "List",
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons name={"list"} color={color} size={size}/>
                    )
                }}/>
            <Tab.Screen
                name={"Profil"}
                component={ProfileScreen}
                options={{
                    tabBarlabel: "Profil",
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons name={"person"} color={color} size={size}/>
                    )
                }}/>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MainBottomNavigation;