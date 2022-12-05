import { useRef, useMemo, useCallback, useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ContactCard from '~/app/components/contacts/ContactCard';

import { SCREEN } from '~/app/constants';
import { ScreenHeader } from '~/app/components/layout';
import { COLORS } from '~/app/style/theme';

const DATA = [
  {
    displayName: 'Rabii Luena',
    occupation: 'Software Developer',
    uid: '12ju8774uhfr94884',
    key: '12ju8774uhfr94884',
  },
  {
    displayName: 'Kelvin Luena',
    occupation: 'Software Developer',
    uid: '12ju8774uhfr94284',
    key: '12ju8774uhfr94284',
  },
  {
    displayName: 'Rabii Gadio',
    occupation: 'Full of shit',
    uid: '12ju8774uhfr91284',
    key: '12ju8774uhfr91284',
  },
  {
    displayName: 'Rabii Luena',
    occupation: 'Software Developer',
    uid: '12ju8714uhfr91284',
    key: '12ju8714uhfr91284',
  },
  {
    displayName: 'Rabii Luena',
    occupation: 'Software Developer',
    uid: '12hu8714uhfr91284',
    key: '12hu8714uhfr91284',
  },
];

const CALL_STATES = {
  idle: {
    statement: 'Call',
  },
  calling: {
    statement: 'Calling',
  },
  onCall: {
    statement: 'On call with',
  },
};
const Home = () => {
  const [callState, setCallState] = useState('idle');
  const [selectedUser, setSelectedUser] = useState(null);
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['20%', '50%', '90%'], []);

  const handleOpenSheet = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(0);
  }, []);

  const handleCloseSheet = useCallback(
    () => bottomSheetRef.current.close(),
    [],
  );

  const showSelectedUserDetails = user => {
    handleCloseSheet(); // Closing bottom sheet and opening inside useEffect
    setSelectedUser(() => user);
  };

  const callUser = which => {
    if (which === 'audio') {
      setCallState('calling');
    }

    if (which === 'video') {
      setCallState('calling');
    }
  };

  useEffect(() => {
    if (selectedUser !== null) {
      handleOpenSheet();
    }
  }, [selectedUser]);

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScreenHeader heading="Contacts" />

      <View style={{ paddingHorizontal: SCREEN.horizontalPadding }}>
        <FlatList
          renderItem={({ item }) => {
            return (
              <ContactCard
                key={item.uid}
                name={item.displayName}
                occupation={item.occupation}
                onPress={() => showSelectedUserDetails(item)}
              />
            );
          }}
          data={DATA}
          keyExtractor={item => item.uid}
        />
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        style={styles.bottomSheet}
        enablePanDownToClose>
        <View style={styles.contentContainer}>
          <Text
            style={{
              fontSize: 16,
              textAlign: 'center',
              padding: 4,
            }}>
            {CALL_STATES[callState].statement}{' '}
            {selectedUser?.displayName.split(' ')[0]}
          </Text>

          <View style={styles.buttonsContainer}>
            <Pressable
              style={[styles.sheetButton]}
              onPress={() => callUser('audio')}>
              <MaterialIcons name="phone" size={32} color="white" />
            </Pressable>
            <Pressable
              style={[styles.sheetButton]}
              onPress={() => callUser('video')}>
              <MaterialIcons name="videocam" size={32} color="white" />
            </Pressable>
            <Pressable style={[styles.sheetButton]}>
              <MaterialIcons name="info" size={32} color="white" />
            </Pressable>
          </View>
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.slate[800],
    height: '100%',
    paddingTop: 24,
    paddingHorizontal: SCREEN.horizontalPadding,
  },
  bottomSheet: {
    // paddingHorizontal: SCREEN.horizontalPadding,
  },

  sheetButton: {},
});
