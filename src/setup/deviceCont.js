import React from 'react';
import {SafeAreaView,StatusBar,TextInput,View,Button,Text,TouchableOpacity} from 'react-native';
import styled from 'styled-components'

import Background from './background';
import logo from '../../assets/AsthmaSync_LogoBlueBG.png'

import { StackActions } from '@react-navigation/native';

const DeviceCont = ({navigation}) =>{
    return (
        <Container>
            <StatusBar barStyle="light-content"/>
            <View>
                <Logo source={logo}></Logo>
            </View>

            <View style={{paddingTop: 150}}></View>
            <Header>Would you like to</Header>
            <Header>register another device?</Header>

            <TouchableOpacity onPress={()=>navigation.push('Device')}>
                <RegisterButton>
                    <RegisterText>Register Another Device</RegisterText>
                </RegisterButton>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.push('Symptoms')}>
                <ContinueButton style={{alignItems: "center"}}>
                        <ButtonText>Continue</ButtonText>
                </ContinueButton>
            </TouchableOpacity>
        </Container>
    );
}

const Container = styled.View`
  flex: 1;
  flexDirection: column;
  backgroundColor: #0062A6;
  alignItems: center;

`;

const Logo = styled.Image`
    justifyContent: center;
    height: 80px;
    width: 240px;
    marginTop: 30px;
`;

const Header = styled.Text`
    color: #fff
    fontSize: 20px;
`;

const RegisterButton = styled.View`
    marginTop: 30px;
    height: 55px;
    width: 320px;
    borderColor: gray;
    borderWidth: 1px;
    backgroundColor: #fff;
    borderRadius: 30px;
    paddingLeft: 20px;
    paddingRight: 20px;
    justifyContent: center;
    flexDirection: row;
    alignItems: center;
`;

const RegisterText = styled.Text`
    color:  #3661a5;;
    fontSize: 18px;
    fontWeight: bold;
    alignContent: center;
`;

const ContinueButton = styled.View`
    marginTop: 25px;
    height: 55px;
    width: 320px;
    borderColor: #fff;
    borderWidth: 3px;
    borderRadius: 30px;
    paddingLeft: 20px;
    justifyContent: center;
`;

const ButtonText = styled.Text`
    color: #fff;
    fontSize: 18px;
    fontWeight: bold;
    alignContent: center;
    marginRight: 20px;
`;

export default DeviceCont;