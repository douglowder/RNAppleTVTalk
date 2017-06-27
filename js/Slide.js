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

import {
  Title,
} from './StyledComponents';

import Icon from './Icon';

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
          <TouchableOpacity onPress={() => this.leftAction()}
                              style={styles.prevButtonContainer}
                              activeOpacity={0.8}
                              underlayColor='white'>
            <View>
              <Icon width={100}
                    height={100}
                    name='left'
                    color='white'/>
            </View>
          </TouchableOpacity>
        );
    } else {
      return null;
    }
  }

  renderRight() {
    if (this.props.rightKey) {
      return (
        <TouchableOpacity onPress={() => this.rightAction()}
                            style={styles.nextButtonContainer}
                            activeOpacity={0.8}
                            underlayColor='white'>
          <View>
            <Icon width={100}
                  height={100}
                  name='right'
                  color='white'/>
          </View>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderLeft()}
        <Title text={this.props.title}/>
        <View style={styles.contentContainer}>
          {this.props.children}
        </View>
        {this.renderRight()}
      </View>
    );
  }
}

module.exports = Slide;
