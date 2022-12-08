/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import AppLoader from '~/app/components/AppLoader';
import useAppInit from '~/app/hooks/useAppInit';
import { AuthNavigator, UserNavigator } from '~/app/navigations';

export default function App() {
  const { isCompleteRegisteredUser, isLoadingComplete } = useAppInit();

  return (
    <AppLoader>
      {isCompleteRegisteredUser && isLoadingComplete ? (
        <UserNavigator />
      ) : (
        <AuthNavigator />
      )}
      <StatusBar style="auto" />
    </AppLoader>
  );
}
