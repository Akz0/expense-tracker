import React, { useState } from 'react'
import styled from 'styled-components'
import LabelInput from '../components/UI/LabelAndInput';
import { Button, Button2 } from '../Designs/Buttons';
import { Colors, Fonts, mobileSize } from '../Designs/DesignVariables';
import { Texts } from '../Designs/InputsLabels';
import { Row, UiContainer } from '../Designs/UIContainer';

/**
* @author
* @function Authentication
**/

const MainAuth = styled.div`
    background:${Colors.darkBlue};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    z-index:223;
    @media screen and (min-width:700px){
        justify-content: center;
    }
`;

const AuthWapper = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    margin: 5vh 0;
    justify-content: space-between;
    align-items: center;
    z-index:223;
    @media screen and (min-width:700px){
        height: 70vh;
        margin: 10vh 0;
    }
`

const Title = styled.p`
    color: ${Colors.white};
    font-family: ${Fonts.robotoSlab};
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;
    @media screen and (min-width: ${mobileSize}) {
        font-size: 35px;
    }
`;
const AuthPage = (props) => {
    //Store Items 
    
    //local States
    const [authAction, setAuthAction] = useState('login')
    // Input Managements
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const authTypeRender = () => {
        let render
        if (authAction === 'login') {
            render = (
                <><Button big long>Log In</Button>
                    <Texts>New User? </Texts>
                    <Texts link onClick={() => { setAuthAction('new')}}>Register Here</Texts>
                </>
            )
        }
        if (authAction === 'new') {
            render = (
                <><Button big long>Register</Button>
                    <Texts>Already have a account?</Texts>
                    <Texts link onClick={() => { setAuthAction('login')}}>Log In</Texts>
                </>
            )
        }
        return render
    }
    return (
        <MainAuth>
            <AuthWapper>
                <Title>Expenses Tracker</Title>
                <UiContainer>
                    <Row>
                        <LabelInput value={email} label='Email' type='email' placeholder='Enter Your Email' onChange={handleEmail} />
                    </Row>
                    <Row>
                        <LabelInput value={password} label='Password' type='password' placeholder='Enter Your Password' onChange={handlePassword} />
                    </Row>
                    <Texts error></Texts>
                    {authTypeRender()}
                    <Button2 big long>DEMO</Button2>
                </UiContainer>
            </AuthWapper>
        </MainAuth>
    )

}

export default AuthPage