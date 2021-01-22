import React,{useState} from 'react';
import {SafeAreaView,StatusBar,TextInput,View,Button,Text,TouchableOpacity} from 'react-native';
import styled from 'styled-components'

//import DateTimePickerModal from "react-native-modal-datetime-picker";

import Background from './background';
import logo from '../../assets/AsthmaSync_LogoBlueBG.png'
import calIcon from '../../assets/AsthmaSync_CALENDAR.png'
import { set } from 'react-native-reanimated';

const Intake = ({navigation}) =>{
    

    return (
        <Container>
        <StatusBar barStyle="light-content"/>
        <View>
            <Logo source={logo}>
            </Logo>
        </View>
        
        <View style={{paddingTop: 10}}></View>

        <Header>Please answer the</Header>
        <Header>following questions for</Header>
        <Header>your digital record</Header>

        <View style={{paddingTop: 30}}></View>

        <View>

            <InputTitle>First Name</InputTitle>
            <InputBox style={{alignItems: "center"}}>
            </InputBox>

            <InputTitle>Last Name </InputTitle>
            
            <InputBox style={{alignItems: "center"}}>
            </InputBox>

            <InputTitle>Email</InputTitle>
            <InputBox style={{alignItems: "center"}}>
            </InputBox>

            <InputTitle>Password</InputTitle>
            <InputBox  secureTextEntry={true} style={{alignItems: "center"}}>
            </InputBox>
            
            
            <View style={{paddingTop: 100}}></View>
            
            <TouchableOpacity onPress={()=>navigation.push('ActTest')}>
                <ContinueButton style={{alignItems: "center"}}>
                    <ButtonText>Continue</ButtonText>
                </ContinueButton>
            </TouchableOpacity>
            


        </View>
        </Container>
    );
}


/*
       const [isDateVisible,setDateVisible]= useState(false);
        const [date,setDate] = useState("");
        const [parseDate,setParseDate] = useState({month: " ",day: " ",year: "    "})

        const showDatePicker = () => {
            setDateVisible(true);
        };
        
        const hideDatePicker = () => {
            setDateVisible(false);
        };
        
        const handleConfirm = (date) => {
            setDate(date.toLocaleDateString());
            let parseData = date.toLocaleDateString();
            parseData = parseData.split('/');
            setParseDate({month: parseData[0],day: parseData[1],year: parseData[2]})

            hideDatePicker();
        }; 

        <TouchableOpacity onPress={showDatePicker}>
                
                <BirthdayButton>
                    <Text style={{fontSize: 15}}> {parseDate.month}</Text>
                    <Slash>/</Slash>
                    <Text style={{fontSize: 15}}> {parseDate.day}</Text>
                    <Slash>/</Slash>
                    <Text style={{fontSize: 15}}> {parseDate.year}</Text>
                    <CalImg source={calIcon}></CalImg>

                </BirthdayButton>

            </TouchableOpacity>


            <DateTimePickerModal
                isVisible={isDateVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                dateFormat={"month dayofweek year"}
            />
*/


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


const InputBox = styled.TextInput`
    height: 50px;
    borderColor: gray;
    borderWidth: 1px;
    backgroundColor: #fff;
    borderRadius: 30px;
    paddingLeft: 20px
    width: 320px;
`;
 const InputTitle = styled.Text`
    color: #fff
    marginLeft: 20px;
    marginTop: 10px;
    marginBottom: 8px;
 `;

const BirthdayButton = styled.View`
    height: 50px;
    width: 320px;
    borderColor: gray;
    borderWidth: 1px;
    backgroundColor: #fff;
    borderRadius: 30px;
    paddingLeft: 20px;
    justifyContent: space-around;
    flexDirection: row;
    alignItems: center;
`;

const ButtonText = styled.Text`
    color: #fff;
    fontSize: 18px;
    fontWeight: bold;
    alignContent: center;
    marginRight: 20px;
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

const CalImg = styled.Image`
    marginRight: 0px;
    height: 30px;
    width: 27px;
`

const Slash = styled.Text`
    fontSize: 30px;
    fontWeight: 300;
`;

export default Intake;