import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styles from '../styles/Bot-styles';

function Bot(){
    
    const [setAlert, setShowAlert] = useState('')
    
    return(
        <View style={styles.cont}>

            <TextInput 
            placeholder="Enter Text Here"
            onChangeText={(text) => {setShowAlert(text)}}
            value={setAlert}
            />

            <Button
            title="Send"
            onPress={()=>(setAlert)}
            />

        </View>
    );
}


export default Bot;