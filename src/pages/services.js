import React, { useEffect } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Cta from "../components/cta"
import Grey from "../components/grey"
import ImageText from "../components/imagetext"
import Quotes from "../components/quotes"
import Tabs from "../components/tabs"

import ServicesExperienced from "../images/illustrations/services-experienced.png"
import ServicesDigitalize from "../images/illustrations/services-digitalize.png"
import ServicesOptimize from "../images/illustrations/services-optimize.png"

import Aos from "aos"
import "aos/dist/aos.css"

function Services() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <Layout>
      <Seo title="Services" />
      <Grey>
        <h1>Internago Services</h1>
        <p>
          Whether you just started your company, or if you are interested to
          streamline your existing operations – Internago is your trusted
          partner
          <br />
          <br />
          We provide hands-on support backed up by qualitative and quantitative
          analysis of relevant industry information that can support you in
          business critical decisions. We work close with our clients in a
          transparent and efficient manner where your success as our objective.
        </p>
      </Grey>
      <h2 className="howitworks" data-aos="fade-up">
        How it works
      </h2>
      <ImageText
        active="notactive"
        size="small"
        title="Digitalize"
        text="Edited Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        image={ServicesDigitalize}
      />
      <ImageText
        active="notactive"
        reverse="rowreverse"
        size="small"
        title="Optimize"
        text="Edited Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        image={ServicesOptimize}
      />
      <ImageText
        active="notactive"
        size="small"
        title="Digitalize"
        text="Edited Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        image={ServicesDigitalize}
      />

      <Grey>
        <h2>Advisory and Incorporation Services</h2>
        <p>
          Our experienced team of consultants have worked in various industries
          and with different challenges, and can take care of the time consuming
          and complex administrative tasks before, during and after you enter a
          new market. We have an extensive network and long experience of
          finding the best partners for our clients.
        </p>
        <Tabs />
      </Grey>
      <ImageText
        size="medium"
        title="Experienced Professionals"
        text="Setting up a new company, whether it is in your home country, or if you are taking a step into an international market, is an important process where many important decisions must be made.
        </br></br>
        Internago collaborates with a team of legal and tax professionals in all countries where we operate. We make sure that you get the best advice on how to set up your new entity.
        </br></br>
        All steps regarding company form, ownership, management, board of directors and fiscal set-up will be discussed and agreed together with your team.
        </br></br>
        Internago will walk you through what you need to have in place to be operational and can support you in setting up bank accounts, accounting and payroll."
        image={ServicesExperienced}
        button="Contact our experts"
        link="mailto:info@internago.com"
      />
      <div className="quotes-wrapper">
        <Quotes
          size="right"
          text="The implementation process went very smooth, and the fact that is was online made it easier and more transparent for us at the HQ to follow the progress, and we could update the necessary information for incorporation, bank and fiscal codes etc. in realtimee<br/><br/>"
          author="Rickard Lundström CFO
          </br>
          Rototilt Group AB"
        />
        <Quotes
          size="middle"
          text="Internago has handled our international operations very professionally, from setup to continuous management. 
          <br/><br/>
          Their service is professional yet personal, with a solid web portal for managing all documentation.<br/><br/>"
          author="Max Friberg Founder
          </br>
          Inex One"
        />
        <Quotes
          size="bottom"
          text="I recommend Internago to companies that want to develop their business and grow into new markets. <br/><br/>"
          author="Fabio Frozzi 
          </br>
          CEO, Co.Ma SPA
          "
        />
      </div>
      <Cta content="next" />
    </Layout>
  )
}

export default Services
