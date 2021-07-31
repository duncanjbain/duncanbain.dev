import * as React from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { getMdxBySlug, getAllFrontMatters } from '../../lib/getMdx';
import MdxComponents from '../../components/MdxComponents';
import { BlogSeo } from '../../components/SEO';
import ArticleContainer from '../../components/ArticleContainer';
import ArticleDate from '../../components/ArticleDate';

export const BlogPost = ({ post: { code, frontmatter } }) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <>
    <BlogSeo title={frontmatter.title} summary={frontmatter.excerpt} />
    <div className="mb-2 lg:mb-4 border-b-2 border-blue-400">
    <h2 className="text-4xl text-gray-800 font-black leading-snug mb-2">{frontmatter.title}</h2>
      <ArticleDate published={frontmatter.published} />
    </div>

      <ArticleContainer>
        <Component components={MdxComponents} />
      </ArticleContainer>
    </>
  );
};

export const getStaticPaths = async () => {
  const posts = await getAllFrontMatters();
  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { code, frontmatter } = await getMdxBySlug(context.params.slug);
  return {
    props: {
      post: {
        code,
        frontmatter,
      },
    },
  };
};

export default BlogPost;
