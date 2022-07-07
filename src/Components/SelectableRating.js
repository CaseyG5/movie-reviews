import React from 'react';
import { Fragment } from 'react';
import '../App.css';

export default class SelectableRating extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stars: [<Fragment>&#9734;</Fragment>, <Fragment>&#9734;</Fragment>, 
                    <Fragment>&#9734;</Fragment>, <Fragment>&#9734;</Fragment>, 
                    <Fragment>&#9734;</Fragment>]
        }

        this.selectStars = this.selectStars.bind(this);
    }

    selectStars(event) {
        let numStars = Number( event.target.id );
        let s = 0;
        let tempStars = [];

        for( ; s<numStars; s++) {
            tempStars.push(<Fragment>&#11088;</Fragment>);     // Filled (selected) stars
        }
        for( ; s<5; s++) {
            tempStars.push(<Fragment>&#9734;</Fragment>);    // Empty stars
        }

        this.setState( state => ( state.stars = tempStars ) );
        this.props.saveNumStars(numStars);
    }

    render() {
        return(
            <div className="star-group">
                <span id={"1"} onClick={this.selectStars}>{this.state.stars[0]}</span>
                <span id={"2"} onClick={this.selectStars}>{this.state.stars[1]}</span>
                <span id={"3"} onClick={this.selectStars}>{this.state.stars[2]}</span>
                <span id={"4"} onClick={this.selectStars}>{this.state.stars[3]}</span>
                <span id={"5"} onClick={this.selectStars}>{this.state.stars[4]}</span>
            </div>
        );
    }
}