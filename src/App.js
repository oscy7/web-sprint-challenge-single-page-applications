import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Pizzaform from './Components/Pizzaform'
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
// const initialDisabled = true

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
        setPizza([res.data, ...pizza])
      })
      .catch(err => console.error(err))
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  //Handler 
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
  // formSubmit 
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
     <nav id='order-pizza' >
       <Link to='/'>Home</Link>
       <Link to='/Pizzaform'>Order Here</Link>
     </nav>

     <Route path='/Pizzaform'>
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
