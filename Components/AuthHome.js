import React,{Component} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import axios from 'axios'
export default  class AuthHome extends Component {
    GoTORegister = ()=>{
        const {navigation,item} = this.props;
        navigation.navigate('Register',{item});
    }
    GoToLogin = ()=>{
        const {navigation,item} = this.props;
        navigation.navigate('Login',{item});
    }
     
    render(){
       return (
           <View>
            <View style={{marginTop:20,backgroundColor:'red'}}>
                  <Button title={"Login"}  onPress={this.GoToLogin} />
            </View>
             <View style={{marginTop:20,backgroundColor:'red'}}>
                  <Button  title={"Register"} onPress={this.GoTORegister} />
             </View>  

           </View>
         );
    }
   }