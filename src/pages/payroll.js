import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Blue from "../components/blue"
import Grey from "../components/grey"
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
          Manage your payroll on multiple international markets with one online
          interface
        </p>
      </Blue>
      <Grey>
        <h2 className="heading">Payroll and HR Management</h2>
        <p>
          Let's be honest, international payroll is not fun, but it has to be
          done. We have the perfect tool for managing international payroll and
          HR related tasks for your international employees. We let you store
          and manage all important employee and payroll data in one place. In
          this way you will cncrease your control and efficiency by using one
          online interface for all your international employees. Your job is
          simply to check and approve in the portal.
        </p>
        <Icongrid
          content={[
            {
              link: "/payroll#time-absence",
              icon: calendartime,
              alt: "Calendar and hourglass icon",
              header: "Time and absence",
              text:
                "Let your employees enter absence directly into the portal. You just approve or reject. You will get a nice overview of all absence for all your employees on all your international markets",
            },
            {
              link: "/payroll#expense",
              icon: expense,
              alt: "Window tab that handles expenses",
              header: "Expense Management",
              text:
                "Sick of handling excel sheets with expense reports? We offer a standardise expense management tool that will work for all your employees on your international markets",
            },
            {
              link: "/payroll#share-documents",
              icon: mobile,
              alt: "Phone icon",
              header: "Share documents",
              text:
                "Don't know where you stored that employment contract? With our Document sharing tool you will have all your sensitive documents in one place",
            },
            {
              link: "/payroll#multilingual",
              icon: speech,
              alt: "Balloon bubble icon",
              header: "Multilingual",
              text:
                "Our portal comes in multiple languages. We easily integrate a new language according to your needs.",
            },
            {
              link: "/payroll#workflow",
              alt: "Approving document icon",
              icon: stamp,
              header: "Payroll workflow",
              text:
                "Do you have multiple approvers and roles? Our payroll workflow is fully configurable to handle your specfic needs and payroll workflow.",
            },
            {
              link: "/payroll#access",
              alt: "Clicking button icon",
              icon: simple,
              header: "Access 24/7",
              text:
                "Access your payroll data and employee data at any time from anywhere thanks to our mobile device login and real time notiflications",
            },
          ]}
        />
      </Grey>
      <ImageText
        size="medium"
        title="Share documents tool"
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
        alt="Two persons sharing and exchanging payroll files"
        button="Try it today"
        link="/contact#form"
      />
      <div className="quotes-wrapper">
        <Quotes text="The Share document tool module greatly facilitates the sharing and management of payroll and accounting related files. A perfect tool for payroll management and various declarations to individuals and companies." />
      </div>

      <ImageText
        bg="bg-grey"
        id="time-absence"
        size="medium"
        width="short"
        title="Time and absence"
        text="Let your employees enter absence directly into the portal. You just approve or reject. You will get a nice overview of all absence for all your employees on all your international markets"
        image={calendartime}
        alt="Calendar and hourglass icon"
        active="notactive"
      />
      <ImageText
        id="expense"
        reverse="rowreverse"
        size="medium"
        width="short"
        title="Expense Management"
        text="Sick of handling excel sheets with expense reports? We offer a standardise expense management tool that will work for all your employees on your international markets"
        image={expense}
        alt="Window tab that handles expenses"
        active="notactive"
      />
      <ImageText
        bg="bg-grey"
        id="share-documents"
        size="medium"
        width="short"
        title="Share documents"
        text="Don't know where you stored that employment contract? With our Document sharing tool you will have all your sensitive documents in one place"
        image={mobile}
        alt="Phone icon"
        active="notactive"
      />
      <ImageText
        reverse="rowreverse"
        id="multilingual"
        size="medium"
        width="short"
        title="Multilingual"
        text="Our portal comes in multiple languages. We easily integrate a new language according to your needs."
        image={speech}
        alt="Balloon bubble icon"
        active="notactive"
      />
      <ImageText
        bg="bg-grey"
        id="workflow"
        size="medium"
        width="short"
        title="Payroll workflow"
        text="Do you have multiple approvers and roles? Our payroll workflow is fully configurable to handle your specfic needs and payroll workflow."
        image={stamp}
        alt="Approving document icon"
        active="notactive"
      />
      <ImageText
        reverse="rowreverse"
        id="access"
        size="medium"
        width="short"
        title="Access 24/7"
        text="Access your payroll data and employee data at any time from anywhere thanks to our mobile device login and real time notiflications"
        image={simple}
        alt="Clicking button icon"
        active="notactive"
      />
      <Cta content="next" />
    </Layout>
  )
}

export default Payroll
