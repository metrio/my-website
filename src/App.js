import './App.css'
import React from 'react'
import NavBar from './Containers/NavBar'
import { Route, Switch } from 'react-router-dom'

class App extends React.Component {

  render () {
    return(
      <body>
        <main className="App">
          <section className="landing">
            <h1 id="logo">Afloat</h1>
          </section>

          <h1>Former Pastry Cook</h1>
          <h1>Into</h1>
          <h1>Up and Coming Software Engineer || Web Developer</h1>
        </main>
        <NavBar />
        <Switch >
        
          <Route path="/about" render={() => {
            return(
             <h1>about</h1> 
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
      </body>
      


    )
  }
}



export default App
