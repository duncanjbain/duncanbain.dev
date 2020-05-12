import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = styled.article`
  ${tw`w-full md:w-1/3 flex-auto rounded shadow-lg my-4 flex flex-col md:mx-4`}
`;

const ProjectCard = ({
  projectImgSrc,
  projectImgAlt,
  projectTitle,
  projectCaption,
  projectRepo,
  projectDemo,
}) => {
  const data = useStaticQuery(
    graphql`
      query {
        images: allFile(
          filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }
        ) {
          edges {
            node {
              extension
              relativePath
              childImageSharp {
                fluid(maxWidth: 960) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `
  );

  const image = data.images.edges.find(
    (k) => projectImgSrc.indexOf(k.node.relativePath) > -1
  );

  return (
    <Card>
      <Img
        css={tw`w-full`}
        fluid={image.node.childImageSharp.fluid}
        alt={projectImgAlt}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{projectTitle}</div>
        <p className="text-gray-800 text-lg">{projectCaption}</p>
      </div>
      <div className="px-6 py-4 flex flex-row space-x-4 justify-center">
        <a
          href={projectRepo}
          className="px-2 py-2 bg-blue-600 shadow-lg border rounded-lg text-white font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-500 active:bg-blue-500"
        >
          <FontAwesomeIcon icon={["fab", "github"]} /> Github Repo
        </a>
        <a
          href={projectDemo}
          className="px-4 py-2 bg-blue-600 shadow-lg border rounded-lg text-white font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-500 active:bg-blue-500"
        >
          Project Demo
        </a>
      </div>
    </Card>
  );
};

export default ProjectCard;
