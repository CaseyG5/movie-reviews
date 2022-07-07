import React from 'react';

export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="reviews">
                <h3 className="text-center">Reviews</h3>
                {this.props.reviews}
            </div>
        );
    }
}