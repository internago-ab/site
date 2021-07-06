import React from 'react';
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

function About({ data, location }) {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="About" />

        </Layout>
    );
}

export default About;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`