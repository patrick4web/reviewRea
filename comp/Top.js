import React, {useState} from 'react';
import {Switch, View, Text} from 'react-native';
import styles from '../styles/TopStyles';

function Top(){

const [bgState, SetBgState] = useState(false)

var bgColor = null;
var title = null;
if(bgState == false){
    title = (

        <Text>Day Mode</Text>

    )
    bgColor = styles.container1
   }

if(bgState == true){

    title =(

        <Text style={{color:"white"}}>Night Mode</Text>

    )
    bgColor = styles.container2
 
}
   return(

        <View  style={bgColor}>
            
            <Switch style={styles.switch}
            onValueChange={(value)=>{SetBgState(value)}}
            value = {bgState}
            />

            {title}

         </View>
      )

}



  export default Top;