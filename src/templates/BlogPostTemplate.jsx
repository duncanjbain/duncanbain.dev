import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Layout from '../components/Layout';
import './BlogPostTemplate.css';

export default ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;
  return (
    <Layout>
      <article className="m-8 break-words md:mt-12 mb-16">
        <h2 className="text-3xl text-gray-800 font-medium leading-snug mb-2">{frontmatter.title}</h2>
        <p className="text-lg text-gray-800 font-light mb-2">{frontmatter.description}</p>
        <p className="text-xs text-gray-500 font-thin">{frontmatter.date}</p>
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
      </article>
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