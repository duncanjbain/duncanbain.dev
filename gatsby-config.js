const path = require("path");

module.exports = {
  siteMetadata: {
    title: "duncanbain.dev",
    description: "duncanbain.dev - Personal blog and portfolio",
    author: "Duncan Bain",
    keywords: "developer,personal blog, blog, portfolio",
    siteUrl: "https://duncanbain.dev", // no trailing slash!
    siteImage: "/images/socialcard.jpg", // path to site image
    twitterUrl: "https://twitter.com/duncanbain",
    twitterUsername: "duncanbain",
    githubUrl: "https://github.com/duncanjbain",
    linkedinUrl: "https://www.linkedin.com/in/duncanjbain/",
  },
  plugins: [
    "gatsby-plugin-eslint",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: "https://duncanbain.dev",
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("autoprefixer")({
            features: {
              "nesting-rules": true,
            },
          }),
        ],
      },
    },
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
        whitelistPatternsChildren: [/^token/, /^pre/, /^code/],
        content: [
          path.join(process.cwd(), "src/**/!(*.d).{ts,js,jsx,tsx,md,mdx}"),
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projectImages",
        path: `${__dirname}/src/images/projects/`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: {
                sh: "bash",
                js: "javascript",
              },
              showLineNumbers: true,
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              withWebp: true,
              ignoreFileExtensions: [],
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`, // load pages from this package (theme)
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-remove-serviceworker",
    "gatsby-plugin-netlify",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-styled-components",
  ],
};
