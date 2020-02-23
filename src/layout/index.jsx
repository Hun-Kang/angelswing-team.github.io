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
          <meta name="description" content={config.siteDescription} />
          <html lang="ko" />
          {/* <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding:400,700&display=swap&subset=korean" rel="stylesheet" /> */}
        </Helmet>
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