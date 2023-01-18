import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
// import Button from 'react-native-button';
import {AppStyles, Colors, ContainerStyles, TextStyle} from '../AppStyles';
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
      <Text style={[TextStyle.title, TextStyle.leftTitle]}>Create new account</Text>
      <View style={ContainerStyles.textInput}>
        <TextInput
          style={TextStyle.body}
          placeholder="Full Name"
          onChangeText={setFullname}
          value={fullname}
          placeholderTextColor={AppStyles.color.placeholder}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={ContainerStyles.textInput}>
        <TextInput
          style={TextStyle.body}
          placeholder="Phone Number"
          onChangeText={setPhone}
          value={phone}
          placeholderTextColor={AppStyles.color.placeholder}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={ContainerStyles.textInput}>
        <TextInput
          style={TextStyle.body}
          placeholder="E-mail Address"
          onChangeText={setEmail}
          value={email}
          placeholderTextColor={AppStyles.color.placeholder}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={ContainerStyles.textInput}>
        <TextInput
          style={TextStyle.body}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
          placeholderTextColor={AppStyles.color.placeholder}
          underlineColorAndroid="transparent"
        />
      </View>
      <TouchableOpacity
        style={[ContainerStyles.signup, {marginTop: 50}]}
        onPress={() => onRegister()}>
        <Text style={TextStyle.buttonTextInverted}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containers: {
    main: {
      flex: 1,
      alignItems: 'center',
    }
  },
});

export default SignupScreen;
