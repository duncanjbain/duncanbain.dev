import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import {
  ArticleContainer,
  ArticleHeader,
  ArticlePara,
  ArticleH2,
  ArticleH3,
  ArticleUl,
  ArticleLi,
  ArticleA,
} from "../styles/PostStyles";

export default () => (
  <Layout>
    <SEO
      title="Uses"
      description="My development stack. The hardware, software and tools I use on a daily basis."
    />
    <ArticleContainer>
      <ArticleHeader>Uses</ArticleHeader>
      <ArticlePara>
        Inspirsed by Wes Bos and his{" "}
        <ArticleA href="https://uses.tech">uses.tech</ArticleA> website, I
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
              - Gives a great in depth look into what lines of code were
              changed, who changed it and why.
            </ArticleLi>
            <ArticleLi>
              <ArticleA href="https://marketplace.visualstudio.com/items?itemName=silvenon.mdx">
                MDX
              </ArticleA>{" "}
              - Adds syntax highligtning to .mdx files, very useful!
            </ArticleLi>
            <ArticleLi>
              <ArticleA href="https://marketplace.visualstudio.com/items?itemName=xyc.vscode-mdx-preview">
                Markdown Preview Enhanced
              </ArticleA>{" "}
              - Preview rendered Markdown in real time as you type.
            </ArticleLi>
            <ArticleLi>
              <ArticleA href="https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets">
                Rainbow Brackets
              </ArticleA>{" "}
              - Matches bracket pairs with colours of the rainbow for easy
              recognition.
            </ArticleLi>
            <ArticleLi>
              <ArticleA href="https://marketplace.visualstudio.com/items?itemName=stkb.rewrap">
                Rewrap
              </ArticleA>{" "}
              - Hard wraps text to a specified length.
            </ArticleLi>
            <ArticleLi>
              <ArticleA href="https://marketplace.visualstudio.com/items?itemName=softwaredotcom.swdc-vscode">
                Code Time
              </ArticleA>{" "}
              - An open source extension that provides interesting metrics your
              coding activites such as duration, lines of code written and time
              spent coding on specific repositories.
            </ArticleLi>
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
      <ArticleUl>
        <ArticleLi>Custom Built Desktop PC</ArticleLi>
        <ArticleUl>
          <ArticleLi>
            <ArticleA href="https://ark.intel.com/content/www/us/en/ark/products/65520/intel-core-i5-3570k-processor-6m-cache-up-to-3-80-ghz.html">
              Intel i5 3570K CPU
            </ArticleA>
          </ArticleLi>
          <ArticleLi>16GB DDR3 RAM</ArticleLi>
          <ArticleLi>
            <ArticleA href="https://www.trustedreviews.com/reviews/nvidia-gtx-1060">
              Nvidia 1060 6GB RAM GPU
            </ArticleA>
          </ArticleLi>
          <ArticleLi>
            <ArticleA href="https://www.corsair.com/uk/en/Categories/Products/Cases/Carbide-Series%E2%84%A2-200R-Compact-ATX-Case/p/CC-9011023-WW">
              Corsair Carbide 200R Case
            </ArticleA>
          </ArticleLi>
          <ArticleLi>2x128GB SSD, 2x256GB SSD and 2x500GB HDD</ArticleLi>
          <ArticleLi>2x24&quot; 1920x1200 Monitors</ArticleLi>
        </ArticleUl>
        <ArticleLi>
          <ArticleA href="https://support.microsoft.com/en-gb/help/4023446/surface-pro-4-features">
            Microsoft Surface Pro 4
          </ArticleA>{" "}
          - Core m3-6Y30, 4GB of RAM and a 128 GB SSD.
        </ArticleLi>
      </ArticleUl>
      <ArticleH2>
        <span role="img" aria-label="Backpack emoji">
          🎒
        </span>{" "}
        Gear
      </ArticleH2>
      <ArticleUl>
        <ArticleLi>
          <ArticleA href="https://www.apple.com/uk/iphone-11-pro/">
            iPhone 11 Pro 128 GB
          </ArticleA>
        </ArticleLi>
        <ArticleLi>
          <ArticleA href="https://www.whathifi.com/akg/y50bt/review">
            AKG Y50BT Bluetooth Headphones
          </ArticleA>
        </ArticleLi>
      </ArticleUl>
      <ArticleH2>
        <span role="img" aria-label="Headphone emoji">
          🎧
        </span>{" "}
        Podcasts
      </ArticleH2>
      <ArticleUl>
        <ArticleLi>
          <ArticleA href="https://syntax.fm/">Syntax.fm</ArticleA> - A brilliant
          podcast hosted by{" "}
          <ArticleA href="https://wesbos.com/">Wes Bos</ArticleA> and{" "}
          <ArticleA href="https://www.scotttolinski.com/">
            Scott Tolinski
          </ArticleA>{" "}
          that covers all areas of web development.
        </ArticleLi>
        <ArticleLi>
          <ArticleA href="https://podcasts.apple.com/gb/podcast/danny-in-the-valley/id1233991021">
            Danny in the Valley
          </ArticleA>{" "}
          <ArticleA href="https://twitter.com/dannyfortson?lang=en">
            - Danny Forsten
          </ArticleA>
          , the{" "}
          <ArticleA href="https://www.thetimes.co.uk/">
            Sunday Times&apos;
          </ArticleA>{" "}
          West Coast correspondant, interviews various heavyweights and up and
          coming stars of Silicon Valley.
        </ArticleLi>
        <ArticleLi>
          <ArticleA href="https://darknetdiaries.com/">
            Darknet Diaries
          </ArticleA>{" "}
          - A great podcast that covers hacking (both whitehat and blackhat),
          hacktivsm, cybercrime and lots more.
        </ArticleLi>
      </ArticleUl>
      <ArticleH2>
        <span role="img" aria-label="Rocket emoji">
          🚀
        </span>{" "}
        This Site&apos;s Dev Stack
      </ArticleH2>
      <ArticleUl>
        <ArticleLi>
          <ArticleA href="https://www.gatsbyjs.org/">Gatsby</ArticleA> - A React
          based static site generator powered by GraphQL.
        </ArticleLi>
        <ArticleLi>
          <ArticleA href="https://tailwindcss.com/">Tailwind CSS</ArticleA> - A
          great low level utility-class based CSS framework.
        </ArticleLi>
        <ArticleLi>
          <ArticleA href="https://styled-components.com/">
            Styled-Components
          </ArticleA>{" "}
          - A CSS-in-JS styling framework.
        </ArticleLi>
        <ArticleLi>
          <ArticleA href="https://www.netlify.com/">Netlify</ArticleA> - A
          one-click, continuous deployment, CDN backed hosting solution for
          static websites.
        </ArticleLi>
      </ArticleUl>
    </ArticleContainer>
  </Layout>
);
