import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ChoiceStyle = styled.div`
  margin: 5% 0;
  border: solid black 1px;
  font-weight: bold; 
  `

  const OtherStyle = styled.div`
  margin: 5% 0;
  border: solid black 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;
  `

const FormGroup = styled.div`

display: flex;
align-items: center;
`

const ToppingsStyle = styled.div`

display: flex;
/* align-items: center; */
border: solid black 1px;
flex-flow: column wrap;
label {
  margin: 1%
  }
`

export default function PizzaForm(props) {

  const {
    values,
    submit,
    change,
    errors,
    disabled,
    priceCount,
    count,
    increment,
    decrement,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }


  const onChange = evt => {
    const { name, value, type, checked } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
  }


  
  
  return (
    <form className='form container' onSubmit={onSubmit}>
      
        <div className='form-group submit'>
        <h2>Pizza Creator</h2>

        <div className='errors'>
          <div>{errors.size}</div>
          <div>{errors.sauce}</div>
        </div>
      </div>

      <label>Name
        <input
        value={values.name}
        onChange={onChange}
        name='name'
        type='text'
        />
      </label>
      
      <div className='form-group inputs'>
        <h4>Build Your Own Pizza</h4>
        
        <ChoiceStyle>Choice of Size</ChoiceStyle>

           
          <select
            onChange={onChange}
            value={values.size}
            name='size'
          >
            <option value=''>- Select -</option>
            <option value='12'>Small (10")</option>
            <option value='14'>Medium (12")</option>
            <option value='16'>Large (14")</option>
            <option value='18'>XL (16")</option>
          </select>
          
        
          <ChoiceStyle>Choice of Sauce</ChoiceStyle>
        
          <OtherStyle>
          <FormGroup>
          <input
            type='radio'
            name='sauce'
            onChange={onChange}
            value='red'
            checked={values.sauce === 'red'}
            id='red'
          />
          <label htmlFor='red'>Red</label>
          </FormGroup>
          

        
          <input
              type='radio'
              name='sauce'
              onChange={onChange}
              value='garlicranch'
              checked={values.sauce === 'garlicranch'}
              id='garlicranch'
            />
          <label htmlFor='garlicranch'>Garlic Ranch</label>
        

        
          <input
              type='radio'
              name='sauce'
              onChange={onChange}
              value='pesto'
              checked={values.sauce === 'pesto'}
              id='pesto'
            />
          <label htmlFor='pesto'>Pesto</label>
        
        
          <input
              type='radio'
              name='sauce'
              onChange={onChange}
              value='buffalo'
              checked={values.sauce === 'buffalo'}
              id='buffalo'
            />
          <label htmlFor='buffalo'>Buffalo</label>

        
          <input
              type='radio'
              name='sauce'
              onChange={onChange}
              value='nosauce'
              checked={values.sauce === 'nosauce'}
              id='nosauce'
            />
          <label htmlFor='nosauce'>No Sauce</label>
          </OtherStyle>
      </div>
      
      <div className='form-group checkboxes'>
      <ChoiceStyle>Add Toppings</ChoiceStyle>
      <ToppingsStyle>
        <label>
          <input 
            type='checkbox'
            name='pepperoni'
            onChange={onChange}
            checked={values.pepperoni}
            value='1'
          />
          Pepperoni
        </label>

        <label>
          <input 
              type='checkbox'
              name='sausage'
              onChange={onChange}
              checked={values.sausage} 
              value='1'
            />
            Sausage
        </label>

        <label>
          <input 
              type='checkbox'
              name='greenpeppers'
              onChange={onChange}
              checked={values.greenpeppers} 
              value='1'
            />
            Green Peppers
        </label>

        <label>
          <input 
              type='checkbox'
              name='chicken'
              onChange={onChange}
              checked={values.chicken} 
              value='1'
            />
            Chicken
        </label>

        <label>
          <input 
              type='checkbox'
              name='bananapeppers'
              onChange={onChange}
              checked={values.bananapeppers} 
              value='1'
            />
            Banana Peppers
        </label>
        </ToppingsStyle>
        </div>
        
        <div>
        <label>Special Instructions
          <input
            value={values.instructions}
            onChange={onChange}
            name='instructions'
            type='text'
          />
        </label>
        </div>
        <h4>Quantity</h4>
        <div id='count'>
          {count} 
        </div>
        <div>
          <button 
            type='button'
            id='increment' onClick={increment}>+
          </button>
          <button 
            type='button'
            id='decrement' onClick={decrement}>-
          </button>
        </div>
          ${priceCount()}
        <div>

        </div>

        <Link to="/success">
          <button disabled={disabled}>Place Order</button>
        </Link>
        
        
    </form>
  )
}