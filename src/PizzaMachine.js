import PizzaForm from './PizzaForm'
import React, {useState, useEffect} from "react";
import formSchema from './formSchema'
import * as yup from 'yup'
import {Link} from "react-router-dom";
import axios from 'axios'
import styled from 'styled-components'

const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  pepperoni: false,
  sausage: false,
  greenpeppers: false,
  chicken: false,
  bananapeppers: false,
  instructions: '',
  price: '',
}
const initialFormErrors = {
  size: '',
  sauce: '',
}

const initialPizza = []
const initialDisabled = true

/* stylings */

const StyledPizza = styled.div`

border: solid black 1px;
max-width: 500px;
width: 100%;
margin: 0 auto;
`

const StyledHeader = styled.div`

display: inline-flex;
flex-flow: row wrap;
align-items: center;
justify-content: space-evenly;
`

function PizzaMachine() {

  const [pizza, setPizza] = useState(initialPizza)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [count, setCount] = useState(1)
  const [toppings, setToppings] = useState([])
  
  /*price values*/
  const priceCount = () => {
    return parseInt(formValues.size || 0, 10) * count + toppings.length
  }

  const toppingMachine = (name, checked) => {
    if (checked) {
      setToppings([...toppings, name])
    } else {
      setToppings(toppings.filter(topping => topping !== name))
    }
    
  }

  /*quantity button*/
  const increment = () => {
      setCount(count + 1)
    };
  const decrement = () => {
      setCount(count - 1)
    };

  /* form values */
  const postNewPizza = newPizza => {
    axios.post('https://reqres.in/api/users', newPizza)
      .then(res => {
        setPizza([res.data, ...pizza])
      })
      .catch(err => {
        console.log(err);
      })
      setFormValues(initialFormValues)
      setCount(1)
      setToppings([])
  }

  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        
        setFormErrors({...formErrors, [name]: ''})
      })
      .catch(err => {
        setFormErrors({...formErrors, [name]: err.errors[0]})
      })
      setFormValues({
        ...formValues,
        [name]: value 
      })
      
    if (typeof value === 'boolean'){
      toppingMachine(name, value)
    }
  }

  const formSubmit = () => {
    const pizzaFriend = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      toppings: ['pepperoni', 'sausage', 'greenpeppers', 'chicken', 'bananapeppers'].filter(toppings => formValues[toppings]),
      insructions: formValues.instructions.trim()
      
    }
    postNewPizza(pizzaFriend)
  }

  /* effects */

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])




return (
  <div className='container'>
    
    <StyledHeader>
    <header>
      <h1>Lambda Eats</h1>
      <Link to="/">Nevermind Go Back</Link>
    </header>
    </StyledHeader>

    <StyledPizza>
    <PizzaForm
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      priceCount={priceCount}
      count={count}
      increment={increment}
      decrement={decrement}
    />
    
    <div>
      
    </div>
    </StyledPizza>
  </div>
)
}

export default PizzaMachine