import { StyleSheet, Text, View, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '~/app/style/theme';

const ContactCard = ({ onPress, name, occupation }) => {
  return (
    <Pressable style={styles.wrapper} onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.position}>{occupation}</Text>
        </View>
        <MaterialIcons size={28} name="chevron-right" />
      </View>
    </Pressable>
  );
};

ContactCard.propTypes = {
  onPress: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
};

export default ContactCard;

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.slate[200],
  },
  name: {
    fontSize: 18,
    color: COLORS.slate[800],
    fontWeight: 'bold',
  },
  position: {
    fontSize: 16,
    color: COLORS.slate[600],
  },
});
