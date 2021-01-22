
import React,{useState} from 'react';
import {SafeAreaView,StatusBar,TextInput,View,Button,Text,TouchableOpacity,ScrollView } from 'react-native';
import styled from 'styled-components'

import logo from '../../assets/AsthmaSync_LogoBlueBG.png'
import calIcon from '../../assets/AsthmaSync_CALENDAR.png'

import ProgressBar from 'react-native-progress/Bar';
import TopBar from './topBar';

const MyDevice = ({navigation}) =>{
    
    return(
        <Container>
            <SafeAreaView></SafeAreaView>
            <TopBar navigation={navigation}/>
            <ContentContainer>
                <Header>My Devices</Header>
            </ContentContainer>
            
            <TouchableOpacity style={{alignSelf: 'center',position: 'absolute', bottom: 55}}>
                    <ContinueButton style={{alignSelf: 'center',alignItems: "center",marginTop: 15}}>
                        <ButtonText>Register a Device</ButtonText>
                    </ContinueButton>
            </TouchableOpacity>
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    flexDirection: column;
    backgroundColor: #fff;
    alignItems: center;
`;

const ContentContainer = styled.View`
    marginLeft: 15px
    marginRight: 15px
    alignItems: center;

`
const Header = styled.Text`
    color: #000
    fontSize: 20px;
    fontWeight: 400;
    marginTop: 10px;
`;

const ButtonText = styled.Text`
    color:  #0062A6;
    fontSize: 18px;
    fontWeight: bold;
    alignContent: center;
    marginRight: 20px;
`;

const ContinueButton = styled.View`
    height: 60px;
    width: 320px;
    borderColor:  #0062A6;
    borderWidth: 3px;
    borderRadius: 30px;
    paddingLeft: 20px;
    justifyContent: center;
`;

export default MyDevice