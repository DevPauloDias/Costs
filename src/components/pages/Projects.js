

import Message from "../layout/Message";
import { useLocation } from "react-router-dom";
import styles from './Project.module.css'
import Container from '../layout/Container'
import LinkButton from "../layout/LinkButton";
import { useState, useEffect } from "react";
import ProjectCard from '../project/ProjectCard'
import Loading from '../layout/Loading'



function Projects(){

    const [projects, setProjects]= useState([])
    const [removeLoading, setRemoveLoading]= useState(false)
    const [projectMessage, setProjectMessages]= useState('')

    const location = useLocation()

    useEffect(()=>{
        setTimeout(()=>{

            fetch('http://localhost:5000/projects',{

            method: "GET",
            headers:{
                'Content-Type': 'application/json'
            }

        }).then(resp => resp.json())
        .then(data => { 
           
            setProjects(data)
            setRemoveLoading(true)
        })
        .catch(err => console.log(err))

        },1000)

       
        

    }, [])

    function removeProject(id){

        fetch(`http://localhost:5000/projects/${id}`,{
            method: 'DELETE',
            headers: {
                    'Content-Type': 'application/json'
            }
        }).then(resp=> resp.json())
        .then(data =>{
            setProjects(projects.filter((project)=> project.id !==id ))
            setProjectMessages('Projeto removido com sucesso!')
        })
        .catch(err => console.log(err))

    }

    let message = ''

    if(location.state){
        message= location.state.message
    }
    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1> Meus Projetos</h1>
                <LinkButton to="/new-project" text="Criar Projeto"/>
            </div>
            
           {message && <Message type="success" msg={message} />} 
           {projectMessage && <Message type="success" msg={projectMessage} />} 
           <Container custmoClass="start">
            { projects.length > 0 &&
            projects.map((project)=>(
                <ProjectCard 
                id={project.id}
                 name={project.name}
                 budget={project.budget}
                 category={project.category.name}
                 key={project.id} 
                 handleRemove={removeProject}               
                />
            ))}
            {!removeLoading && <Loading/>}
            {removeLoading && projects.length === 0 && (
                <p> Não há projetos cadastrados!</p>
            )}
           </Container>
        </div>
    )
}
export default Projects;

