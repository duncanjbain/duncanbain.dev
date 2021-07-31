import Image from 'next/image'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectCard = ({
  projectImgSrc,
  projectImgAlt,
  projectTitle,
  projectCaption,
  projectRepo,
  projectDemo,
}) => {
  return (
    <article className="rounded border-2 shadow-lg my-4 flex flex-col md:mx-4">
      <Image src={projectImgSrc} alt={projectImgAlt} layout="intrinsic" quality="100" />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl md:text-2xl mb-2">{projectTitle}</h2>
        <p className="text-gray-800 text-base md:text-xl">{projectCaption}</p>
      </div>
      <div className="px-6 py-4 flex">
        <a
          className="px-2 py-2 bg-blue-500
  shadow-lg border rounded-lg text-white 
  font-semibold focus:outline-none focus:shadow-outline 
  hover:bg-blue-400 active:bg-blue-400"
          href={projectRepo}
        >
          <FontAwesomeIcon icon={faGithub} /> Github Repo
        </a>
        <a
          className="px-2 py-2 bg-blue-500
  shadow-lg border rounded-lg text-white 
  font-semibold focus:outline-none focus:shadow-outline 
  hover:bg-blue-400 active:bg-blue-400"
          href={projectDemo}
        >
          Project Demo
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
