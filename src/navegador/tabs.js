import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";


const Tab = () =>{
    return(
        <Tab.navigator>
            <Tab.screen name="Home" component={HomeScreen}/>
        </Tab.navigator>
    )
}