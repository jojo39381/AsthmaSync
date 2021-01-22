import React,{useState} from 'react';
import {SafeAreaView,StatusBar,TextInput,View,Button,Text,TouchableOpacity,ScrollView,Dimensions} from 'react-native';
import styled from 'styled-components'
import appointment from '../../assets/careTeam/AsthmaSync_Appointment.png'
import video from '../../assets/careTeam/AsthmaSync_VideoCall.png'
import chat from '../../assets/careTeam/AsthmaSync_Chat.png'
import emergency from '../../assets/careTeam/AsthmaSync_EmergencyContacts.png';

import AsthmaTopLogo from '../../assets/AsthmaSync_LogoTop.png';

import TopBar from './topBar'
import Profile from '../../assets/AsthmaSync_Profile.png';
import call from 'react-native-phone-call'
import Dialog, { SlideAnimation,    DialogContent } from 'react-native-popup-dialog';
const ContactsScreen = ({navigation}) =>{
    

    const [name, onChangeName] = useState('');
    const [number, onChangeNumber] = useState('');
    const [addContact, setAddContact] = useState(false)
    const [contacts, setContacts] = useState(
        [{
            id:0,
            name:"Mom",
            profile:"",
            number:"6262033804"
            
         },
         {
            id:0,
            name:"Dad",
            profile:"",
            number:"5307173205"
         },
         {
            id:0,
            name:"Sister",
            profile:"",
            number:""
         }
        ])
    function makeContact() {
        const object = {
            id: 0,
            name: name,
            profile:"",
            number: number
        }
        contacts.push(object)
        setContacts(contacts)
        setAddContact(false)
        onChangeName("")
        onChangeNumber('')

    }
    function showAdd() {
        setAddContact(true)
    }
    return(
        <Container>
            <SafeAreaView></SafeAreaView>
            <BackTopBar navigation={navigation} showAdd={showAdd}/>
            <ScrollView>
            <Header>Emergency Contacts</Header>
            <Dialog
  visible={addContact}
  dialogAnimation={new SlideAnimation({
      slideFrom: 'bottom',
    })}
  onTouchOutside={() => setAddContact(!addContact)}
  rounded={true}
  width={0.9}
>
  <DialogContent style={{}}>
    <View style={{margin:20}}>
    <Text style={{fontSize:20, marginBottom: 20, textAlign:"center"}}>Add Contacts</Text>
  <Text>Contact Name</Text>
  <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeName(text)}
      value={name}
    />
    <Text>Contact Number</Text>
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeNumber(text)}
      value={number}
    />
    </View>
    <Button title="Add" onPress={makeContact}></Button>
  </DialogContent>
</Dialog>
            {contacts.map(contact => {
                return(
                    <TouchableOpacity onPress={() => call({number:contact.number, prompt:true}).catch(console.log("error"))}>
                         <ContactView inputColor={'rgba(255,255,255,1)'}>
                            <View style={{flexDirection: "row"}}> 
                                <ProfilePic source={Profile}></ProfilePic>
                                <ContactText>{contact.name}</ContactText>
                    
                            </View>
                        </ContactView>
                    </TouchableOpacity>
                )
            })}
           

            
           

            </ScrollView>
        </Container>
    );

}


const BackTopBar = ({navigation, showAdd}) =>{

    return(
        <TopBarr>
            <TouchableOpacity onPress={()=>navigation.pop()}>
                <SkipButton>Back</SkipButton>
            </TouchableOpacity>
            <AsthmaSync source={AsthmaTopLogo}></AsthmaSync>
            <TouchableOpacity onPress={showAdd}>
                <AddButton>+</AddButton>
            </TouchableOpacity>
        </TopBarr>
    );
}
const ContactText = styled.Text`
    color: black;
    fontWeight: bold;
    fontSize: 25px;
    alignItems: center;
    marginLeft: 15px;
`
const TopBarr = styled.View`
    flexDirection: row;
    alignItems: center;
    justifyContent: space-between;
    alignSelf: stretch;
`;
const SkipButton = styled.Text`
    marginTop: 5px;
    fontSize: 17px;
    color: #0062A6;
    marginLeft: 20px;
`;
const AddButton = styled.Text`
    marginTop: 0px;
    fontSize: 35px;
    color: #0062A6;
    marginRight: 20px;
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

const ContactView = styled.View`
    height: 75px;
    width: 320px;
    borderRadius: 6px;
    backgroundColor: ${props => props.inputColor || "#000"} ;
    alignSelf: center;
    justifyContent: center;
    marginBottom: 25px;
    
`
export default ContactsScreen