import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Slider extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    
    onInput(){

    }
    render(){
        return(
            <div className='slidecontainer'>
                <input type='range' min='1' max='15' className='slider' oninput={this.onInput}></input>
            </div>
        )
    }
}

export default Slider