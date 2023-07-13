import React from 'react';
import Project from './Project.jsx';
import '../styles/Projects.css';

const Projects = () => {
  const projectsInfo = {
    one: {
      name: 'Project 1',
      desc: 'Built a software product on food recipe, which is called The Meal Finder, this meal finder allows you to search for food that you desire',
      liveLink: 'website url',
      githubLink: 'https://github.com/delavegar25',
      techs: ['HTML', 'CSS', 'Javascript'],
      isOpenSource: true
    },
    two: {
      name: 'Project 2',
      desc: '',
      liveLink: 'website url',
      githubLink: 'https://github.com/delavegar25',
      techs: ['HTML/CSS', 'Javascript'],
      isOpenSource: true
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
