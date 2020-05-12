import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = styled.article`
  ${tw`w-full md:w-1/3 flex-auto rounded shadow-lg my-4 flex flex-col md:mx-4`}
`;

const CardDescrCont = styled.div`
  ${tw`px-6 py-4`}
`;

const CardTitle = styled.h2`
  ${tw`font-bold text-xl md:text-2xl mb-2`}
`;

const CardCaption = styled.p`
  ${tw`text-gray-800 text-base md:text-xl`}
`;

const CardButtonCont = styled.div`
  ${tw`px-6 py-4 flex flex-row space-x-4 justify-center`}
`;

const CardButton = styled.a`
  ${tw`px-2 py-2 bg-blue-600
  shadow-lg border rounded-lg text-white 
  font-semibold focus:outline-none focus:shadow-outline 
  hover:bg-blue-500 active:bg-blue-500`}
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
      <CardDescrCont>
        <CardTitle>{projectTitle}</CardTitle>
        <CardCaption>{projectCaption}</CardCaption>
      </CardDescrCont>
      <CardButtonCont>
        <CardButton href={projectRepo}>
          <FontAwesomeIcon icon={["fab", "github"]} /> Github Repo
        </CardButton>
        <CardButton href={projectDemo}>Demo</CardButton>
      </CardButtonCont>
    </Card>
  );
};

export default ProjectCard;
