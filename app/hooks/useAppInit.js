import { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import useAuthInit from './useAuthInit';

export default function useAppInit() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const { initializing, currentUser } = useAuthInit();

  // Loading all resources required and auth checking prior to rendering
  useEffect(() => {
    async function loadResourcesAndData() {
      try {
        SplashScreen.preventAutoHideAsync();
      } catch (error) {
        // TODO: Log with sentry in production
        console.log(error);
      } finally {
        if (!initializing) {
          setIsLoadingComplete(false);
          SplashScreen.hideAsync();
        }
      }
    }

    loadResourcesAndData();
  }, [initializing]);

  return {
    isLoadingComplete,
    isNewUser: currentUser?.displayName?.length === 0,
  };
}
