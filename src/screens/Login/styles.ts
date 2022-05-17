import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const useStyles = () => {
    
    const styles = StyleSheet.create({

        container: { flex: 1 },
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
    return styles;
};
