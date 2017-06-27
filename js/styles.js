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
  bulletedListContainer: {
    height: 600,
    width: 1000,
    margin: 0,
    alignItems: 'flex-start',
  },
  contentContainer: {
    height: 800,
    width: 1000,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listViewDemoContainer: {
    height: 600,
    width: 700,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listViewDemoText: {
    fontSize: 40,
    color: 'white'
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
  logo: {
    position:'absolute',
    top:50,
    right:50
  }
});
