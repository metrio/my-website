import React from 'react'


function ProjectCard (props){

    return(
        <div className="project-card">
            <img src={props.projectObj.img} />
            <h4>{props.projectObj.project_name}</h4>
            
            <ul className="tags">
                { props.projectObj.tech_tags.map((tag, index) => 
                    <li key={index}> {tag} </li>
                )}

            </ul>

            <ul className="links">
                {
                    props.projectObj.repo !== null || props.projectObj.front_repo !== null ?
                    
                        props.projectObj.repo !== null ? 
                        <a href={props.projectObj.repo}> Github Repo</a>
                        :
                        <>
                            <a href={props.projectObj.front_repo}>Frontend Repo</a>
                            <a href={props.projectObj.back_repo}>Backend Repo</a> 
                        </>
                    
                    : null
                }

                {
                    props.projectObj.demo_vid !== null ?
                    <a href={props.projectObj.demo_vid}>Demo Video</a>
                    :
                    null
                }

                {
                    props.projectObj.link !== null ?
                    <a href={props.projectObj.link}>Live Link</a>
                    :
                    null
                }
            </ul>

            <p>
                { props.projectObj.desc }
            </p>
            
           
        </div>
    )
}

export default ProjectCard