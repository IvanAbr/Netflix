import "./Card.scss";
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Movie from './../Movie/Movie.jsx';

function Card(props) {
  console.log(props)
  console.log(props.id)
  return (
    <div className="movie-list-item">
      <div className="header-item">
        <img src={props.img} alt=""/>
      </div>
      <div className="bottom-item">
        <span>{props.title}</span>
      <div className='type' >
        <span>{props.year}</span>
      </div>
      </div> 
        {props.children}
      <Link to={`/movie/${props.title}`}>Подробнее</Link>
    </div>
  );
};

export default Card;
