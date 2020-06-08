import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import useSiteMetadata from "../hooks/UseSiteMetadata";
import favicon16 from "../images/favicon-16x16.png";
import favicon32 from "../images/favicon-32x32.png";
import favicon64 from "../images/favicon.ico";
import appleicon from "../images/apple-touch-icon.png";
import android192 from "../images/android-chrome-192x192.png";
import android512 from "../images/android-chrome-512x512.png";
import socialcard from "../images/socialcard.jpg";

function SEO({ description, lang, meta, image: metaImage, title }) {
  const site = useSiteMetadata();

  const metaDescription = description || site.siteMetadata.description;

  const image =
    metaImage && metaImage.src
      ? `${site.siteMetadata.siteUrl}${metaImage.src}`
      : `${site.siteMetadata.siteUrl}${socialcard}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${title} | ${site.siteMetadata.title}`}
      link={[
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: `${favicon16}`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: `${favicon32}`,
        },
        { rel: "shortcut icon", type: "image/png", href: `${favicon64}` },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: `${android192}`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "512x512",
          href: `${android512}`,
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: `${appleicon}`,
        },
      ]}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          name: "keywords",
          content: site.siteMetadata.keywords,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: `website`,
        },
        {
          name: "twitter:creator",
          content: site.siteMetadata.twitterUsername,
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
      ]
        .concat(
          metaImage
            ? [
                {
                  property: "og:image",
                  content: image,
                },
                {
                  property: "og:image:width",
                  content: metaImage.width,
                },
                {
                  property: "og:image:height",
                  content: metaImage.height,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  image: {},
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
};
export default SEO;
