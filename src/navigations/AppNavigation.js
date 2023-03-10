import React from 'react';
import {Text,Image, Pressable, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import {AppIcon, AppStyles} from '../AppStyles';
import {Configuration} from '../Configuration';
import DrawerContainer from '../components/DrawerContainer';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// login stack
const LoginStack = () => (
  <Stack.Navigator
    initialRouteName="Welcome"
    screenOptions={{
      headerTintColor: 'red',
      headerTitleAlign: 'center',
      headerTitleStyle: styles.header.titleStyle,
      headerMode: 'float',
    }}>
    <Stack.Screen name="Welcome" options={{
      headerShown: false
    }} component={WelcomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
    
  </Stack.Navigator>
);

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTitleAlign: 'center',
      headerTitleStyle: styles.header.titleStyle,
      headerMode: 'float',
    }}>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={({ navigation }) => ({
        headerRight: () => (
          <Pressable onPress={() => navigation.openDrawer() }>
            <Image style={styles.iconStyle} source={AppIcon.images.menu} />
          </Pressable>
        ),
        headerRightContainerStyle: {paddingRight: 10},
      })}
    />
  </Stack.Navigator>
);


const TabNavigator = () => (
  <BottomTab.Navigator
    initialRouteName="Home"
    screenOptions={{
      tabBarInactiveTintColor: 'grey',
      tabBarActiveTintColor: AppStyles.color.primary,
      tabBarIcon: ({focused}) => {
        return (
          <Image
            style={{
              tintColor: focused ? AppStyles.color.primary : AppStyles.color.grey,
            }}
            source={AppIcon.images.home}
          />
        );
      },
      headerShown: false,
    }}>
    <BottomTab.Screen
      options={{tabBarLabel: 'Home'}}
      name="HomeStack"
      component={HomeStack}
    />
  </BottomTab.Navigator>
);


const DrawerStack = () => (
  <Drawer.Navigator
    screenOptions={{
      drawerStyle: {outerWidth: 200},
      drawerPosition: 'left',
      headerShown: false,
    }}
    drawerContent={({navigation}) => (
      <DrawerContainer navigation={navigation} />
    )}>
    <Drawer.Screen name="Tab" component={TabNavigator} />
  </Drawer.Navigator>
);

// Manifest of possible screens
const RootNavigator = () => (
  <Stack.Navigator
    initialRouteName="LoginStack"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="LoginStack" component={LoginStack} />
    <Stack.Screen name="DrawerStack" component={DrawerStack} />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
);


const navOptions = {

}

const styles = StyleSheet.create({
  header: {
    titleStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'black'
    }
  },
  iconStyle: {tintColor: AppStyles.color.primary, width: 30, height: 30},
});


export default AppNavigator;
