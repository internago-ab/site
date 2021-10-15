import * as React from "react"
import { useEffect } from "react"
//Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import ImageText from "../components/imagetext"
import GreyAnimation from "../components/grey-animation"
import Icongrid from "../components/icongrid"
import Cta from "../components/cta"
import ImageTabs from "../components/imagetabs"

//Images
import landingPageFirst from "../images/illustrations/landingpage-first.png"
import landingPageMap from "../images/illustrations/landingpage-flatmap.png"
import landingPagePayroll from "../images/illustrations/landingpage-payrollportal.png"
import landingPageComplex from "../images/illustrations/landingpage-complexsimple.png"
import kitabsawti from "../images/clients/kitab-sawti.png"
import benify from "../images/clients/benify.png"
import dedicare from "../images/clients/dedicare.png"
import rototilt from "../images/clients/rototilt.png"
import enmacc from "../images/clients/enmacc.png"
import sportamore from "../images/clients/sportamore.png"

//Icons
import diagram from "../images/icons/diagram.png"
import wifi from "../images/icons/wifi.png"
import calendar from "../images/icons/calendar.png"
import settings from "../images/icons/settings.png"
import cloud from "../images/icons/cloud.png"
import report from "../images/icons/report.png"

//animation
import Aos from "aos"
import "aos/dist/aos.css"

const Index = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <Layout>
      <Seo title="Home" />
      <ImageText
        margin="large"
        size="large"
        title="HR management made easy"
        text="We are strongly driven by technology and innovation and we constantly strive to make our customers life easier by reducing their administrative burden to a minimum with increased control by digitalization."
        image={landingPageFirst}
        imagesize="imglarge"
        button="Book a demo"
        link="mailto:info@internago.com"
      />
      <div className="clients" data-aos="fade-up">
        <img src={kitabsawti} alt="Kitab Sawti logo" />
        <img src={benify} alt="Benify logo" />
        <img src={dedicare} alt="Dedicare logo" />
        <img src={rototilt} alt="Rototilt logo" />
        <img src={enmacc} alt="Enmacc logo" />
        <img src={sportamore} alt="Sportamore logo" />
      </div>

      <ImageText
        reverse="rowreverse"
        size="medium"
        title="Your markets - our objective"
        text="Internago is currently delivering payroll services and related services on main European markets, both directly or together with well selected local partners.</br></br>Contact us to know more on how we can support you in France, Italy, Sweden, Germany, Spain, UK, Holland or other countries of interest. Contact our sales team to know more about our services."
        image={landingPageMap}
        button="Contact us"
        link="mailto:info@internago.com"
      />

      <ImageTabs />

      <GreyAnimation>
        <h2>Why Internago?</h2>
        <Icongrid
          content={[
            {
              icon: diagram,
              header: "Easy overview",
              text:
                "Online payroll - international payroll software for all your international operations",
            },
            {
              icon: wifi,
              header: "Easy access",
              text:
                "Access and share all you information with one online interface",
            },
            {
              icon: calendar,
              header: "Quick onboarding",
              text: "Access montly reports from your subsidiaries each month",
            },
            {
              icon: settings,
              header: "GDPR compliant",
              text: "Transfer data in a safe, secure and GDPR certified manner",
            },
            {
              icon: cloud,
              header: "Cloud-based",
              text:
                "Set up, store and update employee contracts through our cloudbased solution",
            },
            {
              icon: report,
              header: "Time saving",
              text: "We take care of all your administrative needs",
            },
          ]}
        />
      </GreyAnimation>

      <ImageText
        reverse="rowreverse"
        size="medium"
        title="We make the complex simple"
        text="A complete range of services to support your international business.
        We provide hands-on support backed up by qualitative and quantitative analysis of relevant industry information that can support you in business critical decisions."
        image={landingPagePayroll}
        button="Read more"
        link="/services"
      />

      <ImageText
        size="medium"
        title="Internago Payroll portal – one software for all your payroll services"
        text="Transfer, store and handle documents, payslips and more in a secure and GDPR compliant way with the Internago Payroll Portal. Share relevant information with your colleagues or clients and control access rights and passwords in a single online interface."
        image={landingPageComplex}
        button="Read more"
        link="/payroll"
      />

      <Cta content="next" />
    </Layout>
  )
}

export default Index
