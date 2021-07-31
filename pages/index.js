import Link from 'next/link';
import Intro from '../components/Intro';
import Anchor from '../components/Anchor';
import { getAllFrontMatters } from '../lib/getMdx';
import ArticleDate from '../components/ArticleDate';
import { PageSeo } from '../components/SEO'

export default function Home({ posts }) {
  const POSTS_DISPLAYED = 5;
  return (
    <>
    <PageSeo title="duncanbain.dev" description="duncanbain.dev - A Personal Blog and Portfolio" />
    <div>
      <Intro />
      <div>
        <div>
          <h2 className="text-xl md:text-3xl font-bold text-blue-500 border-b-2 border-blue-400 mb-4">
            Latest Posts
            <Link href="/blog" passHref>
              <Anchor className="text-lg md:text-2xl text-gray-700 hover:text-blue-400 float-right font-normal transition hover ease-in-out 0.3s">
                View All Posts
              </Anchor>
            </Link>
          </h2>
        </div>
        <ul>
          {!posts.length && 'No posts found!'}
          {posts.slice(0, POSTS_DISPLAYED).map((frontMatter) => {
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
    </div>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllFrontMatters();
  return {
    props: {
      posts,
    },
  };
};
