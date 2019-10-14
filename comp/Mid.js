import React, {useState} from 'react';
import {
    View,
    Text,
    Picker
} from 'react-native';
import styles from '../styles/MidStyles';

function Mid(){

    const [setPick, setShowPick] = useState(1);

    var bgColor = null;
    if(setPick == 1){
        bgColor = styles.container1
    }
    if(setPick == 2){
        bgColor = styles.container2
    }

    return (
        <View style={bgColor}>
            <Picker style={{width:150}}
            onValueChange={(value)=>{setShowPick(value)}}
            selectedValue={setPick}>
                <Picker.Item label="Color 1" value="1"/>
                <Picker.Item label="Color 2" value="2"/>
            </Picker>
        </View>
        
    )
}

export default Mid;