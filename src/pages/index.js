import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ImageText from "../components/imagetext"
import Grey from "../components/grey"
import Cta from "../components/cta"

//images
import LandingPageFirst from "../images/illustrations/landingpage-first.png"
import LandingPageMap from "../images/illustrations/landingpage-flatmap.png"
import LandingPagePayroll from "../images/illustrations/landingpage-payrollportal.png"
import LandingPageComplex from "../images/illustrations/landingpage-complexsimple.png"

const Index = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <ImageText
        margin="large"
        size="large"
        title="International payroll - Local Experts"
        text="We are strongly driven by technology and innovation and we constantly strive to make our customers life easier by reducing their administrative burden to a minimum with increased control by digitalization."
        image={LandingPageFirst}
        imagesize="imglarge"
        button="Book a demo"
        link=""
      />

      <ImageText
        reverse="rowreverse"
        size="medium"
        title="Your markets - our objective"
        text="Internago is currently delivering payroll services and related services on main European markets, both directly or together with well selected local partners.
        \n
        Contact us to know more on how we can support you in France, Italy, Sweden, Germany, Spain, UK, Holland or other countries of interest. Contact our sales team to know more about our services."
        image={LandingPageMap}
        button="Contact us"
        link=""
      />

      <ImageText
        reverse="rowreverse"
        size="medium"
        title="We make the complex simple"
        text="A complete range of services to support your international business.
        We provide hands-on support backed up by qualitative and quantitative analysis of relevant industry information that can support you in business critical decisions."
        image={LandingPagePayroll}
        button="Read more"
        link=""
      />

      <ImageText
        size="medium"
        title="Internago Payroll portal – one software for all your payroll services"
        text="Transfer, store and handle documents, payslips and more in a secure and GDPR compliant way with the Internago Payroll Portal. Share relevant information with your colleagues or clients and control access rights and passwords in a single online interface."
        image={LandingPageComplex}
        button="Read more"
        link=""
      />

      <Grey>
        <h2>Why Internago?</h2>
      </Grey>
      <Cta content="next" />
    </Layout>
  )
}

export default Index
