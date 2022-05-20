import React, { useState, useEffect } from 'react';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../RootStackPrams'


import {
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { getData } from '../../config/productTitle'
import { useStyles } from './styles'
import { useDispatch,useSelector } from 'react-redux';
import { selectProfile,saveLoginDetails,getPostFetch, getPostSuccess } from '../../features/profileDetails/profileSlice';

type DashboardScreenProp = StackNavigationProp<RootStackParamList, 'UserDashboard'>;

const UserDashboard: React.FC = () => {    
    // const [productName, setProductName] = useState<any>([])
    const styles = useStyles()
    const profileDetails = useSelector(selectProfile);
    const dispatch = useDispatch()
    const navigation = useNavigation<DashboardScreenProp>();

    // const getDetails = async () => {
    //     // let response = await 
    //     setProductName(profileDetails.posts)
    //     //reading data from redux and displaying.     
    // }
    console.log(profileDetails.posts?.products,"...........");
    // console.log(productName,"..........>>>");

    const logOff = () => {
        auth()
            .signOut()
            .then(() => {
                console.log('User signed out!')
                navigation.navigate('Login')
            });
    }
    
    useEffect(() => {
        dispatch(getPostFetch())
        // getDetails()
        console.log("runing....");
        
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
             <TouchableOpacity>
                    <Text style={styles.logOutBtn} onPress={logOff}>logOff</Text>
                </TouchableOpacity>
            <Text style={styles.listItems}>Welcome To User's Dashboard</Text>
            <Text style={[styles.listItems,{backgroundColor:'brown'}]}>Your Email is {profileDetails.loginDetails.email} </Text>
            <Text style={[styles.listItems,{backgroundColor:'brown'}]}>Your Password is {profileDetails.loginDetails.password}</Text>
            <FlatList
                data={profileDetails.posts?.products}
                renderItem={renderItem}
                keyExtractor={item => item.id }
            />
        </View>
    );
}

export default UserDashboard;