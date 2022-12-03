import { forwardRef } from 'react';
import { StyleSheet } from 'react-native';
import RNPhoneInput from 'react-native-phone-input';
import PropTypes from 'prop-types';
import { COLORS, SPACING } from '~/app/style/theme';

const PhoneInput = forwardRef(({ onChange, value, ...rest }, ref) => {
  return (
    <RNPhoneInput
      style={styles.wrapper}
      textStyle={styles.textStyle}
      flagStyle={styles.flagStyle}
      cancelText="Clear"
      ref={ref}
      onChangePhoneNumber={onChange}
      onPressFlag={() => {}}
      initialValue={value}
      autoFormat
      autoFocus
      {...rest}
    />
  );
});

PhoneInput.defaultProps = {};

PhoneInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default PhoneInput;

const styles = StyleSheet.create({
  wrapper: {
    borderColor: COLORS.slate[200],
    borderWidth: 1,
    borderRadius: 4,
    alignSelf: 'stretch',
    backgroundColor: COLORS.slate[200],
    padding: 4,
    // padding: SPACING.s,
  },
  textStyle: {
    fontSize: 20,
    marginLeft: SPACING.s,
  },
  flagStyle: {
    height: 32,
    width: 38,
    borderRadius: 4,
  },
});
