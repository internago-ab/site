import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Grey from "../components/grey"
import Cta from "../components/cta"

function About() {
  return (
    <Layout>
      <Seo title="About" />
      <Grey>
        <h1>Internago - Who are we?</h1>
        <p>
          We are strongly driven by technology and innovation and we constantly
          strive to make our customers life easier by reducing their
          administrative burden to a minimum.
        </p>
      </Grey>
      <Cta content="next" />
    </Layout>
  )
}

export default About
