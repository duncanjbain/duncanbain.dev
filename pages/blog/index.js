import Link from 'next/link';
import { getAllFrontMatters } from '../../lib/getMdx';
import Anchor from '../../components/Anchor';
import ArticleDate from '../../components/ArticleDate';

export const BlogIndex = ({ posts }) => {
  return (
    <div>
          <h2 className="text-xl md:text-3xl font-bold text-blue-600 border-b-2 border-blue-400 mb-4">All Posts</h2>
      <ul>
          {!posts.length && 'No posts found!'}
          {posts.map((frontMatter) => {
            const { slug, published, excerpt, title } = frontMatter;
            return (
              <li key={slug} className="mb-4 lg:mb-8">
                <article>
                  <div className="mb-2">
                    <Link href={`/blog/${slug}`} passHref>
                      <Anchor>
                        <h3 className="leading-tight mb-2 mt-0 font-black text-gray-800 text-xl lg:text-3xl hover:underline cursor-pointer">
                          {title}
                        </h3>
                      </Anchor>
                    </Link>

                    <ArticleDate published={published} />
                  </div>
                  <div>{excerpt}</div>
                </article>
              </li>
            );
          })}
        </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = await getAllFrontMatters();
  return {
    props: {
      posts,
    },
  };
};

export default BlogIndex;
