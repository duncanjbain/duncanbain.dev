import React from "react";
import Layout from "../components/Layout";
import {
  Article,
  ArticleHeader,
  ArticlePara,
  ArticleH2,
  ArticleH3,
  ArticleUl,
  ArticleLi,
  ArticleA,
} from "../styles/PostStyles";

export default () => (
  <Layout title="About">
    <Article>
      <ArticleHeader>Uses</ArticleHeader>
      <ArticlePara>
        Inspirsed by Wes Bos and his users.tech website, I thought I&apos;d jump
        on the bandwagon and share my development stack!
      </ArticlePara>
      <ArticleH2>Software</ArticleH2>
      <ArticleH3>
        {" "}
        <span role="img" aria-label="Laptop emoji">
          ⌨️
        </span>{" "}
        Editor + Terminal
      </ArticleH3>
      <ArticleUl>
        <ArticleLi>
          <ArticleA href="https://code.visualstudio.com/">
            Visual Studio Code
          </ArticleA>
        </ArticleLi>
        <ArticleUl>
          <ArticleLi>
            Theme:{" "}
            <ArticleA href="https://marketplace.visualstudio.com/items?itemName=sdras.night-owl">
              Night Owl
            </ArticleA>
          </ArticleLi>
          <ArticleLi>
            Font:{" "}
            <ArticleA href="https://github.com/microsoft/cascadia-code">
              Microsoft Cascadia Code
            </ArticleA>
          </ArticleLi>
          <ArticleLi>Extensions</ArticleLi>
          <ArticleUl>
            <ArticleLi>ESLint</ArticleLi>
            <ArticleLi>GitLens</ArticleLi>
            <ArticleLi>MDX</ArticleLi>
            <ArticleLi>Markdown Preview Enhanced</ArticleLi>
            <ArticleLi>Rainbow Brackets</ArticleLi>
            <ArticleLi>Rewrap</ArticleLi>
            <ArticleLi>Code Time</ArticleLi>
          </ArticleUl>
        </ArticleUl>
        <ArticleLi>Windows Terminal</ArticleLi>
        <ArticleLi>Gnome Terminal</ArticleLi>
      </ArticleUl>
      <ArticleH2>
        <span role="img" aria-label="Laptop emoji">
          💻
        </span>{" "}
        Hardware
      </ArticleH2>
      <ArticleH2>
        <span role="img" aria-label="Backpack emoji">
          🎒
        </span>{" "}
        Gear
      </ArticleH2>
      <ArticleH2>
        <span role="img" aria-label="Headphone emoji">
          🎧
        </span>{" "}
        Podcasts
      </ArticleH2>
      <ArticleH2>
        <span role="img" aria-label="Rocket emoji">
          🚀
        </span>{" "}
        This Site&apos;s Dev Stack
      </ArticleH2>
    </Article>
  </Layout>
);
