import React from 'react';
import SelectableRating from './SelectableRating';
import Review from './Review';

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nameValue: "",
            numStars: 0,
            textValue: ""
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.saveNumStars = this.saveNumStars.bind(this);
        this.handlePost = this.handlePost.bind(this);
    }

    handleNameChange(event) {
        this.setState(state => (state.nameValue = event.target.value));
    }

    handleTextChange(event) {
        this.setState(state => (state.textValue = event.target.value) );
    }

    saveNumStars(val) {
        this.setState(state => (state.numStars = val) );
    }

    render() {
        return (
            <div>
                <br></br>
                <hr></hr>
                <form>
                    <h3>Leave a review</h3>
                    <input  type="text" value={this.state.nameValue} onChange={this.handleNameChange} placeholder={"your name"}/>
                    <SelectableRating saveNumStars={this.saveNumStars} />
                    <textarea  cols="50" rows="10" value={this.state.textValue} onChange={this.handleTextChange} placeholder={"type your review here"}></textarea>
                    <br></br>
                    <button onClick={this.handlePost}>Post</button>
                </form>
                <br></br>
            </div>
            
        );
    }

    handlePost(event) {
        event.preventDefault();

        if(!this.state.nameValue || !this.state.numStars || !this.state.textValue) {
            console.log("All fields must be filled in");
            return;
        }
        
        this.props.addReview( <Review key={`${this.state.nameValue}${this.state.textValue.length}`} username={this.state.nameValue} numStars={this.state.numStars} reviewText={this.state.textValue} /> );
        this.props.addRating(this.state.numStars);
        this.props.calcAvg();

        this.setState( state => { 
            state.nameValue = "";
            state.textValue = "";
        } );
    }
}