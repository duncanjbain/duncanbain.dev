import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import { ArticleContainer } from "../styles/PostStyles";

const CardContainer = styled.div`
  ${tw`flex flex-wrap flex-col md:flex-row`}
`;

export default () => (
  <Layout title="About">
    <ArticleContainer>
      <CardContainer>
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
        <ProjectCard
          projectImgSrc="card_one.jpeg"
          projectTitle="Test Title"
          projectCaption="Test Caption"
        />
      </CardContainer>
    </ArticleContainer>
  </Layout>
);
