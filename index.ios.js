import React, {
  Component
 } from 'react';

import {
  Router,
  Scene,
  Actions
} from 'react-native-router-flux';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

class PageOne extends Component {
  render() {
    const goToPageTwo = () => Actions.pageTwo({text: 'Hello World!'});
    return (
      <View style={styles.container}>
        <Text style={styles.title}>This is PageOne!</Text>
        <TouchableOpacity onPress={goToPageTwo} style={styles.nextButtonContainer}>
          <Text style={styles.body}>
            Next
          </Text>
        </TouchableOpacity>
      </View>

    )
  }
}

class PageTwo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>This is PageTwo!</Text>
        <Text style={styles.body}>{this.props.text}</Text>
      </View>
    )
  }
}

class SlideApp extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="pageOne" component={PageOne} hideNavBar hideTabBar title="PageOne" initial={true} />
          <Scene key="pageTwo" component={PageTwo} hideNavBar hideTabBar title="PageTwo" />
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
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

module.exports = SlideApp;

AppRegistry.registerComponent('RNAppleTVTalk', () => SlideApp);
