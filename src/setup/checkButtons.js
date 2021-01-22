import React, {useState} from 'react';
import {SafeAreaView,StatusBar,TextInput,View,Button,Text,TouchableOpacity} from 'react-native';
import styled from 'styled-components'
import checkmark from '../../assets/checkMark.png'

const UnCheckButton = (props)=>{

    return(
        <UnCheckView>
            <CheckMark source={checkmark}/>
            <UnCheckText>{props.title}</UnCheckText>
        </UnCheckView>
    );
}
const Checkedbutton = (props) =>{

    return(
        <CheckView>
            <CheckText>{props.title}</CheckText>
        </CheckView>
    );
}


const CheckButton = (props) =>{
    const [isChecked,setCheck] = useState(false);

    return (
        <TouchableOpacity onPress={()=>{isChecked? setCheck(false):setCheck(true)}} >
        {
          !isChecked ? <Checkedbutton title={props.title}/> : <UnCheckButton title={props.title}/>
        }
        </TouchableOpacity>
    );

}


const CheckMark = styled.Image`
    height: 18px;
    width: 18px;
`

const UnCheckView = styled.View`
    marginTop: 10px;
    height: 55px;
    width: 140px;
    borderColor: gray;
    borderWidth: 1px;
    backgroundColor: #fff;
    borderRadius: 30px;
    paddingLeft: 5px;
    paddingRight: 5px;
    justifyContent: center;
    flexDirection: row;
    alignItems: center;
`;

const UnCheckText = styled.Text`
    color:  #000;
    fontSize: 13px;
    fontWeight: 500;
    alignContent: center;
`;

const CheckView = styled.View`
    marginTop: 10px;
    height: 55px;
    width: 140px;
    borderColor: #fff;
    borderWidth: 3px;
    borderRadius: 30px;
    paddingLeft: 5px;
    paddingRight: 5px;
    justifyContent: center;
    flexDirection: row;
    alignItems: center;
`;

const CheckText = styled.Text`
    color:  #fff;
    fontSize: 13px;
    fontWeight: 500;
    alignContent: center;
    justifyContent: center;
`;

export default CheckButton;