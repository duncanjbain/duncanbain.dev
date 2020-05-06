import React from "react";
import tw from "tailwind.macro";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const PostImage = ({ src, alt, caption }) => {
  const data = useStaticQuery(
    graphql`
      query {
        images: allFile(
          filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }
        ) {
          edges {
            node {
              extension
              relativePath
              childImageSharp {
                fluid(maxWidth: 960) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `
  );

  const image = data.images.edges.find(
    (k) => src.indexOf(k.node.relativePath) > -1
  );

  return (
    <div css={tw`my-8 lg:my-12`}>
      <Img
        fluid={image.node.childImageSharp.fluid}
        css={tw`w-full shadow-lg rounded`}
        alt={alt}
      />
      <p css={tw`mt-4 text-base md:text-lg text-gray-600 text-center`}>
        {caption}
      </p>
    </div>
  );
};

export default PostImage;
