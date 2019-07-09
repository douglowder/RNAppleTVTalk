/*
 * Copyright (c) 2017-present, salesforce.com, inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided
 * that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of conditions and the
 * following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and
 * the following disclaimer in the documentation and/or other materials provided with the distribution.
 *
 * Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or
 * promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 'AS IS' AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 *
 * @flow
 */
import React, { Component } from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  TVEventHandler,
  TVMenuControl
} from 'react-native';

import Game2048 from './Game2048';

const styles = require('../styles').default;

class CustomEventDemo extends Component<
  {},
  {
    eventFired: string
  }
> {
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
      evt &&
        evt.eventType &&
        evt.eventType !== 'blur' &&
        evt.eventType !== 'focus' &&
        cmp.setState({
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
      <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
        <View style={styles.listViewDemoContainer}>
          <TouchableOpacity>
            <Text style={styles.body}>TVEventHandler</Text>
          </TouchableOpacity>
          <View style={styles.listViewDemoContainer}>
            <Text style={styles.body}>
              {this.state ? this.state.eventFired : ''}
            </Text>
          </View>
        </View>
        <View style={styles.listViewDemoContainer}>
          <TouchableOpacity>
            <Text style={styles.body}>2048 game</Text>
          </TouchableOpacity>
          <Game2048 />
        </View>
        <View style={styles.listViewDemoContainer}>
          <TouchableOpacity>
            <Text style={styles.body}>TVMenuControl</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center' }}
            onPress={TVMenuControl.enableTVMenuKey}
          >
            <Text style={styles.body}>Enable menu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center' }}
            onPress={TVMenuControl.disableTVMenuKey}
          >
            <Text style={styles.body}>Disable menu</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

module.exports = CustomEventDemo;
