import React, {
  Component
 } from 'react';

import {
  Router,
  Scene,
  Actions
} from 'react-native-router-flux';

import {
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = require('./styles').default;

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

class App extends Component {
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



module.exports = App;
