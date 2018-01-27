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

import { Text, View, TouchableOpacity } from 'react-native';

import Slide from './Slide';

import Icon from './Icon';

import ListViewGridLayoutExample from './ListViewGridLayoutExample';

const styles = require('./styles').default;

class ListViewDemo extends Component {
  render() {
    return (
      <Slide title="Grid layout with list views">
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.listViewDemoContainer}>
            <Icon name="error" color="red" width={40} height={40} />
            <Text style={styles.listViewDemoText}>
              removeClippedSubviews=&#123;true&#125;
            </Text>
            <ListViewGridLayoutExample removeClippedSubviews={true} />
          </View>
          <View style={styles.listViewDemoContainer}>
            <Icon name="check" color="green" width={40} height={40} />
            <Text style={styles.listViewDemoText}>
              removeClippedSubviews=&#123;false&#125;
            </Text>
            <ListViewGridLayoutExample removeClippedSubviews={false} />
          </View>
        </View>
      </Slide>
    );
  }
}

module.exports = ListViewDemo;
