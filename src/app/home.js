

import React,{useState, useEffect} from 'react';
import {SafeAreaView,StatusBar,TextInput,View,Button,Text,TouchableOpacity,ScrollView} from 'react-native';
import styled from 'styled-components'
import MapView from 'react-native-maps';

import logo from '../../assets/AsthmaSync_LogoBlueBG.png'
import calIcon from '../../assets/AsthmaSync_CALENDAR.png'
import TopBarr from './topBar'
import UpArrow from '../../assets/uparrow.png'
import DownArrow from '../../assets/downarrow.png'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Moment from 'moment';
import { useIsFocused } from "@react-navigation/native";
import Dialog, { SlideAnimation,    DialogContent } from 'react-native-popup-dialog';
import {fetchAirData} from '../actions/airData.js';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import ProgressBar from 'react-native-progress/Bar';

const Home = ({route, navigation}) =>{
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    
    const [reminders, setReminders] = useState(
        [{
            id: 0,
            title:"Take asthma medication today",
            done: false,
            action: "check"
         },
         {
            id: 1,
            title:"Answer symptoms questionaire",
            done: false,
            action: "logging"
         },
         {
            id:2,
            title:"Pollution in your area today - Be cautious",
            done: false,
            action: "check"
         }
        ])
    const [showAlert, setShowAlert] = useState(false)
    const checkAction = (id) => {
        
        let updatedList = reminders.map(item => 
            {
              if (item.id == id){
                return {...item, done: !item.done}; //gets everything that was already in item, and updates "done"
              }
              return item; // else return unmodified item 
            });
        
          setReminders(updatedList)
      }

      const logAction = (id) => {
        
        navigation.navigate("Symptoms", {id:id})


      }
    
      const isVisible = useIsFocused();

      useEffect(() => {
        
        if (isVisible && route.params != undefined) {
            const {id} = route.params
            let updatedList = reminders.map(item => 
                {
                    
                    
                  if (item.id == id){
                
                    return {...item, done: true}; //gets everything that was already in item, and updates "done"
                  }
                  return item; // else return unmodified item 
                });
            
              setReminders(updatedList)



            }

        }, [isVisible]);    
    

    
    const [airData, setAirData] = useState({
        "lat":null,
        "lon":null,
        "city": "",
        "airData": {
          "aqi": 20,
          "pollenData": {
            "forecast":[1,2,3,4,5],
            "name": ""
          }
          
        }
        
    
      })

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position.coords.latitude)
                fetchAirData(position.coords.latitude, position.coords.longitude)
                .then((response) => {
                    setAirData(response)
                    console.log("///////")
                    console.log(response)
                })
                
                
            },
            (error) => console.log(error),
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 },
          );

        

       
    }, [])
  

    var current = new Date()
    const [timeLeft, setTimeLeft] = useState();
    useEffect(() => {
        if(timeLeft===0){
           console.log("TIME LEFT IS 0");
           setTimeLeft(null)
        }
    
        // exit early when we reach 0
        if (!timeLeft) return;
    
        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
    
          setTimeLeft(timeLeft - 1);
        }, 1000);
    
        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
      }, [timeLeft]);

    return(
    <Container>
        <SafeAreaView></SafeAreaView>
        <TopBarr navigation={navigation}/>
        <ScrollView contentContainerStyle={{alignItems: 'stretch'}}>

        <ContainterTop style={{justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => {
                setShowAlert(!showAlert) 
                setTimeLeft(5)}}>
            <View style={{width: 50,height: 40,borderRadius: 10,backgroundColor: 'red',justifyContent: 'center',alignItems: 'center'}}>
                <Text style={{color: 'white',fontWeight: 'bold'}}>SOS</Text>
            </View>
            
            </TouchableOpacity>
            <ContentContainer>
               
                <Header>Dr. Josh S. Jacobs</Header>
                <HCP>Allergy & Asthma Medical Group</HCP>
            </ContentContainer>
            <TouchableOpacity onPress={() => navigation.navigate('Webview', {url: 'https://bayareaallergy.com/',title: 'Office Info'})}>
            <View style={{width: 50,height:40,borderRadius: 10,backgroundColor: '#0062A6',justifyContent: 'center',alignItems: 'center'}}>
                <Text style={{color: 'white',fontWeight: 'bold',fontSize: 12}}>Office</Text>
                <Text style={{color: 'white',fontWeight: 'bold',fontSize: 12}}>Info</Text>
            </View>
            </TouchableOpacity>
        </ContainterTop>
       
        <Header style={{marginLeft:20, marginTop:15, fontWeight:'500'}}>Good evening, Dean, {"\n"}This is your daily summary</Header>
        <View >

<Dialog
  visible={showAlert}
  dialogAnimation={new SlideAnimation({
      slideFrom: 'bottom',
    })}
  onTouchOutside={() => setShowAlert(!showAlert)}
  rounded={true}
  width={0.9}
>
  <DialogContent style={{}}>
    {timeLeft > 0 ? <Text style={{textAlign:"center", fontSize:20, marginTop:10, fontWeight:'bold'}}>Notifying Emergency Contacts {'\n'}{'\n'}<Text style={{color:'red', fontSize:30}}>{timeLeft}</Text>{'\n'}</Text> : <Text style={{textAlign:"center", fontSize:25, marginTop:15}}>Notified! {'\n'} SOS Sent! </Text>}
        
    {timeLeft > 0 ? <Button title='Cancel' onPress={() => (

    setShowAlert(!showAlert),
    setTimeLeft(null)
    )}></Button> : null}
  </DialogContent>
</Dialog>
</View>
        <BlockContainer style={{marginTop:15,shadowColor: '#000',shadowOpacity: .15,shadowOffset: {width: 0, height: 0},shadowRadius: 5}} >
            <View style={{marginLeft: 10}}>
            <BlockText>Reminders</BlockText>
            <View style={{marginTop: 10,paddingBottom: 15}}>
                

            {reminders.map(item => {
                return (
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={item.action == "check" ? () => {checkAction(item.id)} : () => logAction(item.id)}>
                 <Icon size={17} color={"black"} name={ item.done ? 'check-box' : 'check-box-outline-blank'} style={{marginRight:10}}/>

                <Text style={{alignSelf: 'flex-start',fontSize: 14,fontWeight: '500'}}>{item.title}</Text>
            </TouchableOpacity>  
            
            
                )
            })}
           
            </View>

            </View>
        </BlockContainer>
        
        <BlockContainer style={{marginTop:15,shadowColor: '#000',shadowOpacity: .15,shadowOffset: {width: 0, height: 0},shadowRadius: 5}} >
            <View style={{marginLeft: 10}}>
            <BlockText>Your Health Overview</BlockText>
            <View style={{flexDirection: 'row',marginTop: 10,justifyContent: 'space-evenly',marginTop: 20}}>
            
            <HealthScoreBlock>
                <View style={{flexDirection: 'row'}}>  
                    <UpArrowImg style={{ tintColor:'red'}}source={UpArrow}/>
                     <FeNOScore>57 </FeNOScore>
                </View>
                        <TitleBlock> FeNO Score</TitleBlock>
                <View style={{marginTop: 5}}>
                <TimeUpdate>Last Updated</TimeUpdate>
                <TimeUpdate>{Moment(current).format('MM/DD/YYYY')}</TimeUpdate>
                </View>
            </HealthScoreBlock>

            <HealthScoreBlock>
            <View style={{flexDirection: 'row'}}>  
                <UpArrowImg  style={{marginTop: 33, tintColor:'green'}}source={UpArrow}/>
                
                <HealthScore>
                    95
                </HealthScore>
                </View>
    
                <TitleBlock>Health Score</TitleBlock>
                <View style={{marginTop: 5}}>
                <TimeUpdate>Last Updated</TimeUpdate>
                <TimeUpdate>{Moment(current).format('MM/DD/YYYY')}</TimeUpdate>
                </View>

            </HealthScoreBlock>


            <HealthScoreBlock>
            <View style={{flexDirection: 'row'}}>  
            <UpArrowImg style={{tintColor:'red'}} source={DownArrow}/>
                <AdherenceScore>
                    {(25 + 75 + 50 + 25 + 50)/5}%
                </AdherenceScore>
            </View>
                <TitleBlock>Med. Adherence</TitleBlock>
                <View style={{marginTop: 5}}>
                <TimeUpdate>Last Updated</TimeUpdate>
                <TimeUpdate>{ Moment(current).format('MM/DD/YYYY')}</TimeUpdate>
                </View>
            </HealthScoreBlock>
            </View>

            <BlockViewer>My Health ></BlockViewer>
            </View>
        </BlockContainer>

        <BlockContainer style={{marginTop:15,shadowColor: '#000',shadowOpacity: .15,shadowOffset: {width: 0, height: 0},shadowRadius: 5}} >
            <View style={{marginLeft: 10,flexDirection: 'row'}}>
                <BlockText>Air Quality</BlockText>
                <Place>Near {airData.city}</Place>
                
            </View>
            <DateText>{Moment(current).format('dddd, MMMM DD')}</DateText>
            <Text style={{marginLeft:10}}>Overall AQI: {airData.airData.aqi}</Text>
            {airData.lat != null ? <MapView
                initialRegion={{
                latitude: airData.lat,
                longitude: airData.lon,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
                style={{width: 315, height: 150,marginLeft:10,marginTop: 5}}
            > 
            <MapView.Circle center={{latitude:airData.lat, longitude:airData.lon}} fillColor="#f0343455"
                        strokeColor="#f03434" radius={2000} ></MapView.Circle>
            <View style={{marginLeft:5, marginTop: 5, borderColor:"black", borderWidth:1, padding: 2, width:110, height:50, borderRadius: 10}}>
            <Text style={{}}>Top Allergens:{"\n"}{airData.airData.pollenData.name}</Text>
            </View>
            </MapView> : <Text style={{marginLeft:10}}>Getting Location...</Text> }
            
            <BlockViewer>Insights ></BlockViewer>
        </BlockContainer>


        <BlockContainer style={{marginTop:15,shadowColor: '#000',shadowOpacity: .15,shadowOffset: {width: 0, height: 0},shadowRadius: 5}} >
            <View style={{marginLeft: 10,flexDirection: 'row'}}>
                <BlockText>Pollen Count Forecast</BlockText>
                <Place>Near {airData.city}</Place>
            </View>
            <DateText>{Moment(current).format('dddd, MMMM DD')}</DateText>
            <LineChart
                data={{
                labels: [Moment().add(0,'days').format('ddd'), Moment().add(1,'days').format('ddd'), Moment().add(2,'days').format('ddd'), Moment().add(3,'days').format('ddd'), Moment().add(4,'days').format('ddd')],
                datasets: [
                    {
                    data: airData.airData.pollenData.forecast
                    ,
                    strokeWidth: 0 // optional
                    }
                ]
                }}
                width={315} // from react-native
                height={180}
                yAxisLabel=""
                yAxisSuffix=""
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 1, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    
                },
                propsForDots: {
                    r: "6",
                }
                }}

                style={{
                marginVertical: 8,
                
                marginLeft: 10,
                
            
                }}
            />
            <BlockViewer>Insights ></BlockViewer>
        </BlockContainer>


        </ScrollView>
        
    </Container>
    );

}



