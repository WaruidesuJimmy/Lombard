import React, { Component } from 'react';
import './CSS/SlideComponent.css'


class SlideComponent extends Component{
    constructor(props){
        super(props)

        let currentScrollY = 0;
        let lastScrollY = 0;
        let ticking = false;

        this.Slide = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }
    
      handleScroll = () => {
        this.currentScrollY = window.scrollY;
        
        if (!this.ticking) {
          window.requestAnimationFrame(() => {
            //this.Slide.current.style.top = `${lastScrollY}px`;

            console.log(this.currentScrollY)
            if(this.currentScrollY < 20 && this.lastScrollY<this.currentScrollY){
                this.Slide.current.classList.remove('slide_down')              
                this.Slide.current.classList.add('slide_up')
                console.log( this.Slide.current.classList)
            }
            if(this.currentScrollY > 1 && this.currentScrollY < 20 && this.currentScrollY<this.lastScrollY ){
                this.Slide.current.classList.remove('slide_up')                
                this.Slide.current.classList.add('slide_down')
                console.log( this.Slide.current.classList)
            }
            this.lastScrollY = this.currentScrollY;
            this.ticking = false;
          })
       
          this.ticking = true;

        }

      }

    render(){
        return(
            <div className='slide' ref={this.Slide}>
                <div className='title'><span>КАКОЙ-ТО</span><span>ТЕКСТ</span></div>
                <div className='phone_number'><span>8 (800) 555 35 35</span><span>roma66632211@gmail.com</span></div>
            </div>
        )
    }
}


export default SlideComponent


