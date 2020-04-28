import { Link } from "gatsby";
import React from "react";
import tw from "tailwind.macro";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SiteHeaderContainer = styled.header`
  ${tw`m-8 pb-4 border-b-2`}
`;

const SiteTitle = styled.h1`
  ${tw`text-4xl text-gray-800 font-bold`}
`;

const SiteNavLink = styled(Link)`
  ${tw`text-xl md:text-2xl text-blue-600 hover:text-blue-500 border-b-2 border-transparent p-2 hover:border-blue-400`}
`;

const NavContainer = styled.nav`
  ${tw`my-2`}
`;

const NavList = styled.ul`
  ${tw`flex mt-4 md:mt-0`}
`;

const NavListItem = styled.li`
  ${tw`md:mr-2`}
`;

const NavListIconLink = styled.a`
  ${tw`text-xl md:text-2xl text-blue-700 hover:text-blue-500 border-b-2 border-transparent p-2 hover:border-blue-400`}
`;

const Header = ({ siteAuthor, twitterLink, githubLink, linkedinLink }) => (
  <SiteHeaderContainer>
    <Link to="/">
      <SiteTitle>{siteAuthor}</SiteTitle>
    </Link>
    <NavContainer>
      <NavList>
        <NavListItem>
          <SiteNavLink to="/about">About</SiteNavLink>
        </NavListItem>
        <NavListItem>
          <SiteNavLink to="/projects">Projects</SiteNavLink>
        </NavListItem>
        <NavListItem>
          <SiteNavLink to="/uses">Uses</SiteNavLink>
        </NavListItem>
        <NavListItem>
          <NavListIconLink href={twitterLink} aria-label="Twitter Profile">
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </NavListIconLink>
        </NavListItem>
        <NavListItem>
          <NavListIconLink href={githubLink} aria-label="Github Profile">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </NavListIconLink>
        </NavListItem>
        <NavListItem>
          <NavListIconLink href={linkedinLink} aria-label="LinkedIn Profile">
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </NavListIconLink>
        </NavListItem>
      </NavList>
    </NavContainer>
  </SiteHeaderContainer>
);

export default Header;
