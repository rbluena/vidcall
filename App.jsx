/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import AppLoader from '~/app/components/AppLoader';
import Landing from '~/app/screens/Landing';

export default function App() {
  return (
    <AppLoader>
      <Landing />
      <StatusBar style="auto" />
    </AppLoader>
  );
}
