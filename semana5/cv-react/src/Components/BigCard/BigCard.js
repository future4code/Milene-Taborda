import React from 'react';
import './BigCard.css';

export default function BigCard(props) {
  return (
    <div className="BigCard">
        <img src={props.image}/>

        <section>
         <h3>{props.title}</h3>
         <p>{props.span}</p>
        </section>
    </div>
  );
}
