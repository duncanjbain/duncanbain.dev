import { graphql, Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import tw from "tailwind.macro";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const ArticleList = styled.section`
  ${tw`px-8 py-4 md:py-8`}
`;

const Article = styled.article`
  ${tw`mb-12`}
`;

const ArticleHeader = styled.h1`
  ${tw`mb-2`}
`;

const ArticleTitle = styled.span`
  ${tw`text-2xl text-gray-900 leading-snug`}
`;

const ArticleDate = styled.p`
  ${tw`text-xl text-gray-700 font-thin leading-snug`}
`;

const ArticleExcerpt = styled.p`
  ${tw`text-xl font-thin leading-snug`}
`;

const IndexTemplate = ({ data }) => (
  <>
    <Layout>
      <SEO title="Home" />
      <ArticleList>
        {data.allMdx.nodes.map(({ id, frontmatter, fields, excerpt }) => (
          <Article key={id}>
            <Link to={fields.slug}>
              <ArticleHeader>
                <ArticleTitle>{frontmatter.title}</ArticleTitle>
                <ArticleDate>{frontmatter.date}</ArticleDate>
                <ArticleExcerpt>{excerpt}</ArticleExcerpt>
              </ArticleHeader>
            </Link>
          </Article>
        ))}
      </ArticleList>
    </Layout>
  </>
);

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: ASC }
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
