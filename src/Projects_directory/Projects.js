import React from 'react'
import project_data from '../../project_data.json'
import ProjectCard from './ProjectCard'

function Projects() {


    const renderProjectCards = () => {
        project_data.sort((a, b) => {
            // simplify: b.id < a.id ? -1 : 1
            if(b.id < a.id){
                return -1
            } else {
                return 1
            }
        })


       return project_data.map(project => 
            <ProjectCard projectObj={project} key={project.id} />
            
        )
    }

    

    return(
        <main className="projects-page">
            <h1 className="projectpage-declare"> Projects </h1>
            <div className="projects-container">
            { renderProjectCards() }
            </div>
            
        </main>
    )
}

export default Projects