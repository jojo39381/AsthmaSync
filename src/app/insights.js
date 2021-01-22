
import React,{useState,useRef} from 'react';
import {SafeAreaView,StatusBar,TextInput,View,Button,Text,TouchableOpacity,ScrollView,Dimensions } from 'react-native';
import styled from 'styled-components'

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

import logo from '../../assets/AsthmaSync_LogoBlueBG.png'
import calIcon from '../../assets/AsthmaSync_CALENDAR.png'
import air from '../../assets/insights/AsthmaSync_Air.png'
import pollen from '../../assets/insights/AsthmaSync_Pollen.png'
import animal from '../../assets/insights/AsthmaSync_Animal.png'
import ProgressBar from 'react-native-progress/Bar';
import TopBar from './topBar';

const Insights = ({navigation}) =>{
    const scrollViewRef = useRef();
    
    const getCurrDate =() =>{
        var dates = [];
        for(i =0; i < 7; i++){
            var curr = new Date();
            curr.setDate(curr.getDate()-i);
            console.log(curr.toLocaleDateString("en-US"))
            var currFix = curr.toLocaleDateString("en-US");
            var index = currFix.indexOf('/',3);
            currFix = currFix.slice(0,index);
            dates.push(currFix);
        }
        return dates.reverse();
    }

    const [date,setDate] = useState(getCurrDate());

    const colorDot = (dataPoint,dataPointIndex)=>{
        if(dataPoint<=3){
            return 'green';
        }else if(dataPoint<=6){
            return 'orange';
        }else{
            return 'red';
        }
    }
    
    const doubleNums = (t1,t2) =>{
        return(
            <View> 
                <CurrentText inputColor={t1.color}>{t1.num}</CurrentText>  
                <CurrentText inputColor={t2.color}>{t2.num}</CurrentText> 
            </View>
        );
    }

    const emotionVisual = (y,x,index) =>{
        return(
            <View style={{position: 'absolute',top: x-9, left: y-10}}> 
                <Text>😀</Text>
            </View>
        );
    }


    return(
        <Container>
            <SafeAreaView></SafeAreaView>
            <TopBar navigation={navigation}/>
            
            <IntervalComponet value={value=>console.log('hi')}/>

            <ScrollView
                ref={scrollViewRef}
                style={{borderWidth: .3,borderColor: '#0062A6'}}
            >
            <ContentContainer>
                <Header onPress ={() => scrollViewRef.current.scrollToEnd({animated: true})} >Insights</Header>
            </ContentContainer>


            <BlockContainer style={{marginTop:15,shadowColor: '#000',shadowOpacity: .15,shadowOffset: {width: 0, height: 0},shadowRadius: 5}}>
            <Title style={{marginTop: 10}}>Key Insights</Title>
            <Title style={{marginTop: 10, fontSize:12}}>Pattern Recognition</Title>
                <BlockContainer2 style={{flexDirection:'row',marginLeft: 1,}}>
                    <KeyImg source={air}/>
                    <Description>Birch pollen seems to be problematic - AsthmaSync will warn of future exposure</Description>
                </BlockContainer2>
            <Title style={{marginTop: 10, fontSize:12}}>Data Analysis</Title>
                <BlockContainer2 style={{flexDirection:'row',marginLeft: 1,}}>
                    <KeyImg source={pollen}/>
                    <Description>Medication adherence is critical to good asthma health - AsthmaSync will step up reminders</Description>
                </BlockContainer2>
            <Title style={{marginTop: 10, fontSize:12}}>Pattern Management</Title>
                <BlockContainer2 style={{flexDirection:'row',marginLeft: 1,}}>
                    <KeyImg source={animal}/>
                    <Description>Pollution does not seem to be an issue - system will downgrade importance</Description>
                </BlockContainer2>
             <Title style={{marginTop: 10, fontSize:12}}>Pattern Management</Title>
                <BlockContainer2 style={{flexDirection:'row',marginLeft: 1,}}>
                    <KeyImg source={animal}/>
                    <Description>Anomaly with ACT score 3 weeks ago - AshmaSync will coninue to monitor, bring to HCP attention at next office visit</Description>
                </BlockContainer2>
            </BlockContainer>
            <View style={{paddingBottom: 30}}></View>

            <Title>Asthma Health Scores</Title>
            <LineChart
                data={{
                labels: ["Jun", "July", "Aug", "Sep", "Oct", "Nov"],
                datasets: [
                    {
                    data: [
                        70,
                        60,
                        80,
                        50,
                        60,
                        80
                    ], color: (opacity = 1) => `rgba(242, 80, 242, ${opacity})`,
                        strokeWidth: 2 // optional
                    }
                    
                ]
                }}
                width={Dimensions.get("window").width- 40} // from react-native
                height={180}
                yAxisLabel=""
                yAxisSuffix=""
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundGradientFrom: "#f7faff",//background color
                    backgroundGradientTo: "#f7faff",
                    fillShadowGradientOpacity: 0,
                    decimalPlaces: 1, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, //dot color
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                    },
                    propsForLabels:{
                        fontSize: "11"
                    }
                }}
                bezier
                style={{
                    marginVertical: 20,
                    borderRadius: 12,
                    alignSelf: 'flex-start',
                    paddingBottom: -5,
                    marginLeft: 15
                }}
                decorator={()=>(<View><CurrentText inputColor={'rgba(242, 80, 242, 1)'}>80</CurrentText></View>)}

            />
            
            <Title>Symptom Tracker</Title>
            <LineChart
                data={{
                labels: ["Jun", "July", "Aug", "Sep", "Oct", "Nov"],
                datasets: [
                    {
                    data: [
                        23,
                        21,
                        22,
                        20,
                        22,
                        24

                    ], color: (opacity = 1) => `rgba(242, 80, 131, ${opacity})`,
                        strokeWidth: 2 // optional
                    }
                    
                ]
                }}
                width={Dimensions.get("window").width- 40} // from react-native
                height={185}
                getDotColor={colorDot}
                yAxisLabel=""
                yAxisSuffix=""
                yAxisInterval={0.5} // optional, defaults to 1
                chartConfig={{
                    backgroundGradientFrom: "#f7faff",//background color
                    backgroundGradientTo: "#f7faff",
                    fillShadowGradientOpacity: 0,
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, //dot color
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        paddingLeft: 0
                    },
                    propsForDots: {
                        r: "11",
                        strokeWidth: "",
                        source: {air}
                    },propsForLabels:{
                        fontSize: "11"
                    }
                }}
                
                bezier
                style={{
                    marginVertical: 20,
                    borderRadius: 12,
                    alignSelf: 'flex-start',
                    paddingBottom: -5,
                    marginLeft: 15,
                }}
                onDataPointClick={value=>getCurrDate()}
                decorator={()=>(<View><CurrentText inputColor={'orange'}>22</CurrentText></View>)}
                renderDotContent={({x,y,index})=>emotionVisual(x,y,index)}
            />
            


            <Title>Biometrics</Title>
            <LineChart
                data={{
                labels: ["Jun", "July", "Aug", "Sep", "Oct", "Nov"],
                datasets: [
                    {
                    data: [
                        30,
                        26,
                        32,
                        19,
                        25,
                        30

                    ], color: (opacity = 1) => `rgba(26, 209, 13, ${opacity})`,
                        strokeWidth: 2 // optional
                    },{
                    data: [
                        96,
                        89,
                        99,
                        91,
                        96,
                        99

                    ],
                    color: (opacity = 1) => `rgba(2, 135, 227, ${opacity})`,
                    strokeWidth: 2 // optional
                    }
                    
                ]
                }}
                width={Dimensions.get("window").width - 40} // from react-native
                height={180}
                yAxisLabel=""
                yAxisSuffix=""
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundGradientFrom: "#f7faff",//background color
                    backgroundGradientTo: "#f7faff",
                    fillShadowGradientOpacity: 0,
                    decimalPlaces: 1, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, //dot color
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        paddingBottom: 40,
                        
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                    },propsForLabels:{
                        fontSize: "11"
                    }
                }}
                bezier
                style={{
                marginVertical: 20,
                borderRadius: 12,
                alignSelf: 'flex-start',
                paddingBottom: -5,
                marginLeft: 15
                }}
                decorator={()=>(doubleNums({color: 'rgba(26, 209, 13, 1.0)', num: 27},{color: 'rgba(2, 135, 227, 1.0)', num: 95}))}

            />
            
            <KeyContainer>
                <KeyColor inputColor={'rgba(26, 209, 13, 1.0)'} ></KeyColor>
                <KeyText>FeNO</KeyText>
                <KeyColor inputColor={'rgba(2, 135, 227, 1.0)'} ></KeyColor>
                <KeyText>Spriometry</KeyText>
            </KeyContainer>        


            <Title>Medication Adherence</Title>
            <LineChart
                data={{
                labels: ["Jun", "July", "Aug", "Sep", "Oct", "Nov"],
                datasets: [
                    {
                    data: [
                        30,
                        70,
                        50,
                        25,
                        50
                    ], color: (opacity = 1) => `rgba(242, 80, 131, ${opacity})`,
                        strokeWidth: 2 // optional
                    }
                    
                ]
                }}
                width={Dimensions.get("window").width- 40} // from react-native
                height={185}
                getDotColor={'orange'}
                yAxisLabel=""
                yAxisSuffix=""
                yAxisInterval={'1'} // optional, defaults to 1
                chartConfig={{
                    backgroundGradientFrom: "#f7faff",//background color
                    backgroundGradientTo: "#f7faff",
                    fillShadowGradientOpacity: 0,
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, //dot color
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        paddingLeft: 0
                    },
                    propsForDots: {
                        r: "11",
                        strokeWidth: "",
                        source: {air}
                    },propsForLabels:{
                        fontSize: "11"
                    }
                }}
                fromZero
                bezier
                style={{
                    marginVertical: 20,
                    borderRadius: 12,
                    alignSelf: 'flex-start',
                    paddingBottom: -5,
                    marginLeft: 15,
                }}
                onDataPointClick={value=>getCurrDate()}
                decorator={()=>(<View><CurrentText inputColor={'orange'}>45</CurrentText></View>)}
                
            />
            <Title>Environmental</Title>
            <LineChart
                data={{
                labels: ["Jun", "July", "Aug", "Sep", "Oct", "Nov"],
                datasets: [
                    {
                    data: [
                        50,
                        35,
                        60,
                        40,
                        55,
                        60



                    ], color: (opacity = 1) => `rgba(52, 240, 250, ${opacity})`,
                        strokeWidth: 2 // optional
                    },{
                    data: [
                        50,
                        35,
                        60,
                        40,
                        55,
                        60
                    ],
                    color: (opacity = 1) => `rgba(255, 187, 61, ${opacity})`,
                    strokeWidth: 2 // optional
                    }
                    
                ]
                }}
                width={Dimensions.get("window").width- 40} // from react-native
                height={180}
                yAxisLabel=""
                yAxisSuffix=""
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundGradientFrom: "#f7faff",//background color
                    backgroundGradientTo: "#f7faff",
                    fillShadowGradientOpacity: 0,
                    decimalPlaces: 1, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, //dot color
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        paddingBottom: 40,
                        

                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                    },propsForLabels:{
                        fontSize: "11"
                    }
                }}
                bezier
                style={{
                    marginVertical: 20,
                    borderRadius: 12,
                    alignSelf: 'flex-start',
                    paddingBottom: -5,
                    marginLeft: 15
                }}
                decorator={()=>(doubleNums({color: 'rgba(52, 240, 250, 1)', num: 50},{color: 'rgba(255, 187, 61, 1.0)', num: 50}))}
            />
            <KeyContainer>
                <KeyColor inputColor={'rgba(52, 240, 250, 1.0)'} ></KeyColor>
                <KeyText>Air Quality</KeyText>
                <KeyColor inputColor={'rgba(255, 187, 61, 1.0)'} ></KeyColor>
                <KeyText>Pollen</KeyText>
            </KeyContainer>





            
            <View style={{paddingBottom: 30}}></View>

            </ScrollView>
        </Container>
    );
}


