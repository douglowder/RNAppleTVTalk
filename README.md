# React Native on the Apple TV Platform

This demo Apple TV app includes the talk I've given at

- [Chain React](https://infinite.red/ChainReactConf) conference in July 2017
- [ReactJS Meetup SF](https://www.meetup.com/ReactJS-San-Francisco/events/241027768/) in February 2018

Includes the slides for my talk, and various demos of React Native Apple TV features.

Now updated to use the [new Apple TV React Native NPM package `react-native-tvos`](https://www.npmjs.com/package/react-native-tvos)

## Building

- Clone this repo
- Change to the top level directory
- Execute `yarn` or `npm install`
- Execute `yarn run bundle_ios_dev` to build the JS bundle
- Start the packager in a separate window with `yarn start`
- Change to the `ios` directory
- `pod install`
- Open `RNAppleTVTalk.xcworkspace` in Xcode
- Build and run

## Running

- In the Apple TV simulator, use cmd-shift-R to bring up the view of the TV remote
- Use the keyboard:
  - arrow keys to change focus from one view to the next
  - return key presses the currently selected view
  - escape key maps to the menu button on the remote

## Copyrights

- Code: Copyright (c) 2017-present, [Salesforce](http://salesforce.com), except where noted in some demo files imported from [Facebook](https://facebook.com), [Formidable Labs](https://formidable.com), and others.
- Media:
  - Images are owned by Salesforce, Facebook, Formidable Labs.
  - Video is owned by [Voices Of Music](http://voicesofmusic.org)
