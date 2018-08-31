import React, { Component } from 'react';
import './CSS/Perks.css'
import './CSS/Cards.css'


class Perks extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div className='title perks'>Наши преимущества</div>
                <div className='card_container perks'>
                    <div className='card_row'>
                        <div className='card small_card perks'><div className='perks_image first' ></div><span className='image_title'>Мы одобряем 97% заявок</span></div>
                        <div className='card small_card perks'><div className='perks_image second ' ></div><span className='image_title'>Вы можете оформить заявку онлайн</span></div>
                        <div className='card small_card perks'><div className='perks_image third' ></div><span className='image_title'>7 минут на рассмотрение заявки</span></div>
                        <div className='card small_card perks'><div className='perks_image fourth' ></div><span className='image_title'>Без залога и поручителей</span></div>
                    </div>
                    <div className='card_row perks'>
                        <div className='card small_card perks'><div className='perks_image fifth'></div><span className='image_title'>Досрочное погашение</span></div>
                        <div className='card small_card perks'><div className='perks_image sixth'></div><span className='image_title'>Низкие проценты</span></div>
                        <div className='card small_card perks '><div className='perks_image seventh'></div><span className='image_title'>У нас есть обратная связь</span></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Perks