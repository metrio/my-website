import React from 'react'
import AboutMe from '../Assets/aboutme.png'

function About() {
    return(
        <div id="AboutMe">
            <img src={AboutMe} alt="Profile" />

            

            <p> From cooking to coding, I'm a former Pastry Chef who reignited their passion for Software Engineering. I have experience developing a range of websites, online applications and animations, creating databases, and mentoring web developers.
            </p>

            <p>
                When I'm not immersed in code,  you can find me biking around the city, staking out the best finds at the local NYC markets, and attempting to master the perfect al pastor tacos. 
                I also love playing video and board games, live music, and spending time with the best tortieshell kitten, Anise.
            </p>
        </div>
    )

}

export default About