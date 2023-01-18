import { StackActions, NavigationActions } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
// import Button from 'react-native-button';
import {AppStyles, Colors, ContainerStyles, TextStyle} from '../AppStyles';
// import firebase from '@react-native-firebase/app';
// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
// } from '@react-native-google-signin/google-signin';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useDispatch} from 'react-redux';
// const FBSDK = require('react-native-fbsdk');
// const {LoginManager, AccessToken} = FBSDK;
// import {login} from '../reducers';


function LoginScreen({navigation}) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       '763342324681-petgvkkeltcfi9qmgr8um8ohak81l953.apps.googleusercontent.com',
  //   });
  // }, []);

  const onPressLogin = () => {
    if (email.length <= 0 || password.length <= 0) {
      Alert.alert('Please fill out the required fields.');
      return;
    }

    // Reset the drawer stack
    navigation.reset({
      index: 0,
      routes: [{ name: 'DrawerStack' }],
    });
    
    // auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then((response) => {
    //     const user_uid = response.user._user.uid;
    //     firestore()
    //       .collection('users')
    //       .doc(user_uid)
    //       .get()
    //       .then(function (user) {
    //         if (user.exists) {
    //           AsyncStorage.setItem('@loggedInUserID:id', user_uid);
    //           AsyncStorage.setItem('@loggedInUserID:key', email);
    //           AsyncStorage.setItem('@loggedInUserID:password', password);
    //           dispatch(login(user.data()));
    //           navigation.navigate('DrawerStack');
    //         } else {
    //           Alert.alert('User does not exist. Please try again.');
    //         }
    //       })
    //       .catch(function (error) {
    //         const {message} = error;
    //         Alert.alert(message);
    //       });
    //   })
    //   .catch((error) => {
    //     const {message} = error;
    //     Alert.alert(message);
    //     // For details of error codes, see the docs
    //     // The message contains the default Firebase string
    //     // representation of the error
    //   });
  };

  const onPressFacebook = () => {
    // LoginManager.logInWithPermissions([
    //   'public_profile',
    //   'user_friends',
    //   'email',
    // ]).then(
    //   (result) => {
    //     if (result.isCancelled) {
    //       Alert.alert('Whoops!', 'You cancelled the sign in.');
    //     } else {
    //       AccessToken.getCurrentAccessToken().then((data) => {
    //         const credential = firebase.auth.FacebookAuthProvider.credential(
    //           data.accessToken,
    //         );
    //         const accessToken = data.accessToken;
    //         auth()
    //           .signInWithCredential(credential)
    //           .then((result) => {
    //             var user = result.user;
    //             AsyncStorage.setItem(
    //               '@loggedInUserID:facebookCredentialAccessToken',
    //               accessToken,
    //             );
    //             AsyncStorage.setItem('@loggedInUserID:id', user.uid);
    //             var userDict = {
    //               id: user.uid,
    //               fullname: user.displayName,
    //               email: user.email,
    //               profileURL: user.photoURL,
    //             };
    //             var userData = {
    //               ...userDict,
    //               appIdentifier: 'rn-android-universal-listings',
    //             };
    //             firestore().collection('users').doc(user.uid).set(userData);
    //             dispatch(login(userDict));
    //             navigation.navigate('DrawerStack', {
    //               user: userDict,
    //             });
    //           })
    //           .catch((error) => {
    //             alert('Please try again! ' + error);
    //           });
    //       });
    //     }
    //   },
    //   (error) => {
    //     Alert.alert('Sign in error', error);
    //   },
    // );
  };

  const onPressGoogle = () => {
    // setLoading(true);
    // GoogleSignin.signIn()
    //   .then((data) => {
    //     console.log('data', data);
    //     // Create a new Firebase credential with the token
    //     const credential = firebase.auth.GoogleAuthProvider.credential(
    //       data.idToken,
    //     );
    //     // Login with the credential
    //     const accessToken = data.idToken;
    //     AsyncStorage.setItem(
    //       '@loggedInUserID:googleCredentialAccessToken',
    //       accessToken,
    //     );
    //     return auth().signInWithCredential(credential);
    //   })
    //   .then((result) => {
    //     setLoading(false);
    //     var user = result.user;
    //     AsyncStorage.setItem('@loggedInUserID:id', user.uid);
    //     var userDict = {
    //       id: user.uid,
    //       fullname: user.displayName,
    //       email: user.email,
    //       photoURL: user.photoURL,
    //     };
    //     var data = {
    //       ...userDict,
    //       appIdentifier: 'rn-android-universal-listings',
    //     };
    //     console.log('data', data);
    //     firestore().collection('users').doc(user.uid).set(data);
    //     dispatch(login(userDict));
    //     navigation.navigate('DrawerStack', {
    //       user: userDict,
    //     });
    //   })
    //   .catch((error) => {
    //     const {message} = error;
    //     setLoading(false);
    //     Alert.alert(message);
    //   });
  };

  return (
    <View style={styles.container}>
      <Text style={[TextStyle.title, TextStyle.leftTitle]}>Sign In</Text>
      <View style={ContainerStyles.textInput}>
        <TextInput
          style={TextStyle.body}
          placeholder="E-mail or phone number"
          onChangeText={setEmail}
          value={email}
          placeholderTextColor={Colors.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={ContainerStyles.textInput}>
        <TextInput
          style={TextStyle.body}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          placeholderTextColor={Colors.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      <TouchableOpacity
        style={ContainerStyles.login}
        onPress={() => onPressLogin()}>
        <Text style={TextStyle.buttonText}>Log in</Text>
      </TouchableOpacity>
      <Text style={TextStyle.or}>OR</Text>
      <TouchableOpacity
        style={ContainerStyles.facebook}
        onPress={() => onPressFacebook()}>
        <Text style={TextStyle.facebook}>Login with Facebook</Text>
      </TouchableOpacity>
      {/* {loading ? (
        <ActivityIndicator
          style={{marginTop: 30}}
          size="large"
          animating={loading}
          color={AppStyles.color.tint}
        />
      ) : (
        <GoogleSigninButton
          style={styles.googleContainer}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={onPressGoogle}
        />
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: AppStyles.color.background,
  },
});

export default LoginScreen;
