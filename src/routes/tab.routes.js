import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeScreenNavigationContainer } from "react-native-screens";
import About from "../screens/about";
import Help from "../screens/help";
export function TabRoutes(){
    return(
        <Navigator>
            <Screen name='About' component={About}/>
            <Screen name='Help' component={Help}/>
           
           

        </Navigator>
    )
}