import { StyleSheet, View, TextInput as Input } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';

import { COLORS, SPACING } from '~/app/style/theme';

const TextInput = ({
  placeholder,
  value,
  align,
  onChangeText,
  iconName = '',
  ...rest
}) => {
  return (
    <View style={styles.wrapper}>
      {iconName?.length ? (
        <MaterialIcons
          name={iconName}
          size={24}
          color={COLORS.slate[400]}
          style={{ marginLeft: 16 }}
        />
      ) : null}

      <Input
        style={[styles.textInput, { textAlign: align }]}
        onChangeText={onChangeText}
        {...rest}
      />
    </View>
  );
};

TextInput.defaultProps = {
  iconName: '',
  placeholder: '',
  value: '',
  align: 'left',
};

TextInput.propTypes = {
  iconName: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string,
  align: PropTypes.string,
};

export default TextInput;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: SPACING.s,
    padding: SPACING.s,
    backgroundColor: COLORS.slate[200],
    borderColor: COLORS.slate[200],
    textAlign: 'center',
    borderRadius: SPACING.xs,
  },
  textInput: {
    fontSize: 20,
    color: COLORS.slate[700],
  },
});
