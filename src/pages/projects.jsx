import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import { ArticleContainer } from "../styles/PostStyles";

const CardContainer = styled.div`
  ${tw`max-w-1/3 flex flex-wrap flex-col justify-start lg:flex-row`}
`;

export default () => (
  <Layout title="About">
    <ArticleContainer>
      <CardContainer>
        <ProjectCard
          projectImgSrc="/duncanbaindev/duncanbaindev.png"
          projectTitle="Personal Website, blog and portfolio"
          projectCaption="A personal website created using Gatsby, Tailwind CSS and Styled-Components. Hosted on Netlify."
        />
        <ProjectCard
          projectImgSrc="card_one.jpeg"
          projectTitle="Test Title"
          projectCaption="Test Caption"
        />
        <ProjectCard
          projectImgSrc="card_one.jpeg"
          projectTitle="Test Title"
          projectCaption="Test Caption"
        />
        <ProjectCard
          projectImgSrc="card_one.jpeg"
          projectTitle="Test Title"
          projectCaption="Test Caption"
        />
        <ProjectCard
          projectImgSrc="card_one.jpeg"
          projectTitle="Test Title"
          projectCaption="Test Caption"
        />
        <ProjectCard
          projectImgSrc="card_one.jpeg"
          projectTitle="Test Title"
          projectCaption="Test Caption"
        />
        <ProjectCard
          projectImgSrc="card_one.jpeg"
          projectTitle="Test Title"
          projectCaption="Test Caption"
        />
        <ProjectCard
          projectImgSrc="card_one.jpeg"
          projectTitle="Test Title"
          projectCaption="Test Caption"
        />
      </CardContainer>
    </ArticleContainer>
  </Layout>
);
