
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'
import css from '../../index.css'

function NewProject(){

    return (
        <div className={styles.newproject_container}>
            <h1> Criar Projeto</h1>
            <p> Crie seu projeto para depois adicionar os serviços</p>
            <p> Formulário</p>

            <ProjectForm btnText="Criar projeto"/>
        </div>
    )

}
export default NewProject