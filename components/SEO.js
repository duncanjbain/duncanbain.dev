import Head from 'next/head';
import { useRouter } from 'next/router';

export const PageSeo = ({ title, description }) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta
        property="og:url"
        content={`https://duncanbain.dev${router.asPath}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="duncanbain.dev" />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta
        property="og:image"
        content="https://duncanbain.dev/socialcardjpg"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@duncanjbain" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://duncanbain.dev/socialcardjpg"
      />
    </Head>
  );
};

export const BlogSeo = ({ title, summary }) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta
        property="og:url"
        content={`https://duncanbain.dev${router.asPath}`}
      />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="duncanbain.dev" />
      <meta property="og:description" content={summary} />
      <meta property="og:title" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@duncanjbain" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={summary} />
      <link rel="canonical" href={`https://duncanbain.dev${router.asPath}`} />
    </Head>
  );
};

export default PageSeo;
