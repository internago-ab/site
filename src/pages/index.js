import * as React from "react"
import { useEffect, useState } from "react"

import "../components/countries/country-landing.css"
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
            Your one-stop payroll solution. Be more efficient and save valuable
            time by managing your international payroll through Internago.
          </p>
          <div className="cta-btn">
            <a href="/contact#form">Contact us</a>
          </div>
        </div>
      </div>
      <section className="section hide-mobile">
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
        <section className=" section" data-aos="fade-up">
          <div className="imagetext medium rowreverse">
            <div className="info-imagetext">
              <h2 className="heading">Your markets are our markets</h2>
              <p className="paragraph">
                Internago provides payroll and related services covering most
                major European markets - including France, Germany, Italy,
                Netherlands, Spain, Sweden, United Kingdom. <br></br>
                <br></br>Contact us to find out how we can support you.
              </p>
              <div className="cta-btn">
                <a href="/contact#form">Contact us</a>
              </div>
            </div>
            <Svg />
          </div>
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
              text: "Software that accommodates your international operations.",
            },
            {
              icon: wifi,
              alt: "Wifi icon",
              header: "Local experts",
              text:
                "Our team includes local professionals in all the countries where we operate.",
            },
            {
              icon: calendar,
              alt: "Calendar icon",
              header: "Quick onboarding",
              text: "Your employees can be onboarded quickly and efficiently.",
            },
            {
              icon: settings,
              alt: "Gearwheel icon",
              header: "Multiple markets",
              text:
                "Your trusted partner, with a single interface, across various international markets.",
            },
            {
              icon: cloud,
              alt: "Cloud icon",
              header: "GDPR compliant",
              text:
                "Data and documents are securely stored and can be shared in a ‎way that is GDPR compliant.",
            },
            {
              icon: report,
              alt: "Document icon",
              header: "Time saving",
              text:
                "Our knowledge, expertise and automated processes combine to improve your payroll quality and efficiency.",
            },
          ]}
        />
      </GreyAnimation>
      <div className="bg-light-blue margin-top-none">
        <ImageText
          reverse="rowreverse"
          size="medium"
          title="All Salary data perfectly prepared"
          text="Replace excel sheets and checklists with our payroll portal. All payroll data is managed by Internago. We work in partnership with you. You oversee, check, and approve."
          image={landingPagePayroll}
          alt="Internagos dashborard on a computerscreen"
          button="Read more"
          link="/services"
        />
      </div>
      <ImageText
        size="medium"
        title="Internago payroll portal - one software for all your payroll needs"
        text="Store, handle and transfer documents, payslips and more in a secure ‎and GDPR compliant way. Share information with colleagues and service providers. Control access rights and passwords in a single online interface. "
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
