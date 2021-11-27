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
          Internago is strongly driven by technology and innovation and
          constantly strives to make our customers' lives easier by reducing
          their administrative burden to a minimum with increased control by
          digitalization.
        </p>
      </Blue>
      <ImageText
        active="notactive"
        reverse="rowreverse"
        size="medium"
        title="Mindset"
        text=" Internago is a service and Saas company founded in Sweden 2017. The co-founders have a profound knowledge of working with international clients on international markets. This experience and the founders' passion for technology and sustainability in business were the main pillars when starting Internago. 
        </br></br>
        With Internago you get a trusted partner providing a one point of entry for your international business. To simplify international payroll Internago created their own web platform. A platform providing full support for the payroll process in multiple countries. By using the platform clients save valuable time by getting full transparency when administrating and managing personnel on multiple markets. We’re on a journey to modernise cross border payroll. Join us on this journey today!"
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
