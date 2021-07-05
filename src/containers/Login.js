import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import LabelInput from '../components/UI/LabelInput';
import Loader from '../components/UI/Loader';
import { Button, Button2 } from '../Designs/Buttons';
import { Colors, Fonts, mobileSize } from '../Designs/DesignVariables';
import { Texts } from '../Designs/InputsLabels';
import { Row, UiContainer } from '../Designs/UIContainer';
import { Login, SignUp ,DemoAuth} from '../store/actions';
import EmailCheck from '../Utilities/email';


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

const AuthWapper = styled.form`
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
    const authStatus = useSelector(state => state.auth.authenticated)
    const errorStatus = useSelector(state => state.auth.error)
    const loading = useSelector(state => state.auth.loading)
    const dispatch=useDispatch()

    useEffect(()=>{
        if(authStatus){
            props.history.push('/home')
        }
    },[])
    
    //local States
    const [authAction, setAuthAction] = useState('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    //Render Auth Variations
    const authTypeRender = () => {
        let render
        if (authAction === 'login') {
            render = (
                <><Button type="submit" big long>Log In</Button>
                    <Texts>New User? </Texts>
                    <Texts link onClick={() => { setAuthAction('new') }}>Register Here</Texts>
                </>
            )
        }
        if (authAction === 'new') {
            render = (
                <><Button type="submit" big long>Register</Button>
                    <Texts>Already have a account?</Texts>
                    <Texts link onClick={() => { setAuthAction('login') }}>Log In</Texts>
                </>
            )
        }
        return render
    }

    // Authentication Functions
    const login=(email,password)=>{
        dispatch(Login(email,password))
        
    }
    const singup =(email,password)=>{
        dispatch(SignUp(email,password))
    }

    const handleAuthSubmit = (event) => {
        event.preventDefault()
        if (EmailCheck(email) && password.length > 5) {
            setError('')
            if (authAction === 'login') {
                login(email,password)
            }
            if (authAction === 'new') {
                singup(email,password)
            }
        }
        else {
            if (!EmailCheck(email)) {
                setError('Invalid Email')
            }
            if (password.length < 6) {
                setError('Password must be atleast 6 characters.')
            }
            if (password.length < 6 && !EmailCheck(email)) {
                setError('Invalid Email. Password must be atleast 6 characters.')
            }
        }
    }
    
    return (
        <MainAuth>
            {loading ? <Loader />
                :
                <AuthWapper onSubmit={(event) => handleAuthSubmit(event)}>
                    <Title>Expenses Tracker</Title>
                    <UiContainer>
                        <Row>
                            <LabelInput value={email} label='Email' type='email' placeholder='Enter Your Email' onChange={handleEmail} />
                        </Row>
                        <Row>
                            <LabelInput value={password} label='Password' type='password' placeholder='Enter Your Password' onChange={handlePassword} />
                        </Row>
                        <Texts error>{errorStatus?error?error:errorStatus:error}</Texts>
                        {authTypeRender()}
                        <Button2 big long onClick={()=>dispatch(DemoAuth())}>DEMO</Button2>
                    </UiContainer>
                </AuthWapper>
            }
            
        </MainAuth>
    )

}

export default AuthPage