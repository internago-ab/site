import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Blue from "../components/blue"
import Icongrid from "../components/icongrid"
import Cta from "../components/cta"
import ImageText from "../components/imagetext"
import ImageTextOver from "../components/imagetextover"

import timeAbsence from "../images/screenshots/time-and-absence.png"
import employees from "../images/screenshots/employees.png"
import expenseClaims from "../images/screenshots/expense-claims.png"
import Access from "../images/photos/access.jpg"
import shareDoc from "../images/photos/shareDoc.jpg"
import Multilingual from "../images/photos/multilingual.jpg"

import "../components/icongrid.css"

function Payroll() {
  return (
    <Layout>
      <Seo title="Payroll" />
      <Blue>
        <h1>‎Internago Payroll Portal</h1>
        <p>
          Manage your payroll across multiple international markets with one
          online interface.
        </p>
      </Blue>
      <section className="icon-wrapper margin-top-none">
        <Icongrid
          header="Payroll and HR Management"
          text=" <strong> International payroll can be challenging, but it is important and has
         to be done. And we have the perfect tool to help you with payroll and
         a variety of other HR tasks.</strong><br></br> You can efficiently store and manage
         employee and payroll data in one place, controlled via one online
         interface. All you have to do is check and approve."
          content={[
            {
              link: "/payroll#time-absence",
              alt: "Calendar and hourglass icon",
              header: "Time and absence",
              text:
                "Your employees can enter holidays and other absences directly into the portal for you to approve or decline. You will have access to an overview of all absences for every employee.",
            },
            {
              link: "/payroll#share-documents",
              alt: "Phone icon",
              header: "Share documents",
              text:
                "With our sharing tool you can have employment contracts and all other relevant documents in one place.",
            },
            {
              link: "/payroll#expense",
              alt: "Window tab that handles expenses",
              header: "Expense management",
              text:
                "We offer a standardised expense management tool that can work for all employees",
            },
            {
              link: "/payroll#multilingual",
              alt: "Balloon bubble icon",
              header: "Multilingual",
              text:
                "Our portal is available in various languages, and new ones can be added to meet your needs.",
            },
            {
              link: "/payroll#workflow",
              alt: "Approving document icon",
              header: "Payroll workflow",
              text:
                "Our workflow can be fully configured to handle your specific needs and processes, including multiple approvers.",
            },
            {
              link: "/payroll#access",
              alt: "Clicking button icon",
              header: "Access 24/7",
              text:
                "Access your payroll and employee data anytime, anywhere, thanks to our mobile device login and real-time notifications.",
            },
          ]}
        />
      </section>

      <ImageText
        reverse="rowreverse"
        id="time-absence"
        size="medium"
        padding="padding"
        margin="margin-top-none"
        width="short"
        title="Time and absence"
        text="<strong>With Internago’s payroll portal, you have the perfect tool to manage your international employees in one single interface.</strong> <br></br>It’s simple to use and gives your company the possibility to use the same system for your domestic and international employees when registering absence, vacations and other deviations. 
        <br></br>
        All is done directly on the portal. By handling everything in the same place your management and HR will have a clear calendar overview of all absences which significantly improves personnel planning."
        image={timeAbsence}
        alt="Calendar and hourglass icon"
        active="notactive"
      />
      <ImageTextOver
        margin="margin-none"
        id="share-documents"
        class="tall"
        width="short"
        title="Share documents"
        text="<strong>Don't remember where you stored that employment contract? With Share documents you will have all your sensitive and important documents in one place. </strong><br></br>You can share the documents directly with your colleagues or external collaborators through hyperlinks accessible only by permitted personnel. 
        <br></br>
        Additionally, this tool allows you to access all files in one place, which means you spend less time searching for information and more time focussing on your job. We support all types of files like PDF, Word, JPEG etc. and our log feature makes it transparent who has added, deleted, or made any changes to files. "
        image={shareDoc}
        alt="Two persons sharing and exchanging payroll files"
        button="Try it today"
        link="/contact#form"
      />
      <ImageText
        margin="margin-none"
        id="expense"
        reverse="rowreverse"
        size="medium"
        padding="padding"
        width="short"
        title="Expense Management"
        text="<strong>Sick of handling excel sheets and emails with expense reports? </strong><br></br>Our built-in expense management tool standardises this work for all your employees and on all your international markets. 
        <br></br>
        Using a simple online access, it provides a quick overview of all your expenses. With a smooth and easy registration process, as well as a rapid and easy handling and approval of errands, your previous time is saved, and your company’s internal efficiency is increased."
        image={expenseClaims}
        alt="Window tab that handles expenses"
        active="notactive"
      />
      <ImageTextOver
        margin="margin-none"
        bg="bg-grey"
        id="multilingual"
        title="Multilingual"
        text="<strong>Having foreign workers also means handling multiple languages. </strong>
        <br></br>
        Our portal comes with the option of language adaptation. This means that it can be easily updated to allow for the integration of languages or other related adjustments in accordance with your organisation’s needs."
        image={Multilingual}
        alt="Balloon bubble icon"
        button="Contact your market"
        link="/contact#market"
      />
      <ImageText
        margin="margin-none"
        reverse="rowreverse"
        id="workflow"
        size="medium"
        width="short"
        padding="padding"
        title="Payroll workflow"
        text="<strong>Many organisations have multiple approving managers and several different roles.</strong> <br></br> A local director that may handle the absence management for his or her employees, but it is the responsibility of central HR to manage payroll and absences of that local director. 
        <br></br>
        As all our customers have their specific requirements, we have created an advanced configuration tool to handle your organisation’s specific needs and payroll workflow. This will eliminate the risk of error and make your payroll workflow more efficient and secure."
        image={employees}
        alt="Approving document icon"
        active="notactive"
      />
      <ImageTextOver
        margin="margin-none"
        bg="bg-grey"
        id="access"
        title="Access 24/7"
        text="Access your payroll data and employee data at any time from anywhere thanks to our mobile device login and real time notiflications."
        image={Access}
        alt="Clicking button icon"
        active="notactive"
        button="Contact us"
        link="/contact#form"
      />
      <Cta content="next" />
    </Layout>
  )
}

export default Payroll
