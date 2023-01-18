import React, {useLayoutEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput} from 'react-native';
import {connect, useSelector} from 'react-redux';
import { AppStyles} from '../AppStyles';
import { Configuration } from '../Configuration';
import {app_title} from '../AppDetails.json';

function HomeScreen({ navigation }) {
  const [link, setLink] = useState('')

  // const auth = useSelector((state) => state.auth);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: app_title,
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome {'User'}</Text>
      <TextInput
          style={styles.body}
          placeholder="Link to pdf or html"
          // onChangeText={setEmail}
          value={link}
          placeholderTextColor={AppStyles.color.placeholder}
          underlineColorAndroid="transparent"
        />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: Configuration.home.listing_item.offset,
  },
  title: {
    fontWeight: 'bold',
    color: AppStyles.color.title,
    fontSize: 25,
  },
  userPhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 5,
  },
});

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default HomeScreen;//connect(mapStateToProps)(HomeScreen);
