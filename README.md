# React Native WordPress [![Build Status](https://travis-ci.org/PedroFelipe/react-native-wordpress.svg?branch=master)](https://travis-ci.org/PedroFelipe/react-native-wordpress)

![React Native WordPress](screenshot.png)

React Native WordPress connects with any WP installation through WordPress REST API to provide a native mobile experience for your blog or news website. It lists your latest posts, has tabs for categories and favorites.

## Installation

> `brew install node`<br>
> `brew install watchman`<br>
> `npm install -g react-native-cli`<br>
> `npm install`<br>

## Running

#### `npm start`

Runs your app in development mode with an interactive prompt.

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools.

#### `npm run lint`

Runs the ESLint linting.

#### `npm test`

Runs the Jest test runner.

## Folder Structure

```
react-native-wordpress/
  __tests__/
  ios/
  android/
  index.android.js
  index.ios.js
  package.json
  src/
    actions/
    components/
    constants/
    containers/
    css/
    decorators/
    reducers/
    index.css
    index.js
```

## What’s Inside?

* [React Native](https://facebook.github.io/react-native)
* [Redux](http://redux.js.org)
* [Babel](http://babeljs.io)
* [ESLint](http://eslint.org)
* [Jest](http://facebook.github.io/jest)

## Features
- [x] Latest Posts
- [x] Configurable tabs for categories
- [x] Favorite to save your posts to read it later

## TO-DO
- [ ] Increase tests coverage to 100%
- [ ] Push notifications
