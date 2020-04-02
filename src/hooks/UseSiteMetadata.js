import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
            siteImage
            twitterUrl
            twitterUsername
            githubUrl
            linkedinUrl
          }
        }
      }
    `
  );
  return site;
};

export default useSiteMetadata;
