import { DateTime } from 'luxon'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ExpensesList from '../components/ExpensesList'
import LabelInput from '../components/UI/LabelInput'
import Loader from '../components/UI/Loader'
import { Button, Button2 } from '../Designs/Buttons'
import { ExpensesConatiner, ExpensesFormContainer, ExpensesListContainer } from '../Designs/Expenses'
import { Texts } from '../Designs/InputsLabels'
import { Row, Title, FormWrapper, Wrapper, Modal } from '../Designs/UIContainer'
import { GetExpenses } from '../store/actions/expensesActions'
import { categories, expenseTypes } from '../Utilities/categories'


/**
* @author
* @function Expenses
**/

const Expenses = (props) => {
    const errorStatus = useSelector(state => state.expenses.error)
    const expensesLoaded=useSelector(state=>state.expenses.expensesLoaded)
    const currentExpense=useSelector(state=>state.expenses.currentExpense)
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
        if(currentExpense){
            const newDate=new Date().toLocaleDateString(currentExpense.date).split('/')
            setTitle(currentExpense.title)
            setAmount(currentExpense.amount)
            setDate(`${newDate[2]}-${newDate[1]}-${newDate[0]}`)
            setDescription(currentExpense.description)
            setType(currentExpense.type)
            setCategory(currentExpense.category)
            setError('')
        }
    }

    useEffect(()=>{
        reset()
    },[currentExpense])

    const updateExpense = (event) => {
        event.preventDefault()
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
                // dispatch(AddNewExpense(expenseObj, () => {
                //     reset()
                //     setVerificaion(true)
                //     setTimeout(() => {
                //         setVerificaion(false)
                //     }, 2000)
                // }))
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
                    <FormWrapper edit onSubmit={(event) => handleAuthSubmit(event)}>
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
                </Wrapper>
            </ExpensesFormContainer>

            <ExpensesList />
        </ExpensesConatiner>
    )

}

export default Expenses

// {loading ? <Loader />
//     :
//     verificaion ? renderVerification()
//         :null

// }
