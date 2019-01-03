import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Blog from "./Blog";

const Layout = ({ children }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    minHeight: '100vh'
  }}>
    <Helmet
      title="Fathurahman Ma'ruf Hudoarma"
      meta={[
        {
          name: "description",
          content:
            "Fathurahman Maruf's personal website, portfolio, blog, life, and just code."
        },
        {
          name: "keywords",
          content: "resume, blog, porfolio, life, and just code."
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        }
      ]}
      script={[
        { src: "https://use.fontawesome.com/releases/v5.0.13/js/all.js" }
      ]}
      link={[
        {
          rel: "stylesheet",
          href: "https://use.fontawesome.com/releases/v5.0.13/css/all.css"
        },
        {
          rel: "stylesheet",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css"
        }
      ]}
    />
    <Header />
    <div style={{ flex: 1 }}><Blog /></div>
    <Footer />
  </div>
);

Layout.propTypes = {
    children: PropTypes.func
};

export default Layout;
