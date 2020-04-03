import React from 'react';
import { Container, Jumbotron } from 'reactstrap';
import { useState, useEffect } from 'react';
import Logo from './logo.svg'

//import component
import Form from './components/Form';
import List from './components/List';

const ALL_EXPENSES = localStorage.getItem('expenses')
? JSON.parse(localStorage.getItem('expenses'))
: []

const App = () => {

  //useState hook
  const [ expenses, setExpenses ] = useState(ALL_EXPENSES)
  const [ name, setName ] = useState('')
  const [ amount, setAmount ] = useState('')

  //useEffect hook
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  const handleName = (e) => {
    console.log('Name is ', e.target.value)
    setName(e.target.value)
  }

  const handleAmount = (e) => {
    console.log('Amount is ', e.target.value)
    setAmount(e.target.value)
  }

  const handleClearExpenses = () => {
    setExpenses([])
  }

  const handleSubmitForm = event => {
    event.preventDefault()
  
    //check if name is not empty and amount is greater than 0
    if (name !== '' && amount > 0 ) {
      //create a single expense object
      const expense = { name, amount }
  
      //use spread operator to get previous values
      setExpenses([...expenses, expense])
  
      //clean input field
      setName('')
      setAmount('')
    } else {
      console.log('Invalid field inputted for name or amount')
    }
  
  }


  return (
    <Container>
      <Jumbotron fluid>

        <h3 className="display-6 text-center">
          Expense Tracker App
          <img src={Logo} style={{ width: 50, height: 50 }} alt="react-logo" />
        </h3>

        <div className='text-center'>
          <p>
            Total Expense: {' '}
            <span className="text-success">
              ${' '}
              {expenses.reduce((accumulator, currentValue) => {
                return (accumulator += parseInt(currentValue.amount))
              }, 0)}
            </span>
          </p>
        </div>

        <Form name={name} amount={amount} handleName={handleName} handleAmount={handleAmount} handleSubmitForm={handleSubmitForm} handleClearExpenses={handleClearExpenses} />
        <List expenses={expenses} />  
      </Jumbotron>
    </Container>
  )
}

export default App;
