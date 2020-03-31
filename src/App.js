import React from 'react';
import { Button, Container, Jumbotron } from 'reactstrap';
import { useState } from 'react';
import Logo from './logo.svg'

//import component
import Form from './components/Form';

const ALL_EXPENSES = [
  { id: 1, name: 'Buy a book', amount: 20 },
  { id: 2, name: 'Buy a milk', amount: 5 },
  { id: 3, name: 'Book a flight ticket', amount: 225 }
]

const App = () => {

  //useState hook
  const [ expense, setExpense ] = useState(ALL_EXPENSES)

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
              {expense.reduce((accumulator, currentValue) => {
                return (accumulator += parseInt(currentValue.amount))
              }, 0)}
            </span>
          </p>
        </div>
        <Form />      
      </Jumbotron>
    </Container>
  );
}

export default App;
