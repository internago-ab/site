import React from 'react';
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

function Services({ data, location }) {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="Services" />

        </Layout>
    );
}

export default Services;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`