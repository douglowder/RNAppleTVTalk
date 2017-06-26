import {
  StyleSheet,
} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1589ee',
  },
  title: {
    fontSize: 100,
    color: 'white'
  },
  body: {
    fontSize: 60,
    color: 'white'
  },
  contentContainer: {
    height: 800,
    width: 1000,
    margin: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonContainer: {
    position:'absolute',
    top:540,
    right:100,
  },
  prevButtonContainer: {
    position:'absolute',
    top:540,
    left:100
  },
});
