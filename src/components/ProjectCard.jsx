import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Card = styled.article`
  ${tw`max-w-1/3 flex-auto rounded shadow-lg mx-2 my-4 flex flex-col`}
`;

const ProjectCard = ({
  projectImgSrc,
  projectImgAlt,
  projectTitle,
  projectCaption,
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
    </Card>
  );
};

export default ProjectCard;
