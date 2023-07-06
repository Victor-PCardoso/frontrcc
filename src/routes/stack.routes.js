import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Help from "../screens/help";
import About from "../screens/about";

const { Screen, Navigator} = createNativeStackNavigator();

export function StackRoutes(){
    return(
        <Navigator>
            <Screen 
                name="About" 
                component={About} 
            />
            <Screen 
                name="Help" 
                component={Help}
            />
        </Navigator>
    )
}