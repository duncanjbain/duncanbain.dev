import React from "react";
import tw from "tailwind.macro";
import styled from "styled-components";

const IntroContainer = styled.section`
  ${tw`px-8 md:py-2`}
`;

const IntroText = styled.p`
  ${tw`text-4xl`}
`;

const Intro = () => (
  <IntroContainer>
    <IntroText>
      Hello!{" "}
      <span role="img" aria-label="Waving hand emoji icon">
        👋
      </span>{" "}
      I&apos;m Duncan
    </IntroText>
  </IntroContainer>
);

export default Intro;
