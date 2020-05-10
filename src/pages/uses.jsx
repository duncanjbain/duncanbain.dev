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
  ArticleOl,
} from "../styles/PostStyles";

export default () => (
  <Layout title="About">
    <Article>
      <ArticleHeader>Uses</ArticleHeader>
      <ArticlePara>
        Inspirsed by Wes Bos and his{" "}
        <ArticleA href="https://uses.tech">users.tech</ArticleA> website, I
        thought I&apos;d jump on the bandwagon and share my development stack!
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
            </ArticleA>{" "}
            by <ArticleA href="https://sarah.dev/">Sarah Drasner</ArticleA>
          </ArticleLi>
          <ArticleLi>
            Font:{" "}
            <ArticleA href="https://github.com/microsoft/cascadia-code">
              Microsoft Cascadia Code
            </ArticleA>
          </ArticleLi>
          <ArticleLi>Extensions</ArticleLi>
          <ArticleUl>
            <ArticleLi>
              <ArticleA href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">
                ESLint
              </ArticleA>{" "}
              - Integrates ESLint with VS Code.
            </ArticleLi>
            <ArticleLi>
              <ArticleA href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens">
                GitLens
              </ArticleA>{" "}
              - Gives a great indepth look into what lines of code were changed,
              who changed it and why.
            </ArticleLi>
            <ArticleLi>MDX</ArticleLi>
            <ArticleLi>Markdown Preview Enhanced</ArticleLi>
            <ArticleLi>Rainbow Brackets</ArticleLi>
            <ArticleLi>Rewrap</ArticleLi>
            <ArticleLi>Code Time</ArticleLi>
          </ArticleUl>
        </ArticleUl>
        <ArticleLi>
          <ArticleA href="https://github.com/microsoft/terminal">
            Windows Terminal
          </ArticleA>{" "}
          - An excellent new terminal from Microsoft. Easily allows you to
          switch between PowerShell and WSL installations and supports multiple
          tabs amongst other things. Definitely worth checking out!
        </ArticleLi>
        <ArticleLi>
          <ArticleA href="https://wiki.gnome.org/Apps/Terminal">
            Gnome Terminal
          </ArticleA>
        </ArticleLi>
      </ArticleUl>
      <ArticleH2>
        <span role="img" aria-label="Laptop emoji">
          💻
        </span>{" "}
        Hardware
      </ArticleH2>
      <ArticleOl>
        <ArticleLi>Surface Pro 4 - Core m3-6Y30 </ArticleLi>
      </ArticleOl>
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
