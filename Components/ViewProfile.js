import React,{Component} from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';
export default  class ViewProfile extends Component {
    render(){
       const {navigation} = this.props;
       let obj = navigation.getParam('profileData',{});
       return (
           <View style={{backgroundColor:'#23B7A7',height:'100%'}}>
             <View style={{margin:10}}>
             <Text style={{textAlign:'center',color:'white',fontWeight:'bold',fontSize:25,marginTop:20}}>My Profile</Text>
             <Text style={{textAlign:'left',fontSize:23,color:'#4F4F4F'}}>Name : {obj[0]['stu_first_name']} {obj[0]['stu_last_name']} </Text>
             <Text style={{textAlign:'left',fontSize:23,color:'#4F4F4F'}}>Email: {obj[0]['stu_email']}</Text>
             <Text style={{textAlign:'left',fontSize:23,color:'#4F4F4F'}}>Age : {obj[0]['stu_age']}</Text>
             </View>
           </View>
         );
    }
   }