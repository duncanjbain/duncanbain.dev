import { Link } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";
import React from "react";

const FooterContainer = styled.footer`
  ${tw`m-4 mx-8 text-center border-t-2 pt-4`}
`;

const FooterText = styled.p`
  ${tw`text-base text-gray-700 font-light`}
`;

const FooterLink = styled(Link)`
  ${tw`text-blue-700 hover:text-blue-500`}
`;

const FooterExternalLink = styled.a`
  ${tw`text-blue-700 hover:text-blue-500`}
`;

const Footer = () => (
  <FooterContainer>
    <FooterText>
      Made with{" "}
      <span role="img" aria-label="Sparkly heart emoji">
        💖
      </span>{" "}
      by{" "}
      <FooterLink to="/" className="">
        Duncan Bain
      </FooterLink>{" "}
      with <FooterExternalLink href="https://gatsbyjs.org">Gatsby</FooterExternalLink>
    </FooterText>
  </FooterContainer>
);

export default Footer;
