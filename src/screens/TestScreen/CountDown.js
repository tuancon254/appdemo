import React from 'react';
import {Text,View} from 'react-native';


const startingMinutes = 15;
let time = startingMinutes*60;


 function countdown(){
    const minutes = Math.floor(time/60)
    const seconds = (time%60)<10 ? '0' + (time%60) :(time%60) ;

    return <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold', letterSpacing: 0.35 }}>{minutes}:{seconds}</Text>
}

export default countdown;