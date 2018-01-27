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
  LayoutAnimation,
  ScrollView,
  TabBarIOS,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import Slide from './Slide';

const pages = require('./PageList');

class SlideShow extends Component {
  state: {
    i: number
  };

  constructor(props: Object) {
    super(props);
    this.state = {
      i: 0
    };
  }

  leftAction() {
    var iNext = this.state.i - 1;
    this.nextSlide(iNext);
  }

  rightAction() {
    var iNext = this.state.i + 1;
    this.nextSlide(iNext);
  }

  nextSlide(iNext: number) {
    LayoutAnimation.spring();
    this.setState({
      i: iNext
    });
  }

  renderThankYou() {
    return (
      <Image
        resizeMode="contain"
        source={{ uri: 'thankyou' }}
        style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
      />
    );
  }

  render() {
    var leftAction = this.state.i > 0 ? this.leftAction : null;
    var rightAction = this.state.i < pages.length - 1 ? this.rightAction : null;
    return (
      <Slide
        title={pages[this.state.i].title}
        leftAction={leftAction && leftAction.bind(this)}
        rightAction={rightAction && rightAction.bind(this)}
      >
        {pages[this.state.i].body}
      </Slide>
    );
  }
}

module.exports = SlideShow;
