import React, {Component} from 'react';
import {text, View, StyleSheet} from 'react-native';

export default class Cinnamon extends Component(){
    render(){
        return(
            <View
              style={{
                  flex:1,
                  justifyContent:"center",
                  alignItems:"center",
              }}
            >
                <Text>Welcome To Goswami Spices ! Cinnamon used for health purposs and eating. Costs Rs.120</Text>
            </View>
        )
    }
}