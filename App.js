import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './Components/AuthHome'
import Login from './Components/Login';
import Register from './Components/Register';
import ViewProfile from './Components/ViewProfile';


const AppNavigator = createStackNavigator(
    {
     Home: { screen: HomeScreen },
     Login: { screen: Login },
     Register: { screen: Register },
     ViewProfile:{ screen: ViewProfile }
    },
    {
     initialRouteName: 'Home' 
    }
)
export default createAppContainer(AppNavigator);