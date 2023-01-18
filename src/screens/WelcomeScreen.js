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
import { AppStyles, Colors } from '../AppStyles';
import {app_title} from '../AppDetails.json'

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
      <View style={styles.containers.title}>
        <Text style={styles.title}>{app_title}</Text>
      </View>
      <View style={styles.containers.buttons}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  containers: {
    main: {
      width: "100%",
      height: "100%",
      alignItems: 'center',
      justifyContent: 'space-between',
      flex: 1,
      backgroundColor: AppStyles.color.background,
    },
    title: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      height: Dimensions.get('window').height / 2,
      width: "100%",
      backgroundColor: Colors.lightGrayYellow,
      marginBottom: 50,
    },
    login: {
      alignItems: 'center',
      width: AppStyles.buttonWidth.main,
      backgroundColor: AppStyles.color.primary,
      borderRadius: AppStyles.borderRadius.main,
      padding: 10,
      width: Dimensions.get('window').width / 1.5,
      // marginTop: 30,
    },
    signup: {
      alignItems: 'center',
      width: AppStyles.buttonWidth.main,
      backgroundColor: Colors.white,
      borderRadius: AppStyles.borderRadius.main,
      padding: 8,
      borderWidth: 3,
      borderColor: AppStyles.color.primary,
      width: Dimensions.get('window').width / 1.5,
      marginTop: 15,
    },
    buttons: {
      height: "50%",
      alignItems: 'center',
      justifyContent: 'flex-start',
      flex: 1,
    }
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: 'bold',
    color: AppStyles.color.primary,
    marginTop: 20,
    textAlign: 'center',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  loginText: {
    color: Colors.white,
    fontSize: 17,
  },
  signupText: {
    color: AppStyles.color.primary,
    fontSize: 17,
  },
  spinner: {
    marginTop: 200,
  },
});

export default WelcomeScreen;
