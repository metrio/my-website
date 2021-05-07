import React, { useRef, useEffect } from 'react'
import './Landing.css'
import { TimelineMax } from 'gsap'

function LandingAnimation() {
    let sliderItem = useRef(null)

  useEffect( () => {
    const tl = new TimelineMax( { defaults: { ease: 'power1.out'} } )
    
    tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 })
    tl.to(sliderItem, { y: '-100%', duration: 1.5 , delay: 0.5})
    tl.to('.intro', {y: "-100%", duration: 1}, '-=1')
  }, [] )

    return(
        <>
        <div className="intro">
          <div className="intro-text"> 
            <h1 className="hide">
              <span className="text">
                Looking for
              </span>
            </h1>
            <h1 className="hide">
              <span className="text">
                Your Next
              </span>
            </h1>
            <h1 className="hide">
              <span className="text">
                Software Engineer?
              </span>
            </h1>
          </div>
        </div>
        <div className="slider" ref={el => { sliderItem = el }}></div>
        </>
    )
}

export default LandingAnimation