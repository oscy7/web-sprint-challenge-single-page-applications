import React from 'react';
import { Link } from 'react-router-dom';
export default function Home() {
  

  return (
    <div>
      <h2>Welcome to our Pizza Shop. To Continue click on Order Here to place an order!</h2>
      <nav>
       <Link to='/'>Home</Link>
       <Link id='order-pizza' to='/pizza'>Order Here</Link>
     </nav>
    </div>
  )
}