
import React from 'react';
import { StyleSheet, Text, View,Image,ImageBackground } from 'react-native';
import styled from 'styled-components'


import backgroundImg from '../../assets/AsthmaSync_MobileBG.png';
import logo from '../../assets/AsthmaSync_LogoPatient.png';

export default function Loading() {
    return (
        <Container>
            <Background source={backgroundImg} >
                <Logo source={logo}>
                </Logo>
            </Background>
        </Container>
    );
}
  const Container = styled.View`
  flex: 1;
  flexDirection: column;
`;

const Background = styled.ImageBackground`
  flex: 1;
  resizeMode: cover;
  justifyContent: center;
`;

const Logo = styled.Image`
  height: 250px;
  width: 270px;
  marginLeft: 50px;
  justifyContent: center;
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
