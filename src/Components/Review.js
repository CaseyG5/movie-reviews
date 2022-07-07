import React from 'react';
import Rating from './Rating';

export default class Review extends React.Component {

    render() {
        return (
            <div>
                <h4>Review by <em>{this.props.username}</em></h4>
                <Rating numStars={this.props.numStars} />
                <p>{this.props.reviewText}</p>
            </div>
        );
    }
}