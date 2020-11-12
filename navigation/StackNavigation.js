import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from "../containers/SignupScreen";
import LoginScreen from "../containers/LoginScreen";
import WelcomeScreen from "../containers/WelcomeScreen";
import MainBottomNavigation from "./MainBottomNavigation";
import React from "react";


const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown: false}}/>
            <Stack.Screen name="MainNavigation" component={MainBottomNavigation} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

export default StackNavigation;