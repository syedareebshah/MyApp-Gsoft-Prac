import React, { useState, useContext, useEffect } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
    View,
    Text,
    StyleSheet,
    Switch,
    FlatList
} from 'react-native'

import { ThemeContext } from '../../config/theme-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../RootStackPrams'
import { getData } from '../../config/productTitle'
import { useStyles } from './styles'






const UserDashboard: React.FC = () => {


    const [productName, setProductName] = useState()

    // const { dark, theme, toggle } = useContext(ThemeContext);
    const styles = useStyles()


    const getDetails = async () => {
        let response = await getData()
        setProductName(response?.products)
    }

    useEffect(() => {
        getDetails()
    }, [])

    const Item = ({ title }: any) => (
        <View>
            <Text style={styles.listItems}>{title}</Text>
        </View>
    )

    const renderItem = ({ item }: any) => (
        <Item title={item.title} />
    )





    return (
        <View style={styles.container}>

            <Text style={styles.listItems}>Welcome To User's Dashboard</Text>
            {/* <Switch
                trackColor={{ false: "#767577", true: "#ccc" }}
                thumbColor={dark ? "#fff" : "#f4f3f4"}
                onChange={toggle} value={dark}
                style={{ alignSelf: 'center', margin: 20, }}
            /> */}

            <FlatList
                data={productName}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

        </View>
    );
}



export default UserDashboard;