const IntervalComponet = ({value}) =>{
    
    const [interval,setInterval] = useState('1W');
    
    value(interval);

    return(
        <IntervalContainer>
             <TouchableOpacity onPress={()=>setInterval('1W')}>
                 <IntervalNumCon inputColor={interval == '1W'? '#0062A6': '#fff'}>
                    <IntervalText inputColor={interval == '1W'? '#fff': '#0062A6'}>1W</IntervalText>
                </IntervalNumCon>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>setInterval('1M')}>
                 <IntervalNumCon inputColor={interval == '1M'? '#0062A6': '#fff'}>
                    <IntervalText inputColor={interval == '1M'? '#fff': '#0062A6'}>1M</IntervalText>
                </IntervalNumCon>
             </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>setInterval('3M')}>
                <IntervalNumCon inputColor={interval == '3M'? '#0062A6': '#fff'}>
                    <IntervalText inputColor={interval == '3M'? '#fff': '#0062A6'}>3M</IntervalText>
                </IntervalNumCon>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>setInterval('1Y')}>
                <IntervalNumCon inputColor={interval == '1Y'? '#0062A6': '#fff'}>
                    <IntervalText inputColor={interval == '1Y'? '#fff': '#0062A6'}>1Y</IntervalText>
                </IntervalNumCon>
            </TouchableOpacity> 
            
            <TouchableOpacity onPress={()=>setInterval('ALL')}>
                <IntervalNumCon inputColor={interval == 'ALL'? '#0062A6': '#fff'}>
                    <IntervalText inputColor={interval == 'ALL'? '#fff': '#0062A6'}>ALL</IntervalText>
                </IntervalNumCon>  
            </TouchableOpacity>
                            
        </IntervalContainer>
        
    );
}



