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

import { View } from 'react-native';

import Svg, { Path } from 'react-native-svg';

const paths = {
  arrowdown:
    'M4.4 14.3c-.3.4-.3.9 0 1.3l7 6.7c.3.4.9.4 1.2 0l7-6.7c.4-.4.4-.9 0-1.3l-1.3-1.2c-.3-.4-.9-.4-1.3 0l-2.1 2.1c-.4.4-1.1.1-1.1-.4V2.3c0-.5-.4-.9-.9-.9h-1.8c-.5 0-.9.5-.9.9v12.5c0 .5-.7.8-1.1.4L7 13.1c-.4-.4-1-.4-1.3 0l-1.3 1.2z',
  arrowup:
    'M19.1 9.7c.4-.4.4-.9 0-1.3l-6.9-6.7c-.4-.4-.9-.4-1.3 0L4 8.4c-.4.4-.4.9 0 1.3l1.3 1.2c.3.4.9.4 1.3 0l2.1-2.1c.4-.4 1-.1 1 .4v12.5c0 .5.5.9 1 .9h1.8c.5 0 .9-.5.9-.9V9.2c0-.5.7-.8 1-.4l2.2 2.1c.4.4.9.4 1.3 0l1.2-1.2z',
  check:
    'M8.8 19.6L1.2 12c-.3-.3-.3-.8 0-1.1l1-1c.3-.3.8-.3 1 0L9 15.7c.1.2.5.2.6 0L20.9 4.4c.2-.3.7-.3 1 0l1 1c.3.3.3.7 0 1L9.8 19.6c-.2.3-.7.3-1 0z',
  down:
    'M3.8 6.5h16.4c.4 0 .8.6.4 1l-8 9.8c-.3.3-.9.3-1.2 0l-8-9.8c-.4-.4-.1-1 .4-1z',
  error:
    'M12 .9C5.9.9.9 5.9.9 12s5 11.1 11.1 11.1 11.1-5 11.1-11.1S18.1.9 12 .9zm5.5 11.9c-.1.3-.3.6-.7.6H7.2c-.4 0-.6-.2-.7-.6v-1.6c.1-.3.3-.6.7-.6h9.6c.4 0 .6.3.7.6v1.6z',
  left:
    'M17.5 3.8v16.4c0 .4-.6.8-1 .4l-9.8-8c-.3-.3-.3-.9 0-1.2l9.8-8c.4-.4 1-.1 1 .4z',
  right:
    'M6.5 20.2V3.8c0-.4.6-.8 1-.4l9.8 8c.3.3.3.9 0 1.2l-9.8 8c-.4.4-1 .1-1-.4z',
  salesforce1:
    'M10 5.5c.8-.8 1.9-1.3 3.1-1.3 1.5 0 2.9.9 3.7 2.2.6-.3 1.3-.5 2-.5 2.9 0 5.2 2.3 5.2 5.2s-2.3 5.1-5.2 5.1h-1c-.6 1.1-1.9 1.9-3.3 1.9-.6 0-1.2-.1-1.7-.4-.6 1.5-2.1 2.6-3.9 2.6-1.9 0-3.5-1.1-4.1-2.8-.3 0-.6.1-.8.1-2.2 0-4-1.8-4-4 0-1.5.7-2.8 1.9-3.5-.2-.5-.3-1.2-.3-1.8 0-2.6 2-4.7 4.6-4.7 1.6.1 3 .8 3.8 1.9'
};

const viewBox = '0 0 24 24';

export default class Icon extends Component {
  render() {
    const path = paths[this.props.name];
    return (
      <Svg
        height={this.props.height ? this.props.height : 20}
        width={this.props.width ? this.props.width : 20}
        viewBox={viewBox}
        style={this.props.style}
      >
        <Path d={path} fill={this.props.color} />
      </Svg>
    );
  }
}
