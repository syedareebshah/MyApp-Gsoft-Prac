import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native'
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import { useStyles } from './styles'

const Medical: React.FC = () => {


    const styles = useStyles()


    return (
        <ScrollView style={styles.container}>

                <View>
                    <Image style={styles.banner} source={require('../../assets/medicine.jpeg')} />
                    <Text style={styles.heading}>SMOG</Text>
                    <Text style={{ color: 'blue', textAlign: 'center',margin:15 }}>View All</Text>
                </View>

                <View style={styles.listItem}>
                    <View>
                    <Text style={styles.title}>Telemedicine</Text>
                    <Text>Talk to a doctor and get prescription</Text>
                    </View>
                    <Image style={styles.listImg} source={require('../../assets/stethoscope.png')} />
                </View>
                <View style={styles.listItem}>
                    <View>
                    <Text style={styles.title}>Labs</Text>
                    <Text>Get your results verified from lab</Text>
                    </View>
                    <Image style={styles.listImg} source={require('../../assets/stethoscope.png')} />
                </View>
                <View style={styles.listItem}>
                    <View>
                    <Text style={styles.title}>Pharmacy</Text>
                    <Text>Get medicines at low price</Text>
                    </View>
                    <Image style={styles.listImg} source={require('../../assets/stethoscope.png')} />
                </View>


        </ScrollView>
    );
}

export default Medical;