import { View, StyleSheet } from 'react-native';
import Logo from '~/app/components/common/Logo';
import { SCREEN } from '~/app/constants';
import { COLORS, FONT_SIZE } from '~/app/style/theme';
import { BlockButton, Text } from '~/app/components/common';

const Landing = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
        <Text style={styles.logoText}>Vidcall</Text>
      </View>

      <View style={styles.footer}>
        <BlockButton label="Continue" />
      </View>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.slate[50],
  },
  header: {
    alignItems: 'center',
    width: SCREEN.width,
    height: SCREEN.height * 0.6,
  },
  logoText: {
    fontSize: FONT_SIZE.xxxl,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  footer: {
    width: SCREEN.width,
    height: SCREEN.height * 0.4,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: SCREEN.height * 0.08,
  },
});
