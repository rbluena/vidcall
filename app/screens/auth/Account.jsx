import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import PropTypes from 'prop-types';
import Avatar from '~/app/components/common/Avatar';
import { ScreenHeader } from '~/app/components/layout';
import { BlockButton } from '~/app/components/common';
import { SCREEN } from '~/app/constants';
import { TextInput } from '~/app/components/form';
import { uploadProfileImage } from '~/app/lib/firebase/storage';
import { toastMessage } from '~/app/utils/message';
import {
  createNewUser,
  currentUser,
} from '~/app/lib/firebase/collections/users.collection';
import { useNavigation } from '@react-navigation/native';

const Account = ({ routes }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [displayName, setDisplayName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const country = routes?.params?.country ?? '';

  /**
   * Selecting user's profile image from phone storage
   */
  const loadProfileImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  /**
   *
   * @returns void
   */
  const saveProfileDetails = async () => {
    setIsLoading(true);

    if (displayName.length === 0) {
      toastMessage('You need to provide your name.');
      setIsLoading(false);
      return;
    }

    const userData = {
      displayName,
      userId: currentUser.uid,
      phoneNumber: currentUser.phoneNumber,
      occupation,
      country,
    };

    try {
      if (profileImage?.length > 0) {
        userData.photoURL = await uploadProfileImage({
          uid: currentUser.uid,
          filePath: profileImage,
        });
      }

      await createNewUser(userData);

      navigation.navigate('Home');
    } catch (error) {
      //  TODO: We might want to provide this error information to an error reporting service
      toastMessage(
        'There was an error on our end. You can try it again later!',
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <View>
        <ScreenHeader
          heading={displayName?.length ? displayName : 'Account'}
          subheading="This is your public information."
        />
        <View style={{ paddingHorizontal: SCREEN.horizontalPadding }}>
          <Avatar
            initial={displayName[0]?.toUpperCase()}
            size="l"
            uri={profileImage}
            rounded
            isEditable
            loadProfileImage={loadProfileImage}
          />
        </View>

        {/* start: Form input details */}
        <View style={{ paddingHorizontal: SCREEN.horizontalPadding }}>
          <TextInput
            placeholder="Name"
            onChangeText={setDisplayName}
            value={displayName}
            autoFocus
          />

          <TextInput
            placeholder="Occupation"
            onChangeText={setOccupation}
            value={occupation}
          />
        </View>
        {/* end: Form input details */}
      </View>

      <BlockButton
        label="Complete"
        disabled={isLoading}
        onPress={saveProfileDetails}
      />
    </SafeAreaProvider>
  );
};

Account.defaultProps = {
  routes: {},
};

Account.propTypes = {
  routes: PropTypes.any,
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
