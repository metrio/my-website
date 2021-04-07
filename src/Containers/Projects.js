import React from 'react'
import project_data from '../project_data.json'
import ProjectCard from '../Components/ProjectCard'

function Projects() {


    const renderProjectCards = () => [
        project_data.map(project => 
            <ProjectCard projectObj={project} key={project.id} />
        )
    ]
    

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