const EmotionComponet = ({value}) =>{
    //week
    //month
    //year
    //5 year
    const [interval,setInterval] = useState('week');
    const happy = useRef();
    const ok = useRef();
    const sad = useRef();

    const emo = (key) =>{
        console.log(key);
        if(key == 'sad'){
            setEmotion(1);
        }else if(key == 'ok'){
            setEmotion(2);
        }else if(key == 'happy'){
            setEmotion(3);
        }
    }

    value(emotion);

    return(
        <View style={{flexDirection: 'row', justifyContent: 'space-around',alignSelf: 'stretch'}}>
        <TouchableOpacity onPress={()=>emo('sad')}>
                <EmotionText ref={sad} style={{opacity: emotion == 1? 1: .5}}>☹️</EmotionText>  
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>emo('ok')}>
                 <EmotionText style={{opacity: emotion == 2? 1: .5}}>😐</EmotionText>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>emo('happy')}>
                <EmotionText style={{opacity: emotion == 3? 1: .5}}>😀</EmotionText>
        </TouchableOpacity>
        </View>
    );
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
    marginBottom: 12px;
`;

const Title = styled.Text`
    color: #000
    fontSize: 17px;
    fontWeight: 600;
    marginLeft: 20px;
`

const Description = styled.Text`
    fontSize: 13px;
    marginTop: 15px;
    marginLeft: 5px;
    paddingRight: 50px;
    
