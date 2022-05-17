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
        listItems:{
            flex:1,
            display:'flex',
            flexDirection:'row',
            margin:5,
            padding:10,
            backgroundColor:colors.placeholder,
            borderRadius:8,
            justifyContent:'space-between'
        },
        btn:{
            width:wp('20%'),
            height:hp('10%'),
            backgroundColor:'green',
            padding:10,
            color:'white',
            textAlign:'center',
            borderRadius:8
        },
        header:{
            backgroundColor:'white',
            padding:10
        },
        headerTop:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-evenly',
            borderRadius:5
        },
        profilePic:{
            resizeMode:'contain',
            height:150,
            width:150
        },
        name:{
            marginTop:70,
            fontSize:34,
            textAlign:'center',
            fontWeight:'bold'
        },
        headerBottom:{
            marginTop:20,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-around'
        },
        listImg:{
            width:50,
            height:50,
            resizeMode:'contain'
        },
        left:{
            flex:0.4,
            display:'flex',
            flexDirection:'row',
            justifyContent:'flex-start'

        },
        right:{
            flex:0.5,
            display:'flex',
            flexDirection:'row',
            justifyContent:'flex-end'
        },
        txt:{
            marginTop:15,
            color:'white',
            margin:4
        }
        
    });
    return styles;
};
