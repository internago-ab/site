import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Blue from "../components/blue"
import GreyAnimation from "../components/grey-animation"
import Icongrid from "../components/icongrid"
import Cta from "../components/cta"
import ImageText from "../components/imagetext"
import Quotes from "../components/quotes"

import PayrollShareDoc from "../images/illustrations/payroll-sharedoc.png"

import mobile from "../images/icons/mobile.png"
import expense from "../images/icons/expense.png"
import simple from "../images/icons/simple.png"
import speech from "../images/icons/speech.png"
import stamp from "../images/icons/stamp.png"
import calendartime from "../images/icons/calendartime.png"

function Payroll() {
  return (
    <Layout>
      <Seo title="Payroll" />
      <Blue>
        <h1>Internago Payroll Portal</h1>
        <p>
          Manage your employees's payroll on multiple international markets with one online interface.
 
        </p>
      </Blue>
     <GreyAnimation>
        <h2>Payroll and HR Management</h2>
        <p>
          Payroll can be complex in an international context. Local rules and
          regulations, different employment contracts, taxes and severence pay
          are just some things that you need to get in place and that influence
          the cost of personnell. We collaborate with the best local experts
          ensuring full compliance with local regulation.
        </p>
        <Icongrid
          content={[
            {
              icon: mobile,
              text: "Mobile device login and real time notiflications",
            },
            {
              icon: expense,
              text: "Expense management",
            },
            {
              icon: simple,
              text: "Simple to use",
            },
            {
              icon: speech,
              text: "Multi language",
            },
            {
              icon: stamp,
              text:
                "Accept/decline workflow, configurable for enabling multiple approvers",
            },
            {
              icon: calendartime,
              text: "Absence and time management",
            },
          ]}
        />
      </GreyAnimation>
     
      <ImageText
        size="medium"
        title="ShareDoc -Document management tool"
        text=" Our payroll software also lets you share and exchange payroll related files in a secure and GDPR compliant manner. ShareDoc is designed to improve your document workflow, and makes it easy and secure to exchange, control, authorize and approve documents online.
        </br></br>
        
        <h3>Features</h3>
        </br>
        <ul>
        <li>
        Share hyperlinks to authorised external and internal stakeholders
        </li>
        <li>
        Control, authorize, approve and reject documents online
        </li>
        <li>
        GDPR conformity
        </li>
        <li>
        E-mail notification to authorised users
        </li>
        <li>
        Add users and control access based on need-to-know basis 
        </li>
        </ul>"
        image={PayrollShareDoc}
        button="Try it today"
        link="mailto:info@internago.com"
      />
      <div className="quotes-wrapper">
        <Quotes text="The ShareDoc module greatly facilitates the sharing and management of payroll and accounting related files. A perfect tool for payroll management and various declarations to individuals and companies." />
      </div>
      <Cta content="next" />
    </Layout>
  )
}

export default Payroll
