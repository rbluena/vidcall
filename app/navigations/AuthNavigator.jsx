import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from '~/app/screens/Landing';

const AuthenticationStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      initialRouteName="Landing"
      screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen name="Landing" component={LandingScreen} />
    </AuthenticationStack.Navigator>
  );
};

export default AuthNavigator;
