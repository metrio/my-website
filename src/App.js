import './App.css'
import React, { useRef, useEffect } from 'react'
import NavBar from './Containers/NavBar'
import { Route, Switch } from 'react-router-dom'
import { TweenMax, Power3, TimelineLite } from 'gsap'

function App()  {

  let logoItem = useRef(null)

  useEffect( () => {
    console.log(logoItem)
  }, [] )
  


    return(
      <div>
        <main className="App">

          <section className="landing">
            <nav>
              <h1 id="logo">Demetrio</h1>
              <NavBar />
            </nav>
            
          </section>

        </main>
        <div className="intro" ref={ el => { logoItem = el } }>
          <div className="intro-text"> 
            <h1 className="hide">
              <span className="text">
                Former Pastry Cook
              </span>
            </h1>
            <h1 className="hide">
              <span className="text">
                Into
              </span>
            </h1>
            <h1 className="hide">
              <span className="text">
                Software Engineer
              </span>
            </h1>
            <h1 className="hide">
              <span className="text">
                Web Developer
              </span>
            </h1>
          </div>
        </div>
        <div className="slider"></div>


        <Switch >
        
          <Route path="/about" render={() => {
            return(
             <h1>About</h1> 
            )
          }}/>
          <Route path="/experience" render={() => {
            return(
             <h1>Experience</h1> 
            )
          }}/>
          <Route path="/contact" render={() => {
            return(
              <h1>Contact</h1>
            )
          }}/>
          <Route path="/" />
        </Switch>
      </div>
      


    )
}



export default App
