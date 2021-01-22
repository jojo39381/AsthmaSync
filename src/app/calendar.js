import React,{useState} from 'react';
import {SafeAreaView,StatusBar,TextInput,View,Button,Text,TouchableOpacity,ScrollView,Dimensions} from 'react-native';
import styled from 'styled-components'

import moreOptions from '../../assets/AsthmaSync-MoreOptions.png'
import AsthmaTopLogo from '../../assets/AsthmaSync_LogoTop.png';
import Profile from '../../assets/AsthmaSync_Profile.png';
import logo from '../../assets/AsthmaSync_LogoBlueBG.png'
import calIcon from '../../assets/AsthmaSync_CALENDAR.png'
import TopBar from './topBar'

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const CalendarScreen = ({navigation}) =>{
    
    return(
        <Container>
        <SafeAreaView></SafeAreaView>
        <BackTopBar navigation={navigation}/>
        <Header>Appointments</Header>
        <Calendar

            style={{
                marginTop: 20,
                height: 360,
                width: Dimensions.get('window').width -40
            }}
        // Initially visible month. Default = Date()
        current={'2020-17-08'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2018-01-01'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2025-01-01'}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => {console.log('selected day', day)}}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => {console.log('selected day', day)}}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'MMMM yyyy'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => {console.log('month changed', month)}}
        // Hide month navigation arrows. Default = false
       
        />

            <TouchableOpacity>
                <ContinueButton style={{alignSelf: 'center',alignItems: "center",marginTop: 15}}>
                    <ButtonText>Schedule an Appointment</ButtonText>
                </ContinueButton>
            </TouchableOpacity>
        </Container>

    );

}

const BackTopBar = ({navigation}) =>{

    return(
        <TopBarr>
            <TouchableOpacity onPress={()=>navigation.pop()}>
                <SkipButton>Back</SkipButton>
            </TouchableOpacity>
            <AsthmaSync source={AsthmaTopLogo}></AsthmaSync>
            <ProfilePic source={Profile}></ProfilePic>
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
    height: 30px;
    width: 30px;
    marginRight: 20px;
`;
const Container = styled.View`
flex: 1;
flexDirection: column;
backgroundColor: #fff;
alignItems: center;

`;

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

const SkipButton = styled.Text`
    marginTop: 5px;
    fontSize: 17px;
    color: #0062A6;
    marginLeft: 20px;
`;
export default CalendarScreen;