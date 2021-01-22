import React,{useState, useEffect} from 'react';
import {StyleSheet,SafeAreaView,StatusBar,TextInput,View,Button,Text,TouchableOpacity,ScrollView,Dimensions} from 'react-native';
import styled from 'styled-components'
import appointment from '../../assets/careTeam/AsthmaSync_Appointment.png'
import video from '../../assets/careTeam/AsthmaSync_VideoCall.png'
import chat from '../../assets/careTeam/AsthmaSync_Chat.png'
import emergency from '../../assets/careTeam/AsthmaSync_EmergencyContacts.png';

import AsthmaTopLogo from '../../assets/AsthmaSync_LogoTop.png';

import TopBar from './topBar'
import Profile from '../../assets/AsthmaSync_Profile.png';
import call from 'react-native-phone-call'
import { Camera } from 'expo-camera';
const VideoScreen = ({navigation}) =>{
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.front);
  
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (

        <Container>
            <SafeAreaView></SafeAreaView>
            <BackTopBar navigation={navigation}/>
            <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} type={type}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
        </Container>
      
    );

}

const takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "black"
    },
    preview: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center"
    },
    capture: {
      flex: 0,
      backgroundColor: "#fff",
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: "center",
      margin: 20
    }
  });

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
export default VideoScreen