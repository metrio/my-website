import './App.css'
import React, { useRef, useEffect } from 'react'
import NavBar from './Containers/NavBar'
import { Route, Switch } from 'react-router-dom'
import { TimelineMax } from 'gsap'


function App()  {
  let sliderItem = useRef(null)

  useEffect( () => {
    const tl = new TimelineMax( { defaults: { ease: 'power1.out'} } )
    
    tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 })
    tl.to(sliderItem, { y: '-100%', duration: 1.5 , delay: 0.5})
    tl.to('.intro', {y: "-100%", duration: 1}, '-=1')
    tl.fromTo('nav', {opacity: 0}, { opacity: 1, duration: 1 }, '-=1')
  }, [] )
  

    return(
      <>
        <main>
          <section className="landing">
            <nav>
              <h1 id="logo">Demetrio</h1>
              <NavBar />
            </nav>
          </section>

        </main>
        <div className="intro">
          <div className="intro-text"> 
            <h1 className="hide">
              <span className="text">
                Former Pastry Cook
              </span>
            </h1>
            <h1 className="hide">
              <span className="text">
                Turned
              </span>
            </h1>
            <h1 className="hide">
              <span className="text">
                ...
              </span>
            </h1>
            {/* <h1 className="hide">
              <span className="text">
                Web Developer
              </span>
            </h1> */}
          </div>
        </div>
        <div className="slider" ref={el => { sliderItem = el }}></div>


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
      </>
      


    )
}



export default App
