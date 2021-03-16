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
            'a pastry cook.',
            'a web developer.'
        ]

        boxTl.to(".box", {duration: 1, width:"17vw", delay: 0.5, ease: "power4.inOut"}) 
            .to(".box", {duration:1, height:"7vw", ease: "elastic.out", onComplete: () => mainTl.play() })
            .to(".box", {duration:2, autoAlpha: 0.7, yoyo: true, repeat: -1, ease: "rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})"})
        
       let phrasePrint = about.forEach(phrase => {
            let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1})
            tl.to(".about", {duration: 1, text: phrase})
            mainTl.add(tl)
        })
    }


    return(
        <div className="landing-profile">
            Hi, I'm 
            <h4>
                <span className="box"></span>
                <span className="about"></span> 
                <span className="cursor">_</span>
            </h4>
            <p></p>
        </div>
    )
}


export default LandingProfile