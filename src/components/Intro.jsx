/* eslint-disable react/no-unescaped-entities */
import React from "react";
import tw from "tailwind.macro";
import styled from "styled-components";

const IntroContainer = styled.section`
  ${tw`px-8 md:py-2 leading-relaxed`}
`;

const IntroText = styled.p`
  ${tw`text-2xl md:text-4xl font-bold text-blue-600`}
`;

const Name = styled.span`
  ${tw`bg-gray-200 px-2`}
`;

const BioText = styled.p`
  ${tw`font-normal text-xl md:text-2xl text-current`}
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
        I'm a Mechanical Engineer who is learning to code. This where I share
        things I've created and write about things I'm working on or anything
        else that I find exciting.
      </BioText>
    </IntroText>
  </IntroContainer>
);

export default Intro;
