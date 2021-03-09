import './App.css'
import React, { useRef, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from './Containers/Landing'
import Contact from './Containers/Contact'
import Timeline from './Components/Timeline'
import About from './Components/About'
import NavBar from './Containers/NavBar'



function App()  {

  
    return(
      <>
         <nav>
              <h1 id="logo">Demetrio</h1>
              <NavBar />
          </nav>

        <Switch >
        
          <Route path="/about" render={() => {
            return(
             <About />
            )
          }}/>
          <Route path="/experience" render={() => {
            return(
             <Timeline />
            )
          }}/>
          <Route path="/contact" render={() => {
            return(
              <Contact />
            )
          }}/>
          <Route path="/"  render={() => {
            return(
              <Landing />
            )
          }}/>
        </Switch>
      </>
      


    )
}



export default App
