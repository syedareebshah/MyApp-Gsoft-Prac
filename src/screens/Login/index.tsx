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




type loginScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;


const Login: React.FC = ({ }) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const dispatch = useDispatch()
    const navigation = useNavigation<loginScreenProp>();

    // const [initializing, setInitializing] = useState(true);
    // const [user, setUser] = useState();

    // function onAuthStateChanged(user: any) {
    //     setUser(user);
    //     if (initializing) setInitializing(false);
    // }

    // useEffect(() => {
    //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //     return subscriber; // unsubscribe on unmount
    // },[]);

   
    //     if (initializing) return null

    // if (user) {
    //     console.log("found");

    // }
    // else {
    //     console.log("not found");

    // }
    

    

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
                <TouchableOpacity onPress={handleSubmit}>
                    <Text style={styles.loginBtn}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => (console.log("Forgot Password"))}>
                    <Text style={{ textAlign: 'center', color: colors.text }}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.loginBtn}>LOGIN</Text>
                </TouchableOpacity>



            </View>
        </ScrollView>
    );
}


export default Login;