import React from "react";
import { Text, View } from "react-native";
import { useTheme } from 'react-native-paper';





const Home: React.FC = () => {
    const { colors } = useTheme();
    return (
        <View style={{backgroundColor:colors.background}}>
            <Text>
                Home
            </Text>
            <Text style={{ color: colors.primary }}>Yo!</Text>
        </View>
    )
}

export default Home;