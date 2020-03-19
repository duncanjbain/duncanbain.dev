import { graphql, Link } from 'gatsby';
import React from 'react';
import './index.css';
import Layout from '../components/Layout';

const IndexTemplate = ({ data }) => (
  <>
    <Layout>
      <section className="px-8 py-4 md:py-8">
        {data.allMdx.nodes.map(({
          id, frontmatter, fields,
        }) => (
          <article key={id} className="mb-24">
            <Link to={fields.slug}>
              <h1 className="mb-2">
                <span className="font-title text-4xl text-gray-800 leading-snug">
                  {frontmatter.title}
                  {' '}
                </span>
                <p>{frontmatter.date}</p>
              </h1>
            </Link>
          </article>
        ))}
      </section>
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
          date
        }
        fields {
          slug
        }
      }
    }
  }
`;

export default IndexTemplate;
