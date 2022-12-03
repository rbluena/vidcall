/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import AppLoader from '~/app/components/AppLoader';
import Landing from '~/app/screens/Landing';
import useAppInit from '~/app/hooks/useAppInit';
import { AuthNavigator, UserNavigator } from '~/app/navigations';

export default function App() {
  const { isNewUser } = useAppInit();

  return (
    <AppLoader>
      {isNewUser ? <AuthNavigator /> : <UserNavigator />}
      <Landing />
      <StatusBar style="auto" />
    </AppLoader>
  );
}
