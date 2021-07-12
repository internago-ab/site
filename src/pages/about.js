import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Grey from "../components/grey"
import Cta from "../components/cta"
import ImageText from "../components/imagetext"

import AboutVision from "../images/illustrations/about-vision.png"
import AboutMarkets from "../images/illustrations/about-markets.png"

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
      <ImageText
        active="notactive"
        reverse="rowreverse"
        size="medium"
        title="Mindset"
        text="<p>Internago was founded with the objective to reduce administrative work and make your international business simple with increased control by digitalization.</p>
        </br>
        <p> This is why we developed the Internago Payroll Portal, we realized that a digital payroll portal to streamline the payroll was needed to make life easier for our customers. This enables our customers to save time and keep control over their payroll on many markets from one digital interface.</p>"
        image={AboutVision}
      />
      <ImageText
        active="notactive"
        size="medium"
        title="Your markets – our objective"
        text="<p>Internago is currently delivering payroll services and related services on main European markets, both directly or together with well selected local partners.</p>
        </br>
        <p>Contact us to know more on how we can support you in France, Italy, Sweden, Germany, Spain, UK, Holland or other countries of interest. Contact our sales team to know more about our services.</p>"
        image={AboutMarkets}
      />
      <Cta content="next" />
    </Layout>
  )
}

export default About
