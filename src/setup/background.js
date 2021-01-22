import React from 'react';
import {SafeAreaView,StatusBar,TextInput,View,Button,Text,Image} from 'react-native';
import styled from 'styled-components'

import logo from '../../assets/AsthmaSync_LogoTop.png'


export default function Background() {
    return (
        <Container>
        <StatusBar barStyle="light-content"/>
        <View>
            <Logo source={logo}>
            </Logo>
        </View>
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
    height: 100px;
    width: 300px;
    marginTop: 20px;
`;
