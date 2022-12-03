import { StyleSheet, Text, Pressable, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { SCREEN } from '~/app/constants';
import { COLORS, FONT_SIZE, SPACING } from '~/app/style/theme';

const BlockButton = ({
  label,
  onPress,
  outlined,
  showLoader,
  style: externalStyle,
  ...rest
}) => {
  let stylingLabel = {};
  let stylingWrapper = {};
  let styleIndicator = {};

  if (outlined) {
    stylingWrapper = { ...stylingWrapper, borderColor: COLORS.slate[200] };
    styleIndicator = { ...styleIndicator, color: COLORS.slate[800] };
    stylingLabel = { ...stylingLabel, color: COLORS.slate[800] };
  }

  return (
    <Pressable
      onPress={onPress}
      style={[styles.wrapper, stylingWrapper]}
      android_ripple={{
        radius: SPACING.s,
        color: COLORS.slate[100],
      }}
      {...rest}>
      {showLoader ? (
        <ActivityIndicator style={[styles.indicator, styleIndicator]} />
      ) : (
        <Text style={[styles.label, stylingLabel]}>{label}</Text>
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
    color: COLORS.slate[0],
    fontWeight: 'bold',
    fontSize: FONT_SIZE.m,
  },
  indicator: {},
});
