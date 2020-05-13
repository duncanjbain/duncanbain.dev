/* eslint-disable react/no-unescaped-entities */
import React from "react";
import tw from "tailwind.macro";
import styled from "styled-components";
import { ArticleA } from "../styles/PostStyles";

const IntroContainer = styled.section`
  ${tw`px-8 md:py-2 mb-8 leading-relaxed`}
`;

const IntroText = styled.p`
  ${tw`text-2xl md:text-4xl font-bold text-blue-600`}
`;

const Name = styled.span`
  ${tw`bg-gray-200 px-2`}
`;

const BioText = styled.p`
  ${tw`font-normal text-xl md:text-2xl`}
`;

const Intro = () => (
  <IntroContainer>
    <IntroText>
      Hello!{" "}
      <span role="img" aria-label="Waving hand emoji icon">
        👋
      </span>{" "}
      <Name>I'm Duncan</Name>
      <BioText>
        I'm a Mechanical Engineer who's learning to code. This is where I share
        the things that I've created, where I write about the things that I'm
        working on and where I talk about anything else that excites me. Feel
        free to get in touch with me on{" "}
        <ArticleA href="https://twitter.com/duncanbain">Twitter</ArticleA> or at{" "}
        <ArticleA href="mailto:duncan@bain.io">duncan@bain.io</ArticleA>.
      </BioText>
    </IntroText>
  </IntroContainer>
);

export default Intro;
