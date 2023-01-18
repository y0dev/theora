import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
// import Button from 'react-native-button';
import {AppStyles, Colors} from '../AppStyles';
// import firestore from '@react-native-firebase/firestore';
// import auth from '@react-native-firebase/auth';
// import {useDispatch} from 'react-redux';
// import {login} from '../reducers';


function SignupScreen({navigation}) {
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const dispatch = useDispatch();

  const onRegister = () => {
    console.log('Register has been disabled');
    // auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((response) => {
    //     const data = {
    //       email: email,
    //       fullname: fullname,
    //       phone: phone,
    //       appIdentifier: 'rn-android-universal-listings',
    //     };
    //     const user_uid = response.user._user.uid;
    //     firestore().collection('users').doc(user_uid).set(data);
    //     firestore()
    //       .collection('users')
    //       .doc(user_uid)
    //       .get()
    //       .then(function (user) {
    //         dispatch(login(user.data()));
    //         navigation.navigate('DrawerStack', {user});
    //       })
    //       .catch(function (error) {
    //         const {code, message} = error;
    //         Alert.alert(message);
    //       });
    //   })
    //   .catch((error) => {
    //     const {code, message} = error;
    //     Alert.alert(message);
    //   });
  };

  return (
    <View style={styles.containers.main}>
      <Text style={[styles.text.title, styles.text.leftTitle]}>Create new account</Text>
      <View style={styles.containers.textInput}>
        <TextInput
          style={styles.body}
          placeholder="Full Name"
          onChangeText={setFullname}
          value={fullname}
          placeholderTextColor={AppStyles.color.placeholder}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.containers.textInput}>
        <TextInput
          style={styles.body}
          placeholder="Phone Number"
          onChangeText={setPhone}
          value={phone}
          placeholderTextColor={AppStyles.color.placeholder}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.containers.textInput}>
        <TextInput
          style={styles.body}
          placeholder="E-mail Address"
          onChangeText={setEmail}
          value={email}
          placeholderTextColor={AppStyles.color.placeholder}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.containers.textInput}>
        <TextInput
          style={styles.body}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
          placeholderTextColor={AppStyles.color.placeholder}
          underlineColorAndroid="transparent"
        />
      </View>
      <TouchableOpacity
        style={[styles.containers.signup, {marginTop: 50}]}
        onPress={() => onRegister()}>
        <Text style={styles.text.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containers: {
    main: {
      flex: 1,
      alignItems: 'center',
    },
    signup: {
      alignItems: 'center',
      width: AppStyles.buttonWidth.main,
      backgroundColor: AppStyles.color.primary,
      borderRadius: AppStyles.borderRadius.main,
      padding: 10,
      marginTop: 30,
    },
    textInput: {
      width: AppStyles.textInputWidth.main,
      marginTop: 30,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: Colors.grey,
      borderRadius: AppStyles.borderRadius.main,
    }
  },
  text: {
    title: {
      fontSize: AppStyles.fontSize.title,
      fontWeight: 'bold',
      color: AppStyles.color.primary,
      marginTop: 20,
      marginBottom: 20,
    },
    leftTitle: {
      alignSelf: 'stretch',
      textAlign: 'left',
      marginLeft: 20,
    },
    content: {
      paddingLeft: 50,
      paddingRight: 50,
      textAlign: 'center',
      fontSize: AppStyles.fontSize.content,
      color: AppStyles.color.text,
    },
    buttonText: {
      color: Colors.white,
    },
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.text,
  },
});

export default SignupScreen;
