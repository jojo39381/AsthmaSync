import React,{useState,useRef,useEffect} from 'react';
import {SafeAreaView,StatusBar,TextInput,View,Button,Text,TouchableOpacity,ScrollView } from 'react-native';
import TopBar from './topBar'
import styled from 'styled-components'
import Background from '../setup/background';
import ConfettiCannon from 'react-native-confetti-cannon';
import Dialog, { SlideAnimation,    DialogContent } from 'react-native-popup-dialog';
import Moment from 'moment';


const MyHealth = ({route,navigation}) =>{
    const [showScore, setShowScore] = useState(false)
    const [toCelebrate, setToCelebrate] = useState(false)
    const dismissScore = () => {
        setShowScore(false)
    }
    var {celebrate}  = route.params
    var {score} = route.params
    var {statement} = route.params
    var current = Moment(new Date()).format('MM/DD/YYYY')
    const confettiRef1 = useRef();
    useEffect(()=>{
        console.log(route.params)
        if(celebrate == true){
            
            
            
            setShowScore(true)
            confettiRef1.current.start()
            route.params = {celebrate:false, score: route.params.score, statement:route.params.statement}
            
        }
    })
    const logged = () =>{
        confettiRef1.current.start()
        setTimeout(function(){ navigation.navigate('MyHealth'); }
        , 1000);

    }

    return(
        <Container>
            <SafeAreaView/>
            <TopBar navigation={navigation}/>
            <ScrollView contentContainerStyle={{alignItems: 'stretch'}}>
                <ContentContainer>
                    <Header>My Health</Header>
                    <HealthScore>95</HealthScore>
                    <Header2>Asthma Health Score</Header2>
                    <TimeUpdate style={{marginTop: 5}}>Last Updated</TimeUpdate>
                    <TimeUpdate>{current}</TimeUpdate>
                </ContentContainer>
                <View >

<Dialog
  visible={showScore}
  dialogAnimation={new SlideAnimation({
      slideFrom: 'bottom',
    })}
  onTouchOutside={dismissScore}
  rounded={true}
  width={0.9}
>
  <DialogContent style={{}}>
    <Text style={{textAlign:"center", fontSize:20, marginTop:10}}>Your ACT Score Is {"\n"}{"\n"}<Text style={{fontSize:40, color: 'green'}}>{score}</Text>{"\n"}{"\n"} Your asthma is likely <Text style={score > 19 ? {color:"green"} : {color:"red"}}>{statement}</Text> </Text>
  </DialogContent>
</Dialog>
</View>
                <TouchableOpacity onPress={()=>navigation.navigate('AsthmaActionPlan')}>
                <BlockContainer style={{marginTop:15,shadowColor: '#000',shadowOpacity: .15,shadowOffset: {width: 0, height: 0},shadowRadius: 5}} >
                    <View style={{marginLeft: 10}}>
                    <BlockText>Asthma Action Plan</BlockText>
                    <Description>It looks like you've been doing well controlling your asthma.</Description>
                    <Description>Please continue to take your medication as prescribed and continue logging symptoms in the app.</Description>
                    <BlockViewer>Details ></BlockViewer>
                    </View>
                </BlockContainer>
                </TouchableOpacity>

                <BlockContainer style={{marginTop:15,shadowColor: '#000',shadowOpacity: .15,shadowOffset: {width: 0, height: 0},shadowRadius: 5,backgroundColor: "#009f52",height: 50}} >
                
                <AAPText>GREEN ZONE - Go!</AAPText>
                <AAPText >Take Controller Medicine Every Day</AAPText>

                
                </BlockContainer>

                <View style={{flexDirection: 'row', justifyContent: 'space-around',marginLeft: 10,marginRight: 10}}>
                <TouchableOpacity onPress={() => navigation.navigate('Symptoms')}>
                    <ContinueButton style={{alignSelf: 'center',alignItems: "center",marginTop: 15}}>
                        <ButtonText>Symptoms</ButtonText>
                    </ContinueButton>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('ActTest')}>
                    <ContinueButton style={{alignSelf: 'center',alignItems: "center",marginTop: 15}}>
                        <ButtonText>ACT</ButtonText>
                    </ContinueButton>
                </TouchableOpacity>
                </View>

                <BlockContainer style={{marginTop:15,shadowColor: '#000',shadowOpacity: .15,shadowOffset: {width: 0, height: 0},shadowRadius: 5}} >
                    <View style={{marginLeft: 10}}>
                    <BlockText>Medication History</BlockText>
                    <Description>It looks like you've been doing well controlling your asthma.</Description>
                    <Description>Please continue to take your medication as prescribed and continue logging symptoms in the app.</Description>
                    <BlockViewer>Export ></BlockViewer>
                    </View>
                </BlockContainer>

                <BlockContainer style={{marginTop:15,shadowColor: '#000',shadowOpacity: .15,shadowOffset: {width: 0, height: 0},shadowRadius: 5}} >
                    <View style={{marginLeft: 10}}>
                    <BlockText>FeNO History</BlockText>
                    <Description>It looks like you've been doing well controlling your asthma.</Description>
                    <Description>Please continue to take your medication as prescribed and continue logging symptoms in the app.</Description>
                    <BlockViewer>Export ></BlockViewer>
                    </View>
                </BlockContainer>

                <BlockContainer style={{marginTop:15,shadowColor: '#000',shadowOpacity: .15,shadowOffset: {width: 0, height: 0},shadowRadius: 5}} >
                    <View style={{marginLeft: 10}}>
                    <BlockText>Spirometric History</BlockText>
                    <Description>It looks like you've been doing well controlling your asthma.</Description>
                    <Description>Please continue to take your medication as prescribed and continue logging symptoms in the app.</Description>
                    <BlockViewer>Export ></BlockViewer>
                    </View>
                </BlockContainer>


            </ScrollView>
            <ConfettiCannon ref={confettiRef1} fadeOut={true} autoStart={false} count={100} origin={{x: 180, y: -15}} />


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
    fontSize: 20px;
    fontWeight: 400;
    marginTop: 10px;
`;

const Header2 = styled.Text`
    color: #000
    fontSize: 18px;
    fontWeight: 400;
    marginTop: 1px;
`;

const HealthScore = styled.Text`
    color: #009f52;
    fontSize: 50px;
    fontWeight: 400;
    marginTop: 0px;
`;

const TimeUpdate = styled.Text`
    color: #929294
    fontSize: 10px;
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
const Description = styled.Text`
    fontSize: 13px;
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
    width: 160px;
    borderColor:  #0062A6;
    borderWidth: 3px;
    borderRadius: 30px;
    paddingLeft: 20px;
    justifyContent: center;
`;

const BlockViewer = styled.Text`
    alignSelf: flex-end;
    marginTop: 10px;
    marginBottom: 10px;
    marginRight: 10px;
    fontSize: 12px;
`

const AAPText = styled.Text`
    marginTop: 5px;
    fontSize: 13px;
    color: #fff
    fontWeight: bold;
    alignSelf: center;
`

export default MyHealth;