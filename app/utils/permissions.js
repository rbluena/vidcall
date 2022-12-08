import { Alert, PermissionsAndroid } from 'react-native';
import { REQUIRED_PERMISSIONS } from '~/app/constants';

export default async function requestAllPermissions() {
  const granted = await PermissionsAndroid.requestMultiple(
    REQUIRED_PERMISSIONS,
  );

  const recordAudioGranted = granted[REQUIRED_PERMISSIONS[0]] === 'granted';
  const cameraGranted = granted[REQUIRED_PERMISSIONS[1]] === 'granted';

  if (!recordAudioGranted || !cameraGranted) {
    Alert.alert('Permissions required', 'All permissions should be granted!');

    throw new Error('All permissions should be granted!');
  }

  return true;
}
