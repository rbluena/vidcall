import { View, StyleSheet } from 'react-native';
import Logo from '~/app/components/common/Logo';
import { SCREEN } from '~/app/constants';
import { COLORS, FONT_SIZE, SPACING } from '~/app/style/theme';
import { BlockButton, Text } from '~/app/components/common';

const Landing = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
        <Text variant="primary" style={styles.logoText}>
          Vidcall
        </Text>
        <Text variant="muted" align="center">
          Best way to have online conversation with anyone from allover the
          world!
        </Text>
      </View>

      <View style={styles.footer}>
        <BlockButton label="Continue" outlined />
        <Text align="center" variant="muted">
          By tapping continue button, you agree and accept our terms and policy.
        </Text>
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
    paddingHorizontal: SCREEN.width * 0.1,
    height: SCREEN.height * 0.6,
    paddingTop: SCREEN.height * 0.2,
  },
  logoText: {
    fontSize: FONT_SIZE.xl,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: SPACING.s,
    marginVertical: SPACING.s,
    textTransform: 'uppercase',
    color: COLORS.slate[600],
  },
  footer: {
    width: SCREEN.width,
    height: SCREEN.height * 0.4,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: SCREEN.height * 0.08,
  },
});
