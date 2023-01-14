# Notes

This is a folder that should contain all the notes for the project. Notes you can come back to in the future to reference why and how you do/did something.

## Table Of Contents

- [Built With](#built-with)
  - [MacOS](#macos)

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
