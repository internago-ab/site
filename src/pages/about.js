import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Blue from "../components/blue"
import Cta from "../components/cta"
import ImageText from "../components/imagetext"

import AboutVision from "../images/illustrations/about-vision.png"

function About() {
  return (
    <Layout>
      <Seo title="About" />
      <Blue>
        <h1>Internago - Who are we?</h1>
        <p>
          Strongly driven by technology and innovation, Internago constantly
          strives to make our customers' lives easier by reducing their
          administrative burden to a minimum with the increased control that
          digitalisation offers
        </p>
      </Blue>
      <ImageText
        active="notactive"
        reverse="rowreverse"
        size="medium"
        title="About us"
        text=" Internago is a service and SaaS company founded in Sweden 2017. The co-founders have a profound knowledge of working with international clients on international markets. This experience, along with a passion for technology and sustainability in business, were the main pillars when starting Internago.
        </br></br>
        To simplify international payroll Internago created their own web platform. This platform fully supports the various payroll processes in multiple countries. This allows clients to save valuable time and provides full transparency when administering and managing personnel on a variety of markets.
        </br></br>
        With Internago your international business gets a trusted partner with a single point of entry. We’re on a journey to modernise cross-border payroll. Join us on this journey today!
        "
        image={AboutVision}
        alt="Three men in suits where one climbes a ladder holding binoculars and the other two are stabilising it"
      />
      <Cta content="next" />
    </Layout>
  )
}

export default About
