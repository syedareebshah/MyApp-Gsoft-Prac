import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTheme } from 'react-native-paper';

export const useStyles = () => {

    const { colors } = useTheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 10,
        },
        listItem:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            backgroundColor:'white',
            padding:10,
            borderRadius:5,
            borderColor:'black',
            borderWidth:1,
            paddingLeft:30,
            paddingRight:30,
            margin:5
        },
        banner:{
            height:hp('20%'),
            width:wp('100%'),
            resizeMode:'cover'
        },
        
        listImg:{
            width:50,
            height:50,
            resizeMode:'contain',
        },
        title:{
            color:'black',
            fontWeight:'bold',
            marginBottom:6
        },
        
    });
    return styles;
};
