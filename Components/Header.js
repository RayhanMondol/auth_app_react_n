import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default  class Header extends Component {

 render(){
    const {HeaderTitle} = this.props;

    return (
        <View>
        {HeaderTitle}
        </View>
      );
 }
}
