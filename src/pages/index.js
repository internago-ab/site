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
import Svg from "../components/svg"
//Images
import landingPageFirst from "../images/illustrations/landingpage-first.png"
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
        title="International payroll - local experts"
        text="Be efficient and save valuable time by managing your international payroll with Internago. A one-stop solution for managing your international employees"
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

      <section
        className="section imagetext medium rowreverse"
        data-aos="fade-up"
      >
        <div className="info-imagetext">
          <h2 className="heading">Your markets - our objective</h2>
          <p className="paragraph">
            Internago is currently delivering payroll services and related
            services on main European markets, both directly or together with
            well selected local partners. <br></br>
            <br></br>Contact us to know more on how we can support you in
            France, Italy, Sweden, Germany, Spain, UK, Holland or other
            countries of interest. Contact our sales team to know more about our
            services.
          </p>
          <div className="cta-btn">
            <a href="mailto:info@internago.com">Contact us</a>
          </div>
        </div>
        <Svg />
      </section>

      <ImageTabs />

      <GreyAnimation >
        <h2>Why Internago?</h2>
        <Icongrid
          content={[
            {
              icon: diagram,
              header: "Online payroll",
              text:
                "International payroll software for all your international operations",
            },
            {
              icon: wifi,
              header: "Local experts",
              text:
                "Internago is composed of a team of professionals in all countries where we operate.",
            },
            {
              icon: calendar,
              header: "Quick onboarding",
              text: "We onboard your employees fast and efficiently on new markets",
            },
            {
              icon: settings,
              header: "Multiple international markets",
              text: "One trusted partner on all your international markets",
            },
            {
              icon: cloud,
              header: "GDPR Compliant",
              text:
                "Your data is safe with us. Share and exchange data and documents in a secure and GDPR certified manner.",
            },
            {
              icon: report,
              header: "Time saving",
              text: "We take care of all time-consuming payroll tasks for you. ",
            },
          ]}
        />
      </GreyAnimation>

      <ImageText
        reverse="rowreverse"
        size="medium"
        title="All salary data perfectly prepared"
        text="Avoid working with excel sheets and handwritten checklists before every payroll run. All salary relevant data is automatically managed by Internago. Your job is just to check and approve."
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
