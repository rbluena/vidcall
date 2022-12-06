import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '~/app/screens/user/Home';
import OnCallScreen from '~/app/screens/calls/Call';

const UserNavigationStack = createNativeStackNavigator();

const UserNavigator = () => {
  return (
    <UserNavigationStack.Navigator
      initialRouteName="OnCall"
      screenOptions={{ headerShown: false }}>
      <UserNavigationStack.Screen name="Home" component={HomeScreen} />
      <UserNavigationStack.Screen name="OnCall" component={OnCallScreen} />
    </UserNavigationStack.Navigator>
  );
};

export default UserNavigator;
