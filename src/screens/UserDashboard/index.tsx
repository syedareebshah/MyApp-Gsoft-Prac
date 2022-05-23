import React, { useState, useEffect } from 'react';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../RootStackPrams'
import firestore from '@react-native-firebase/firestore';



import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    TextInput
} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { getData } from '../../config/productTitle'
import { useStyles } from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { selectProfile, saveLoginDetails, getPostFetch, getPostSuccess } from '../../features/profileDetails/profileSlice';

type DashboardScreenProp = StackNavigationProp<RootStackParamList, 'UserDashboard'>;

const UserDashboard: React.FC = () => {
    const styles = useStyles()
    const profileDetails = useSelector(selectProfile);
    const dispatch = useDispatch()
    const navigation = useNavigation<DashboardScreenProp>();
    const [name, setName] = useState<string>('')
    const [degree, setDegree] = useState<string>('')
    const [userData, setUserData] = useState<any>([])

    // console.log(profileDetails.posts?.products, "...........");

    console.log(userData);



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
        console.log("runing....");

        getUserData()

    }, [dispatch,userData])



    const getUserData = async () => {
        let tempArray: any = []
        firestore()
            .collection('Users')
            .get()
            .then(querySnapshot => {
                console.log('Total users: ', querySnapshot.size);
                querySnapshot.forEach(documentSnapshot => {
                    tempArray.push(documentSnapshot.data())
                });
                setUserData(tempArray)

            });

    }




    const writingDbData = async () => {
        firestore()
            .collection('Users')
            .add({
                name,
                degree
            })
            .then(() => {
                console.log('User added!');
            });
    }

    function onResult(QuerySnapshot: any) {
        console.log('Got Users collection result.');
    }

    function onError(error: any) {
        console.error(error);
    }

    //reading data from DB


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

            <TextInput style={styles.inputField} value={name} onChangeText={(name) => { setName(name) }} placeholder='Enter Name' />
            <TextInput style={styles.inputField} value={degree} onChangeText={(degree) => { setDegree(degree) }} placeholder='Enter Degree' />

            <TouchableOpacity>
                <Text style={styles.logOutBtn} onPress={writingDbData}>Post</Text>
            </TouchableOpacity>
            {
                userData.map((obj: any, i: number) => {
                    return (
                        <View style={styles.dbData} key={i}>
                            <Text>{obj.name}</Text>
                            <Text>{obj.degree}</Text>
                        </View>

                    )

                })
            }
            <Text style={[styles.listItems, { backgroundColor: 'brown' }]}>Your Email is {profileDetails.loginDetails.email} </Text>
            <Text style={[styles.listItems, { backgroundColor: 'brown' }]}>Your Password is {profileDetails.loginDetails.password}</Text>
            <FlatList
                data={profileDetails.posts?.products}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

export default UserDashboard;