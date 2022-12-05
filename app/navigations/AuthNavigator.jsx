import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from '~/app/screens/Landing';
import RegisterScreen from '~/app/screens/auth/Register';
import AccountScreen from '~/app/screens/auth/Account';

const AuthenticationStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      initialRouteName="LandingScreen"
      screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen name="Landing" component={LandingScreen} />
      <AuthenticationStack.Screen name="Register" component={RegisterScreen} />
      <AuthenticationStack.Screen name="Account" component={AccountScreen} />
    </AuthenticationStack.Navigator>
  );
};

export default AuthNavigator;
