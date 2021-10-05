import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Blue from "../components/blue"
import Cta from "../components/cta"
import ImageText from "../components/imagetext"

import AboutVision from "../images/illustrations/about-vision.png"
import AboutMarkets from "../images/illustrations/about-markets.png"

function About() {
  return (
    <Layout>
      <Seo title="About" />
      <Blue>
        <h1>Internago - Who are we?</h1>
        <p>
     Internago is strongly driven by technology and innovation and constantly strives to make our customers' lives easier by reducing their administrative burden to a minimum with increased control by digitalization.
        </p>
      </Blue>
      <ImageText
        active="notactive"
        reverse="rowreverse"
        size="medium"
        title="Mindset"
        text="Internago was founded with the objective to reduce administrative work and make your international business simple with increased control by digitalization.
        </br></br>
         This is why we developed the Internago Payroll Portal, we realized that a digital payroll portal to streamline the payroll was needed to make life easier for our customers. This enables our customers to save time and keep control over their payroll on many markets from one digital interface."
        image={AboutVision}
      />
      <ImageText
        active="notactive"
        size="medium"
        title="Your markets – our objective"
        text="Internago is currently delivering payroll services and related services on main European markets, both directly or together with well selected local partners.
        </br></br>
        Contact us to know more on how we can support you in France, Italy, Sweden, Germany, Spain, UK, Holland or other countries of interest. Contact our sales team to know more about our services."
        image={AboutMarkets}
      />
      <Cta content="next" />
    </Layout>
  )
}

export default About
