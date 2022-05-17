import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTheme } from 'react-native-paper';

export const useStyles = () => {

    const { colors } = useTheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 10,
            backgroundColor:colors.background
        },
        listItems:{
            color:colors.text,
            margin:7,
            padding:20,
            backgroundColor:colors.placeholder,
            borderRadius:8,
        }
        
    });
    return styles;
};
