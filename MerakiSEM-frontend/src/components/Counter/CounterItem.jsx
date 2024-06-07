import React from 'react';
import CountUp from "react-countup";

function CounterItem({ number, title }) {
  return (
    <div className="number">
      <CountUp duration={10} className="counter" end={number} />
      <span>{title}</span>
      <hr/>
    </div>
       
  );

}
export default CounterItem;
