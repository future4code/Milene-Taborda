import React from 'react';
import './SmallCard.css'

export default function SmallCard(props) {
  return (
    <div className="SmallCard">
        <label>
          <i class={props.i}></i>
          <strong> {props.strong}</strong>
           <span>{props.span} </span>
        </label>
    </div>
  );
}
