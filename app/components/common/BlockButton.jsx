import { StyleSheet, Text, Pressable, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { SCREEN } from '~/app/constants';
import { COLORS, FONT_SIZE, SPACING } from '~/app/style/theme';

const BlockButton = ({
  label,
  onPress,
  variant,
  outlined,
  showLoader,
  style: externalStyle,
  ...rest
}) => {
  let stylingLabel = {};
  let stylingWrapper = {};

  if (variant === 'primary') {
    stylingWrapper = {
      ...stylingWrapper,
      ...(outlined
        ? {
            borderColor: COLORS.primary[900],
            borderWidth: 2,
          }
        : {
            backgroundColor: COLORS.primary[900],
          }),
    };

    stylingLabel = {
      ...stylingLabel,
      color: outlined ? COLORS.primary[900] : COLORS.slate[0],
    };
  }

  return (
    <Pressable
      onPress={onPress}
      style={[styles.wrapper, stylingWrapper]}
      android_ripple={{
        radius: SPACING.xs,
        color: outlined ? COLORS.primary[900] : COLORS.slate[100],
      }}
      {...rest}>
      {showLoader ? (
        <ActivityIndicator
          color={outlined ? COLORS.primary[900] : COLORS.slate[0]}
          style={[styles.indicator]}
        />
      ) : (
        <Text style={[styles.label, stylingLabel]}>{label}</Text>
      )}
    </Pressable>
  );
};

BlockButton.defaultProps = {
  onPress: () => {},
  variant: 'primary',
  outlined: false,
  showLoader: false,
  style: {},
};

BlockButton.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'disabled']),
  onPress: PropTypes.func,
  outlined: PropTypes.bool,
  showLoader: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.any),
};

export default BlockButton;

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: SCREEN.width * 0.1,
    borderRadius: 32,
    marginBottom: 16,
  },
  label: {
    textAlign: 'center',
    color: COLORS.slate[0],
    fontSize: FONT_SIZE.m,
  },
  indicator: {},
});
