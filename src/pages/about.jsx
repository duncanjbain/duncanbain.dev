import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import {
  ArticleContainer,
  ArticleHeader,
  ArticlePara,
} from "../styles/PostStyles";

export default () => (
  <Layout>
    <SEO
      title="About"
      description="Hi! I'm Duncan, and I'm a Mechanical Engineer learning to code, based in London."
    />
    <ArticleContainer>
      <ArticleHeader>About</ArticleHeader>
      <ArticlePara>
        Hi! I&apos;m Duncan, and I&apos;m a Mechanical Engineer learning to
        code, based in London.
      </ArticlePara>
      <ArticlePara>
        In Spring 2019 I decided to make a change, a change in my career as a
        Mechanical Engineer to become a Software Engineer. I&apos;ve always been
        interested in computers, having been introduced to them at a young age,
        I even went on to study Computer Science for a year before changing to
        Mechanical Engineering! Now after spending the last 8 years working in
        various engineering roles I&apos;ve decided to make the change.
      </ArticlePara>
      <ArticlePara>
        I&apos;m now spending the majority of my free time learning HTML, CSS
        and JavaScript with the intention of gianing a solid foundation of
        fullstack web development.
      </ArticlePara>
      <ArticlePara>
        When not coding I enjoy cycling, cooking and travelling.
      </ArticlePara>
    </ArticleContainer>
  </Layout>
);
