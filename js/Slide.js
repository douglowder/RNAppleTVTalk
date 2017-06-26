import React, {
  Component
} from 'react';

import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = require('./styles').default;

class Slide extends Component {
  renderLeft() {
    if(this.props.leftAction) {
      return (
        <TouchableOpacity onPress={this.props.leftAction} style={styles.prevButtonContainer}>
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
    if(this.props.rightAction) {
      return (
        <TouchableOpacity onPress={this.props.rightAction} style={styles.nextButtonContainer}>
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
