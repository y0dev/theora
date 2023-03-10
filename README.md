<br/>
<p align="center">
  <a href="https://github.com/y0Dev/Theora">
    <img src="images/logo.png" alt="Logo" width="500" height="200">
  </a>

  <h3 align="center">React Native Template</h3>

  <p align="center">
    Template to start off my react front-end projects.
    <br/>
    <br/>
    <a href="https://github.com/y0Dev/Theora"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
    <a href="https://github.com/y0Dev/Theora">View Demo</a>
    .
    <a href="https://github.com/y0Dev/Theora/issues">Report Bug</a>
    .
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/y0Dev/Theora/total) ![Contributors](https://img.shields.io/github/contributors/y0Dev/Theora?color=dark-green) ![Forks](https://img.shields.io/github/forks/y0Dev/Theora?style=social) ![Stargazers](https://img.shields.io/github/stars/y0Dev/Theora?style=social)

## Table Of Contents

- [About the Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Contributing](#contributing)
- [Authors](#author)

## About The Project

### App Designs

<a href="https://github.com/y0Dev/Theora">
	<img src="images/app_images/welcome.png" alt="welcome-screen" width="210" height="456" /></a>
<a href="https://github.com/y0Dev/Theora">
	<img src="images/app_images/signin.png" alt="sign-in-screen" width="210" height="456" /></a>
<a href="https://github.com/y0Dev/Theora">
	<img src="images/app_images/login.png" alt="login-screen" width="210" height="456" /></a>

Creating a frontend design can become long and redundant. I decide to create my own so that I don't have to continue to repeat the same process. While updating as I see new designs that catch my interest.

Here's why I created a template:

- Your time should be focused on creating something amazing. A project that solves a problem and helps others
- You shouldn't be doing the same tasks over and over from scratch
- You should element DRY principles to the rest of your life :smile:

## Built With

This project was built using the [expo-cli](https://docs.expo.dev/workflow/expo-cli/) rather than using react-native client.

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

#### npm

```sh
npm install npm@latest -g
```

#### eas-cli

```sh
npm install -g eas-cli
```

Must have a Expo account and logged in

### Installation

1. Clone the repo

```sh
git clone https://github.com/y0dev/theora.git
```

2. Install NPM packages

```sh
npm install
```

3. Expo Dependencies

```sh
npx expo install react-native-screens react-native-safe-area-context
```

4. Build Project

#### For Android

```sh
eas build --profile development --platform android
```

#### For iOS

```sh
eas build --profile development-simulator --platform ios
```

#### Building both Android and iOS

```sh
eas build --platform all
```

### Debug

Debugging can be found by going to the following page http://localhost:port#/debugger-ui/.

Check terminal for port number when running

```sh
npm run start
```

## Contributing

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Author

**Devontae Reid** - _Software Engineer_ - [Devontae Reid](https://www.devontaereid.com/)

## Appreciation/Shoutout

This design was inspired by [Lippy](https://dribbble.com/shots/6448625-lippy/attachments) and [React Native Starter Kit Template](https://instamobile.io/app-templates/react-native-starter-kit-firebase/)

Thanks to [Shaan Khan](https://readme.shaankhan.dev/) for creating this readme generation tool
