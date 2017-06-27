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

const pages = require('./PageList');


class App extends Component {
  renderSlide(i: number) {
    return (
      <Slide title={pages[i].title}
             leftKey={(i > 0) ? pages[i-1].key : null}
             rightKey={(i < pages.length - 1 ? pages[i+1].key : null)}>
          {pages[i].body}
      </Slide>
    );
  }

  renderScene(i: number) {
    return (
      <Scene key={pages[i].key}
             component={() => this.renderSlide(i)}
             hideNavBar
             hideTabBar
             title={pages[i].title}
             initial={i === 0} />
    );
  }

  render() {
    var scenes = [];
    for (var i=0; i<pages.length; i++) {
      scenes.push(this.renderScene(i));
    }
    return (
      <Router>
        <Scene key="root">
          {scenes}
        </Scene>
      </Router>
    )
  }
}



module.exports = App;
