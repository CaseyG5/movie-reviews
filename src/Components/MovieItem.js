import React from 'react';
import Review from './Review';
import '../App.css';
import Rating from './Rating';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

export default class MovieItem extends React.Component {
    constructor(props) {
        super(props);

        // this.reviews = [  ]
        this.ratings = [5,4,5];

        this.state = {
            avgRating: 4.66,
            reviewList: [ <Review key={"allen123"} username={ "Allen" } numStars={ 5 } reviewText={ "It was excellent. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, corporis dignissimos repudiandae veritatis laudantium aliquid voluptatem quos porro quis ut sint aut nisi veniam doloremque quibusdam!" } />,
                          <Review key={"byron456"} username={ "Byron" } numStars={ 4 } reviewText={ "It was great. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, corporis dignissimos repudiandae veritatis laudantium aliquid voluptatem quos porro quis ut sint aut nisi veniam doloremque quibusdam, explicabo dolores!" } />,
                          <Review key={"calvin789"} username={ "Calvin" } numStars={ 5 } reviewText={ "Loved it. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, corporis dignissimos repudiandae veritatis laudantium aliquid voluptatem quos porro quis ut sint aut nisi veniam doloremque quibusdam, explicabo dolores! Explicabo, ducimus!" } />]
        }

        this.addReview = this.addReview.bind(this);
        this.addRating = this.addRating.bind(this);
        this.calcAvg = this.calcAvg.bind(this);
    }

    addReview(reviewComp) {
        // this.reviews.push(reviewComp);
        this.setState( state => { 
            state.reviewList = [...state.reviewList, reviewComp];
        } ); 
    }

    addRating(val) {
        this.ratings.push(val);
    }

    calcAvg() {
        let sum = this.ratings.reduce( (prev,curr) => prev + curr );
        this.setState( state => (state.avgRating = sum / this.ratings.length) );
        console.log("new avg rating is: " + (sum / this.ratings.length));
    }

    render() {
        return(
            <div>
                <h2>{this.props.title} - {this.props.year}</h2>
                <div className="flex-start">
                    <div id="amer_beau">
                        
                    </div>
                    <div className="movie-info">
                        <p>{this.props.synopsis}</p>
                        <Rating numStars={Math.round(this.state.avgRating)} />
                        <span>4.7 out of 5</span>
                    </div>
                </div>
                <ReviewList reviews={this.state.reviewList} />
                <ReviewForm addReview={this.addReview} addRating={this.addRating} calcAvg={this.calcAvg}/>
            </div>
        );
    };
}

 