import React from 'react';
import { Fragment } from 'react';

export default class Rating extends React.Component {
    constructor(props) {
        super(props);
        this.stars = [];
        for(let i = 0; i<this.props.numStars; i++) {
            this.stars.push(<Fragment key={`star-${i}`}>&#11088;</Fragment>) ;
        }
    }

    render() {
        return (
            <p>{this.stars}</p>
        );
    }
}