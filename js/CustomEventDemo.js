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
  TVEventHandler,
} from 'react-native';

const styles = require('./styles').default;

class CustomEventDemo extends Component {

  state: {
    eventFired: string
  }

  _tvEventHandler: any;

  componentDidMount() {
    this.setState({
      eventFired: ''
    });
    this._enableTVEventHandler();
  }

  componentWillUnmount() {
    this._disableTVEventHandler();
  }

  _enableTVEventHandler() {
    this._tvEventHandler = new TVEventHandler();
    this._tvEventHandler.enable(this, function(cmp, evt) {
      evt && evt.eventType && cmp.setState({
        eventFired: evt.eventType
      });
    });
  }

  _disableTVEventHandler() {
    if (this._tvEventHandler) {
      this._tvEventHandler.disable();
      delete this._tvEventHandler;
    }
  }

  render() {
    return (
      <View style={styles.customEventDemoContainer}>
        <Text style={styles.body}>
          {this.state ? this.state.eventFired : ''}
        </Text>
      </View>
    );
  }
}

module.exports = CustomEventDemo;
