import {
  StyleSheet,
} from 'react-native';

const blue = '#00a1e0';
const gray = '#7c868d';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 100,
    color: blue,
  },
  body: {
    fontSize: 60,
    color: gray
  },
  bodySmall: {
    fontSize: 40,
    color: gray
  },
  bulletedListContainer: {
    height: 500,
    width: 1000,
    margin: 0,
    alignItems: 'flex-start',
  },
  contentContainer: {
    height: 700,
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
    color: gray
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
  customEventDemoContainer: {
    height: 400,
    width: 600,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    position:'absolute',
    bottom:20,
    right:40
  },
  forest: {
    position:'absolute',
    bottom:0,
    right:0
  }
});
