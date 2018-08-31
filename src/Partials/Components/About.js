import React, { Component } from 'react';
import './CSS/About.css'
import './CSS/Cards.css'


class About extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='about'>
                <span className='title about'>МЫ НА КАРТЕ</span>
                <div className='card_container about' >
                    <div className='card_row about'>
                        <div className='card big_card about1'></div>
                        <div className='card big_card about2'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About