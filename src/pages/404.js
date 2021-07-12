import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {

  return (
    <Layout>
      <Seo title="404: Not Found" />
      <section className="error-page">
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link to="/" className="cta-btn">Go to homepage</Link>
      </section>
    </Layout>
  )
}

export default NotFoundPage