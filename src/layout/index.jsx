import React from "react";
import Helmet from "react-helmet";
import { Link } from 'gatsby';

import config from "../../data/SiteConfig";
import "./index.css";

class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout-container">
        <Helmet>
        {/* <!-- Google Tag Manager --> */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-55KCJDH');`}
        </script>
        {/* <!-- End Google Tag Manager --> */}
          <meta name="description" content={config.siteDescription} />
          <html lang="ko" />
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-X4F97P3FHP" />
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-X4F97P3FHP');
            `}
          </script>
          {/* <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding:400,700&display=swap&subset=korean" rel="stylesheet" /> */}
        </Helmet>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-55KCJDH"
            height="0" 
            width="0" 
            style={{ display:'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <div>
          <Link to='/'>
            <header>
              엔젤스윙 개발 블로그
            </header>
          </Link>
          <main>
            {children}
          </main>
        </div>
        <footer id='footer'>
          <a href='https://www.rocketpunch.com/companies/angelswing/jobs'>
            채용 공고
          </a>
          <span>&nbsp;|&nbsp;</span>
          <a href='https://www.angelswing.io/about-us-team-culture-kr'>
            팀 소개
          </a>
        </footer>
      </div>
    );
  }
}

export default MainLayout