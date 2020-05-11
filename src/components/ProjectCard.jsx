import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

const CardContainer = styled.article`
  ${tw`max-w-sm rounded overflow-hidden shadow-lg`}
`;

const ProjectCard = ({ projectImgAlt, projectTitle, projectCaption }) => {
  return (
    <CardContainer>
      <img className="w-full" src="" alt={projectImgAlt} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{projectTitle}</div>
        <p className="text-gray-700 text-base">{projectCaption}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #winter
        </span>
      </div>
    </CardContainer>
  );
};

export default ProjectCard;
