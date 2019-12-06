import React,{Component} from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';
import axios from 'axios'
export default  class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
     stu_first_name:'',
     stu_last_name:'',
     stu_email:'',
     stu_pass:'',
     stu_age:''
    }

 }
  handleInput = (key,val)=>{
    this.setState({
      [key]:val
    })
    
 }
  register = async ()=>{
    await axios.post('http://soft.londonsteelbd.com/student_acc_create',this.state)
    .then((res)=>{
       alert(res.data.message);
       const {navigation} = this.props;
        navigation.navigate('Login');
    })
  }
    render(){
       return (
           <View style={{backgroundColor:'#23B7A7',height:'100%'}}>
             <Text style={styles.title}>Create an Account</Text>
             <TextInput style={styles.inputStyle} onChangeText={val=>this.handleInput("stu_first_name",val)}
              placeholder="please enter your first name" autoComplete="off" />
              <TextInput  style={styles.inputStyle} onChangeText={val=>this.handleInput("stu_last_name",val)}   placeholder="please enter your last name" />

              <TextInput autoComplete="off" style={styles.inputStyle} onChangeText={val=>this.handleInput("stu_email",val)}   placeholder="please enter your email" />
              <TextInput  style={styles.inputStyle} secureTextEntry={true} onChangeText={val=>this.handleInput("stu_pass",val)}   placeholder="please enter your password" />
              <TextInput  style={styles.inputStyle} onChangeText={val=>this.handleInput("stu_age",val)}   placeholder="please enter your age" />
               
             <View style={{margin:20}} onPress={this.register}>
               <Button onPress={this.register} title={"Submit"} style={{marginLeft:20}}  />
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
                textAlign:'center',fontSize:22,marginTop:20,color:'white'
              }
   })