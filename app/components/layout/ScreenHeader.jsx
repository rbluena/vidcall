import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { Text } from '~/app/components/common';
import { SCREEN } from '~/app/constants';

const ScreenHeader = ({ heading, subheading }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text fontSize="xl" style={styles.heading}>
          {heading}
        </Text>
        {subheading?.length > 0 ? (
          <Text variant="muted">{subheading}</Text>
        ) : null}
      </View>
    </View>
  );
};

ScreenHeader.defaultProps = {
  subheading: '',
};

ScreenHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SCREEN.horizontalPadding,
    paddingVertical: 54,
  },
  heading: {
    fontWeight: 'bold',
  },
});
