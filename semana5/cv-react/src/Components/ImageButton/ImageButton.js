import React from 'react';
import './ImageButton.css'

export default function ImageButton(props) {
  return (
    <div className="ImageButton">
        <button><i className={props.i} ></i> {props.value} </button>
    </div>
  );
}
