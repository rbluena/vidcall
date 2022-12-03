import { StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

const logoImage = require('../../../assets/images/icon_510.png');

const Logo = ({ style: externalStyle }) => (
  <Image style={[styles.image, externalStyle]} source={logoImage} />
);

Logo.defaultProps = {
  style: {},
};

Logo.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
};

export default Logo;

const styles = StyleSheet.create({
  image: {
    width: 72,
    height: 72,
  },
});
