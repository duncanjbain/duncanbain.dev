import { graphql, Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const IndexTemplate = ({ data }) => (
  <>
    <Layout>
      <SEO title="duncanbain.dev" />
      <section className="px-8 py-4 md:py-8">
        {data.allMdx.nodes.map(({ id, frontmatter, fields, excerpt }) => (
          <article key={id} className="mb-24">
            <Link to={fields.slug}>
              <h1 className="mb-2">
                <span className="text-4xl text-gray-800 leading-snug">
                  {frontmatter.title}
                </span>
                <p className="text-xl text-gray-500 font-thin leading-snug">
                  {frontmatter.date}
                </p>
                <p className="text-2xl font-thin leading-snug">{excerpt}</p>
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
