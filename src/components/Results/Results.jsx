import "./Results.scss";
import React from "react";
import FilterLink from '../../containers/FilterLink'

const Results = () => (
        <div className='result'>
            Sort by
            {' '}
            <FilterLink filter="SHOW_DATA">
                release date
            </FilterLink>
            {' '}
            <FilterLink filter="SHOW_RATING">
                rating
            </FilterLink>
        </div>
    );


export default Results;