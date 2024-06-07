import React from 'react';
import './Counter.css';
import CounterItem from './CounterItem';

function Counter() {
  return (
    <div className="App">
      <div className="photo-profile">{/* <img  /> */}</div>
      <div className="numbers">
        <CounterItem number={105} title="Happy Clients" />
        <CounterItem number={90} title="Reviews" />
        <CounterItem number={400} title="Completed Works" />
      </div>
    
    </div>

  );
}


export default Counter;
