import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList
} from 'react-native'

import { getData } from '../../config/productTitle'
import { useStyles } from './styles'
import { useDispatch,useSelector } from 'react-redux';
import { selectProfile,saveLoginDetails,getPostFetch, getPostSuccess } from '../../features/profileDetails/profileSlice';


const UserDashboard: React.FC = () => {    
    const [productName, setProductName] = useState()
    const styles = useStyles()
    const profileDetails = useSelector(selectProfile);
    const dispatch = useDispatch()

    const getDetails = async () => {
        let response = await getData()
        setProductName(response?.products)
        
    }

    console.log(profileDetails,".....");
    

    useEffect(() => {
        // getDetails()
        dispatch(getPostFetch)
    }, [dispatch])

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
            <Text style={[styles.listItems,{backgroundColor:'brown'}]}>Your Email is {profileDetails.email} </Text>
            <Text style={[styles.listItems,{backgroundColor:'brown'}]}>Your Password is {profileDetails.password}</Text>
            <FlatList
                data={productName}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

export default UserDashboard;