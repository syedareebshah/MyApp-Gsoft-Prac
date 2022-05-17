import React, { useState, useContext } from 'react';
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
import { useStyles } from './styles'
import { ThemeContext } from '../../config/theme-context';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../RootStackPrams'
import { useTheme } from '@react-navigation/native';



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

    const { colors } = useTheme();
    const styles = useStyles()

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <View>
                
                <Text style={{ color: colors.card }}>This is dummy</Text>
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


export default Login;