import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from './Slider.js'
import './CSS/Form.css'
import './CSS/Slider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons';

class Form extends Component{
    
    
    constructor(props){
        super(props)

        //binds
        this.onChangeHandle = this.onChangeHandle.bind(this)
        this.onSubmitHandle = this.onSubmitHandle.bind(this)

        this.applicationBtnOnClick = this.applicationBtnOnClick.bind(this)
        this.messageBtnOnClick = this.messageBtnOnClick.bind(this)

        this.applicationBtn = React.createRef()
        this.messageBtn = React.createRef()

        this.state = {
            fullName: '',
            telePhone: '',
            days: 15,
            money: 1000,
            mail: ''
        }
    }

    applicationBtnOnClick(event){
        let parent = event.target.parentNode;
        Array.from(parent.classList).find((element) => {
        if(element !== "slide-up") {
            parent.classList.add('slide-up')
        }
        else{
            this.messageBtn.current.parentNode.parentNode.classList.add('slide-up')
            parent.classList.remove('slide-up')
        }
    })
    }
    
    messageBtnOnClick(event){
        let parent = event.target.parentNode.parentNode;
        Array.from(parent.classList).find((element) => {
            if(element !== "slide-up") {
                parent.classList.add('slide-up')
        }
        else{
            this.applicationBtn.current.parentNode.classList.add('slide-up')
            parent.classList.remove('slide-up')
        }
    })
    }

    prettyNumber(){
        let value = this.state.telePhone
        let prettyValue = '+'
        if (value.length===0){return}
        for(let i = 0; i < value.length; i++){
            if (i===1){
                prettyValue+=' ('
            }
            if(i===4){
                prettyValue+=') '
            }
            if (i===7){
                prettyValue+='-'
            }
            if (i===9){
                prettyValue+='-'
            }
            prettyValue+=value[i]
        }
        return prettyValue
    }

    formValidation(value, type){
        if (type==='telePhone'){
            console.log(this.state.telePhone.length)
            if(isNaN(parseInt(value.slice(-1))) && (this.state.telePhone.length<value.length) && this){
                return 'error';
            }
        }
    }

    getStringForDays(){
        const totalMoney = parseInt(this.state.money)+parseInt(this.state.money*this.state.days*this.props.percentage/100)
        return "Итог: " +totalMoney+"Руб."
    }
    onSubmitHandle(){
        fetch('http://localhost:3001/application',{
            headers: {'Content-Type':'application/json'},
            method: "POST",
            body: JSON.stringify({fullName: this.state.fullName, telePhone: this.state.telePhone, days: this.state.days})
        })
            .then(console.log('Succesful!'))
            .catch(error=>console.log(error))
    }
    
    onChangeHandle(event){
        const target = event.target
        const name = target.name
        const value = target.value
        console.log(event)
        const validate = this.formValidation(value, name)

        if (validate==='error'){return}

        this.setState({
            [name]: value
        })


    }
    render(){
        return(
            <div>
                <div className="form-structor">
                    <div className="application">
                        <h2 className="form-title" ref={this.applicationBtn} id="application" onClick={this.applicationBtnOnClick}><span>или</span>Заявка</h2>
                        <div className="form-holder">
                            <div>
                                <h5 className='child'>{this.state.days} Дней {this.state.money}Руб.</h5>
                            </div>
                            <input type="text" className="input" placeholder='Фамилия Имя Отчество' name='fullName' value={this.state.fullName} onChange={this.onChangeHandle} />
                            <input type="tel" className="input" placeholder="+7 (999) 123-45-67" name='telePhone' value={this.prettyNumber()} onChange={this.onChangeHandle}/>
                            <input type="email" className="input" placeholder="google@gmail.com" name='mail' onChange={this.onChangeHandle} value={this.state.mail}/>
                            <div className='slider_parent'>
                                {/* <div className='slider_span_container'>
                                    <span className='sliderCount'> Срок: </span>
                                    <span className='sliderCount'>Сумма:</span>
                                </div> */}
                                <div className='slider_span_container'>
                                    <div className='slidecontainer'>
                                        <input  name='days' type='range' min='1' max='15' className='slider' onChange={this.onChangeHandle}></input>                                
                                    </div>
                                    <div className='slidecontainer'>
                                        <input name='money' type='range' min='1000' max='30000' step={100} className='slider' onChange={this.onChangeHandle} ></input>
                                    </div>
                                </div>
                                {/* <div className='slider_span_container'>
                                    <span className='sliderCount'>{this.state.days} дней</span>
                                    <span className='sliderCount'>{this.state.money}</span>
                                </div> */}
                            </div>
                            <div>
                                <h5 className='child' >{this.getStringForDays()}</h5>
                            </div>
                        </div>
                        <button className="submit-btn">Оставить Заявку</button>
                    </div>
                    <div className="message slide-up">
                        <div className="center">
                            <h2 className="form-title" ref={this.messageBtn} id="login" onClick={this.messageBtnOnClick}><span>или</span>Написать Нам</h2>
                            <div className="form-holder">
                                <input type="email" className="input" placeholder="Email" onChange={this.onChangeHandle} name='mail' value={this.state.mail}/>
                                <input type="text" className="input" placeholder="Message" />
                            </div>
                            <button className="submit-btn">Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Form.propTypes = {
    percentage : PropTypes.number
}


export default Form