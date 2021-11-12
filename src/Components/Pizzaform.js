import React from 'react'
// We'll need a Link and the useRouteMatch hook from 'react-router-dom'
// import { Link, useRouteMatch } from 'react-router-dom';

export default function PizzaForm(props){
    const{ values, submit, change, errors } = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onChange = event => {
        const { name, value, checked, type } = event.target
        const realValue = type === 'checkbox' ? checked : value;
        change(name, realValue)
      }

    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            {/* Make Button */}
            <div>
                <h1>Order! Add a Pizza</h1>
                
                {/* Make Errors */}
                <div>
                    <div>{errors.name}</div>
                </div>
            </div>

            <div>
                <h3>Make Your Pizza</h3>
                {/* Text Inputs - Name and Special */}
                <label>Name
                    <input id='name-input'
                        value={values.name}
                        name='name'
                        type='text'
                        onChange={onChange}
                    />
                </label>
                <label>Special instructions
                    <input id='special-text' 
                        value={values.special}
                        name='special'
                        type='text'
                        onChange={onChange}
                    />
                </label>
                {/* Drop Down for Size */}
                <label>Choose Your Size
                    <select id='size-dropdown'
                        onChange={onChange}
                        value={values.size}
                        name='size'
                    >
                        <option value=''>Select Size</option>
                        <option value='small'>Small</option>
                        <option value='med'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>
                {/* CheckBoxes for Toppings x4 */}
                <label>Pepperoni
                    <input 
                        type='checkbox'
                        name='pepperoni'
                        onChange={onChange}
                        checked={values.pepperoni}
                    />
                </label>
                <label>Pineapple 
                    <input 
                        type='checkbox'
                        name='pineapple'
                        onChange={onChange}
                        checked={values.pineapple}
                    />
                </label>
                <label>Onion
                    <input 
                        type='checkbox'
                        name='onion'
                        onChange={onChange}
                        checked={values.onion}
                    />
                </label>
                <label>Peppers
                    <input 
                        type='checkbox'
                        name='peppers'
                        onChange={onChange}
                        checked={values.peppers}
                    />
                </label>
                <button id='order-button'>Submit Pizza!!</button>
            </div>
           
        </form>

    )
}