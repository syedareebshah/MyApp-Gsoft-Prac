import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList
} from 'react-native'

import { getData } from '../../config/productTitle'
import { useStyles } from './styles'

const UserDashboard: React.FC = () => {

    const [productName, setProductName] = useState()

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
            <FlatList
                data={productName}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

export default UserDashboard;