import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from '~/app/screens/Landing';
import RegisterScreen from '~/app/screens/auth/Register';

const AuthenticationStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      initialRouteName="Register"
      screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen name="Landing" component={LandingScreen} />
      <AuthenticationStack.Screen name="Register" component={RegisterScreen} />
    </AuthenticationStack.Navigator>
  );
};

export default AuthNavigator;
