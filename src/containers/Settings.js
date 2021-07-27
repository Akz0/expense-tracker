import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {withRouter} from 'react-router-dom'
import styled from 'styled-components';

import LabelInput from '../components/UI/LabelInput';
import Loader from '../components/UI/Loader';
import { Button2 } from '../Designs/Buttons';
import { Texts } from '../Designs/InputsLabels';
import { Modal, Row, UiContainer ,Title,Wrapper,Container} from '../Designs/UIContainer';
import { DeleteUser, UpdateDemoUserProfile, UpdateUserPassword, UpdateUserProfile } from '../store/actions';
import EmailCheck from '../Utilities/email';

/**
* @author
* @function Settings
**/


const SettingsContainer=styled.div`
    display:flex ;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
`

const Settings = (props) => {

    const errorStatus = useSelector(state => state.auth.editError)
    const loading = useSelector(state => state.auth.loading)
    const user = useSelector(state => state.auth.user)
    const isDemo=useSelector(state=>state.auth.isDemo)
    const dispatch = useDispatch()

    const isAuth=useSelector(state => state.auth.authenticated)
    useEffect(()=>{
        if(!isAuth){
            props.history.push('/')   
        }
    })
    
    //local States
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [Edit, setEdit] = useState(false)
    const [verification, setVerification] = useState(false)
    const [action, setAction] = useState('')
    const [confirm, setConfirm] = useState(false)
    const [message, setMessage] = useState('')
    
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handleName = (event) => {
        setName(event.target.value)
    }

    const updateUser = (event) => {
        event.preventDefault()
        
        if (email === user.email && name === user.name) {
            // console.log('No Change in Name and Email')
            setEdit(false)
            setError('')
            return
        } else {
            if (!EmailCheck(email)) {
                setError('Invlaid Email')
                return
            } else {
                if(isDemo){
                    dispatch(UpdateDemoUserProfile(email, name,() => {
                        setEdit(false)
                        setMessage('Profile Updated Successfully!')
                        setTimeout(() => {
                            setMessage('')
                        }, 3000)
                    }))
                    return
                }
                setEdit(false)
                setError('')
                dispatch(UpdateUserProfile(email, name, () => {
                    setEdit(false)
                    setMessage('Profile Updated Successfully!')
                    setTimeout(() => {
                        setMessage('')
                    }, 3000)
                }))

            }

        }
    }
    const resetPassword = (event) => {
        event.preventDefault()
        if (password.length < 5) {
            setError('Password must be at least 6 characters.')
            return
        } else {
            setError('')
            dispatch(UpdateUserPassword(password)).then(() => {
                setPassword('')
                setConfirm(true)
                setTimeout(() => {
                    setVerification(false)
                    setEdit(false)
                    setConfirm(false)
                }, 2000)
            })
        }
    }
    const deleteUser = (event) => {
        if (password !== email) {
            setPassword('')
            setVerification(false)
            setEdit(false)
            setError('Validation Failed')
            setTimeout(() => {
                setError('')
            }, 2000)
            return
        } else {
            setError('')
            event.preventDefault()
            dispatch(DeleteUser(password,(logout)=>{
                setConfirm(true)
                setTimeout(()=>{
                    setPassword('')
                    setVerification(false)
                    setConfirm(false)
                    setEdit(false)
                    setError('')
                    dispatch(logout())
                },3000)
            }))
        }
    }

    const renderActions = () => {
        let item = <Row half>
            <Button2 type="button" onClick={(event) => { setEdit(true); event.preventDefault() }}>Edit Profile</Button2>
            <Button2 disabled={isDemo} type="button" danger opacity='0.5' onClick={(event) => {
                event.preventDefault()
                setVerification(true)
                setAction('delete')
            }}>Delete Account</Button2>
        </Row>
        if (Edit) {
            item = (
                <Row half>
                    <Button2 type="button" safe onClick={(event) => updateUser(event)}>Save</Button2>
                    <Button2 type="button" opacity='0.5' onClick={(event) => { setEdit(false); event.preventDefault() }}>Cancel</Button2>
                </Row>
            )
        }
        return item
    }


    const verificationModal = () => {
        if (confirm) {
            return (
                <Modal>
                    <Row>
                    <Texts safe>{action === 'reset' ? 'Password Reset Successfull' : 'Accound Deletion Successfull'}</Texts>
                    </Row>
                </Modal>
            )
        }
        return (
            <Modal>
                <Row>
                    <LabelInput value={password} label={action === 'reset' ? 'Enter New Password' : 'Verify Your Email'} type={action === 'reset' ? 'password' : 'email'} onChange={(event) => handlePassword(event)} />
                </Row>
                <Texts animation error>{error}</Texts>
                <Row half>
                    {action === 'reset' ? <Button2 type="button" safe onClick={(event) => { resetPassword(event) }}>Reset Password</Button2> :
                        <Button2 type="button" danger onClick={event => { deleteUser(event, password) }}>Delete Account</Button2>}
                    <Button2 opacity='0.5' type="button" onClick={(event) => {
                        event.preventDefault()
                        setEdit(false)
                        setVerification(false)
                        setPassword('')
                    }}>Cancel</Button2>
                </Row>
            </Modal>
        )

    }


    return (
        <SettingsContainer>
            {loading ? <Loader />
                :
                <Wrapper>
                    <Container verification={verification}>
                        <Title>User Settings</Title>
                        <UiContainer long>
                            <Row>
                                <LabelInput disabled={!Edit} value={name} label='Name' type='text' onChange={(event) => handleName(event)} />
                            </Row>
                            <Row>
                                <LabelInput disabled={!Edit || isDemo} value={email} label='Email' type='email' onChange={(event) => handleEmail(event)} />
                            </Row>
                            <Row half>
                                <span>Pasasword</span>
                                <Button2 disabled={isDemo} onClick={(event) => {
                                    event.preventDefault()
                                    setError('')
                                    setVerification(true)
                                    setAction('reset')
                                    setPassword('')
                                }}>Reset Password</Button2>
                            </Row>
                            <Texts animation error>{errorStatus ? error ? error : errorStatus : error}</Texts>
                            {renderActions()}
                            <Texts animation safe>{message ? message : null}</Texts>
                            {isDemo?<Texts>*As this is a demo, you may only edit the Name*</Texts>:''}
                        </UiContainer>
                    </Container>
                    {verification ? verificationModal() : null}
                </Wrapper>
            }

        </SettingsContainer>
    )

}

export default withRouter(Settings) 