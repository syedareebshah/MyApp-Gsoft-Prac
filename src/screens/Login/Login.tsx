import React, { useState, useContext } from 'react';
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
    Switch
} from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';

import { ThemeContext } from '../../config/theme-context';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../RootStackPrams'

type loginScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;


const Login: React.FC = ({ }) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const navigation = useNavigation<loginScreenProp>();
    const { dark, theme, toggle } = useContext(ThemeContext);



    const handleSubmit = () => {
        if (email == 'admin@gmail.com' && password == '123') {
            navigation.navigate('UserDashboard')
        }
        else {
            Alert.alert('failed')
        }

    }

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <View>
                <Image style={styles.logo} source={require('../../assets/logo.png')} />
                <TextInput style={[styles.inputField, { backgroundColor: theme.inputBackground }]} value={email} onChangeText={(email) => { setEmail(email) }} placeholder='enter email' />
                <TextInput style={[styles.inputField, { backgroundColor: theme.inputBackground }]} value={password} onChangeText={(password) => { setPassword(password) }} placeholder='enter password' />
                <TouchableOpacity onPress={handleSubmit}>
                    <Text style={[styles.loginBtn, { backgroundColor: theme.backgroundBtn, }]}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => (console.log("Forgot Password"))}>
                    <Text style={{ textAlign: 'center', color: theme.color }}>Forgot Password?</Text>
                </TouchableOpacity>

                <Switch
                    trackColor={{ false: "#767577", true: "#ccc" }}
                    thumbColor={dark ? "#fff" : "#f4f3f4"}
                    onChange={toggle} value={dark}
                    style={{ alignSelf: 'center', margin: 20 }}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    textWrapper: {
        height: hp('70%'), // 70% of height device screen
        width: wp('90%'),   // 80% of width device screen
        backgroundColor: 'red'
    },
    myText: {
        fontSize: hp('5%') // End result looks like the provided UI mockup
    },
    logo: {
        width: hp('25%'),
        height: hp('30%'),
        resizeMode: 'contain',
        alignSelf: 'center',

    },
    inputField: {
        borderWidth: 1,
        borderRadius: 5,
        margin: 20,

    },
    loginBtn: {
        textAlign: 'center',
        fontSize: 24,
        width: hp('30%'),
        color: 'white',
        borderRadius: 5,
        padding: 8,
        alignSelf: 'center',
        marginTop: 10
    }

});

export default Login;