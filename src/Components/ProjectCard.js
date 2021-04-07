import React from 'react'

const ProjectCard = (props) => {
    
    const renderTags = () => {
        let tags = props.projectObj.tech_tags

        tags.map(ele => {
            <li> { ele } </li>
        })
    }


    return(
        <div className="project-card">
            <img src={props.projectObj.img} />
            <h4>{props.projectObj.project_name}</h4>
            
            <ul className="tags">
            { renderTags() }
            </ul>
            
           
        </div>
    )
}

export default ProjectCard