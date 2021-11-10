import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import "../components/thank-you.css"

const ThankYouPage = () => (
  <Layout>
    <Seo title="Thank-you" />
    <section className="section large">
      <div className="main-thank">
        <div className="card">
          <h1 className="heading">Thank you!</h1>
          <p className="paragraph">Your form submission has been received.</p>
          <div className="cta-btn btn-thank">
            <a href="/">← Back to our site</a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ThankYouPage
