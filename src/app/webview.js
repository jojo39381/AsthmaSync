
import React,{useState} from 'react';
import {SafeAreaView,StatusBar,TextInput,View,Button,Text,TouchableOpacity,ScrollView } from 'react-native';
import styled from 'styled-components'
//import SegmentedControl from '@react-native-community/segmented-control';
import RadioButtonRN from 'radio-buttons-react-native';
import { WebView } from 'react-native-webview';
import TopBar from './topBar'
const Webview = ({navigation, route}, prop) =>{
    

    const {url} = route.params
    const {title} = route.params
    console.log(url)
    return (
        <Container>
        <SafeAreaView/>
        <TopBarr><Button title='< back' onPress={() => navigation.goBack()}></Button><Text style={{fontWeight:'600', fontSize:20}}>{title}</Text><Button title='more'></Button></TopBarr>

        <WebView source={{ uri: url}}  />
        </Container>
        
        
       

        

    );

}

const Container = styled.View`
  flex: 1;
 
  backgroundColor: #FFFFFF;
   

`;

const TopBarr = styled.View`
    flexDirection: row;
    alignItems: center;
    justifyContent: space-between;
    alignSelf: stretch;
`;
const Logo = styled.Image`
    justifyContent: center;
    height: 80px;
    width: 240px;
    marginTop: 30px;

`;

const TitleQuestion = styled.Text`
    color: #fff
    fontSize: 20px;
    marginBottom: 10px;
`;
 
const QuestionContainer = styled.View`
    marginLeft: 20px;
    marginRight: 20px;
    alignItems: stretch;
`

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

const V = styled.View`
    height: 80px;
    backgroundColor: #fff;
`

const Header = styled.Text`
    color: #fff
    fontSize: 20px;
    fontWeight: bold;

    height: 50px;
    width: 100%;
    marginTop: 50px;
    textAlign:center;
`;

const SkipButton = styled.Text`
    marginTop: 20px;
    fontSize: 17px;
    color: #fff;
`;
export default Webview;