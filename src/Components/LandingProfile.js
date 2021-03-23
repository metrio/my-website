import React, { useEffect } from 'react'
import { gsap} from 'gsap'
import { TextPlugin } from 'gsap/all'

gsap.registerPlugin(TextPlugin)

function LandingProfile() {
    
    useEffect( () => {
        aboutMeAnimation()

        return () => aboutMeAnimation()
    }, [])

    const aboutMeAnimation = () => {
        let cursor = gsap.to(".cursor", {opacity: 0, ease: 'power2.inOut', repeat: -1})
        let mainTl = gsap.timeline({repeat: -1}).pause()
        let boxTl = gsap.timeline()

        const about = [
            'Demetrio Lima.',
            'a software engineer.',
            'a self starter.',
            'a web developer.',
            'a recent bootcamp grad.',
            'a cook.'
        ]

        boxTl.to(".box", {duration: 1, width:"17vw", delay: 0.5, ease: "power4.inOut"}) 
            .to(".box", {duration:1, height:"7vw", ease: "elastic.out", onComplete: () => mainTl.play() })
        
       let phrasePrint = about.forEach(phrase => {
            let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1})
            tl.to(".about", {duration: 1, text: phrase})
            mainTl.add(tl)
        })
    }


    return(
        <div className="landing-profile">
            <h1><span>Hi, I'm </span></h1>

            <h1 className="landing-animation">
                <span className="box"></span>
                <span className="about"></span> 
                <span className="cursor">_</span>
            </h1>

        </div>
    )
}


export default LandingProfile