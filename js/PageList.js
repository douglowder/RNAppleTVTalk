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

import ListViewGridLayoutExample from './ListViewGridLayoutExample';

const styles = require('./styles').default;

const pages = [
  {
    "key" : "pageOne",
    "title": "Page One",
    "body": (
      <Text style={styles.body}>Page One text</Text>
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
