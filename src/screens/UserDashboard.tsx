import React, { useState, useContext, useEffect } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    Switch,
    FlatList
} from 'react-native'

import { ThemeContext } from '../config/theme-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './RootStackPrams'
import { getData } from '../config/productTitle'





const UserDashboard: React.FC = () => {

    const [productName, setProductName] = useState()

    const { dark, theme, toggle } = useContext(ThemeContext);

    const getDetails = async () => {
        let response = await getData()
        setProductName(response?.products)
    }

    useEffect(() => {
        getDetails()
    }, [])

    const Item = ({ title }: any) => (
        <View>
            <Text style={{ color: theme.color }}>{title}</Text>
        </View>
    )

    const renderItem = ({ item }: any) => (
        <Item title={item.title} />
    )



    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>

            <Text style={{ color: theme.color }}>Welcome To User's Dashboard</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#ccc" }}
                thumbColor={dark ? "#fff" : "#f4f3f4"}
                onChange={toggle} value={dark}
                style={{ alignSelf: 'center', margin: 20, }}
            />

            <FlatList
                data={productName}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },


});

export default UserDashboard;