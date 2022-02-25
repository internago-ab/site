import * as React from "react"
import { useEffect, useState } from "react"
//Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import ImageText from "../components/imagetext"
import GreyAnimation from "../components/grey-animation"
import Icongrid from "../components/icongrid"
import Cta from "../components/cta"
import ImageTabs from "../components/imagetabs"
import Svg from "../components/svg"
import Slider from "../components/slider"
//Images
import landingPagePayroll from "../images/illustrations/landingpage-payrollportal.png"
import landingPageComplex from "../images/illustrations/landingpage-complexsimple.png"
import kitabsawti from "../images/clients/kitab-sawti.png"
import benify from "../images/clients/benify.png"
import dedicare from "../images/clients/dedicare.png"
import rototilt from "../images/clients/rototilt.png"
import enmacc from "../images/clients/enmacc.png"
import sportamore from "../images/clients/sportamore.png"
import teamtailor from "../images/clients/teamtailor.png"
import inexone from "../images/clients/inexOne.png"
import globalcitizen from "../images/clients/globalCitizen.png"
import icmstellarcolorlogo from "../images/clients/ICMStellarColorLogo.png"
import logoclimatepartner from "../images/clients/LogoClimatePartner.jpeg"
import international from "../../static/images/city/international.jpeg"
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

  const [show, setShowProp] = useState(5)
  const [windowSize, setWindowSize] = useState()

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (windowSize <= 600) {
      setShowProp(2)
    } else if (windowSize >= 600 && windowSize <= 768) {
      setShowProp(3)
    } else if (windowSize <= 1199) {
      setShowProp(4)
    } else if (windowSize >= 1200) {
      setShowProp(5)
    }
  }, [windowSize])

  return (
    <Layout>
      <Seo title="Home" />
      <div
        className="country-landing-main country-section"
        style={{ backgroundImage: `url(${international})` }}
      >
        <div className="medium country-landing-content">
          <h1 className="heading">
            International payroll - <br></br> local experts{" "}
          </h1>
          <p className="paragraph">
            Be efficient and save valuable time by managing your international
            payroll with Internago. A one-stop solution for managing the payroll
            of your international employees.
          </p>
          <div className="cta-btn">
            <a href="/contact#form">Book a demo</a>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="clients" data-aos="fade-up">
          <img src={kitabsawti} alt="Kitab Sawti logo" />
          <img src={benify} alt="Benify logo" />
          <img src={dedicare} alt="Dedicare logo" />
          <img src={rototilt} alt="Rototilt logo" />
          <img src={enmacc} alt="Enmacc logo" />
          <img src={sportamore} alt="Sportamore logo" />
        </div>
        <div className="clients" data-aos="fade-up">
          <img src={teamtailor} alt="Kitab Sawti logo" />
          <img src={inexone} alt="Benify logo" />
          <img src={globalcitizen} alt="Dedicare logo" />
          <img src={icmstellarcolorlogo} alt="Rototilt logo" />
          <img src={logoclimatepartner} alt="Enmacc logo" />
        </div>
      </section>
      <div className="bg-light-blue margin-top-none-sm">
        <section
          className="section imagetext medium rowreverse"
          data-aos="fade-up"
        >
          <div className="info-imagetext">
            <h2 className="heading">Your markets - our objective</h2>
            <p className="paragraph">
              Internago provides payroll and related services on main European
              markets, either directly or together with carefully selected local
              partners. <br></br>
              <br></br>Contact us to find out how we can support you in France,
              Italy, Sweden, Germany, Spain, United Kingdom, Holland or other
              countries of interest.
            </p>
            <div className="cta-btn">
              <a href="/contact#form">Contact us</a>
            </div>
          </div>
          <Svg />
        </section>
      </div>
      <ImageTabs />
      <GreyAnimation>
        <h2>Why Internago?</h2>
        <Icongrid
          content={[
            {
              icon: diagram,
              alt: "Diagram icon",
              header: "Online payroll",
              text:
                "International payroll software for all your international operations",
            },
            {
              icon: wifi,
              alt: "Wifi icon",
              header: "Local experts",
              text:
                "Internago’s team consists of local professionals in all countries where we operate.",
            },
            {
              icon: calendar,
              alt: "Calendar icon",
              header: "Quick onboarding",
              text:
                "We onboard your employees fast and efficiently on new markets",
            },
            {
              icon: settings,
              alt: "Gearwheel icon",
              header: "Multiple international markets",
              text:
                "A trusted partner with a single interface operating in all your international markets.",
            },
            {
              icon: cloud,
              alt: "Cloud icon",
              header: "GDPR Compliant",
              text:
                "Your data is safe with us. Share and exchange data and documents in a secure and GDPR certified manner.",
            },
            {
              icon: report,
              alt: "Document icon",
              header: "Time saving",
              text:
                "We take care of all time-consuming payroll tasks for you. ",
            },
          ]}
        />
      </GreyAnimation>
      <div className="bg-light-blue margin-top-none">
        <ImageText
          reverse="rowreverse"
          size="medium"
          title="All salary data perfectly prepared"
          text="Avoid working with excel sheets and handwritten checklists before every payroll run. All salary relevant data is automatically managed by Internago. Your job is just to check and approve."
          image={landingPagePayroll}
          alt="Internagos dashborard on a computerscreen"
          button="Read more"
          link="/services"
        />
      </div>
      <ImageText
        size="medium"
        title="Internago Payroll portal – one software for all your payroll services"
        text="Transfer, store and handle documents, payslips and more in a secure and GDPR compliant way with the Internago Payroll Portal. Share relevant information with your colleagues or clients and control access rights and passwords in a single online interface."
        image={landingPageComplex}
        alt="Two colleagues or clients talking and sharing information"
        button="Read more"
        link="/payroll"
      />
      <Cta content="next" />
    </Layout>
  )
}

export default Index
