
import React,{useState} from 'react';
import {SafeAreaView,StatusBar,TextInput,View,Button,Text,TouchableOpacity,ScrollView } from 'react-native';
import styled from 'styled-components'
import { createDrawerNavigator,DrawerContentScrollView } from '@react-navigation/drawer';

import logo from '../../assets/AsthmaSync_LogoBlueBG.png'
import calIcon from '../../assets/AsthmaSync_CALENDAR.png'
import Profile from '../../assets/AsthmaSync_Profile.png';

import ProgressBar from 'react-native-progress/Bar';
import TopBar from './topBar';

import {DrawerItem} from '@react-navigation/drawer';


export default function DrawerContent({navigation}){

    return(
      <View style={{flex: 1}}>
        <DrawerContentScrollView>
            <ProfContent>
                <ProfImg source={Profile}/>
                <View style={{alignItems: 'center'}}>
                    <Description style={{fontSize: 16}}>Dean Zachiria</Description>
                    <Description style={{marginTop: 5}}>dean@asthmatek.com</Description>
                </View>
            </ProfContent>
            <MainContent>
                <DrawerItem label={'Home'}  onPress={()=>navigation.navigate('Home')}/>
                <DrawerItem label={'Devices'}  onPress={()=>navigation.navigate('Devices')}/>
                <DrawerItem label={'Settings'}  onPress={()=>navigation.navigate('Home')}/>
                <DrawerItem label={'Support'}  onPress={()=>navigation.navigate('Home')}/>
            </MainContent>     
        </DrawerContentScrollView>
        <BottomSection>
            <DrawerItem label={'Sign Out'}  onPress={()=>navigation.navigate('Home')}/>
        </BottomSection>
        </View>
  
    )
  
  }


const ProfImg = styled.Image`
  width: 40px;
  height: 40px;

`

const ProfContent = styled.View`
  alignSelf: stretch;
  marginLeft: 20px;
  flexDirection: row;
`
const MainContent = styled.View`
    alignSelf: stretch;
    marginTop: 20px
`

const Description = styled.Text`
    fontSize: 11px;
    marginLeft: 5px;
`;

const OptionText = styled.Text`
  fontSize: 13px;
  marginBottom: 30px;
`

const BottomSection = styled.View`
        position: absolute;
        bottom:0
        marginBottom: 25px;
        width: 230px;
        borderWidth: .5px;
        borderColor: #d1d1d1
`;