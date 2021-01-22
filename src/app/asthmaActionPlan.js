import React,{useState} from 'react';
import {SafeAreaView,StatusBar,TextInput,View,Button,Text,TouchableOpacity,ScrollView,Dimensions} from 'react-native';
import styled from 'styled-components'

import moreOptions from '../../assets/AsthmaSync-MoreOptions.png'
import AsthmaTopLogo from '../../assets/AsthmaSync_LogoTop.png';
import Profile from '../../assets/AsthmaSync_Profile.png';
import logo from '../../assets/AsthmaSync_LogoBlueBG.png'
import calIcon from '../../assets/AsthmaSync_CALENDAR.png'
import TopBar from './topBar'


const AsthmaActionPlan = ({navigation}) =>{
    const [isActionGreen,setActionGreen] = useState(false);
    const [isActionYellow,setActionYellow] = useState(false);
    const [isActionRed,setActionRed] = useState(false);

    return(
        <Container>
            <SafeAreaView/>
            <BackTopBar navigation={navigation}/>
            <ScrollView>
            <Header>Asthma Action Plan</Header>

            <ActionView inputColor={'rgba(239,247,230,1.0)'}>
                <ActionHeaderView inputColor={'rgba(66,120,16,1.0)'}>
                    <ActionHeaderText>Doing Well</ActionHeaderText>
                    <TouchableOpacity  onPress={()=>{isActionGreen? setActionGreen(false):setActionGreen(true)}}>
                    { isActionGreen ? 
                    <ContinueButton style={{width: 100}}>
                        <ButtonText>Symptoms</ButtonText>
                   </ContinueButton>
                    :
                    <ContinueButton>
                         <ButtonText>Actions</ButtonText>
                    </ContinueButton>
                    }
                    </TouchableOpacity>
                </ActionHeaderView>
                {isActionGreen ? 
                <View>
                    <Description style={{marginBottom: 5, marginTop: 5,fontWeight: "bold"}}>Actions</Description>
                    <Description>- Take daily asthma control medicine.</Description>
                    <Description>- Take asthma rescue medicine 15 minutes before exercise.</Description>
                    <Description>- Avoid your astma triggers: smoke, pollen, pets.</Description>
                </View>
                :
                <View>
                <Description style={{marginBottom: 5, marginTop: 5,fontWeight: "bold"}}>Symptoms</Description>
                <Description>- I don’t have cough, wheezing, chest tightness, or trouble breathing at any time.</Description>
                <Description>- I can do all the things I usually do.</Description>
                <Description>- When I use a peak flow meter my peak flow is more than 80 percent or more of my best peak flow.</Description>
                </View>
                }
            </ActionView>

            <ActionView inputColor={'rgba(255,246,221,1.0)'}>
                <ActionHeaderView inputColor={'rgba(255,207,70,1.0)'}>
                    <ActionHeaderText style={{color: 'black'}}>Getting Worse</ActionHeaderText>
                    <TouchableOpacity  onPress={()=>{isActionYellow? setActionYellow(false):setActionYellow(true)}}>
                    { isActionYellow ? 
                    <ContinueButton style={{width: 100,borderColor: 'black'}}>
                        <ButtonText style={{color: 'black'}}>Symptoms</ButtonText>
                   </ContinueButton>
                    :
                    <ContinueButton style={{borderColor: 'black'}}>
                         <ButtonText style={{color: 'black'}}>Actions</ButtonText>
                    </ContinueButton>
                    }
                    </TouchableOpacity>
                </ActionHeaderView>
                {isActionYellow ? 
                <View>
                    <Description style={{marginBottom: 5, marginTop: 5,fontWeight: "bold"}}>Actions</Description>
                    <Description>- Take 2 puffs of asthma rescue medicine with spacer NOW.</Description>
                    <Description>- Try to be calm, get away from your triggers.</Description>
                    <Description>- If you're are not better:.</Description>
                    <Description>   Call Dr. Jacobs or Clinic.</Description>
                    <Description>   Take asthma rescue medicine every 4 to 6 hours for 1 to 2 days.</Description>
                </View>
                :
                <View>
                <Description style={{marginBottom: 5, marginTop: 5,fontWeight: "bold"}}>Symptoms</Description>
                <Description>- Peak flow is 50 to 80% of personal best.</Description>
                <Description>- Coughing, wheezing, feeling short of breath day or night.</Description>
                <Description>- Asthma warning symptoms are present: itchy eyes, sore throat, runny nose.</Description>
                </View>
                }
            </ActionView>

            <ActionView inputColor={'rgba(255,227,227,1.0)'}>
                <ActionHeaderView inputColor={'rgba(166,59,63,1.0)'}>
                    <ActionHeaderText>Medical Alert!</ActionHeaderText>
                    <TouchableOpacity  onPress={()=>{isActionRed? setActionRed(false):setActionRed(true)}}>
                    { isActionRed ? 
                    <ContinueButton style={{width: 100}}>
                        <ButtonText>Symptoms</ButtonText>
                   </ContinueButton>
                    :
                    <ContinueButton>
                         <ButtonText>Actions</ButtonText>
                    </ContinueButton>
                    }
                    </TouchableOpacity>
                </ActionHeaderView>

                {isActionRed ? 
                <View>
                    <Description style={{marginBottom: 5, marginTop: 5,fontWeight: "bold"}}>Actions</Description>
                    <Description>- Take 2 puffs asthma rescue medicine now.</Description>
                    <Description>- Call your provider or clinic right away!.</Description>
                    <Description>- If you can not contact anyone, get help at the emergency room.</Description>
                    <Description>- Take asthma rescue medicine again in 20 minutes.</Description>

                </View>
                :
                <View>
                <Description style={{marginBottom: 5, marginTop: 5,fontWeight: "bold"}}>Symptoms</Description>
                <Description>- Peak flow is less than 50% of personal best.</Description>
                <Description>- Very short of breath, breathing very fast.</Description>
                <Description>- Cannot do your usual activities, have trouble walking, talking or playing.</Description>
                <Description>- Ribs show when you take a breath.</Description>
                </View>
                }
            </ActionView>


            </ScrollView>


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
            <ProfilePic></ProfilePic>
        </TopBarr>
    );
}
const Container = styled.View`
    flex: 1;
    flexDirection: column;
    backgroundColor: #fff;
    alignItems: stretch;
`;

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

