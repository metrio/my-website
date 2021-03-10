import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
gsap.registerPlugin(TextPlugin)

const about = [
    'Demetrio Lima',
    'a software engineer',
    'a self starter ',
    'a pastry cook',
    'a web developer'
]

function LandingProfile() {
    

    useEffect( () => {
        
        gsap.to("#about", 
        {delay: 1, repeatDelay: 4, speed: 2, text: {value: about[0], delimiter: ''}} 
        )
        gsap.to("#about", 
        {delay: 2,  repeatDelay: 4, speed: 2, text: {value: about[1], delimiter: ''}} 
        )
        gsap.to("#about", 
        {delay: 3, repeatDelay: 4, speed: 2, text: {value: about[2], delimiter: ''}} 
        )
        gsap.to("#about", 
        {delay: 4, repeatDelay: 4, speed: 2, text: {value: about[3], delimiter: ''}} 
        )
        gsap.to("#about", 
        {delay: 5, repeatDelay: 4, speed: 2, text: {value: about[4], delimiter: ''}} 
        )
    }, [])


    return(
        <div className="landing-profile">
            Hi, I'm 
            <h4 id="about"></h4>
        </div>
    )
}


export default LandingProfile