import React from 'react';
import {SafeAreaView,StatusBar,TextInput,View,Button,Text,TouchableOpacity} from 'react-native';
import styled from 'styled-components'

import backgroundImg from '../../assets/AsthmaSync_MobileBG.png';
import logo from '../../assets/AsthmaSync_LogoPatient.png';
import AsthmaTek from '../../assets/AsthmaSync_by_AsthmaTEK.png';



const Login = ({navigation}) =>{
    return(
        <Container>
        <StatusBar barStyle="light-content"/>
         <Background source={backgroundImg}>
            <SafeAreaView>
            <View style={{alignItems: "center"}}>
                <Logo source={logo}></Logo>
            </View>
            <View style={{alignItems:"center"}}>
                    <Email placeholder={'Email'}></Email>
                <View style={{paddingTop: 15}}></View>
                    <Password placeholder={'Password'}></Password>
                <View style={{paddingTop: 15}}></View>

                <TouchableOpacity>
                    <LoginButton style={{alignItems: "center"}}>
                        <ButtonText>Login</ButtonText>
                    </LoginButton>
                </TouchableOpacity>

            </View>
            <View style={{paddingTop: 25}}></View>
                <TextContainer>
                    <Text style={{color: '#fff',fontSize: 15}}>New here? </Text>
                    <TouchableOpacity onPress={()=>navigation.push('Intake')}>
                        <SignUp>SignUp</SignUp>
                    </TouchableOpacity>
                </TextContainer>
            
            <View style={{paddingTop: 180}}></View>

            <View style={{alignItems: "center"}}>
                <AsthmaTekImg source={AsthmaTek}></AsthmaTekImg>
            </View>
            </SafeAreaView>
            </Background>
        </Container>

    );
}


//<Logo source={logo}>               </Logo>
const Container = styled.View`
    flex: 1;
    flexDirection: column;
`;

const Background = styled.ImageBackground`
    flex: 1;
    resizeMode: cover;
`;

const Logo = styled.Image`
    height: 280px;
    width: 300px;
`;

const Email = styled.TextInput`
    height: 50px;
    borderColor: gray;
    borderWidth: 1px;
    backgroundColor: #fff;
    borderRadius: 30px;
    paddingLeft: 20px
    width: 320px;
`;

const Password = styled.TextInput`
    height: 50px;
    width: 320px;
    borderColor: gray;
    borderWidth: 1px;
    backgroundColor: #fff;
    borderRadius: 30px;
    paddingLeft: 20px;
`;

const LoginButton = styled.View`
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
    fontSize: 20px;
    fontWeight: bold;
    alignContent: center;
    marginRight: 20px;
`;

const SignUp = styled.Text`
    color: #ed4839;
    fontWeight: bold;
    fontSize: 15px;
`;

const TextContainer = styled.View`
    flexDirection: row;
    justifyContent: center;
`;

const AsthmaTekImg = styled.Image`
    height: 30px;
    width: 180px;
`;

export default Login;
//#d84234