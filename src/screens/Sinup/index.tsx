import React, { useState, useEffect } from 'react';
import firebase from '@react-native-firebase/app';

import {
    View,
    Text,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    Switch
} from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { useStyles } from './styles'
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../RootStackPrams'
import { useTheme } from '@react-navigation/native';
import { selectProfile, saveLoginDetails } from '../../features/profileDetails/profileSlice';
import { useDispatch } from 'react-redux';
import auth from '@react-native-firebase/auth';




type SinupScreenProp = StackNavigationProp<RootStackParamList,'Sinup'>;


const Sinup: React.FC = ({ }) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const dispatch = useDispatch()
    const navigation = useNavigation<SinupScreenProp>();

    
    


    
    function userCreate() {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User account created & signed in!');
                navigation.navigate('UserDashboard')
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }



    const handleSubmit = () => {
        if (email == 'admin@gmail.com' && password == '123') {
            dispatch(saveLoginDetails({ email, password }))
            navigation.navigate('UserDashboard')
        }
        else {
            Alert.alert('failed')
        }

    }
    const { colors } = useTheme();
    const styles = useStyles()





    return (
        <ScrollView style={styles.container}>
            <View>
                <Image style={styles.logo} source={require('../../assets/logo.png')} />
                <TextInput style={styles.inputField} value={email} onChangeText={(email) => { setEmail(email) }} placeholder='enter email' />
                <TextInput style={styles.inputField} value={password} onChangeText={(password) => { setPassword(password) }} placeholder='enter password' />
                <TouchableOpacity onPress={userCreate}>
                    <Text style={styles.loginBtn}>Sinup</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                    <Text style={{ textAlign: 'center', color: colors.text, margin: 20 }}>Already have an account? sign </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}


export default Sinup;