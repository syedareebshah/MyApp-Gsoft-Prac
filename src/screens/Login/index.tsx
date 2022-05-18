import React, { useState} from 'react';
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

import { useAppSelector, useAppDispatch } from '../../hooks';
import { selectCount, increment, decrement, incrementByAmount,saveLoginDetails } from '../../features/counter/counterSlice';




type loginScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;


const Login: React.FC = ({ }) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();

    const navigation = useNavigation<loginScreenProp>();

    const handleSubmit = () => {
        if (email == 'admin@gmail.com' && password == '123') {
            dispatch(saveLoginDetails({
                email,
                password
            }))
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
                    <Text style={{ textAlign: 'center',color:colors.text }}>Forgot Password?</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
}


export default Login;