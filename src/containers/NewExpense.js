import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import LabelInput from '../components/UI/LabelInput'
import Loader from '../components/UI/Loader'
import { Button } from '../Designs/Buttons'
import { Texts } from '../Designs/InputsLabels'
import { Row, Title, FormWrapper, Wrapper, Modal } from '../Designs/UIContainer'
import { AddNewExpense, GetExpenses } from '../store/actions/expensesActions'
import { categories, expenseTypes } from '../Utilities/categories'

/**
* @author
* @function NewExpense
**/

const LocalContainer = styled.div`
    min-height:50vh;
    display: flex;
    justify-content: center;
    align-items: center;
`


const NewExpense = (props) => {

    const errorStatus = useSelector(state => state.expenses.error)
    const loading = useSelector(state => state.expenses.loading)
    const dispatch = useDispatch()

    //local states
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState(0)
    const [type, setType] = useState('expense')
    const [category, setCategory] = useState('food')
    const [date, setDate] = useState(() => {
        const D = new Date().toLocaleDateString().split('/')
        console.log(`${D[2]}-${D[1]}-${D[0]} Date`)
        return `${D[2]}-${D[1]}-${D[0]}`
    })
    const [error, setError] = useState('')
    const [verificaion, setVerificaion] = useState(false)

    const handleTitle = (event) => {
        setTitle(event.target.value)
    }
    const handleDescription = (event) => {
        setDescription(event.target.value)
    }
    const handleAmount = (event) => {
        setAmount(event.target.value)
    }
    const handleType = (event) => {
        setType(event.target.value)
    }
    const handleCategory = (event) => {
        setCategory(event.target.value)
    }
    const handleDate = (event) => {
        setDate(event.target.date)
        console.log(date, typeof (date))
    }
    const handleAuthSubmit = (event) => {
        event.preventDefault()
    }

    const reset = () => {
        const D = new Date().toLocaleDateString().split('/')
        setTitle('')
        setAmount(0)
        setDate(`${D[2]}-${D[1]}-${D[0]}`)
        setDescription('')
        setType('expense')
        setCategory('Food')
        setError('')
    }


    const create = () => {

        if (title !== '' && parseFloat(amount)) {
            if (parseFloat(amount) > 0) {
                const expenseObj = {
                    title,
                    description,
                    amount: parseFloat(amount),
                    type,
                    date,
                    category
                }
                console.table(expenseObj)
                dispatch(AddNewExpense(expenseObj, () => {
                    reset()
                    setVerificaion(true)
                    setTimeout(() => {
                        setVerificaion(false)
                    }, 2000)
                }))
                // dispatch(GetExpenses())
            }
            else {
                setError('Invalid Amount')
            }
        } else {
            let message = ''
            if (title === '') {
                message = 'Please Enter Title'
            } else if (amount < 1) {
                message = 'Invalid Amount'
            }
            setError(message)
        }
    }


    const renderVerification = () => {
        return <Modal>
            <Row>
                {errorStatus
                    ? <Texts error>Adding Expense Failed</Texts>
                    : <Texts safe>Expense Created</Texts>
                }
            </Row>
        </Modal>
    }

    return (
        <LocalContainer>
            {loading ? <Loader />
                :
                verificaion ? renderVerification()
                    :
                    <Wrapper>
                        <FormWrapper onSubmit={(event) => handleAuthSubmit(event)}>
                            <Title>Create New Expense</Title>

                            <Row>
                                <LabelInput value={title} label='Title' type='text' placeholder='' onChange={handleTitle} />
                            </Row>
                            <Row>
                                <LabelInput value={description} label='Description' type='textarea' placeholder='' onChange={handleDescription} />
                            </Row>
                            <Row half input>
                                <LabelInput value={amount} label='Amount' type='number' placeholder='' onChange={handleAmount} />
                                <LabelInput value={date} label='Date' type='date' placeholder='' onChange={handleDate} />
                            </Row>
                            <Row half input>
                                <LabelInput value={category} options={categories} label='Category' type='select' placeholder='' onChange={handleCategory} />
                                <LabelInput value={type} options={expenseTypes} label='Type' type='select' placeholder='' onChange={handleType} />
                            </Row>
                            <Texts error>{errorStatus ? error ? error : errorStatus : error}</Texts>
                            <Button type="button" onClick={create}>Add Expense</Button>
                        </FormWrapper>
                    </Wrapper>
            }
        </LocalContainer>
    )
}

export default NewExpense