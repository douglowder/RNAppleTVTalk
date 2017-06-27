/*
 * PageList
 * @flow
 */
import React, {
  Component
} from 'react';

import {
  Text,
  View,
} from 'react-native';

import {
  Title,
  BulletedList,
} from './StyledComponents';

const styles = require('./styles').default;

const pages = [
  {
    "key" : "pageOne",
    "title": "Page One",
    "body": (
      <View>
      <BulletedList lines={[
                            'Line 1',
                            'Line 22',
                            'The quick brown fox jumped over the lazy dog many times'
                          ]} />
      </View>
    )
  },
  {
    "key" : "pageTwo",
    "title": "Page Two",
    "body": (
      <Text style={styles.body}>Page Two text</Text>
    )
  },
];

module.exports = pages;
