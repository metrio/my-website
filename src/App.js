import './App.css'
import { Route, Switch } from 'react-router-dom'
import Landing from './Components/LandingAnimation'
import Contact from './Containers/Contact'
import Projects from './Containers/Projects'
import About from './Components/About'
import NavBar from './Containers/NavBar'
import LandingProfile from './Containers/LandingProfile'


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
              <LandingProfile />
            )
          }}/>

        </Switch>
        
       <Landing />
      </section>
    )
}

export default App
