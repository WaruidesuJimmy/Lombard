import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './CSS/Background.css'

class Background extends Component{
    constructor(props){
        super(props)
    }

    renderBackground(){
        let background = []
        for(let j=0; j<12; j++){
            let row = []
            for(let i=0; i<24; i++){
                row.push(<div key={i} className={i%2===0?'left_triangle':'right_triangle'}></div>)
            }
            background.push(<div key={j} className='background_row'>{row}</div>)
        }
        return background;
    }

    render(){
        return(
            <div className='background_container'>
                {this.renderBackground()}
            </div>
        )
    }
}


export default Background