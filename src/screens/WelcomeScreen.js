import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
// import auth from '@react-native-firebase/auth';
// import firebase from '@react-native-firebase/app';
// import firestore from '@react-native-firebase/firestore';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useDispatch} from 'react-redux';
// import {login} from '../reducers';
import {AppStyles, Colors} from '../AppStyles';
import { BackgroundView } from '../components/BackgroundView';
import { Square } from '../components/Shapes';

// const WelcomeScreen = ({navigation}) => {
//   return <Text>This is WelcomeScreen</Text>;
// };

function WelcomeScreen({navigation}) {
  const [isLoading, setIsLoading] = useState(true);

  // const dispatch = useDispatch();

  useEffect(() => {
    tryToLoginFirst();
  }, []);

  async function tryToLoginFirst() {
    console.log('Not going to login because firebase isn\'t set up');
    // const email = await AsyncStorage.getItem('@loggedInUserID:key');
    // const password = await AsyncStorage.getItem('@loggedInUserID:password');
    // const id = await AsyncStorage.getItem('@loggedInUserID:id');
    // if (
    //   id != null &&
    //   id.length > 0 &&
    //   password != null &&
    //   password.length > 0
    // ) {
    //   auth()
    //     .signInWithEmailAndPassword(email, password)
    //     .then((user) => {
    //       firestore()
    //         .collection('users')
    //         .doc(id)
    //         .get()
    //         .then(function (doc) {
    //           var userDict = {
    //             id: id,
    //             email: email,
    //             profileURL: doc.photoURL,
    //             fullname: doc.data().fullname,
    //           };
    //           if (doc.exists) {
    //             dispatch(login(userDict));
    //             navigation.navigate('DrawerStack');
    //           } else {
    //             setIsLoading(false);
    //           }
    //         })
    //         .catch(function (error) {
    //           setIsLoading(false);
    //           const {code, message} = error;
    //           Alert.alert(message);
    //         });
    //     })
    //     .catch((error) => {
    //       const {code, message} = error;
    //       setIsLoading(false);
    //       Alert.alert(message);
    //       // For details of error codes, see the docs
    //       // The message contains the default Firebase string
    //       // representation of the error
    //     });
    //   return;
    // }
    // const fbToken = await AsyncStorage.getItem(
    //   '@loggedInUserID:facebookCredentialAccessToken',
    // );
    // if (id != null && id.length > 0 && fbToken != null && fbToken.length > 0) {
    //   const credential = firebase.auth.FacebookAuthProvider.credential(fbToken);
    //   auth()
    //     .signInWithCredential(credential)
    //     .then((result) => {
    //       var user = result.user;
    //       var userDict = {
    //         id: user.uid,
    //         fullname: user.displayName,
    //         email: user.email,
    //         profileURL: user.photoURL,
    //       };
    //       dispatch(login(userDict));
    //       navigation.navigate('DrawerStack');
    //     })
    //     .catch((error) => {
    //       setIsLoading(false);
    //     });
    //   return;
    // }
    // setIsLoading(false);

  }

  // if (isLoading == true) {
  //   return (
  //     <ActivityIndicator
  //       style={styles.spinner}
  //       size="large"
  //       color={AppStyles.color.tint}
  //     />
  //   );
  // }
  return (
    <View style={styles.containers.main}>
      <BackgroundView/>
      <Text style={styles.title}>Say hello to your new app</Text>
        <TouchableOpacity
          style={styles.containers.login}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.containers.signup}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containers: {
    main: {
      width: "100%",
      height: "100%",
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 150,
    },
    components: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 150,
    },
    login: {
      alignItems: 'center',
      width: AppStyles.buttonWidth.main,
      backgroundColor: Colors.yellow,
      borderRadius: AppStyles.borderRadius.main,
      padding: 10,
      marginTop: 30,
      position: 'absolute',
      left:     "15%",
      top:      "50%",
    },
    signup: {
      alignItems: 'center',
      width: AppStyles.buttonWidth.main,
      backgroundColor: Colors.white,
      borderRadius: AppStyles.borderRadius.main,
      padding: 8,
      borderWidth: 1,
      borderColor: Colors.yellow,
      marginTop: 15,
      position: 'absolute',
      left:     "15%",
      top:      "60%",
    }
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: 'bold',
    color: Colors.yellow,
    marginTop: 20,
    textAlign: 'center',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    position: 'absolute',
    left:     0,
    top:      "30%",
  },
  loginText: {
    color: Colors.white,
  },
  signupText: {
    color: Colors.yellow,
  },
  spinner: {
    marginTop: 200,
  },
});

export default WelcomeScreen;
