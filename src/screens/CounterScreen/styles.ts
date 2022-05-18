import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTheme } from 'react-native-paper';
import { black } from 'react-native-paper/lib/typescript/styles/colors';

export const useStyles = () => {

    const { colors } = useTheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 10,
            backgroundColor:'white',
        },
        number:{
            fontSize:50,
            textAlign:'center',
            fontWeight:'bold',
            color:'brown',
            padding:10
        },
        innerContainer:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-evenly'
        },
        btn:{
            backgroundColor:'aqua',
            padding:20,
            fontSize:20,
            borderRadius:40,
            color:'black',
            fontWeight:'600',
            borderWidth:0.5,
            borderColor:'black',
            margin:10,
            textAlign:'center'
        },
        input:{
            borderColor:'brown',
            borderWidth:0.5,
            margin:10,
            borderRadius:40,
            padding:15
        }
        

    });
    return styles;
};
