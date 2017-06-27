import React, {
  Component
} from 'react';

import {
  Text,
  TouchableOpacity,
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
          <TouchableOpacity onPress={() => this.leftAction()} style={styles.prevButtonContainer}>
            <Text style={styles.body}>
              Prev
            </Text>
          </TouchableOpacity>
        );
    } else {
      return null;
    }
  }

  renderRight() {
    if (this.props.rightKey) {
      return (
        <TouchableOpacity onPress={() => this.rightAction()} style={styles.nextButtonContainer}>
          <Text style={styles.body}>
            Next
          </Text>
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