const SkipButton = styled.Text`
    marginTop: 5px;
    fontSize: 17px;
    color: #0062A6;
    marginLeft: 20px;
`;

const ActionView = styled.View`
    width: 320px;
    borderRadius: 5px;
    backgroundColor: ${props => props.inputColor || "#000"} ;
    alignSelf: center;
    marginBottom: 15px;
    paddingBottom: 10px;
`
const ActionHeaderView = styled.View`
    height: 40px;
    alignSelf: stretch;
    backgroundColor: ${props => props.inputColor || "#000"} ;
    justifyContent: space-between;
    alignItems: center;
    flexDirection: row;
`
const ActionHeaderText = styled.Text`
    color: #fff
    fontSize: 20px;
    fontWeight: bold;
    marginLeft: 20px;
    alignSelf: center;
    justifyContent: center;
`

const Header = styled.Text`
    color: #000
    fontSize: 20px;
    fontWeight: 400;
    alignSelf: center;
    marginBottom: 12px;
    marginTop: 10px;
`;

const Description = styled.Text`
    fontSize: 13px;
    marginBottom: 10px;
    marginLeft: 20px;
`;

const ButtonText = styled.Text`
    color:  #fff;
    fontSize: 14px;
    fontWeight: bold;
    alignSelf: center;
    justifyContent: center;
`;

const ContinueButton = styled.View`
    height: 30px;
    width: 80px;
    borderColor:  #fff;
    borderWidth: 3px;
    borderRadius: 30px;
    marginRight: 5px;
    alignSelf: center;
    justifyContent: center;
`;
export default AsthmaActionPlan;

