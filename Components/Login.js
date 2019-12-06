import React,{Component} from 'react';
import { StyleSheet, Text, View,Button,TextInput,AsyncStorage } from 'react-native';
import axios from 'axios'
export default  class Login extends Component {
    constructor(props){
       super(props);
       this.state = {
        stu_email:'',
        stu_pass:'',
        profileData:[{}]
       }

    }
    handleInput = (key,val)=>{
              this.setState({
                [key]:val
              })
              
    }
     login = async ()=>{
     await axios.post('http://soft.londonsteelbd.com/auth',{stu_email:this.state.stu_email,stu_pass:this.state.stu_pass})
      .then((res)=>{
         if(res.data.success){
              this.setState({
                profileData:res.data.message
              })
              const {navigation} = this.props;
              navigation.navigate('ViewProfile',{profileData:res.data.message});
         }else{
            alert(res.data.message);
         }
      })
    }

    render(){
       return (
           <View style={{backgroundColor:'#23B7A7',height:'100%'}}>
             <Text style={styles.title}>Login Page</Text>
             <TextInput style={styles.inputStyle} onChangeText={val=>this.handleInput("stu_email",val)}
              placeholder="please enter your email" autoComplete="off" />
              <TextInput secureTextEntry={true}  style={styles.inputStyle} onChangeText={val=>this.handleInput("stu_pass",val)}   placeholder="please enter your password" />
             <View style={{margin:20}} onPress={this.login}>
               <Button onPress={this.login} title={"Login"} style={{marginLeft:20}}  />
             </View>
             <View>
            
             </View>
           </View>
         );
    }
   }

   const styles = StyleSheet.create({
              inputStyle:{
                height: 40, borderColor: "#1E1E1E", 
                borderWidth: 2,margin:10,fontSize:18,
                padding:5
              },
              title:{
                textAlign:'center',fontSize:25,marginTop:20,color:'white'
              }
   })