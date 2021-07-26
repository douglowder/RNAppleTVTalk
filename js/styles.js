import { StyleSheet } from 'react-native';

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
  titleSmall: {
    fontSize: 60,
    color: blue,
    marginBottom: 50,
  },
  body: {
    fontSize: 60,
    color: gray,
  },
  bodySmall: {
    fontSize: 40,
    color: gray,
  },
  bodyUrl: {
    fontSize: 30,
    margin: 20,
    color: blue,
  },
  bulletedListContainer: {
    height: 500,
    width: 1200,
    margin: 0,
    alignItems: 'flex-start',
  },
  contentContainer: {
    height: 700,
    width: 1200,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listViewDemoContainer: {
    height: 600,
    width: 700,
    margin: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  listViewDemoText: {
    fontSize: 40,
    color: gray,
  },
  nextButtonContainer: {
    position: 'absolute',
    top: 540,
    right: 100,
  },
  prevButtonContainer: {
    position: 'absolute',
    top: 540,
    left: 100,
  },
  customEventDemoContainer: {
    height: 400,
    width: 600,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    position: 'absolute',
    bottom: 20,
    right: 40,
  },
  forest: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  textInput: {
    borderWidth: 0,
    backgroundColor: '#dddddd',
    borderColor: '#0f0f0f',
    flex: 1,
    margin: 20,
    fontSize: 35,
    padding: 4,
    maxHeight: 70,
    width: '100%',
  },
});
