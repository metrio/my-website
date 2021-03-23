import './App.css'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from './Containers/Landing'
import Contact from './Containers/Contact'
import Projects from './Components/Projects'
import About from './Components/About'
import NavBar from './Containers/NavBar'


function App()  {

    return(
      <section id="App">

         <nav>
              <h1 id="logo">DL</h1>
              <NavBar />
          </nav>

        <Switch >
        
          <Route path="/about" render={() => {
            return(
             <About />
            )
          }}/>
          <Route path="/projects" render={() => {
            return(
             <Projects />
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
        
      </section>
      


    )
}



export default App
