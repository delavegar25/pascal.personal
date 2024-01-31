import React from 'react';
import Project from './Project.jsx';
import '../styles/Projects.css';

const Projects = () => {
  const projectsInfo = {
    one: {
      name: 'Project 1',
      desc: 'Bethel-church',
      liveLink: 'https://bethel-church.vercel.app',
      githubLink: 'https://github.com/delavegar25',
      techs: ['HTML/CSS', 'Javascript']
    },
     two: {
      name: 'Project 2',
      desc: 'Shopify-dashboard',
      liveLink: 'https://dashboard-link-lake.vercel.app',
      githubLink: 'https://github.com/delavegar25',
      techs: ['HTML/CSS', 'Javascript']
    },
    three: {
      name: 'Project 3',
      desc: 'Pascals recipe',
      liveLink: 'https://pascal-recipe.vercel.app',
      githubLink: 'https://github.com/delavegar25',
      techs: ['Vue']
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
