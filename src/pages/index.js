import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ImageText from "../components/imagetext"

//images
import LandingPageFirst from "../images/illustrations/landingpage-first.png"

const Index = () => {
  return (
    <Layout>
      <Seo title="Home" />

      <ImageText
        size="large"
        title="International payroll - Local Experts"
        text="We are strongly driven by technology and innovation and we constantly strive to make our customers life easier by reducing their administrative burden to a minimum with increased control by digitalization."
        image={LandingPageFirst}
        button="Book a demo"
      />
    </Layout>
  )
}

export default Index
