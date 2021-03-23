import React from 'react'
import AboutMe from '../Assets/aboutme.png'
import CPP from "../Assets/TechLogos/CPP.png";
import CSS from "../Assets/TechLogos/CSS.png";
import Greensock from "../Assets/TechLogos/greensock.png";
import JavascriptLogo from "../Assets/TechLogos/javascript.png";
import Rails from "../Assets/TechLogos/Rails.png";
import ReactLogo from "../Assets/TechLogos/react.png";
import Ruby from "../Assets/TechLogos/ruby.png";
import HTMLLogo from "../Assets/TechLogos/Html.png";
import SQL from "../Assets/TechLogos/sql.png";


function About() {
    return(
        <section id="AboutPage">
            <main id="AboutMe">
                <img src={AboutMe} alt="Profile" />
            
                <div className="description">
                    <p>
                        From cooking to coding, I'm a former Pastry Chef who reignited their passion for Software Engineering. I have experience developing a range of websites, online applications and animations, creating databases, and mentoring web developers.
                    </p>

                    <p>
                        When I'm not immersed in code,  you can find me biking around the city, staking out the best finds at the local NYC markets, and attempting to master the perfect al pastor tacos. 
                        I also love playing video and board games, live music, and spending time with the best tortieshell kitten, Anise.
                    </p>    
                </div>
            </main>
            <div>
                <div className="tech-logos">
                    Languages:
                    <img src={JavascriptLogo} alt="JS Logo"/>
                    <img src={Ruby} alt="Ruby Logo"/>
                    <img src={CPP} alt="C++ Logo"/>
                    <img src={CSS} alt="CSS Logo"/>
                    <img src={HTMLLogo} alt="HTML Logo"/>
                    <img src={SQL} alt="SQL Logo"/>
                </div>

                <div className="tech-logos">
                    Frameworks:
                    <img src={ReactLogo} alt="React logo"/>
                    <img src={Rails} alt="Rails logo"/>
                    <img src={Greensock} alt="GSAP logo"/>
                </div>
            </div>
            
        </section>
    )

}

export default About