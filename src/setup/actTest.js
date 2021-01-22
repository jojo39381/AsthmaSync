
import React,{useState} from 'react';
import {SafeAreaView,StatusBar,TextInput,View,Button,Text,TouchableOpacity,ScrollView } from 'react-native';
import styled from 'styled-components'

import Background from './background';
import logo from '../../assets/AsthmaSync_LogoBlueBG.png'
//import SegmentedControl from '@react-native-community/segmented-control';
import RadioButtonRN from 'radio-buttons-react-native';


const ActTest = ({navigation}) =>{
    
    const question = {
                1: {
                    question: '1.  In the past 4 weeks, how much of the time did your asthma keep you from getting as much done at work, school or at home?',
                    answers: [{
                            label: 'All of the time',
                            value: 1
                        },
                        {
                            label: 'Most of the time',
                            value: 2
                        },
                        {
                            label: 'Some of the time',
                            value: 3
                        },
                        {
                            label: 'A little of the time',
                            value: 4
                        },
                        {
                            label: 'None of the time',
                            value: 5
                        }
                      ]
                    },
                    2: {
                        question: '2.  During the past 4 weeks, how often have you had shortness of breath?',
                        answers: [{
                                label: 'More than once a day',
                                value: 1
                            },
                            {
                                label: 'Once a day',
                                value: 2
                            },
                            {
                                label: '3 to 6 times a week',
                                value: 3
                            },
                            {
                                label: 'Once or twice a week',
                                value: 4
                            },
                            {
                                label: 'Not at all',
                                value: 5
                            }
                        ]
                    },
                    3: {
                        question: '3.   During the past 4 weeks, how often did your asthma symptoms (wheezing, coughing, shortness of breath, chest tightness or pain) wake you up at night or earlier than usual in the morning?',
                        answers: [{
                                label: '4 or more nights a week',
                                value: 1
                            },
                            {
                                label: '2 to 3 nights a week',
                                value: 2
                            },
                            {
                                label: 'Once a week',
                                value: 3
                            },
                            {
                                label: 'Once or twice',
                                value: 4
                            },
                            {
                                label: 'Not at all',
                                value: 5
                            }
                        ]
                    },
                    4: {
                        question: '4.  During the past 4 weeks, how often have you used your rescue inhaler or nebulizer medication (such as albuterol)?',
                        answers: [{
                                label: '3 or more times a day',
                                value: 1
                            },
                            {
                                label: '1 to 2 times per day',
                                value: 2
                            },
                            {
                                label: '2 or 3 times per week',
                                value: 3
                            },
                            {
                                label: 'Once a week or less',
                                value: 4
                            },
                            {
                                label: 'Not at all',
                                value: 5
                            }
                        ]
                    },
                    5: {
                        question: '5.  How would you rate your asthma control during the past 4 weeks?',
                        answers: [{
                                label: 'Not controlled at all',
                                value: 1
                            },
                            {
                                label: 'Poorly controlled',
                                value: 2
                            },
                            {
                                label: 'Somewhat controlled',
                                value: 3
                            },
                            {
                                label: 'Well controlled',
                                value: 4
                            },
                            {
                                label: 'Completely Controlled',
                                value: 5
                            }
                        ]
                    }

                }


    const [selectedQ,setQ] = useState(question[1]);
    const [indexQ,setIndexQ] = useState(1);
    const [answers, setAnswers] = useState([])
    const updateIndex = () =>{
        if(indexQ == 5){
            
            var sum = 0
            console.log(answers)
            answers.forEach(function(answer) {
                sum += answer
            })
            var statement = ""
            if (sum > 19) {
                statement = "well controlled. Good job! "
            }
            else if (sum <= 19 && sum >= 15) {
                statement = "not very well controller. Bring the results to Dr. Josh S. Jacobs to discuss further."
            }
            else {
                statement = "very poorly controlled. Please contact Dr. Josh S. Jacobs right away to discuss further."
            }
            navigation.navigate('MyHealth',{celebrate: true, score: sum, statement:statement});
            setIndexQ(1);
            setQ(question[1])
        }else{
            console.log(indexQ)
            setIndexQ(indexQ+1);
            setQ(question[indexQ+1]);
        }
        
    }

    const backIndex = ()=>{
        if(indexQ != 1){
            setIndexQ(indexQ-1);
            setQ(question[indexQ-1]);
        }
    }

    const updateAnswers = (e) => {
        var updatedAnswers = answers
        updatedAnswers.push(e)
        setAnswers(updatedAnswers)
        console.log("//")
        console.log(e)
    }

    return (
        <Container>
        <StatusBar barStyle="light-content"/>
        <View>
            <Logo source={logo}>
            </Logo>
        </View>

    

        <Header>Asthma Control Test</Header>


        <QuestionContainer>
            { indexQ == 1 &&
            <View>
            <TitleQuestion>{selectedQ.question}</TitleQuestion>
            <RadioButtonRN  
                data={selectedQ.answers}
                selectedBtn={(e) =>{ updateAnswers(e.value);  setTimeout(function(){updateIndex();}
                , 500);}}
                boxActiveBgColor={'#2cc20a'}
                activeColor={'#fff'}
                textStyle={{fontSize: 15,fontWeight: 'bold'}}
            />
            </View>
            }
            {
                 indexQ == 2 &&
                 <View>
                 <TitleQuestion>{selectedQ.question}</TitleQuestion>
                 <RadioButtonRN  
                     data={selectedQ.answers}
                     selectedBtn={(e) => { updateAnswers(e.value); setTimeout(function(){updateIndex();}
                     , 500);}}
                     boxActiveBgColor={'#2cc20a'}
                     activeColor={'#fff'}
                     textStyle={{fontSize: 15,fontWeight: 'bold'}}
                 />
                 </View>
            }
            {
                 indexQ == 3 &&
                 <View>
                 <TitleQuestion>{selectedQ.question}</TitleQuestion>
                 <RadioButtonRN  
                     data={selectedQ.answers}
                     selectedBtn={(e) => { updateAnswers(e.value);  setTimeout(function(){updateIndex();}
                     , 500);}}
                     boxActiveBgColor={'#2cc20a'}
                     activeColor={'#fff'}
                     textStyle={{fontSize: 15,fontWeight: 'bold'}}
                 />
                 </View>
            }
            {
                indexQ == 4 &&
                <View>
                <TitleQuestion>{selectedQ.question}</TitleQuestion>
                <RadioButtonRN  
                    data={selectedQ.answers}
                    selectedBtn={(e) => { updateAnswers(e.value); setTimeout(function(){updateIndex();}
                    , 500);}}
                    boxActiveBgColor={'#2cc20a'}
                    activeColor={'#fff'}
                    textStyle={{fontSize: 15,fontWeight: 'bold'}}
                />
                </View>

            }
            {
                indexQ == 5 &&
                <View>
                <TitleQuestion>{selectedQ.question}</TitleQuestion>
                <RadioButtonRN  
                    data={selectedQ.answers}
                    selectedBtn={(e) => { updateAnswers(e.value); setTimeout(function(){updateIndex();}
                    , 500);}}
                    boxActiveBgColor={'#2cc20a'}
                    activeColor={'#fff'}
                    textStyle={{fontSize: 15,fontWeight: 'bold'}}
                />
                </View>

            }
         </QuestionContainer>

        { indexQ != 1 ?
         <TouchableOpacity style={{marginTop: 60}} onPress={backIndex}>
                <ContinueButton style={{alignItems: "center"}}>
                    <ButtonText>Back</ButtonText>
                </ContinueButton>
        </TouchableOpacity> : 
        <TouchableOpacity style={{marginTop: 60}} onPress={()=>navigation.navigate('MyHealth')}>
        <ContinueButton style={{alignItems: "center"}}>
                <ButtonText>Back</ButtonText>
            </ContinueButton>
        </TouchableOpacity>
        }
        
        
         <SafeAreaView>
         </SafeAreaView>

        </Container>

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

const TitleQuestion = styled.Text`
    color: #fff
    fontSize: 20px;
    marginBottom: 10px;
`;
 
const QuestionContainer = styled.View`
    marginLeft: 20px;
    marginRight: 20px;
    alignItems: stretch;
`

const ContinueButton = styled.View`
    height: 60px;
    width: 320px;
    borderColor: #fff;
    borderWidth: 3px;
    borderRadius: 30px;
    paddingLeft: 20px;
    justifyContent: center;
`;

const ButtonText = styled.Text`
    color: #fff;
    fontSize: 18px;
    fontWeight: bold;
    alignContent: center;
    marginRight: 20px;
`;

const V = styled.View`
    height: 80px;
    backgroundColor: #fff;
`

const Header = styled.Text`
    color: #fff
    fontSize: 20px;
    fontWeight: bold;
    marginBottom: 15px;
`;

const SkipButton = styled.Text`
    marginTop: 20px;
    fontSize: 17px;
    color: #fff;
`;
export default ActTest;