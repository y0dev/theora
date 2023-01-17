# Notes

This is a folder that should contain all the notes for the project. Notes you can come back to in the future to reference why and how you do/did something.

## Table Of Contents

- [Built With](#built-with)
  - [MacOS](#macos)
  - [Android](#android)
- [React Native](#react-native)
  - [Navigation](#navigation)

## Built With

### MacOS

There is an error when trying to run the application because of react-native hot updates. What has to be done is you must update brew and install watchman.

To install:

```sh
brew update
brew install watchman
```

#### Warning

There may be a case where your brew is so out of date you have to pull the repo before updating brew.

You would use these commands:

```sh
git -C /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core fetch --unshallow
git -C /usr/local/Homebrew/Library/Taps/homebrew/homebrew-cask fetch --unshallow
```

### Android

Download build and add to simulator

<a href="https://docs.expo.dev/development/create-development-builds/">
	<img src="https://docs.expo.dev/static/images/dev-client/android-build.jpg" alt="welcome-screen" style="max-width:700px"/></a>

You can now install it on the Android Emulator by dragging .apk file into the emulator. When it's complete installing, navigate to the app launcher, find the app icon and open it.

## React Native

### Navigation

#### Cleaning the Navigation Stack

Information is from [React-Native Docs](https://reactnavigation.org/docs/navigation-prop/#reset)

In order to clean the navigation stack and assuming you are on the screen from which you want to navigate from:

If you are using ** react-navigation version v5 or newer ** you can use navigation.reset or CommonActions.reset:

```javascript
// Replace current navigation state with a new one,
// index value will be the current active route:

navigation.reset({
  index: 0,
  routes: [{ name: "Profile" }],
});
```
