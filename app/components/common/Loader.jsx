import { StyleSheet, ActivityIndicator } from 'react-native';

const Loader = () => <ActivityIndicator style={[styles.indicator]} />;

export default Loader;

const styles = StyleSheet.create({
  indicator: {},
});
