import * as React from 'react';
import { View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './screen/Profile.js';
import Account from './screen/Account.js';
import Music from './screen/Music.js';
import Home from './screen/Home.js';
import UserHome from './screen/UserHome.js';
import Camerax from './screen/Camera.js';
import Disc from './screen/Discripation.js';
import Login from './screen/Login.js';
import Hero from './components/Hero.js'
import Soundx from './screen/Sounds.js';
import Search from './screen/Search.js';
import Settings from './screen/Settings.js';
import Edit from './screen/EditProfile.js';
import VideoPlayer from './screen/Video.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'
import { Feather } from '@expo/vector-icons'
import styled from 'styled-components/native'
const Container = styled.View`
  height: 59px;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 1;
  border-top-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.2);
  flex-direction: row;
`
const Menu = styled.TouchableOpacity`
  width: 20%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-top:17px;
`
const Icon = styled.Image.attrs({ resizeMode: 'contain' })`
  height: 32px;
`
const MenuText = styled.Text`
  font-size: 9px;
  margin-top: -3px;
  color: ${props => (props.active ? '#fff' : 'rgba(255,255,255,0.6)')};
`
const Border = styled(LinearGradient)`
  width: 44px;
  height: 28px;
  border-radius: 8px;
  align-items: center;
`
const Button = styled.View`
  width: 36px;
  height: 28px;
  background: #fff;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`
const Tab = createBottomTabNavigator();

function CameraScreen({ navigation }) {
  navigation.setOptions({ tabBarVisible: false })
  return (
    <Camerax/>
  );
}

function SettingsScreen() {
  return <View />;
}

function HomeTabs({ navigation }) {
navigation.navigate('Home');
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#000000"
      inactiveColor="#696969"
      barStyle={{ backgroundColor: '#ffffff' }}
    >
      <Tab.Screen
        name="Home"
      activeColor="#000000"
      inactiveColor="#696969"
      barStyle={{ backgroundColor: '#000000' }}
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search1"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name=" "
        component={Camerax}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Menu>
        <Border
          start={{ x: 1, y: 0 }}
          locations={[0, 0.5, 0.5, 1]}
          colors={['#F42365', '#f42365', '#37d7cf', '#37d7cf']}>
          <Button>
            <Feather name='plus' size={20} />
          </Button>
        </Border>
      </Menu>
          ),
        }}
      />

      <Tab.Screen
        name="Notification"
        component={Settings}
        options={{
          headerShown:true,
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="message" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={Account}
        options={{
          headerShown:false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


function AccountTabs({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="Account"
      activeColor="#000000"
      inactiveColor="#696969"
      barStyle={{ backgroundColor: '#ffffff' }}
    >
      <Tab.Screen
        name="Home"
      activeColor="#000000"
      inactiveColor="#696969"
      barStyle={{ backgroundColor: '#000000' }}
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search1"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name=" "
        component={Camerax}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Menu>
        <Border
          start={{ x: 1, y: 0 }}
          locations={[0, 0.5, 0.5, 1]}
          colors={['#F42365', '#f42365', '#37d7cf', '#37d7cf']}>
          <Button>
            <Feather name='plus' size={20} />
          </Button>
        </Border>
      </Menu>
          ),
        }}
      />

      <Tab.Screen
        name="Notification"
        component={Settings}
        options={{
          headerShown:true,
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="message" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={Account}
        options={{
          headerShown:false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeTabs} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen options={{headerShown: false}} name="Account" component={AccountTabs} />
        <Stack.Screen options={{headerShown: false}} name="Camera" component={Camerax}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Loginx" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="home" component={Home} />
        <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
        <Stack.Screen name="Disc" component={Disc} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Music" component={Music} />
        <Stack.Screen name="Hero" component={Hero} />
        <Stack.Screen options={{headerShown: false}} name="Edit" component={Edit} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen options={{headerShown: false}} name="Soundx" component={Soundx} />
        <Stack.Screen options={{headerShown: false}} name="UserHome" component={UserHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
