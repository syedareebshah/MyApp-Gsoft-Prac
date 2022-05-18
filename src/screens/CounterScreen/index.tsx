import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput
} from 'react-native'
import { useStyles } from './styles'
import { useAppSelector, useAppDispatch } from '../../hooks';
import { selectCount, increment, decrement, incrementByAmount } from '../../features/counter/counterSlice';

const CounterScreen: React.FC = () => {
    const [amount, setAmount] = useState<any>()

    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();
    console.log(count);

    const handleIncrementByAmount = () => {
        console.log("running...");
        let tempNum = +amount
        dispatch(incrementByAmount(tempNum))
        
        
    }


    const styles = useStyles()


    return (
        <View style={styles.container}>
            <Text style={styles.number}>{count}</Text>
            <View style={styles.innerContainer}>
                <TouchableOpacity onPress={() => { dispatch(increment()) }}>
                    <Text style={styles.btn}>Increment</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { dispatch(decrement()) }}>
                    <Text style={styles.btn}>Decrement</Text>
                </TouchableOpacity>
            </View>
            <TextInput keyboardType='numeric' value={amount} onChangeText={(amount) => { setAmount(amount) }}
                style={styles.input}
                placeholder='Enter Amount'
            />
            <TouchableOpacity onPress={handleIncrementByAmount}>
                <Text style={styles.btn}>Increment by amount</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CounterScreen;