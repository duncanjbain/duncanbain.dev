import ProjectCard from '../components/ProjectCard';
import duncanbaindevProject from '../public/images/projects/duncanbaindev.png';
import bugTrackerProject from '../public/images/projects/bugtracker.png'

const ProjectsPage = () => {
  return (
      <div className="w-full lg:w-2/3 mx-auto flex flex-wrap flex-col lg:flex-row">
        <ProjectCard
          projectImgSrc={duncanbaindevProject}
          projectImgAlt="An image showing the website duncanbain.dev"
          projectTitle="Personal Blog and Portfolio"
          projectCaption="A personal website created using Gatsby, Tailwind CSS and Styled-Components. Hosted on Netlify."
          projectRepo="https://github.com/duncanjbain/duncanbain.dev"
          projectDemo="https://duncanbain.dev"
        />
        <ProjectCard
          projectImgSrc={bugTrackerProject}
          projectImgAlt="An image showing the website bugtracker.duncanbain.dev"
          projectTitle="Bug Tracker Application"
          projectCaption="A bug tracker created using React, GraphQL, MongoDB and Styled-Components. Hosted on Heroku and Netlify, continuously deployed using CircleCI."
          projectRepo="https://github.com/duncanjbain/bugtracker"
          projectDemo="https://bugtracker.duncanbain.dev"
        />
      </div>
  );
};

export default ProjectsPage;
