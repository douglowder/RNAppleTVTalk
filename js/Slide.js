/*
 * Slide
 * @flow
 */
import React, {
  Component
} from 'react';

import {
  Image,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';

import {
  Router,
  Scene,
  Actions
} from 'react-native-router-flux';

const styles = require('./styles').default;

class Slide extends Component {
  leftAction() {
    this.props.leftKey && Actions.pop({});
  }

  rightAction() {
    this.props.rightKey && Actions.pushScene(this.props.rightKey,{});
  }

  renderLeft() {
    if (this.props.leftKey) {
      return (
          <TouchableHighlight onPress={() => this.leftAction()}
                              style={styles.prevButtonContainer}
                              activeOpacity={0.8}
                              underlayColor='white'>
            <Image style={{width: 100, height: 100}}
                 source={{uri: 'arrow-left'}}/>
          </TouchableHighlight>
        );
    } else {
      return null;
    }
  }

  renderRight() {
    if (this.props.rightKey) {
      return (
        <TouchableHighlight onPress={() => this.rightAction()}
                            style={styles.nextButtonContainer}
                            activeOpacity={0.8}
                            underlayColor='white'>
            <Image style={{width: 100, height: 100}}
                 source={{uri: 'arrow-right'}}/>
        </TouchableHighlight>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderLeft()}
        <Text style={styles.title}>{this.props.title}</Text>
        <View style={styles.contentContainer}>
          {this.props.children}
        </View>
        {this.renderRight()}
      </View>
    );
  }
}

module.exports = Slide;
