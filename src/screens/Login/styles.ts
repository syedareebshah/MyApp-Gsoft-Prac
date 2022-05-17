import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTheme } from 'react-native-paper';

export const useStyles = () => {

    const { colors } = useTheme();

    const styles = StyleSheet.create({
        container: { flex: 1, backgroundColor:colors.background },
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
        color: colors.text,
        borderColor:colors.primary
    },
    loginBtn: {
        textAlign: 'center',
        fontSize: 24,
        width: hp('30%'),
        color: colors.text,
        borderRadius: 5,
        padding: 8,
        alignSelf: 'center',
        marginTop: 10,
        backgroundColor:colors.primary
    }
        
    });
    return styles;
};