`;

const KeyContainer = styled.View`
    flexDirection: row;
    marginLeft: 20px;
    marginBottom: 10px;
    marginRight: 20px;
    justifyContent: center;
    alignItems: center;
`
const KeyColor = styled.View`
    width: 10px;
    height: 10px;
    borderRadius: 5px;
    marginRight: 5px;
    backgroundColor: ${props => props.inputColor || "red"} ;
`
const KeyText = styled.Text`
    fontSize: 10px;
    marginRight:10px;
`

const BlockContainer= styled.View`
    backgroundColor: #fff;
    height: 350px;
    alignSelf: stretch
    marginRight: 20px
    borderRadius: 6px;
    paddingBottom: 50px;
    marginLeft: 20px;
    
`

const BlockText = styled.Text`
    fontWeight: 600;
    fontSize: 15px;
    marginLeft: 20px;
`
const CurrentText = styled.Text`
    fontSize: 18px;
    fontWeight: bold;
    alignSelf: flex-end;
    marginRight: 10px;
    marginTop: 5px;
    color: ${props => props.inputColor || "black"} ;
`

const KeyImg = styled.Image`
    width: 30px;
    height: 30px;
    marginLeft: 20px;
    marginTop: 15px;
`
const BlockContainer2= styled.View`
    backgroundColor: #fff;
    alignSelf: stretch;
    
    borderRadius: 6px;

    marginLeft: 20px;
    marginRight: 20px;
`   

const IntervalContainer = styled.View`
    flexDirection: row;
    alignSelf: stretch;
    height: 25px;
    borderColor: #d1d1d1;
    marginRight: 20px;
    marginLeft: 20px;
    marginBottom: 10px;
    justifyContent: space-around;
    marginTop: 10px;
`
const IntervalNumCon = styled.View`
    backgroundColor:  ${props => props.inputColor || '#fff'};
    width: 25px;
    alignItems: center;
    justifyContent: center;
    borderRadius: 5px;
`
const IntervalText = styled.Text`
    fontWeight: bold;
    color: ${props => props.inputColor || '#fff'};
`

export default Insights