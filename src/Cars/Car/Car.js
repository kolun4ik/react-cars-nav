import React from 'react';
import './Car.scss';
import {withRouter} from 'react-router';


const Car = props => {
  return (
    <div
        onClick={() => props.history.push('/cars/'+ props.name.toLocaleLowerCase()) }
        className={'Car'}>
      <h3>Сar name: {props.name}</h3>
      <p>Year: <strong>{props.year}</strong></p>
    </div>
  )
};
// Обернули  Car в ф-цию hoc
export default withRouter(Car);