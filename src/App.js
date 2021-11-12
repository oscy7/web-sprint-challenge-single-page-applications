import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Pizzaform from './Components/Pizzaform'
import Home from './Components/Home'
import axios from 'axios';
import schema from './validation/formSchema'
import * as yup from 'yup';

const initialFormValues ={
  //text inputs
  name:'',
  //text input for special instructions
  special:'',
  //DropDown 
  size:'',
  //checkboxes
  pepperoni: false,
  pineapple: false,
  onion: false,
  peppers: false,
 
}

const initialFormErrors={
  //text inputs
  name:'',
  //text input for special instructions
  special:'',
  //DropDown 
  size:''
}
const initialPizza = []


const App = () => {

  //States
  const [pizza, setPizza] = useState(initialPizza)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  //

  // Post Form
  const postNewPizza = newPizza => {
    axios.post(`https://reqres.in/api/orders`, newPizza)
      .then(res => {
        setPizza([res, ...pizza])
      })
      .catch(err => console.error(err))
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  //inputChange for props
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }
  //validation 
  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }
  // formSubmit for props
  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      special: formValues.special.trim(),
      size: formValues.size.trim(),
      toppings: ['pepperoni', 'onion', 'pineapple', 'peppers'].filter(toppings => !!formValues[toppings])
    }
    postNewPizza(newPizza);
  }

  return (
   <div>
     <h1>Lambda Eats</h1>
     {/* <nav id='order-pizza' >
       <Link to='/'>Home</Link>
       <Link to='/pizza'>Order Here</Link>
     </nav> */}
      <Route exact path = '/'>
        <Home />
      </Route>
     <Route path='/pizza'>
       <Pizzaform 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        errors={formErrors}
       />
     </Route>
   </div>
  );
};
export default App;
