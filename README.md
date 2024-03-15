# React Native on the Apple TV Platform

This demo Apple TV app includes the talk I've given at

- [Chain React](https://infinite.red/ChainReactConf) conference in July 2017
- [ReactJS Meetup SF](https://www.meetup.com/ReactJS-San-Francisco/events/241027768/) in February 2018

Includes the slides for my talk, and various demos of React Native Apple TV features.

2019: Now updated to use the [new Apple TV React Native NPM package `react-native-tvos`](https://www.npmjs.com/package/react-native-tvos)

2023: Now updated to build as an [Expo TV app](https://docs.expo.dev/guides/building-for-tv/).

Notes:

- This app was originally written back in 2017, and uses plain JS with class-based components. It should not be used as an example of how apps should be built today (with TypeScript, functional components, and React hooks). Remarkably few changes were needed to get it working with the latest React Native (0.73.6-0).
- Navigation makes use of the `TabBarIOS` component, which is Apple TV only (does not function on Android TV).

## Building

- Clone this repo
- Change to the top level directory
- Execute `yarn` or `npm install`

```sh
export EXPO_TV=1
npx expo prebuild
yarn ios # Build and run for Apple TV
```

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