const Container = styled.View`
flex: 1;
flexDirection: column;
backgroundColor: #fff;
alignItems: center;

`;

const ContentContainer = styled.View`
    marginLeft: 15px
    marginRight: 15px
    alignItems: center;

`
const Header = styled.Text`
    color: #000
    fontSize: 22px;
    fontWeight: 700;
    marginTop: 5px;
`;

const HCP = styled.Text`
    marginTop: 5px;
    fontSize: 13px;

`
const BlockContainer= styled.View`
    backgroundColor: #fff;
    alignSelf: stretch;
    marginRight: 20px;
    marginLeft: 20px;
    width: 335px;
`
const BlockText = styled.Text`
    fontWeight: 600;
    fontSize: 15px;
    marginTop: 10px;
`

const CalImg = styled.Image`
    marginRight: 0px;
    height: 30px;
    width: 27px;
`

const BlockViewer = styled.Text`
    alignSelf: flex-end;
    marginTop: 10px;
    marginBottom: 10px;
    marginRight: 10px;
`

const HealthScoreBlock = styled.View`
    flexDirection: column;
    alignItems: center
    justifyContent: center;

`;

const FeNOScore = styled.Text`
    fontSize: 30px;
    color: #e39427;
    marginTop: 24px;
`

const AdherenceScore = styled.Text`
    fontSize: 30px;
    color: #e39427;
    marginTop: 24px;
`

const HealthScore = styled.Text`
    fontSize: 50px;
    color: green;
    fontWeight: 400;

`


const TitleBlock = styled.Text`
    fontSize: 13px;
    fontWeight: 500;
`

const TimeUpdate = styled.Text`
    color: #929294
    fontSize: 10px;
`
const Place = styled.Text`
    color: #929294
    fontSize: 12px;
    marginTop: 12px;
    marginLeft: 8px;
`

const DateText = styled.Text`
    fontSize: 12px;
    marginLeft: 10px
`;

const ContainterTop = styled.View`
    flexDirection: row;
    alignItems: center;
`

const UpArrowImg = styled.Image`
    width: 17px;
    height: 16px;
    marginTop: 38px;
    marginRight:2px;

`
/*
const TopBar = styled.View`
    flexDirection: row;
    alignItems: center;
    justifyContent: space-between;
    alignSelf: stretch;
`;
*/
export default Home;


