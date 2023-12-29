import React from 'react';
import Project from './Project.jsx';
import '../styles/Projects.css';

const Projects = () => {
  const projectsInfo = {
    one: {
      name: 'Project 1',
      desc: 'Pascals recipe',
      liveLink: 'https://pascal-recipe.vercel.app',
      githubLink: 'https://github.com/delavegar25',
      techs: ['HTML', 'CSS', 'Javascript', 'Vue']
    },
    two: {
      name: 'Project 2',
      desc: 'Shopify Dashboard',
      liveLink: 'https://dashboard-link-lake.vercel.app',
      githubLink: 'https://github.com/delavegar25',
      techs: ['HTML/CSS', 'Javascript']
    }
  }
  return (
    <div className="Projects" id="projects" >
      <h2>My Projects</h2>
      <div>
        <Project info={projectsInfo.one} />
        <Project info={projectsInfo.two} />
      </div>
    </div>
  )
}

export default Projects;
