import 'react-native-gesture-handler'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Bemvindo from "./telas/bemvindo";
import Login from './telas/login';
import Cadastro from './telas/cadastro';
import Agendamento from './telas/agendamento';
import Homepage from './telas/homepage';
import { Provider } from 'react-redux';
import store from './redux/store';


export default function App() {

  const Stack = createStackNavigator()

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Bemvindo">
          <Stack.Screen name="Bemvindo" component={Bemvindo} options={{headerTitle: '', headerTransparent: true}}></Stack.Screen>
          <Stack.Screen name="Login" component={Login} options={{headerTitle: '', headerTransparent: true}}></Stack.Screen>
          <Stack.Screen name="Cadastro" component={Cadastro} options={{headerTitle: '', headerTransparent: true}}></Stack.Screen>
          <Stack.Screen name="Homepage" component={Homepage} options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen name="Agendamento" component={Agendamento} options={{headerTitle: '', headerTransparent: true}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
