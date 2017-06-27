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
  TabBarIOS,
} from 'react-native';

import Slide from './Slide';

import ListViewGridLayoutExample from './ListViewGridLayoutExample';

import Icon from './Icon';

const styles = require('./styles').default;

const pages = require('./PageList');

class SlideShow extends Component {
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

class App extends Component {

  state: {
    selectedTab: number
  }

  componentDidMount() {
    this.setState({
      selectedTab: 0
    });
  }

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="white"
        tintColor="red"
        barTintColor="darkslateblue">
        <TabBarIOS.Item
          title="Slide Show"
          selected={this.state && this.state.selectedTab === 0}
          onPress={() => {
            this.setState({
              selectedTab: 0,
            });
          }}>
          <SlideShow />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="ListView demo"
          selected={this.state && this.state.selectedTab === 1}
          onPress={() => {
            this.setState({
              selectedTab: 1,
            });
          }}>
          <Slide title="Grid layout with list views">
            <View style={{flexDirection: 'row'}}>
            <View style={styles.listViewDemoContainer}>
              <Icon name='error'
                    color='red'
                    width={40}
                    height={40}/>
              <Text style={styles.listViewDemoText}>
                removeClippedSubviews=&#123;true&#125;
              </Text>
              <ListViewGridLayoutExample removeClippedSubviews={true} />
            </View>
            <View style={styles.listViewDemoContainer}>
              <Icon name='check'
                    color='green'
                    width={40}
                    height={40}/>
              <Text style={styles.listViewDemoText}>
                removeClippedSubviews=&#123;false&#125;
              </Text>
              <ListViewGridLayoutExample removeClippedSubviews={false} />
            </View>
            </View>
          </Slide>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}



module.exports = App;
