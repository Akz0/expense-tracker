import React, { useEffect, useState } from 'react'

import { DateTime } from 'luxon'
import { useDispatch, useSelector } from 'react-redux'

import ExpensesList from '../components/Expenses/ExpensesList'
import LabelInput from '../components/UI/LabelInput'
import Loader from '../components/UI/Loader'
import { Button2 } from '../Designs/Buttons'
import { ExpensesConatiner, ExpensesFormContainer } from '../Designs/Expenses'
import { Texts } from '../Designs/InputsLabels'
import { Row, Title, FormWrapper, Wrapper } from '../Designs/UIContainer'
import { EditExpense } from '../store/actions/expensesActions'
import { categories, expenseTypes } from '../Utilities/categories'
import { EditExpenseGeneralData } from '../store/actions'
import { ExpensesConstants } from '../store/actions/constants'


/**
* @author
* @function Expenses
**/

const Expenses = (props) => {
    const errorStatus = useSelector(state => state.expenses.error)
    const currentExpense = useSelector(state => state.expenses.currentExpense)
    const expensesList=useSelector(state=>state.expenses.expensesList)
    const isDemo=useSelector(state=>state.auth.isDemo)
    const loading = useSelector(state => state.expenses.loading)
    const dispatch = useDispatch()

    //local states
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState(0)
    const [type, setType] = useState('expense')
    const [category, setCategory] = useState('food')
    const [date, setDate] = useState()
    const [error, setError] = useState('')
    const [verificaion, setVerificaion] = useState(false)
    const [Edit, setEdit] = useState(false)

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
        setDate(event.target.value)
    }
    const handleAuthSubmit = (event) => {
        event.preventDefault()
    }

    const reset = () => {
        if (currentExpense) {
            const newDate = DateTime.fromMillis(currentExpense.date).c
            setTitle(currentExpense.title)
            setAmount(currentExpense.amount)
            setDate(`${newDate["year"]}-${newDate["month"] < 10 ? '0' : ''}${newDate["month"]}-${newDate["day"]}`)
            setDescription(currentExpense.description)
            setType(currentExpense.type)
            setCategory(currentExpense.category)
            setError('')
        }
    }

    useEffect(() => {
        reset()
    }, [currentExpense])

    const updateExpense = (event) => {
        event.preventDefault()
        if (title !== '' && parseFloat(amount)) {
            let newDate

            if (DateTime.fromISO(date).toFormat('DD') === DateTime.now().toFormat('DD')) {
                const currentTime = DateTime.now().toFormat('HH mm ss').split(' ')
                const TodaySeconds = parseInt(currentTime[0]) * 3600 + parseInt(currentTime[1]) * 60 + parseInt(currentTime[2])
                newDate = DateTime.fromISO(date).ts + TodaySeconds;
            } else {
                newDate = DateTime.fromISO(date).ts
            }
            if (parseFloat(amount) > 0) {
                const expenseObj = {
                    title,
                    description,
                    amount: parseFloat(amount),
                    type,
                    date: newDate,
                    category,
                    id: currentExpense.id
                }
                if(isDemo){
                    console.log('Demo Expense Edited')
                    dispatch({
                        type:ExpensesConstants.EDIT_EXPENSE_SUCCESS,
                        payload:{
                            newExpense:expenseObj
                        }
                    })
                    reset()
                    setEdit(false)
                    setVerificaion(true)
                    setTimeout(() => {
                        setVerificaion(false)
                    }, 2000)
                    dispatch(EditExpenseGeneralData(expensesList))
                    return
                }
                dispatch(EditExpense(expenseObj, () => {
                    reset()
                    setEdit(false)
                    setVerificaion(true)
                    setTimeout(() => {
                        setVerificaion(false)
                    }, 2000)
                    dispatch(EditExpenseGeneralData(expensesList))
                }))

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
        return <Row>
                {errorStatus
                    ? <Texts error>Edit Failed, Please Try Again.</Texts>
                    : <Texts safe>Edit Successful</Texts>
                }
            </Row>
        
    }

    const renderActions = () => {
        let item = <Row half>
            <Button2 type="button" onClick={(event) => { setEdit(true); event.preventDefault() }}>Edit </Button2>
        </Row>
        if (Edit) {
            item = (
                <Row half>
                    <Button2 type="button" safe onClick={(event) => updateExpense(event)}>Save</Button2>
                    <Button2 type="button" opacity='0.5' onClick={(event) => { setEdit(false); event.preventDefault(); reset() }}>Cancel</Button2>
                </Row>
            )
        }
        return item
    }


    return (
        <ExpensesConatiner>
            <ExpensesFormContainer>
                <Wrapper>
                    {
                        loading
                            ? <Loader />
                            : verificaion
                                ? renderVerification()
                                : <FormWrapper edit onSubmit={(event) => handleAuthSubmit(event)}>
                                    <Title></Title>
                                    <Row>
                                        <LabelInput disabled={!Edit} value={title} label='Title' type='text' placeholder='' onChange={handleTitle} />
                                    </Row>
                                    <Row>
                                        <LabelInput disabled={!Edit} value={description} label='Description' type='textarea' placeholder='' onChange={handleDescription} />
                                    </Row>
                                    <Row half input>
                                        <LabelInput disabled={!Edit} value={amount} label='Amount' type='number' placeholder='' onChange={handleAmount} />
                                        <LabelInput disabled={!Edit} value={date} label='Date' type='date' placeholder='' onChange={handleDate} />
                                    </Row>
                                    <Row half input>
                                        <LabelInput disabled={!Edit} value={category} options={categories} label='Category' type='select' placeholder='' onChange={handleCategory} />
                                        <LabelInput disabled={!Edit} value={type} options={expenseTypes} label='Type' type='select' placeholder='' onChange={handleType} />
                                    </Row>
                                    <Row>
                                        {renderActions()}
                                    </Row>
                                    <Texts error>{errorStatus ? error ? error : errorStatus : error}</Texts>
                                </FormWrapper>
                    }
                </Wrapper>
            </ExpensesFormContainer>

            <ExpensesList loading={loading}/>
        </ExpensesConatiner>
    )

}

export default Expenses
