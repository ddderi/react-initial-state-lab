// your Bomb code here!
import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';                 


export default class Bomb extends Component {
    constructor(props){
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount,
            
        }
    };
     
    render() {
        console.log(this.state.secondsLeft)
        let message;
    if(this.state.secondsLeft === 0){
    message = 'Boom!'
}else{message = this.state.secondsLeft +` seconds left before I go boom!`}

        return (
            <p>{message}</p>
        )
    }
}