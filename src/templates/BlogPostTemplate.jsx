import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import {
  ArticleContainer,
  ArticleHeader,
  ArticleDate,
  ArticleH2,
  ArticleH3,
  ArticleH4,
  ArticleH5,
  ArticleH6,
  ArticlePara,
  ArticleBlockQuote,
  ArticleA,
  ArticleEm,
  ArticleLi,
  ArticleOl,
  ArticleStrong,
  ArticleUl,
} from "../styles/PostStyles";

export default ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <ArticleContainer>
        <ArticleHeader>{frontmatter.title}</ArticleHeader>
        <ArticleDate>{frontmatter.date}</ArticleDate>
        <div className="markdown">
          <MDXProvider
            components={{
              h1: ArticleH2, // H1 reserved for article semantic title
              h2: ArticleH2,
              h3: ArticleH3,
              h4: ArticleH4,
              h5: ArticleH5,
              h6: ArticleH6,
              p: ArticlePara,
              blockquote: ArticleBlockQuote,
              ul: ArticleUl,
              ol: ArticleOl,
              li: ArticleLi,
              strong: ArticleStrong,
              em: ArticleEm,
              a: ArticleA,
            }}
          >
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
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
      </ArticleContainer>
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
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`;
