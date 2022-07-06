import React from 'react';
import '../App.css';
import MovieItem from './MovieItem';

export default class MovieList extends React.Component {

    render() {
        return(
            <div id="all-movies">
                <MovieItem title={"American Beauty"} 
                year={1999} 
                synopsis={"Kevin Spacey stars as Lester Burnham, an advertising executive who has a midlife crisis when he becomes infatuated with his teenage daughter's best friend."} />
            </div>
        );
    }
}