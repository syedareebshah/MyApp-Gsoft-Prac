import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native'


import { useStyles } from './styles'

const Profile: React.FC = () => {



    const styles = useStyles()

    
    return (
        <ScrollView >

        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <Image style={styles.profilePic} source={require('../../assets/avatar.png')} />
                    <Text style={styles.name}>Jhon Doe</Text>
                </View>
                <View style={styles.headerBottom}>
                    <TouchableOpacity >
                        <Text style={styles.btn}>Left</Text>
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Text style={styles.btn}>Right</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.listItems}>
                <View style={styles.left}>
                    <Image style={styles.listImg} source={require('../../assets/avatar.png')} />
                    <Text style={styles.txt}>Jhone Doe</Text>
                </View>
                <View style={styles.right}>
                    <Text style={styles.txt}>90</Text>
                    <Text style={[styles.txt, { fontWeight: 'bold' }]}>Delete</Text>
                </View>
            </View>
            <View style={styles.listItems}>
                <View style={styles.left}>
                    <Image style={styles.listImg} source={require('../../assets/avatar.png')} />
                    <Text style={styles.txt}>Jhone Doe</Text>
                </View>
                <View style={styles.right}>
                    <Text style={styles.txt}>90</Text>
                    <Text style={[styles.txt, { fontWeight: 'bold' }]}>Delete</Text>
                </View>
            </View><View style={styles.listItems}>
                <View style={styles.left}>
                    <Image style={styles.listImg} source={require('../../assets/avatar.png')} />
                    <Text style={styles.txt}>Jhone Doe</Text>
                </View>
                <View style={styles.right}>
                    <Text style={styles.txt}>90</Text>
                    <Text style={[styles.txt, { fontWeight: 'bold' }]}>Delete</Text>
                </View>
            </View><View style={styles.listItems}>
                <View style={styles.left}>
                    <Image style={styles.listImg} source={require('../../assets/avatar.png')} />
                    <Text style={styles.txt}>Jhone Doe</Text>
                </View>
                <View style={styles.right}>
                    <Text style={styles.txt}>90</Text>
                    <Text style={[styles.txt, { fontWeight: 'bold' }]}>Delete</Text>
                </View>
            </View><View style={styles.listItems}>
                <View style={styles.left}>
                    <Image style={styles.listImg} source={require('../../assets/avatar.png')} />
                    <Text style={styles.txt}>Jhone Doe</Text>
                </View>
                <View style={styles.right}>
                    <Text style={styles.txt}>90</Text>
                    <Text style={[styles.txt, { fontWeight: 'bold' }]}>Delete</Text>
                </View>
            </View><View style={styles.listItems}>
                <View style={styles.left}>
                    <Image style={styles.listImg} source={require('../../assets/avatar.png')} />
                    <Text style={styles.txt}>Jhone Doe</Text>
                </View>
                <View style={styles.right}>
                    <Text style={styles.txt}>90</Text>
                    <Text style={[styles.txt, { fontWeight: 'bold' }]}>Delete</Text>
                </View>
            </View><View style={styles.listItems}>
                <View style={styles.left}>
                    <Image style={styles.listImg} source={require('../../assets/avatar.png')} />
                    <Text style={styles.txt}>Jhone Doe</Text>
                </View>
                <View style={styles.right}>
                    <Text style={styles.txt}>90</Text>
                    <Text style={[styles.txt, { fontWeight: 'bold' }]}>Delete</Text>
                </View>
            </View><View style={styles.listItems}>
                <View style={styles.left}>
                    <Image style={styles.listImg} source={require('../../assets/avatar.png')} />
                    <Text style={styles.txt}>Jhone Doe</Text>
                </View>
                <View style={styles.right}>
                    <Text style={styles.txt}>90</Text>
                    <Text style={[styles.txt, { fontWeight: 'bold' }]}>Delete</Text>
                </View>
            </View>
            </View>


        </ScrollView>
    );
}

export default Profile;