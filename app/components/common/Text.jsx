import { Text as NativeText, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { FONT_SIZE } from '~/app/style/theme';

const fontKeysArray = Object.keys(FONT_SIZE);

const Text = ({
  children,
  variant,
  align,
  fontSize,
  style: externalStyle = {},
  ...rest
}) => {
  const styled = {
    ...styles.text,
    fontSize: FONT_SIZE[fontSize],
    ...externalStyle,
  };

  return (
    <NativeText style={[styled]} {...rest}>
      {children}
    </NativeText>
  );
};

Text.defaultProps = {
  style: {},
  variant: 'primary',
  align: 'left',
  fontSize: 'm',
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(PropTypes.any),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'muted', 'disabled']),
  fontSize: PropTypes.oneOf(fontKeysArray),
};

export default Text;

const styles = StyleSheet.create({
  text: {},
});
