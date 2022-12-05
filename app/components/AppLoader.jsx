import { NavigationContainer } from '@react-navigation/native';
import PropTypes from 'prop-types';

const AppLoader = ({ children }) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

AppLoader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLoader;
