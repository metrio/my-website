import React from 'react'


const ProjectCard = (props) => {
    
    const renderTags = () => {
        if(props.projectObj.tech_tags === undefined ){
            <li>"loading..."</li>
        } else {
            props.projectObj.tech_tags.map((tag, index) => 
                    <li key={index}> {tag} </li>
            )
        }

    }


    return(
        <div className="project-card">
            <img src={props.projectObj.img} />
            <h4>{props.projectObj.project_name}</h4>
            
            <ul className="tags">
             { props.projectObj.tech_tags.map((tag, index) => 
                    <li key={index}> {tag} </li>
            )}

            { renderTags() }
            </ul>
            
           
        </div>
    )
}

export default ProjectCard