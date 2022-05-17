import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/Login";
import UserDashboard from "../screens/UserDashboard";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen  name="Login" component={Login} />
                <Stack.Screen name="UserDashboard" component={UserDashboard} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;