import React from 'react';
import { Button, Container, Jumbotron } from 'reactstrap';
import { useState } from 'react';
import Logo from './logo.svg'

//import component
import Form from './components/Form';
import List from './components/List';

const ALL_EXPENSES = [
  { id: 1, name: 'Buy a book', amount: 20 },
  { id: 2, name: 'Buy a milk', amount: 5 },
  { id: 3, name: 'Book a flight ticket', amount: 225 }
]

const App = () => {

  //useState hook
  const [ expenses, setExpenses ] = useState(ALL_EXPENSES)
  const [ name, setName ] = useState('')
  const [ amount, setAmount ] = useState('')

  const handleName = event => {
    console.log('Name ', event.target.value)
    setName(event.target.value)
  }
  
  const handleAmount = event => {
    console.log('Amount ', event.target.value)
    setAmount(event.target.value)
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
    <Container className="text-center">
      <Jumbotron fluid>

        <h3 className="display-6">
          Expense Tracker App
          <img src={Logo} style={{ width: 50, height: 50 }} alt="react-logo" />
        </h3>

        <div>
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

        <Form />
        <List expenses={expenses} />  

      </Jumbotron>
    </Container>
  )
}

export default App;
