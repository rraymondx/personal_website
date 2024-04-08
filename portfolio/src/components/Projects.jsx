import React from 'react';
import styles from '../styles/Projects.module.css';
import ProjectData from '../data/ProjectData.json';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {ProjectData.map((project, id) => {
                    return(
                        <ProjectCard key={id} project={project}/>
                    );
                })}
            </div>
        </section>
    ); 
}

export default Projects