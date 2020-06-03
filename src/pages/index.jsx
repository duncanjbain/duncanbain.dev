import { graphql, Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import tw from "tailwind.macro";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Intro from "../components/Intro";

const ArticleList = styled.section`
  ${tw`px-8 py-4 lg:py-8`}
`;

const Article = styled.article`
  ${tw`mb-12`}
`;

const ArticleTitle = styled.h2`
  ${tw`leading-tight mb-2 mt-0 font-black text-gray-800 text-xl lg:text-3xl hover:underline`}
`;

const ArticleDate = styled.p`
  ${tw`text-base lg:text-xl text-gray-500 mb-2`}
`;

const ArticleExcerpt = styled.p`
  ${tw`text-xl text-gray-700`}
`;

const IndexTemplate = ({ data }) => (
  <>
    <Layout>
      <SEO title="Home" />
      <Intro />
      <ArticleList>
        <div>
          <h2 className="text-xl md:text-3xl font-bold text-blue-600 border-b-2 border-blue-400 mb-4">
            Latest Posts
            <Link
              className="text-lg md:text-2xl text-gray-700 float-right font-normal"
              to="posts"
            >
              Read All Posts
            </Link>
          </h2>
        </div>
        {data.allMdx.nodes.map(({ id, frontmatter, fields, excerpt }) => (
          <Article key={id}>
            <Link to={fields.slug}>
              <ArticleTitle>{frontmatter.title}</ArticleTitle>
            </Link>
            <ArticleDate>{frontmatter.date}</ArticleDate>
            <ArticleExcerpt>{excerpt}</ArticleExcerpt>
          </Article>
        ))}
      </ArticleList>
    </Layout>
  </>
);

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          description
        }
        fields {
          slug
        }
      }
    }
  }
`;

IndexTemplate.propTypes = {
  data: PropTypes.node.isRequired,
};

export default IndexTemplate;
