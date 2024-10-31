import React, { useEffect, useState } from 'react';

interface Project {
  id: number;
  navn: string;
  description: string;
  status: string;
}

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/projects')
        .then((response) => response.json())
        .then((result) => {
            console.log("Fetched data:", result.data); 
            setProjects(result.data); 
        })
        .catch((error) => console.error('Error fetching projects:', error));
}, []);

  return (
    <section id="project-list">
        <h2>Alle prosjekter</h2>
        <ul>
            {projects.map((project) => (
                <li key={project.id}>
                    <h3>{project.navn}</h3>
                    <p>{project.description}</p>
                </li>
            ))}
        </ul>
    </section>
);
};
export default ProjectList;
