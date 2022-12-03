import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlockButton, Text } from '~/app/components/common';
import { SCREEN } from '~/app/constants';
// import { COLORS } from '~/app/style/theme';

import { ScreenHeader } from '~/app/components/layout';
import { PhoneInput, TextInput } from '~/app/components/form';

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('+255');
  const [code, setCode] = useState('');
  const [showVerificationInput, setShowVerificationInput] = useState(false);
  const [confirm, setConfirm] = useState(null);

  const phoneInputRef = useRef(null);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader heading="Register" subheading="Create a new account" />

      <KeyboardAvoidingView style={styles.formContainer}>
        {showVerificationInput ? (
          <PhoneInput
            ref={phoneInputRef}
            onChange={setPhoneNumber}
            value={phoneNumber}
          />
        ) : (
          <TextInput
            placeholder="Enter code"
            onChangeText={setCode}
            value={code}
            align="center"
          />
        )}
      </KeyboardAvoidingView>

      <BlockButton
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
    height: SCREEN.height * 0.5,
  },
  blockButton: {
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 16,
    borderRadius: 32,
    marginBottom: 16,
  },
});
