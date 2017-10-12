import React from 'react';
import MovieList from './components/MovieList/MovieList.jsx';
import Movie from './components/Movie/Movie.jsx';
import Search from './components/Search/Search.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import SeasonList from './components/SeasonList/SeasonList.jsx';
import SeasonListItem from './components/SeasonListItem/SeasonListItem.jsx'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import {connect} from 'react-redux';

class App extends React.Component {
constructor() {
  super();

  this.state = {
        data:[]
  }
  this.handleAdd = this.handleAdd.bind(this);
  this.handleSearch = this.handleSearch.bind(this);
}
handleAdd(title) {
  console.log(title);
  console.log('find',title)
  this.props.onFindMovie(title)
}

handleSearch(active) {
  console.log(active)
  this.props.onSetSearch(active)
}

  render() {
    let a = this.props.movies.map(item=>console.log(item))
    console.log(this.props.movies)
    console.log(this.props.match)
    
    return (
      <Router>
      <div>
        <div className="navigation">
          <NavLink exact className='link' to='/' >Home</NavLink>
          <NavLink className='link' to='movie/2' >Item</NavLink>
          <NavLink className='link' to='/season/one' >SeasonListItem</NavLink>
        </div>
        <Search onSet={this.handleSearch} onAdd={this.handleAdd} />
        <div>{this.props.movies.length} movies found</div>
        <Switch>
          <Route exact path='/' render={() => <MovieList linkAdd={this.handleAdd} movies={this.props.movies}/> } />
          <Route path='/movie/:name' render={props => <Movie data={this.props.movies} {...props} />} />
          <Route exact path='/season'component={SeasonList} />
          <Route path='/season/:name'component={SeasonListItem} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
  }
}

export default connect(
  state => ({
     movies: state.movies  
  }),
  dispatch => ({
    onSetSearch: (active) => {
      console.log('active',active)
      dispatch({ type: 'SET_SEARCH', name:active })
    }
  })
)(App)


