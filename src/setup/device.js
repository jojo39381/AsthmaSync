import React from 'react';
import {SafeAreaView,StatusBar,TextInput,View,Button,Text,TouchableOpacity} from 'react-native';
import styled from 'styled-components'

import Background from './background';
import logo from '../../assets/AsthmaSync_LogoBlueBG.png'


const Device = ({navigation}) =>{
    return (
        <Container>
        <StatusBar barStyle="light-content"/>
        <View>
            <Logo source={logo}>
            </Logo>
        </View>
        <View style={{paddingTop: 30}}></View>
        <Header>Register a Device</Header>
        <View style={{paddingTop: 10}}></View>

        <View>
            <InputTitle>Select the device to register</InputTitle>
            <DeviceContainer>
            </DeviceContainer>
            
            <InputTitle>Device Type</InputTitle>
            <SelectButton>
                <Text>Select</Text>
                <Text>"Arrow Asset"</Text>
            </SelectButton>

            <InputTitle>Device Name</InputTitle>
            <InputBox></InputBox>
        </View>

        <View style={{paddingTop: 150}}></View>
        
        <TouchableOpacity onPress={()=>navigation.push('DeviceCont')}>
            <ContinueButton style={{alignItems: "center"}}>
                <ButtonText>Register</ButtonText>
            </ContinueButton>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.push('Symptoms')}>
            <SkipButton>Skip</SkipButton>
        </TouchableOpacity>

        </Container>
    )
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

const InputTitle = styled.Text`
    color: #fff
    marginLeft: 20px;
    marginTop: 10px;
    marginBottom: 8px;
 `;

 const Header = styled.Text`
    color: #fff
    fontSize: 20px;
`;

const InputBox = styled.TextInput`
    height: 50px;
    borderColor: gray;
    borderWidth: 1px;
    backgroundColor: #fff;
    borderRadius: 30px;
    paddingLeft: 20px
    width: 320px;
`;

const DeviceContainer = styled.View`
    height: 130px;
    borderColor: gray;
    borderWidth: 1px;
    backgroundColor: #fff;
    paddingLeft: 20px
    width: 320px;
    marginBottom: 10px;
`;

const SelectButton = styled.View`
    height: 50px;
    width: 320px;
    borderColor: gray;
    borderWidth: 1px;
    backgroundColor: #fff;
    borderRadius: 30px;
    paddingLeft: 20px;
    paddingRight: 20px;
    justifyContent: space-between;
    flexDirection: row;
    alignItems: center;
`;

const ContinueButton = styled.View`
    height: 60px;
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

const SkipButton = styled.Text`
    marginTop: 20px;
    fontSize: 17px;
    color: #fff;
`;

export default Device;