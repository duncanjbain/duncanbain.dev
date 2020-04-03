import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import "./BlogPostTemplate.css";

const Article = styled.section`
  ${tw`px-8 break-words md:mt-12 mb-16`}
`;

const ArticleHeader = styled.h2`
  ${`text-3xl text-gray-800 font-medium leading-snug mb-2`}
`;

const ArticleDescription = styled.p`
  ${`text-lg text-gray-800 font-light mb-2`}
`;

const ArticleDate = styled.p`
  ${`text-xs text-gray-500 font-thin`}
`;

export default ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <Article>
        <ArticleHeader>{frontmatter.title}</ArticleHeader>
        <ArticleDescription>{frontmatter.description}</ArticleDescription>
        <ArticleDate>{frontmatter.date}</ArticleDate>
        <div className="markdown">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
        {previous === false ? null : (
          <>
            {previous && (
              <Link to={previous.fields.slug}>
                <p>{previous.frontmatter.title}</p>
              </Link>
            )}
          </>
        )}
        {next === false ? null : (
          <>
            {next && (
              <Link to={next.fields.slug}>
                <p>{next.frontmatter.title}</p>
              </Link>
            )}
          </>
        )}
      </Article>
    </Layout>
  );
};

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        description
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`;
