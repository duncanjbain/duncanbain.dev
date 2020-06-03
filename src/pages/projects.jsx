import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import SEO from "../components/SEO";
import { ArticleContainer } from "../styles/PostStyles";

const CardContainer = styled.div`
  ${tw`flex flex-wrap flex-col lg:flex-row`}
`;

export default () => (
  <Layout>
    <SEO title="Projects" />
    <ArticleContainer>
      <CardContainer>
        <ProjectCard
          projectImgSrc="/duncanbaindev/duncanbaindev.png"
          projectTitle="Personal Blog and Portfolio"
          projectCaption="A personal website created using Gatsby, Tailwind CSS and Styled-Components. Hosted on Netlify."
          projectRepo="https://github.com/duncanjbain/duncanbain.dev"
          projectDemo="https://duncanbain.dev"
        />
      </CardContainer>
    </ArticleContainer>
  </Layout>
);
