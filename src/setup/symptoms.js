import React, {useState,useRef}from 'react';
import {SafeAreaView,StatusBar,TextInput,View,Button,Text,TouchableOpacity,ScrollView} from 'react-native';
import styled from 'styled-components'
import logo from '../../assets/AsthmaSync_LogoBlueBG.png'
import CheckButton from './checkButtons'
import ConfettiCannon from 'react-native-confetti-cannon';
import Slider from "react-native-slider";

const Symptoms = ({route, navigation}) =>{
    const [affect,setAffect] = useState(0);
    const confettiRef1 = useRef();
    const [value, setValue] = useState(0);
    const [color, setColor] = useState('#6beb34');
    const logged = () =>{
        const {id} = route.params
        navigation.navigate('Root',{screen: 'Home',params:{screen: 'Home',params:{id:id}}});
    }

    const changingColor = (value) =>{

        if(Math.floor(value*10)<=3){
            setColor('#6beb34')
        }else if(Math.floor(value*10)>3 && Math.floor(value*10)<=7){
            setColor('orange')
        }else{
            setColor('red')
        }

    }
    return (
        <Container>
        <StatusBar barStyle="light-content"/>
        <View>
            <Logo source={logo}>
            </Logo>
        </View>

        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <Header style={{marginTop: 0}}>Good afternoon, Dean.</Header>
        <Header>Are you experiencing any</Header>
        <Header>of these symptoms?</Header>
        
        <Grid>
            <Row>
                <CheckButton title={"Coughing"}/>
                <CheckButton title={"Wheezing"}/>
            </Row>
            <Row>
                <CheckButton title={"Sneezing"}/>
                <CheckButton title={"Itchy Eyes"}/>
            </Row>
            <Row>
                <CheckButton title={"Congestion"}/>
                <CheckButton title={"Runny Nose"}/>
            </Row>
            <Row>
                <CheckButton title={"Watery Eyes"}/>
                <CheckButton title={"Chest Tightness"}/>
            </Row>

        </Grid>
        <CheckButton title={"None"}/>
        
        <Header style={{marginTop: 15}}>How much are your</Header>
        <Header>asthma related symptoms</Header>
        <Header>affecting you?</Header>

        
        <Slider
            trackStyle={{ 
                height: 10,
                width: 300,
                borderRadius: 2,
                backgroundColor: 'white',
                borderColor: '#9a9a9a',
                borderWidth: 1
            }}
            thumbStyle={{
                width: 30,
                height: 30,
                borderRadius: 30,
                backgroundColor: '#fff',
                borderColor: '#9a9a9a',
                borderWidth: 1
            }}
            onValueChange={value=> {setValue(Math.floor(value*10));changingColor(value)}}
            minimumTrackTintColor={color}
            step={.1}
            value={0}
        />
        <View style={{flexDirection: 'row',justifyContent: 'space-between',alignSelf: 'stretch'}}>
            <FeelingText style={{fontWeight: 'normal',marginLeft: 30,fontSize: 15}}>None</FeelingText>
            <FeelingText inputColor={color}>{value}</FeelingText>
            <FeelingText style={{fontWeight: 'normal',marginRight: 30,fontSize: 15}}>Severely</FeelingText>

        </View>
        
        <Header style={{marginTop: 15}}>How are you feeling overall today?</Header>
            
            <EmotionComponet value={val=>console.log(val)}/>
       


        <TouchableOpacity  onPress={logged}>
                <ContinueButton style={{alignItems: "center",marginTop: 40}}>
                    <ButtonText>Log</ButtonText>
                </ContinueButton>
            </TouchableOpacity>
        <View style={{paddingBottom: 50}}/>
        </ScrollView>
        <ConfettiCannon ref={confettiRef1} fadeOut={true} autoStart={false} count={100} origin={{x: 180, y: -15}} />
        </Container>
    );

}

const EmotionComponet = ({value}) =>{
    //0 = none
    //1 = sad
    //2 = ok
    //3 = happy
    const [emotion,setEmotion] = useState(0);
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
    color: #fff;
    fontSize: 18px;
`;

const Grid = styled.View`
    marginTop: 7px;
    marginLeft: 20px;
    marginRight: 20px;
    width: 320px;
`;
const Row = styled.View`
    justifyContent: space-around;
    flexDirection: row;
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

const SkipButton = styled.Text`
    marginTop: 20px;
    fontSize: 17px;
    color: #fff;
`;

const Asthma = styled.Text`
    color: #ff912b;
    fontSize: 20px;
    marginTop: 10px;
    fontWeight: bold;
`;

const FeelingText = styled.Text`
    color: ${props => props.inputColor || "white"};
    fontSize: 20px;
    fontWeight: bold;
`

const EmotionText = styled.Text`
    fontSize: 50px;
    marginTop: 20px;
`

export default Symptoms;

