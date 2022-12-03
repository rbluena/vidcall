import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '~/app/screens/user/Home';

const UserNavigationStack = createNativeStackNavigator();

const UserNavigator = () => {
  return (
    <UserNavigationStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <UserNavigationStack.Screen name="Home" component={HomeScreen} />
    </UserNavigationStack.Navigator>
  );
};

export default UserNavigator;
