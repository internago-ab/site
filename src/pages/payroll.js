import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Blue from "../components/blue"
import Grey from "../components/grey"
import Icongrid from "../components/icongrid"
import Cta from "../components/cta"
import ImageText from "../components/imagetext"
import Quotes from "../components/quotes"

import Multilingual from "../images/illustrations/multilingual.png"
import Access from "../images/illustrations/access.png"
import PayrollShareDoc from "../images/illustrations/payroll-sharedoc.png"
import timeAbsence from "../images/screenshots/time-and-absence.png"
import employees from "../images/screenshots/employees.png"
import expenseClaims from "../images/screenshots/expense-claims.png"
import dashboard from "../images/screenshots/dashboard.png"

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
          this way you will increase your control and efficiency by using one
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
                "Let your employees enter absence directly into the portal. You just approve or reject. You will get a nice overview of all absence for all your employees on all your international markets.",
            },
            {
              link: "/payroll#share-documents",
              icon: mobile,
              alt: "Phone icon",
              header: "ShareDoc",
              text:
                "Don't know where you stored that employment contract? With our Document sharing tool you will have all your sensitive documents in one place.",
            },
            {
              link: "/payroll#expense",
              icon: expense,
              alt: "Window tab that handles expenses",
              header: "Expense Management",
              text:
                "Sick of handling excel sheets with expense reports? We offer a standardised expense management tool that will work for all your employees on your international markets.",
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
                "Do you have multiple approvers and roles? Our payroll workflow is fully configurable to handle your specific needs and processes.",
            },
            {
              link: "/payroll#access",
              alt: "Clicking button icon",
              icon: simple,
              header: "Access 24/7",
              text:
                "Access your payroll data and employee data at any time and from anywhere thanks to our mobile device login and real time notifications.",
            },
          ]}
        />
      </Grey>

      <div className="quotes-wrapper">
        <Quotes text="The ShareDoc module greatly facilitates the sharing and management of payroll and accounting related files. A perfect tool for payroll management and various declarations to individuals and companies." />
      </div>

      <ImageText
        reverse="rowreverse"
        bg="bg-grey"
        id="time-absence"
        size="medium"
        padding="padding"
        width="short"
        title="Time and absence"
        text="With Internago’s payroll portal, you have the perfect tool to manage your international employees in one single interface. It’s simple to use and gives your company the possibility to use the same system for your domestic and international employees when registering absence, vacations and other deviations. 
        <br></br>
        All is done directly on the portal. By handling everything in the same place your management and HR will have a clear calendar overview of all absences which significantly improves personnel planning."
        image={timeAbsence}
        alt="Calendar and hourglass icon"
        active="notactive"
      />
      <ImageText
        margin="margin-none"
        id="share-documents"
        size="medium"
        padding="padding"
        width="short"
        title="ShareDoc"
        text="Don't remember where you stored that employment contract? With Share documents you will have all your sensitive and important documents in one place. You can share the documents directly with your colleagues or external collaborators through hyperlinks accessible only by permitted personnel. 
        <br></br>
        Additionally, this tool allows you to access all files in one place, which means you spend less time searching for information and more time focussing on your job. We support all types of files like PDF, Word, JPEG etc. and our log feature makes it transparent who has added, deleted, or made any changes to files. "
        image={PayrollShareDoc}
        alt="Two persons sharing and exchanging payroll files"
        button="Try it today"
        link="/contact#form"
      />
      <ImageText
        margin="margin-none"
        bg="bg-grey"
        id="expense"
        reverse="rowreverse"
        size="medium"
        padding="padding"
        width="short"
        title="Expense Management"
        text="Sick of handling excel sheets and emails with expense reports? Our built-in expense management tool standardises this work for all your employees and on all your international markets. 
        <br></br>
        Using a simple online access, it provides a quick overview of all your expenses. With a smooth and easy registration process, as well as a rapid and easy handling and approval of errands, your previous time is saved, and your company’s internal efficiency is increased."
        image={expenseClaims}
        alt="Window tab that handles expenses"
        active="notactive"
      />
      <ImageText
        margin="margin-none"
        id="multilingual"
        size="medium"
        padding="padding"
        width="short"
        title="Multilingual"
        text="Having foreign workers also means handling multiple languages. 
        <br></br>
        Our portal comes with the option of language adaptation. This means that it can be easily updated to allow for the integration of languages or other related adjustments in accordance with your organisation’s needs."
        image={Multilingual}
        alt="Balloon bubble icon"
        active="notactive"
      />
      <ImageText
        margin="margin-none"
        reverse="rowreverse"
        bg="bg-grey"
        id="workflow"
        size="medium"
        width="short"
        padding="padding"
        title="Payroll workflow"
        text="Many organisations have multiple approving managers and several different roles. A local director that may handle the absence management for his or her employees, but it is the responsibility of central HR to manage payroll and absences of that local director. 
        <br></br>
        As all our customers have their specific requirements, we have created an advanced configuration tool to handle your organisation’s specific needs and payroll workflow. This will eliminate the risk of error and make your payroll workflow more efficient and secure."
        image={employees}
        alt="Approving document icon"
        active="notactive"
      />
      <ImageText
        margin="margin-none"
        id="access"
        size="medium"
        width="short"
        padding="padding"
        title="Access 24/7"
        text="Access your payroll data and employee data at any time from anywhere thanks to our mobile device login and real time notiflications."
        image={Access}
        alt="Clicking button icon"
        active="notactive"
      />
      <Cta content="next" />
    </Layout>
  )
}

export default Payroll
