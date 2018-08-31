import React, { Component } from 'react';
import './CSS/Header.css'
import scrollToComponent from 'react-scroll-to-component'

class Header extends Component{
    constructor(props){
        super(props)
    }



    render(){
        return(
            <header className='header_container'>
                <div className='header_title_container'>
                    <div className='header_title' onClick={()=>scrollToComponent(this.props.scroll.application.current)}><span>Подать заявку</span></div>
                    <div className='header_title'><span>О нас</span></div>
                </div>
            </header>
        )
    }
}





export default Header