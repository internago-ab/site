import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Cta from "../components/cta"
import Grey from "../components/grey"

function Services() {
  return (
    <Layout>
      <Seo title="Services" />
      <Grey>
        <h1>Internago Services</h1>
        <p>
          Whether you just started your company, or if you are interested to
          streamline your existing operations – Internago is your trusted
          partner
          <br />
          <br />
          We provide hands-on support backed up by qualitative and quantitative
          analysis of relevant industry information that can support you in
          business critical decisions. We work close with our clients in a
          transparent and efficient manner where your success as our objective.
        </p>
      </Grey>
      <Cta content="next" />
    </Layout>
  )
}

export default Services
