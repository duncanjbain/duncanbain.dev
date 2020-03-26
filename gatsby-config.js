const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'duncanbain.dev',
    description: 'duncanbain.dev - Personal blog and portfolio',
    author: 'Duncan Bain',
    keywords: 'testword1,testword2',
    siteUrl: 'https://duncanbain.dev', // no trailing slash!
    siteImage: '/demo/image.jpg', // path to site image
    twitterUrl: 'https://twitter.com/duncanbain',
    twitterUsername: 'duncanbain',
    githubUrl: 'https://github.com/duncanjbain',
    linkedinUrl: 'https://www.linkedin.com/in/duncanjbain/',
  },
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('tailwindcss'), require('autoprefixer')],
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
        content: [
          path.join(process.cwd(), 'src/**/!(*.d).{ts,js,jsx,tsx,md,mdx}'),
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};
