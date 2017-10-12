import "./Search.scss";
import React from "react";
import {connect} from 'react-redux';
import {getMovie} from '../../actions/movies';

class Search extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            name: '',
            active:true,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleSubmit(event) {
        const {title, getMovie} = this.props;
        const {name} = this.state;
        fetch(`https://netflixroulette.net/api/api.php?${title}=${name}`)
        .then(response => {
            if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status)
        }        
            return response.json()      
        })
        .then(movies => {
            console.log(movies)
            console.log(typeof movies.errorcode)
            // store.dispatch(findMovie(movies))
            if (movies instanceof Array) {
                getMovie(movies)
            }
            else if (typeof movies.errorcode === 'number') {
                console.log('Oops, we don`t have any films with this title')
            }
            else {
                let title = [].concat(movies);
                getMovie(title)
            }
        })   
        .catch(err =>
            console.log('Fetch Error ', err)); 
        }

    handleChange(event) {
        let name = event.target.value;
        this.setState({ name });
    }

    handleClick(event) {
       this.setState({
           active: !this.state.active,
       })
       let active = this.state.active ? 'director' : 'title'
       this.props.onSet(active);
       console.log(this.state)
    }

    render() {
       return (
        <div className="container">      
            <div className='header'>
                <h1 className='title_app' >netflixroulette</h1>
            <div> 
                <label className='label' >FIND YOUR MOVIE</label>
                <input 
                value={this.state.name} 
                type="text"
                onChange={this.handleChange}/>
            <div className="search_bottom">
                <div className="sort">
                    <label className='label_btn'>SEARCH BY</label>
                    {this.state.active ?
                <div>
                    <button  className='sort_button-active'>TITLE</button>
                    <button onClick={this.handleClick} className='sort_button' >DIRECTOR</button>
                </div>
                    :
                <div>
                    <button onClick={this.handleClick} className='sort_button'>TITLE</button>
                    <button  className='sort_button-active' >DIRECTOR</button>
                </div>}
                </div>
                <div className="search">
                    <button  
                    className='search_btn'
                    onClick={this.handleSubmit} >SEARCH</button>
                </div>
          </div>
          </div>
          </div>  
        </div>
       );
    }   
}

export default connect(
  state => ({
    title: state.setSearch  
  }),
  dispatch => ({
    getMovie: (movies) => {
      dispatch({ type: 'GET_MOVIE', movies:movies })
    }
  })
)(Search)