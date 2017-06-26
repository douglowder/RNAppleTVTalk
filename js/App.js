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

import ListViewGridLayoutExample from './ListViewGridLayoutExample';

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
    const goToPageThree = () => Actions.pageThree({});
    return (
      <Slide title='This is Page Two'
             leftAction={goToPageOne}
             rightAction={goToPageThree}>
        <Text style={styles.body}>
          {this.props.text}
        </Text>
      </Slide>
    );
  }
}

class PageThree extends Component {
  render() {
    const goToPageTwo = () => Actions.pageTwo({text: 'Hello World!'});
    const goToPageFour = () => Actions.pageFour({});
    return (
      <Slide title='<ListViewGridLayoutExample removeClippedSubviews={true}/>'
             leftAction={goToPageTwo}
             rightAction={goToPageFour}>
        <ListViewGridLayoutExample removeClippedSubviews={true}/>
      </Slide>
    );
  }
}

class PageFour extends Component {
  render() {
    const goToPageThree = () => Actions.pageThree({});
    return (
      <Slide title='<ListViewGridLayoutExample removeClippedSubviews={false}/>'
             leftAction={goToPageThree}>
        <ListViewGridLayoutExample removeClippedSubviews={false}/>
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
          <Scene key="pageThree" component={PageThree} hideNavBar hideTabBar title="PageThree" />
          <Scene key="pageFour" component={PageFour} hideNavBar hideTabBar title="PageFour" />
        </Scene>
      </Router>
    )
  }
}



module.exports = App;
