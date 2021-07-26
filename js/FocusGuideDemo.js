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
  TVFocusGuideView,
} from 'react-native';

import styles from './styles';

import StyledComponents from './StyledComponents';

const { SlideText } = StyledComponents;

const cellStyle = {
  width: 150,
  height: 50,
  margin: 10,
  justifyContent: 'center',
  alignItems: 'center',
};

const cellText = {
  color: 'white',
  fontSize: 30,
};

const fgStyle = {
  backgroundColor: '#8888FF',
};

const controlStyle = {
  backgroundColor: '#333333',
};

const data = [
  '1',
  'C1',
  '',
  '',
  'FG',
  'C1',
  'C1',
  '',
  '',
  'FG',
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
  'FG',
  '',
  '',
  '2',
  'C2',
  'FG',
  '',
  '',
  'C2',
  'C2',
];

class FocusGuideDemo extends Component<
  {},
  {
    focusGuidesPresent: boolean,
    destinations: Object[],
    destinationText: string,
  },
> {
  _button1: ?Object;

  _button2: ?Object;

  constructor(props: Object) {
    super(props);
    this.state = {
      focusGuidesPresent: false,
      destinations: [],
      destinationText: '',
    };
  }

  _setButton1(ref: Object) {
    this._button1 = ref;
  }

  _setButton2(ref: Object) {
    this._button2 = ref;
  }

  _toggleFocusGuideState() {
    const present = this.state.focusGuidesPresent;
    this.setState({
      focusGuidesPresent: !present,
    });
  }

  _setDestination(destinations: Object[], destinationText: string) {
    this.setState({
      destinations,
      destinationText,
    });
  }

  _renderRow(s: Object) {
    switch (s.item) {
      case 'C1':
        return (
          <TouchableOpacity
            onFocus={() => this._setDestination([this._button2], 'FG -> 2')}
            onPress={() => {}}
            style={[cellStyle, controlStyle]}
          />
        );
      case 'C2':
        return (
          <TouchableOpacity
            onFocus={() => this._setDestination([this._button1], 'FG -> 1')}
            onPress={() => {}}
            style={[cellStyle, controlStyle]}
          />
        );
      case '1':
        return (
          <TouchableOpacity
            ref={ref => this._setButton1(ref)}
            onFocus={() => this._setDestination([this._button2], 'FG -> 2')}
            onPress={() => {}}
            style={[cellStyle, controlStyle]}
          >
            <Text style={cellText}>1</Text>
          </TouchableOpacity>
        );
      case '2':
        return (
          <TouchableOpacity
            ref={ref => this._setButton2(ref)}
            onFocus={() => this._setDestination([this._button1], 'FG -> 1')}
            onPress={() => {}}
            style={[cellStyle, controlStyle]}
          >
            <Text style={cellText}>2</Text>
          </TouchableOpacity>
        );
      case 'FG':
        if (this.state.focusGuidesPresent) {
          return (
            <View style={[cellStyle, fgStyle]}>
              <TVFocusGuideView destinations={this.state.destinations} />
              <Text style={cellText}>{this.state.destinationText}</Text>
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
