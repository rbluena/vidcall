import { StyleSheet, View, Alert } from 'react-native';
import { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import { toastMessage } from '~/app/utils/message';
import { BlockButton } from '~/app/components/common';
import { SCREEN } from '~/app/constants';

import { ScreenHeader } from '~/app/components/layout';
import { PhoneInput, TextInput } from '~/app/components/form';

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('+255');
  const [country, setCountry] = useState('Tanzania');
  const [code, setCode] = useState('');
  const [showVerificationInput, setShowVerificationInput] = useState(false);
  const [confirm, setConfirm] = useState(null);

  const phoneInputRef = useRef(null);

  const navigation = useNavigation();

  /**
   *
   */
  const signInWithPhoneNumber = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      setShowVerificationInput(true);
    } catch (error) {
      if (error.message) {
        toastMessage(error.message);
      }
      setShowVerificationInput(false);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   *
   * @returns void
   */
  const createUser = async () => {
    setIsLoading(true);

    //  We have already received the code, now user
    // has to verify the code sent via SMS.
    if (showVerificationInput) {
      if (code.length <= 2) {
        toastMessage(
          'Please enter valid verification code from received message!',
        );
        setIsLoading(false);
        return;
      }

      try {
        await confirm?.confirm(code);
        navigation.navigate('Account', { country });
      } catch (error) {
        toastMessage('Invalid verification code, please try again!');
      } finally {
        setIsLoading(false);
      }

      return;
    }

    // Here we request verification code after receiving the contact.
    if (!phoneInputRef.current?.isValidNumber(phoneNumber)) {
      Alert.alert('Error', 'The phone number entered is not valid!');
      setIsLoading(false);
      return;
    }

    //
    Alert.alert(
      'Confirm the phone',
      `A verification code will be sent to: ${phoneNumber}`,
      [
        {
          text: 'Edit number',
          onPress: () => {
            setIsLoading(false);
          },
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            signInWithPhoneNumber();
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ScreenHeader heading="Register" subheading="Create a new account" />

        <View style={styles.formContainer}>
          {!showVerificationInput ? (
            <PhoneInput
              ref={phoneInputRef}
              onChange={setPhoneNumber}
              value={phoneNumber}
              onChangeCountry={setCountry}
            />
          ) : (
            <TextInput
              placeholder="Enter code"
              onChangeText={setCode}
              value={code}
              align="center"
            />
          )}
        </View>
      </View>

      <BlockButton
        onPress={createUser}
        showLoader={isLoading}
        disabled={isLoading}
        label={showVerificationInput ? 'Verify' : 'Get verification code'}
      />
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  formContainer: {
    paddingHorizontal: SCREEN.horizontalPadding,
  },
  blockButton: {
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 16,
    borderRadius: 32,
    marginBottom: 16,
  },
});
