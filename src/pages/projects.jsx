import React from "react";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import { ArticleContainer } from "../styles/PostStyles";

export default () => (
  <Layout title="About">
    <ArticleContainer>
      <ProjectCard projectTitle="Test Title" projectCaption="Test Caption" />
    </ArticleContainer>
  </Layout>
);
