import * as React from "react"
import { useEffect } from "react"
//Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import ImageText from "../components/imagetext"
import Grey from "../components/grey"
import Icongrid from "../components/icongrid"
import Cta from "../components/cta"

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
        title="International payroll - Local Experts"
        text="<p>We are strongly driven by technology and innovation and we constantly strive to make our customers life easier by reducing their administrative burden to a minimum with increased control by digitalization.</p>"
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
        text="<p>Internago is currently delivering payroll services and related services on main European markets, both directly or together with well selected local partners.</p></br><p>Contact us to know more on how we can support you in France, Italy, Sweden, Germany, Spain, UK, Holland or other countries of interest. Contact our sales team to know more about our services.</p>"
        image={landingPageMap}
        button="Contact us"
        link="mailto:info@internago.com"
      />

      <Grey>
        <h2>Why Internago?</h2>
        <Icongrid
          content={[
            {
              icon: diagram,
              text:
                "Instant overview of payslips, salaries and monthly costs in easy-to-access diagrams",
            },
            {
              icon: wifi,
              text:
                "Access and share all you information with one online interface",
            },
            {
              icon: calendar,
              text: "Access montly reports from your subsidiaries each month",
            },
            {
              icon: settings,
              text: "Transfer data in a safe, secure and GDPR certified manner",
            },
            {
              icon: cloud,
              text:
                "Set up, store and update employee contracts through our cloudbased solution",
            },
            {
              icon: report,
              text: "We take care of all your administrative needs",
            },
          ]}
        />
      </Grey>

      <ImageText
        reverse="rowreverse"
        size="medium"
        title="We make the complex simple"
        text="<p>A complete range of services to support your international business.
        We provide hands-on support backed up by qualitative and quantitative analysis of relevant industry information that can support you in business critical decisions.</p>"
        image={landingPagePayroll}
        button="Read more"
        link="/services"
      />

      <ImageText
        size="medium"
        title="Internago Payroll portal – one software for all your payroll services"
        text="<p>Transfer, store and handle documents, payslips and more in a secure and GDPR compliant way with the Internago Payroll Portal. Share relevant information with your colleagues or clients and control access rights and passwords in a single online interface.</p>"
        image={landingPageComplex}
        button="Read more"
        link="/payroll"
      />

      <Cta content="next" />
    </Layout>
  )
}

export default Index
