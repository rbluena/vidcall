import { StyleSheet, Text, Pressable, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { SCREEN } from '~/app/constants';
import { COLORS } from '~/app/style/theme';

const BlockButton = ({
  label,
  onPress,
  outlined,
  showLoader,
  style: externalStyle,
  ...rest
}) => {
  const stylingLabel = [styles.label];
  const stylingWrapper = [styles.wrapper];
  const styleIndicator = [styles.indicator];

  if (outlined) {
    stylingWrapper.push({ borderColor: COLORS.slate[200] });
    stylingLabel.push({ color: COLORS.slate[800] });
    styleIndicator.push({ color: COLORS.slate[800] });
  }

  return (
    <Pressable onPress={onPress} style={stylingWrapper} {...rest}>
      {showLoader ? (
        <ActivityIndicator style={styleIndicator} />
      ) : (
        <Text style={stylingLabel}>{label}</Text>
      )}
    </Pressable>
  );
};

BlockButton.defaultProps = {
  onPress: () => {},
  outlined: false,
  showLoader: false,
  style: {},
};

BlockButton.propTypes = {
  label: PropTypes.string.isRequired,
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
    backgroundColor: 'blue',
    color: 'blue',
  },
  label: {
    textAlign: 'center',
  },
  indicator: {},
});
