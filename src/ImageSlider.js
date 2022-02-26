// your ImageSlider code here!
import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react'

export default class ImageSlider extends Component {
    constructor(){
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    
    render(){
        
     return (
     <p>I am on slide {this.state.currentSlideIndex}</p>
     )
     
     
 }
}