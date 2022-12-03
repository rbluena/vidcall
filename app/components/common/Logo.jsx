import { StyleSheet, Image } from 'react-native';
import imageURI from '~/assets/images/icon_small.png';

const Logo = () => <Image style={styles.image} source={{ uri: imageURI }} />;

export default Logo;

const styles = StyleSheet.create({
  container: {},
  image: {},
  text: {},
});
