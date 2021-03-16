import React, { useRef, useEffect } from 'react'
import { TimelineMax } from 'gsap'
import personal_pic from '../Assets/personal_pic.png'
import LandingProfile from '../Components/LandingProfile'


function Landing() {
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
            <img src={personal_pic} alt="profile"/>
            <LandingProfile />          
          </section>

        </main>
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

export default Landing