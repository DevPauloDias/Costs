
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'
import css from '../../index.css'
import {Link, useNavigate} from 'react-router-dom'

function NewProject(){

    const navigate = useNavigate()

    function createPost(project){
        // initialize cost and service
        project.cost =0
        project.services =[]

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)

        }).then(resp => resp.json())
        .then((data)=> {console.log(data)
            const message= "Projeto criado com sucesso!"
            //redirect
            // history.push('/projects', {message: 'Projeto criado com sucesso!})
        
           navigate('/projects',{state:{ message: message}});
        })
        .catch(err => console.log(err))

    }

    return (
        <div className={styles.newproject_container}>
            <h1> Criar Projeto</h1>
            <p> Crie seu projeto para depois adicionar os serviços</p>
            <p> Formulário</p>

            <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
        </div>
    )

}
export default NewProject