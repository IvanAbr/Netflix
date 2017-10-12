import "./MovieList.scss";
import React from "react";
import Card from './../Card/Card.jsx';
import Search from './../Search/Search.jsx';
import Results from './../Results/Results.jsx';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function MovieList(props) {
  console.log(props)
  return (
    <div>
      <Results />
        <div className="movie-list">
          {props.movies.map(item =>  
            <Card 
              year={item.release_year}
              key={item.unit} 
              title={item.show_title} 
              img={item.poster}
              type={item.category} 
              rating={item.rating}
              id={item.show_id}/>)}
        </div>
    </div>
  );
};

export default MovieList;
