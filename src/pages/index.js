import * as React from "react"
import { useEffect, useState } from "react"
import Marquee from "react-fast-marquee"

import "../components/countries/country-landing.css"
//Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import ImageText from "../components/imagetext"
import Icongrid from "../components/icongrid"
import Cta from "../components/cta"
import ImageTabs from "../components/imagetabs"
import Svg from "../components/svg"

//Images
import international from "../../static/images/city/station.jpg"
import Desktop from "../images/mockups/desktop.png"
import Phones from "../images/mockups/phones.png"

// clients
import kitabsawti from "../images/clients/kitab-sawti.png"
import benify from "../images/clients/benify.svg"
import dedicare from "../images/clients/dedicare.svg"
import rototilt from "../images/clients/rototilt.svg"
import enmacc from "../images/clients/enmacc.svg"
import sportamore from "../images/clients/sportamore.svg"
import teamtailor from "../images/clients/teamtailor.png"
import inexone from "../images/clients/inexone.svg"
import globalcitizen from "../images/clients/globalCitizen.png"
import icmstellarcolorlogo from "../images/clients/ICMStellarColorLogo.png"
import logoclimatepartner from "../images/clients/LogoClimatePartner.jpeg"

//Icons
import arrow from "../images/icons/arrow-white.svg"

//animation
import Aos from "aos"
import "aos/dist/aos.css"

import "../components/blue.css"
import "../components/cta.css"
import "../components/home_imagetext.css"
import "../components/icongrid.css"
import "../components/imagetext.css"
import "../components/layout.css"


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
      <Seo
        title="International payroll - local experts"
        description="Your one-stop payroll solution. Be more efficient and save valuable
        time by managing your international payroll through Internago."
        lang="en"
        meta={[
          { name: "payroll", content: "secure, payslips" },
        ]}
      /> 
      <div
        className="country-landing-main country-section index"
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
          <div className="link-arrow">
            <a href="/contact#formDemo">
              Book a demo <img alt="arrow icon" src={arrow} />
            </a>
          </div>
        </div>
      </div>
      <div className="container-logo demo-flex">
        <h2>Trusted by teams and partners</h2>
        <Marquee loop={0}>
          <div className="clients-slider">
            <div className="image_wrapper">
              <img src={kitabsawti} alt="Kitab Sawti logo" />
            </div>
            <div className="image_wrapper">
              <img src={benify} alt="Benify logo" />
            </div>
            <div className="image_wrapper">
              <img src={dedicare} alt="Dedicare logo" />
            </div>
            <div className="image_wrapper">
              <img src={rototilt} alt="Rototilt logo" />
            </div>
            <div className="image_wrapper">
              <img src={enmacc} alt="Enmacc logo" />
            </div>
            <div className="image_wrapper">
              <img src={sportamore} alt="Sportamore logo" />
            </div>
            <div className="image_wrapper">
              <img src={teamtailor} alt="Kitab Sawti logo" />
            </div>
            <div className="image_wrapper">
              <img src={inexone} alt="Benify logo" />
            </div>
            <div className="image_wrapper">
              <img src={globalcitizen} alt="Dedicare logo" />
            </div>
            <div className="image_wrapper">
              <img src={icmstellarcolorlogo} alt="Rototilt logo" />
            </div>
            <div className="image_wrapper">
              <img src={logoclimatepartner} alt="Enmacc logo" />
            </div>
          </div>
        </Marquee>
      </div>
      <div className="bg-light-blue margin-top-none-sm">
        <section className=" section">
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
      <Icongrid
        header="Why Internago?"
        text="<strong> International payroll can be challenging, but it is important and has to be done.</strong> <br></br> And we have the perfect tool to help you with payroll and a variety of other HR tasks. You can efficiently store and manage employee and payroll data in one place, controlled via one online interface. All you have to do is check and approve.          "
        button="Read more"
        link="/payroll"
        content={[
          {
            alt: "Diagram icon",
            header: "Online payroll",
            text: "Software that accommodates your international operations.",
            link:"/payroll"
          },
          {
            header: "Local experts",
            text:
              "Our team includes local professionals in all the countries where we operate.",
            link:"/payroll"

          },
          {
            header: "Quick onboarding",
            text: "Your employees can be onboarded quickly and efficiently.",
            link:"/payroll"
          },
          {
            header: "Multiple markets",
            text:
              "Your trusted partner, with a single interface, across various international markets.",
            link:"/payroll"
          },
          {
            header: "GDPR compliant",
            text:
              "Data and documents are securely stored and can be shared in a ‎way that is GDPR compliant.",
            link:"/payroll"
          },
          {
            header: "Time saving",
            text:
              "Our knowledge, expertise and automated processes combine to improve your payroll quality and efficiency.",
            link:"/payroll"
          },
        ]}
      />
      <div className="margin-top-none">
        <ImageText
          margin="margin-top-none"
          bg="bg-light-blue"
          reverse="rowreverse"
          size="medium"
          title="All Salary data perfectly prepared"
          text="<strong>Replace excel sheets and checklists with our payroll portal.</strong><br></br> All payroll data is managed by Internago. We work in partnership with you. You oversee, check, and approve."
          image={Phones}
          alt="Internagos dashborard on a computerscreen"
          button="Read more"
          link="/services"
        />
      </div>
      <ImageText
        size="medium"
        title="Internago payroll portal - one software for all your payroll needs"
        text="<strong>Store, handle and transfer documents, payslips and more in a secure ‎and GDPR compliant way. </strong><br></br>Share information with colleagues and service providers. Control access rights and passwords in a single online interface. "
        image={Desktop}
        alt="Two colleagues or clients talking and sharing information"
        button="Read more"
        link="/payroll"
      />
      <Cta content="next" />
    </Layout>
  )
}

export default Index
