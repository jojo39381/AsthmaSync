import React,{useState} from 'react';
import {SafeAreaView,StatusBar,TextInput,View,Button,Text,TouchableOpacity,ScrollView,Dimensions, Linking} from 'react-native';
import styled from 'styled-components'

import arrow from '../../assets/asthmaEd/AsthmaSync_White_Arrow.png'
import spacer from '../../assets/asthmaEd/AsthmaSync_SPACER.png'
import inhaler from '../../assets/asthmaEd/AsthmaSync_INHALER.png'
import meds from '../../assets/asthmaEd/AsthmaSync_MEDS.png'
import pill from '../../assets/asthmaEd/AsthmaSync_PILL.png'

import TopBar from './topBar'


const AsthmaED = ({navigation}) =>{
    
    return(
    <Container>
        <SafeAreaView/>
        <TopBar navigation={navigation}/>
        <Header>Asthma Education</Header>


        <TouchableOpacity onPress={() => navigation.navigate('Webview', {url: 'https://allergyasthmanetwork.org/what-is-asthma/', title:'Asthma Education'} )}>
        <EducationViews inputColor={'rgba(138,43,226,1)'}>
            <View style={{flexDirection: "row", justifyContent: 'space-between'}}> 
                <EducationText>What is Asthma</EducationText>
                <EducationArrow source={arrow}></EducationArrow>
            </View>
        </EducationViews>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Webview', {url: 'https://www.sciencedaily.com/news/health_medicine/asthma/', title:'Asthma Education'} )}>
        <EducationViews inputColor={'rgba(2,161,64,1)'}>
            <View style={{flexDirection: "row", justifyContent: 'space-between'}}> 
                <EducationText>Latest Asthma News</EducationText>
                <EducationArrow source={arrow}></EducationArrow>
            </View>
        </EducationViews>
        </TouchableOpacity>
        

        <TouchableOpacity onPress={() => navigation.navigate('Webview', {url: 'https://www.nationalasthma.org.au/living-with-asthma/how-to-videos/how-to-use-a-standard-mdi-and-spacer', title:'Asthma Education'} )}>
        <EducationViews inputColor={'rgba(36,159,220,1)'}>
            <View style={{flexDirection: "row", justifyContent: 'space-between',alignItems: 'center'}}> 
                <EducationText>How to use an inhaler</EducationText>
                <View style={{flexDirection: 'row',alignItems: 'center'}}>
                <EducationIcon source={inhaler}></EducationIcon>
                <EducationArrow source={arrow}></EducationArrow>
                </View>
            </View>
        </EducationViews>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('Webview', {url: 'https://www.cdc.gov/asthma/inhaler_video/default.htm', title:'Asthma Education'} )}>
        <EducationViews inputColor={'rgba(0,183,183,1)'}>
            <View style={{flexDirection: "row", justifyContent: 'space-between',alignItems: 'center'}}> 
                <EducationText>How to use a spacer</EducationText>
                    <View style={{flexDirection: 'row',alignItems: 'center'}}>
                        <EducationIcon source={spacer}></EducationIcon>
                        <EducationArrow source={arrow}></EducationArrow>
                    </View>
            </View>
        </EducationViews>
        </TouchableOpacity>

        

        <TouchableOpacity onPress={() => navigation.navigate('Webview', {url: 'https://www.worldallergy.org/ask-the-expert/questions/asthma-medication-adherence', title:'Asthma Education'} )}>
        <EducationViews inputColor={'rgba(248,164,52,1)'}>
            <View style={{flexDirection: "row", justifyContent: 'space-between',alignItems: 'center'}}> 
                <EducationText>Medication adherance training</EducationText>
                <View style={{flexDirection: 'row',alignItems: 'center'}}>
                    <EducationIcon style={{width: 35}} source={meds}></EducationIcon>
                    <EducationArrow source={arrow}></EducationArrow>
                </View>
            </View>
        </EducationViews>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Webview', {url: 'https://allergyasthmanetwork.org/what-is-asthma/how-is-asthma-treated/', title:'Asthma Education'} )}>
        <EducationViews inputColor={'rgba(183,35,109,1)'}>
            <View style={{flexDirection: "row", justifyContent: 'space-between',alignItems: 'center'}}> 
                <EducationText>Medication Information</EducationText>
                <View style={{flexDirection: 'row',alignItems: 'center'}}>
                    <EducationIcon style={{height: 35,width: 35}} source={pill}></EducationIcon>
                    <EducationArrow source={arrow}></EducationArrow>
                </View>
            </View>
        </EducationViews>
        </TouchableOpacity>
    </Container>
    )

}

const Container = styled.View`
    flex: 1;
    flexDirection: column;
    backgroundColor: #fff;
    alignItems: stretch;
`;

const ContentContainer = styled.View`
    marginLeft: 15px
    marginRight: 15px
    alignItems: center;
    flexDirection: row;
    alignSelf: center;

`
const Header = styled.Text`
    color: #000
    fontSize: 20px;
    fontWeight: 400;
    marginTop: 10px;
    alignSelf: center;
    marginBottom: 30px;
`;

const Title = styled.Text`
    color: #000
    fontSize: 17px;
    fontWeight: 600;
    marginLeft: 20px;
`
const EducationViews = styled.View`
    height: 75px;
    width: 320px;
    borderRadius: 6px;
    backgroundColor: ${props => props.inputColor || "#000"} ;
    alignSelf: center;
    justifyContent: center;
    marginBottom: 25px;
    
`
const EducationText = styled.Text`
    color: #fff
    fontWeight: bold
    fontSize: 14px;
    alignItems: center;
    marginLeft: 15px;
`

const EducationArrow = styled.Image`
    width: 12px;
    height: 15px;
    marginRight: 10px;
`
const EducationIcon = styled.Image`
    width: 50px;
    height: 50px;
    marginRight: 10px;
`
export default AsthmaED;