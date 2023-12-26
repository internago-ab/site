import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {

  return (
    <Layout>
      <Seo
        title="404: Not Found"
        description="SYou just hit a route that doesn&#39;t exist..."
        lang="en"
        meta={[
          { name: "404", content: "error" },
        ]}
      /> 
      <section className="error-page">
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist...</p>
        <Link to="/" className="cta-btn">Go to homepage</Link>
      </section>
    </Layout>
  )
}

export default NotFoundPage