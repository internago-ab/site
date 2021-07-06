import React from 'react';
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

function Payroll({ data, location }) {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="Payroll" />

        </Layout>
    );
}

export default Payroll;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`