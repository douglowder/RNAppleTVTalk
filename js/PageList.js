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
  {
    "key" : "pageThree",
    "title": "ListView (broken)",
    "body": (
      <View>
      <Text style={[styles.body,{'font':'Courier'}]}>
        &lt;ListViewGridLayoutExample removeClippedSubviews=true&gt;
      </Text>
      <ListViewGridLayoutExample removeClippedSubviews={true}/>
      </View>
    )
  },
  {
    "key" : "pageFour",
    "title": "ListView (fixed)",
    "body": (
      <View>
      <Text style={styles.body}>
        &lt;ListViewGridLayoutExample removeClippedSubviews=false&gt;
      </Text>
      <ListViewGridLayoutExample removeClippedSubviews={false}/>
      </View>
    )
  },

];

module.exports = pages;
