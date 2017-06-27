/*
 * StyledComponents
 * @flow
 */
import React, {
  Component
} from 'react';

import {
  Text,
  View,
} from 'react-native';

const styles = require('./styles').default;

class Title extends Component {
  render() {
    return (
      <Text style={styles.title}>{this.props.text}</Text>
    );
  }
}

class BulletedList extends Component {
  _renderLine(text: string, i: number) {
    return (
      <View key={"" + i}
            style={{flexDirection: 'row'}}>
        <Text style={styles.body}>{'\u2022'}</Text>
        <Text style={[styles.body,{flex: 1, paddingLeft: 5}]}>{text}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.bulletedListContainer}>
        {this.props.lines.map(this._renderLine.bind(this))}
      </View>
    );
  }
}

module.exports = {
  Title,
  BulletedList
};
