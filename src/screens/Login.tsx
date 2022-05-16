import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'


const Login = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.textWrapper}>
                    <Text style={styles.myText}>Login</Text>
                </View>
            </ScrollView>
        </View>
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
    }
});

export default Login;