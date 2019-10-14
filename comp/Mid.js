import React, {useState} from 'react';
import {
    View,
    Text,
    Picker
} from 'react-native';
import styles from '../styles/MidStyles';

function Mid(){

    const [setPick, setShowPick] = useState(1);

    return (
        <View style={styles.midS}>
            <Picker
            styles={{width:50}}
            onValueChange={(value)=>{setShowPick(value)}}
            selectedValue={setPick}>
                <Picker.Item label="Color 1" value="1"/>
                <Picker.Item label="Color 2" value="2"/>
            </Picker>
        </View>
        
    )
}

export default Mid;