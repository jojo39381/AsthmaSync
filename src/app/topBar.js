import React,{useState} from 'react';
import {SafeAreaView,StatusBar,TextInput,View,Button,Text,TouchableOpacity,ScrollView } from 'react-native';
import styled from 'styled-components'

import moreOptions from '../../assets/AsthmaSync-MoreOptions.png'
import AsthmaTopLogo from '../../assets/AsthmaSync_LogoTop.png';
import Profile from '../../assets/AsthmaSync_Profile.png';
import Notification from '../../assets/AsthmaSync_MessageNotification.png';


const TopBar = ({navigation}) =>{

    return(
        <TopBarr>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                <MoreOptions source={moreOptions}></MoreOptions>
            </TouchableOpacity>
            <AsthmaSync source={AsthmaTopLogo}></AsthmaSync>
            <ProfilePic source={Notification}></ProfilePic>
        </TopBarr>
    );
}

const TopBarr = styled.View`
    flexDirection: row;
    alignItems: center;
    justifyContent: space-between;
    alignSelf: stretch;
`;

const MoreOptions = styled.Image`
    height: 20px;
    width: 25px;
    marginLeft: 20px;
`;

const AsthmaSync = styled.Image`
    height: 40px;
    width: 210px;
`;
const ProfilePic = styled.Image`
    height: 25px;
    width: 35px;
    marginRight: 20px;
`;

export default TopBar;