import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/Login";
import UserDashboard from "../screens/UserDashboard";
import Profile from "../screens/Profile";
import Medical from "../screens/Medical";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Medical" component={Medical} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="UserDashboard" component={UserDashboard} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;