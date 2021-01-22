import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,ImageBackground,Button} from 'react-native';
import styled from 'styled-components'


import backgroundImg from './assets/AsthmaSync_MobileBG.png';
import logo from './assets/AsthmaSync_LogoPatient.png';
import { NavigationContainer,StackActions } from '@react-navigation/native';
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator,DrawerContentScrollView } from '@react-navigation/drawer';




import Loading from './src/setup/loading';
import Login from './src/setup/login';
import Background from './src/setup/background'
import Intake from './src/setup/intake';
import Device from './src/setup/device';
import DeviceCont from './src/setup/deviceCont'
import Symptoms from './src/setup/symptoms'
import ActTest from './src/setup/actTest';

import homeIcon from './assets/bottom-navigator/AsthmaSync_HOME.png'
import insights from './assets/bottom-navigator/AsthmaSync_INSIGHTS.png'
import myHealth from './assets/bottom-navigator/AsthmaSync_MY_HEALTH.png'
import myCoach from './assets/bottom-navigator/AsthmaSync_MY_COACH.png'
import device from './assets/bottom-navigator/AsthmaSync_DEVICES.png'
import AsthmaED from './assets/bottom-navigator/AsthmaSync_ASTHMA_EDUCATION.png'
import Webview from './src/app/webview'
import Home from './src/app/home';
import MyHealth from './src/app/myHealth'
import MyDevice from './src/app/myDevice'
import Insights from './src/app/insights'
import CalendarScreen from './src/app/calendar'
import ContactsScreen from './src/app/contacts'
import VideoScreen from './src/app/video'
import ChatScreen from './src/app/chat'
import AsthmaEDScreen from './src/app/asthmaEd'

import CareTeam from './src/app/careTeam'
import AsthmaActionPlan from './src/app/asthmaActionPlan';
import DrawerContent from './src/app/drawerContent'


const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const DetailsDrawer = createDrawerNavigator();
const MainStack = createStackNavigator();
const HomeScreenStack = createStackNavigator();
const MyHealthScreenStack = createStackNavigator();
const CareTeamScreenStack = createStackNavigator();


//Root StackScreen
function MainStackScreen() {
  return (
      <Tab.Navigator tabBarOptions={{ style: {backgroundColor: '#0062A6',paddingTop: 10},labelStyle: {color: '#fff'}}}>
      <Tab.Screen name="Home" component={HomeScreenStacks}  options={{
        tabBarIcon: () => (
          <HomeIcon source={homeIcon} />
        )}} />
      <Tab.Screen name="Insights" component={Insights} options={{
        tabBarIcon: () => (
          <HomeIcon source={insights} />
        )}} />
      {
         <Tab.Screen name="MyHealthStack" initialParams={{ celebrate: false }} options={{
          tabBarLabel: 'My Health',tabBarIcon: () => (
            <HomeIcon source={myHealth} />
            )}} component={MyHealthScreenStacks} />
      
      }
      {/*
      <Tab.Screen name="MyHealthStack" initialParams={{ celebrate: false }} options={{
        tabBarLabel: 'My Health',tabBarIcon: () => (
          <HomeIcon source={myHealth} />
        )}} component={MyHealthScreenStacks} />
        */}
        <Tab.Screen name="AsthmaED" options={{
        tabBarLabel: 'AsthmaED',tabBarIcon: () => (
          <HomeIcon source={AsthmaED} />
        )}} component={AsthmaEDScreen} />
      <Tab.Screen initialParams={{ celebrate: false }} name="MyCareTeam" options={{
        tabBarLabel: 'Care Team',tabBarIcon: () => (
          <HomeIcon source={myCoach} />
        )}} component={CareTeamScreenStacks} />
        
      
      </Tab.Navigator>
  );
}
/*
function DrawerContent({navigation}){

  return(
    <View style={{flex: 1}}>
      <DrawerContentScrollView>
        <Text onPress={()=>navigation.navigate('Devices')}> Hello</Text>
      </DrawerContentScrollView>
    </View>

  )

}
*/
function HomeScreenStacks(){
  return(
    <HomeScreenStack.Navigator>
      <HomeScreenStack.Screen name={"Home"}  component={Home} options={{headerShown: false}}/>
    </HomeScreenStack.Navigator>
  );

}

function MyHealthScreenStacks(){
  return(
    <MyHealthScreenStack.Navigator>
      <MyHealthScreenStack.Screen name={"MyHealth"} component={MyHealth} options={{headerShown: false}} initialParams={{celebrate: false}}/>
      <MyHealthScreenStack.Screen name={"AsthmaActionPlan"} component={AsthmaActionPlan} options={{headerShown: false}}/>
    </MyHealthScreenStack.Navigator>

  );

}

function CareTeamScreenStacks(){
  return(
    <CareTeamScreenStack.Navigator>
      <HomeScreenStack.Screen name={"CareTeam"}  component={CareTeam} options={{headerShown: false}}/>
      <HomeScreenStack.Screen name={"Calendar"}  component={CalendarScreen} options={{headerShown: false}}/>
      <HomeScreenStack.Screen name={"Contacts"}  component={ContactsScreen} options={{headerShown: false}}/>
      <HomeScreenStack.Screen name={"Video"}  component={VideoScreen} options={{headerShown: false}}/>
      <HomeScreenStack.Screen name={"Chat"}  component={ChatScreen} options={{headerShown: false}}/>
    </CareTeamScreenStack.Navigator>
  );
}


function RootStackScreen(){
  return(
  <MainStack.Navigator screenOptions={{gestureEnabled: false}}>
        <MainStack.Screen name="Root" component={MainStackScreen} options={{headerShown: false}} />
        <MainStack.Screen name="Symptoms" component={Symptoms} options={{headerShown: false,cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS}} />
        <MainStack.Screen name="ActTest" component={ActTest} options={{headerShown: false,cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS}} />
        <MainStack.Screen name="Webview" component={Webview} options={{headerShown: false,cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS}} />
    </MainStack.Navigator>
    );
}


export default function App() {
  return (
    <NavigationContainer>
      <DetailsDrawer.Navigator initialRouteName="Home" drawerStyle={{
        width: 230
        }}
        drawerContent={DrawerContent}
      >

      <DetailsDrawer.Screen
        name="Home"
        component={RootStackScreen}
        options={{ drawerLabel: 'Home',swipeEnabled: false }}
      />
      <DetailsDrawer.Screen
        name="Notification Settings"
        component={MyDevice}
        options={{ drawerLabel: 'Notification Settings',swipeEnabled: false}}
      />
      <DetailsDrawer.Screen
        name="Devices"
        component={MyDevice}
        options={{ drawerLabel: 'Devices',swipeEnabled: false}}
      />
      {/*<MainStack.Navigator>
        <MainStack.Screen name="Root" component={MainStackScreen} options={{headerShown: false}} />
        <MainStack.Screen name="Symptoms" component={Symptoms} options={{headerShown: false}} />
      </MainStack.Navigator>
    */}
      </DetailsDrawer.Navigator>
    </NavigationContainer>
  );
}



const HomeIcon = styled.Image`
    height: 20px;
    width: 20px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  logo: {
    justifyContent: "center",
    height: 250,
    width: 270,
    marginLeft: 50
  }
});
