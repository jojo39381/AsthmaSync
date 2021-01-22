import React,{useState} from 'react';
import {SafeAreaView,StatusBar,TextInput,View,Button,Text,TouchableOpacity,ScrollView,Dimensions} from 'react-native';
import styled from 'styled-components'
import appointment from '../../assets/careTeam/AsthmaSync_Appointment.png'
import video from '../../assets/careTeam/AsthmaSync_VideoCall.png'
import chat from '../../assets/careTeam/AsthmaSync_Chat.png'
import emergency from '../../assets/careTeam/AsthmaSync_EmergencyContacts.png';
import { RNCamera} from 'react-native-camera';


import TopBar from './topBar'

const CareTeam = ({navigation}) =>{
    
    return(
        <Container>
            <SafeAreaView></SafeAreaView>
            <TopBar navigation={navigation}></TopBar>
            <ScrollView>
            <Header>Care Team</Header>
            
            <Row>
                <TouchableOpacity onPress={()=>navigation.navigate('Chat')}>
                    <BlockContainer style={{marginTop:15,shadowColor: '#000',shadowOpacity: .15,shadowOffset: {width: 0, height: 0},shadowRadius: 5}}>
                    <Pic style={{ width: 61}} source={chat}/>
                    <BlockText>Chat</BlockText>
                    </BlockContainer>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Video')}>
                    <BlockContainer style={{marginTop:15,shadowColor: '#000',shadowOpacity: .15,shadowOffset: {width: 0, height: 0},shadowRadius: 5}}>
                    <Pic source={video} style={{height: 45, width: 67}}/>
                    <BlockText>Video Call</BlockText>
                    </BlockContainer>
                </TouchableOpacity>

            </Row>
            

            
            <Row>

           
            <TouchableOpacity onPress={()=>navigation.navigate('Calendar')}>
            <BlockContainer style={{marginTop:15,shadowColor: '#000',shadowOpacity: .15,shadowOffset: {width: 0, height: 0},shadowRadius: 5}}>
                <Pic source={appointment}/>
                <BlockText>Appointments</BlockText>
            </BlockContainer>
            </TouchableOpacity>
            
            
            <TouchableOpacity onPress={()=>navigation.navigate('Contacts')}>
            <BlockContainer style={{marginTop:15,shadowColor: '#000',shadowOpacity: .15,shadowOffset: {width: 0, height: 0},shadowRadius: 5}}>
            <Pic source={emergency} style={{height: 60, width: 50}}/>

                <BlockText>Emergency</BlockText>
                <BlockText>Contacts</BlockText>
            </BlockContainer>
            </TouchableOpacity>
            </Row>

            </ScrollView>
        </Container>
    );

}

const Container = styled.View`
    flex: 1;
    flexDirection: column;
    backgroundColor: #fff;
    alignItems: stretch;
`;

const Header = styled.Text`
    color: #000
    fontSize: 20px;
    fontWeight: 400;
    marginTop: 10px;
    alignSelf: center;
    marginBottom: 10px;
`;

const Pic = styled.Image`
    width: 55px;
    height: 60px;
    marginBottom: 10px;
`


const BlockContainer= styled.View`
    backgroundColor: #fff;
    alignSelf: center;
    justifyContent: center;
    height: 140px;
    width: 140px;
    borderRadius: 6px;
    alignItems: center;
`

const BlockText = styled.Text`
    fontWeight: 600;
    fontSize: 15px;
`
const PeopleText = styled.Text`
    fontSize: 15px;
    color: #0062A6;
    marginBottom: 10px;
`

const PeopleContainer= styled.View`
    backgroundColor: #fff;
    alignSelf: stretch;
    marginLeft: 30px;
`;

const Row = styled.View`
    justifyContent: space-around;
    flexDirection: row;
`;
export default CareTeam