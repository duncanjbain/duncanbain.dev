import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const Article = styled.section`
  ${tw`px-8 break-words md:mt-12 mb-16`}
`;

const ArticleHeader = styled.h2`
  ${tw`text-3xl text-gray-800 font-medium leading-snug mb-2`}
`;

const ArticleDescription = styled.p`
  ${tw`text-lg text-gray-800 font-light mb-2`}
`;

const ArticleDate = styled.p`
  ${tw`text-xs text-gray-500 font-thin`}
`;
const ArticleH2 = styled.h2`
  ${tw`text-gray-800 mt-6 mb-2 -ml-1 text-xl font-extrabold tracking-wider`}
`;

const ArticleH3 = styled.h3`
  ${tw`text-gray-800 mt-6 mb-2 -ml-1 text-lg font-bold`}
`;

const ArticleH4 = styled.h4`
  ${tw`text-gray-800 mt-6 mb-2 -ml-1 text-lg font-semibold`}
`;

const ArticleH5 = styled.h5`
  ${tw`text-gray-800 mt-6 mb-2 -ml-1 text-lg font-medium`}
`;

const ArticleH6 = styled.h6`
  ${tw`text-gray-800 mt-6 mb-2 -ml-1 text-base font-semibold`}
`;

const ArticlePara = styled.p`
  ${tw`text-gray-800 leading-relaxed text-lg xl:text-xl mt-2 mb-4 break-words`}
`;

const ArticleBlockQuote = styled.blockquote`
  ${tw`border-solid border-l-4 border-gray-300 pl-4`}
`;

const ArticleUl = styled.ul`
  ${tw`list-disc m-4`}
`;

const ArticleOl = styled.ol`
  ${tw`list-decimal m-4`}
`;

const ArticleLi = styled.li`
  ${tw`text-gray-800 font-light my-1`}
`;

const ArticleStrong = styled.strong`
  ${tw`font-semibold`}
`;

const ArticleEm = styled.em`
  ${tw`italic`}
`;

const ArticleA = styled.a`
  ${tw`text-blue-700 leading-relaxed font-medium mb-8 hover:text-blue-500`}
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
