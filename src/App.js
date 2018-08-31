import React, { Component } from 'react'
import scrollToComponent from 'react-scroll-to-component'


import logo from './logo.svg'
import './App.css'

import Background from './Partials/Components/Background.js'
import Form from './Partials/Components/Form.js'
import Header from './Partials/Components/Header.js'
import SlideComponent from './Partials/Components/SlideComponent.js'
import Cards from './Partials/Components/Cards.js'
import Perks from './Partials/Components/Perks.js'
import About from './Partials/Components/About.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
library.add( faCheckSquare, faCoffee, faAngleDown, faAngleUp)

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

class App extends Component{
  constructor(props){
    super(props)

    this.map = React.createRef()
    this.application = React.createRef()
  }
  render(){
    return(
      <div className='App'>
        <Header scroll={{application:this.application}}></Header>
        <SlideComponent></SlideComponent>
        <div className='content'>
          <Cards scroll={{map:this.map, application:this.application}}></Cards>
          <Perks></Perks>
          <About ref={this.application}></About>
          <About ref={this.map}></About>
          <About></About>
          
        </div>
        
        {/* <Form percentage={1.5}></Form> */}
      </div>
      )
  }
}

export default App;
