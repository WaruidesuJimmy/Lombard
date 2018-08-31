import React, { Component } from 'react';
import './CSS/Cards.css'
import scrollToComponent from 'react-scroll-to-component'


class Cards extends Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div className='card_container'>
                <div className='card main_card'>
                    <span className='title cards'>БОЛЕЕ 1000</span>
                    <span className='title cards'>КЛИЕНТОВ</span>
                </div>
                <div className='second_block'>
                    <div className='card_row'>
                        <div className='card big_card' onClick={()=>scrollToComponent(this.props.scroll.map.current)}><span className='title'>МЫ НА КАРТЕ</span></div>
                        <div className='card small_card'></div>
                        <div className='card small_card'></div>
                    </div>
                    <div className='card_row'>
                        <div className='card small_card'></div>
                        <div className='card small_card'></div>
                        <div className='card big_card gold_picture ' onClick={()=>scrollToComponent(this.props.scroll.application.current)}>
                            <span className='title'>ОФОРМИТЬ ЗАЯВКУ</span>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}


export default Cards
