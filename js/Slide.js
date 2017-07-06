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
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED
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
                    color='#07b'/>
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
                  color='#07b'/>
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
        <View style={styles.forest}>
        <Image style={{width: 752, height: 360}} source={{uri: 'forest2'}} />
        </View>
        <View style={styles.logo}>
        <Image style={{width: 90, height: 60}}
               source={{uri: 'SFDC_logo'}}
        />
        </View>
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
