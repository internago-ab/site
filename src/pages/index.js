import * as React from "react"

<<<<<<< HEAD
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ImageText from "../components/imagetext"

//images
import LandingPageFirst from "../images/illustrations/landingpage-first.png"

const Index = () => {
  return (
    <Layout>
      <Seo title="Home" />
      {/* <Bio /> */}

      <ImageText
        size="large"
        title="International payroll - Local Experts"
        text="We are strongly driven by technology and innovation and we constantly strive to make our customers life easier by reducing their administrative burden to a minimum with increased control by digitalization."
        image={LandingPageFirst}
        button="Book a demo"
      />
=======
import Layout from "../components/layout"
import Seo from "../components/seo"

const Index = () => {

  return (
    <Layout>
      <Seo title="Home" />
>>>>>>> 3edb48c0c57e8ba8145d6d4161170a2c042ab909
    </Layout>
  )
}

export default Index
<<<<<<< HEAD
=======

>>>>>>> 3edb48c0c57e8ba8145d6d4161170a2c042ab909
