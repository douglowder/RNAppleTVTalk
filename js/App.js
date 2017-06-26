/*
 * App
 * @flow
 */
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
  View,
} from 'react-native';

import Slide from './Slide';

const styles = require('./styles').default;

class PageOne extends Component {
  render() {
    const goToPageTwo = () => Actions.pageTwo({text: 'Hello World!'});
    return (
      <Slide title='This is Page One'
             rightAction={goToPageTwo}>
        <Text style={styles.body}>
          Page One Text
        </Text>
      </Slide>
    );
  }
}

class PageTwo extends Component {
  render() {
    const goToPageOne = () => Actions.pageOne({});
    return (
      <Slide title='This is Page Two'
             leftAction={goToPageOne}>
        <Text style={styles.body}>
          {this.props.text}
        </Text>
      </Slide>
    );
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
