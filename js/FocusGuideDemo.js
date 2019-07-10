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
  FlatList,
  TouchableOpacity,
  TVFocusGuideView
} from 'react-native';

import styles from './styles';

import StyledComponents from './StyledComponents';

const { SlideText } = StyledComponents;

const cellStyle = {
  width: 50,
  height: 50,
  margin: 10,
  justifyContent: 'center',
  alignItems: 'center'
};

const cellText = {
  color: 'white',
  fontSize: 30
};

const fgStyle = {
  backgroundColor: '#8888FF'
};

const controlStyle = {
  backgroundColor: '#333333'
};

const data = [
  '1',
  'C',
  '',
  '',
  'FG2',
  'C',
  'C',
  '',
  '',
  'FG2',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'FG1',
  '',
  '',
  '2',
  'C',
  'FG1',
  '',
  '',
  'C',
  'C'
];

class FocusGuideDemo extends Component<
  {},
  {
    focusGuidesPresent: boolean
  }
> {
  destination1: ?Object;

  destination2: ?Object;

  constructor(props: Object) {
    super(props);
    this.state = {
      focusGuidesPresent: true
    };
  }

  _toggleFocusGuideState() {
    if (this.state.focusGuidesPresent) {
      this.setState({
        focusGuidesPresent: false
      });
    } else {
      this.setState({
        focusGuidesPresent: true
      });
    }
  }

  _renderRow(s: Object) {
    switch (s.item) {
      case 'C':
        return (
          <TouchableOpacity
            onPress={() => {}}
            style={[cellStyle, controlStyle]}
          />
        );
      case '1':
        return (
          <TouchableOpacity
            ref={component => (this.destination1 = component)}
            onPress={() => {}}
            style={[cellStyle, controlStyle]}
          >
            <Text style={cellText}>1</Text>
          </TouchableOpacity>
        );
      case '2':
        return (
          <TouchableOpacity
            ref={component => (this.destination2 = component)}
            onPress={() => {}}
            style={[cellStyle, controlStyle]}
          >
            <Text style={cellText}>2</Text>
          </TouchableOpacity>
        );
      case 'FG1':
        if (this.state.focusGuidesPresent) {
          const destinations = this.destination1 ? [this.destination1] : [];
          return (
            <View style={[cellStyle, fgStyle]}>
              <TVFocusGuideView destinations={destinations} />
              <Text style={cellText}>FG1</Text>
            </View>
          );
        } else {
          return <View style={cellStyle} />;
        }
      case 'FG2':
        if (this.state.focusGuidesPresent) {
          const destinations = this.destination1 ? [this.destination2] : [];
          return (
            <View style={[cellStyle, fgStyle]}>
              <TVFocusGuideView destinations={destinations} />
              <Text style={cellText}>FG2</Text>
            </View>
          );
        } else {
          return <View style={cellStyle} />;
        }
      case '':
      default:
        return <View style={cellStyle} />;
    }
  }

  render() {
    return (
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={() => this._toggleFocusGuideState()}>
          <SlideText
            text={
              this.state.focusGuidesPresent
                ? 'Disable focus guides'
                : 'Enable focus guides'
            }
          />
        </TouchableOpacity>
        <FlatList
          data={data}
          extraData={this.state}
          numColumns={5}
          renderItem={s => this._renderRow(s)}
          keyExtractor={(s, i) => `${i}`}
        />
      </View>
    );
  }
}

module.exports = FocusGuideDemo;
