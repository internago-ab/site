import React, { useEffect, useState, useRef } from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Cta from "../components/cta";
import Blue from "../components/blue-form";
import GreyAnimation from "../components/grey-animation";
import ImageText from "../components/imagetext";
import ImageTextBg from "../components/home_imagetext";
import Quotes from "../components/quotes";
import Tabs from "../components/tabs";
import ProcessSteps from "../components/ProcessSteps"; // Import the new component

import computerSmall from "../images/mockups/computerSmall.png";
import payrollServices from "../images/photos/payrollServices.jpg";
import process from "../images/photos/peopleProcess.jpg";
import technical from "../images/photos/technical.jpg";
import phonesTilted from "../images/mockups/phonesTilted.png";
import social from "../images/gifs/social-media.gif";
import User from "../images/gifs/user.gif";
import Thumb from "../images/gifs/thumbs-up.gif";
import document from "../images/gifs/document.gif";
import receipt from "../images/gifs/receipt.gif";
import approval from "../images/gifs/approval.gif";
import upload from "../images/gifs/upload.gif";
import report from "../images/gifs/report.gif";

import Aos from "aos";

function Services() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [scrollProgress, setScrollProgress] = useState(0);
  const processWrapperRef = useRef(null);

  const handleScroll = () => {
    const processWrapper = processWrapperRef.current;
    if (!processWrapper) return;

    const processWrapperTop = processWrapper.getBoundingClientRect().top;
    const processWrapperHeight = processWrapper.clientHeight;
    const windowHeight = window.innerHeight;

    // Calculate when the processWrapper is fully visible
    if (
      processWrapperTop < windowHeight &&
      processWrapperTop + processWrapperHeight > 0
    ) {
      const visibleHeight = Math.min(
        processWrapperHeight,
        windowHeight - processWrapperTop,
      );
      const progress = (visibleHeight / processWrapperHeight) * 100;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize progress on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const payrollProcessSteps = [
    {
      description:
        "<strong>1.</strong>Employees register time and absences in the T&A reports during the month.",
      image: social,
    },
    // {
    //   description:
    //     "<strong>2.</strong> When the period is finished the report is submitted",
    //   image: User,
    // },
    // {
    //   description: "<strong>3.</strong> The report is approved by the manager",
    //   image: approval,
    // },
    {
      description: "<strong>2.</strong>Any potential expenses and additional change data are included.",
      image: receipt,
    },
    {
      description:
        "<strong>3.</strong> The change data is submitted, and payslips are produced and uploaded.",
      image: upload,
    },
    {
      description:
        "<strong>4.</strong>Employees receive their payslips online.",
      image: document,
    },
    {
      description:
        "<strong>5.</strong> HR reports are made available: payment lists, payroll journals, G2N, tax files, vacation files, etc.",
      // description: '<strong>7.</strong> HR-reports are made available: <ul><li>Payment lists</li><li>Tax reporting</li><li>Vacation liability</li></ul>',
      image: report,
    },
    {
      description: "<strong>6.</strong>The payroll process is completed",
      image: Thumb,
    },
  ];
  return (
    <Layout>
      <Seo
        title="Internago Services"
        description="Our experienced team can handle complex payroll in an international
        setting"
        lang="en"
        meta={[
          {
            name: "Payroll",
            content: "administrative, international, markets, quality",
          },
        ]}
      />
      <Blue>
        <h1>Internago's Payroll Services</h1>
        <p>
          Our experienced team can handle complex payroll in an international
          setting
        </p>
      </Blue>
      <section className="section">
        <div className="process-steps-wrapper" ref={processWrapperRef}>
          <div className="process-text-wrapper">
            <h2>Payoll Process</h2>
            <p className="process-text">
              With the Internago web portal you get an easy to use system
              covering the full payroll cycle.<br></br>
              <br></br>During this process, central HR can at any time, with a
              single sign-on, monitor the process, recieve employee data and get
              access to reports in multiple markets.
            </p>
            <img
              alt="image of two people planning that represents process"
              src={process}
            />
          </div>
          <div
            className="line"
            style={{
              position: "absolute", // or 'absolute' depending on layout
              top: "0%",
              width: "3px",
              height: `${scrollProgress}%`,
              backgroundColor: "#00446e",
              transition: "height 0.45s ease-in-out",
              zIndex: 10, // Ensure it's above other content
            }}
          ></div>
          <ProcessSteps steps={payrollProcessSteps} />
        </div>
      </section>
      <ImageTextBg
        size="medium"
        title="International payroll services"
        text="<strong>Payroll can be complex on foreign markets. Local rules and regulations apply. </strong><br></br>You need to ensure that you have local employment contracts, and that you understand local taxes and social contributions.   
        We are specialized in working with payroll on international markets. We ensure that your company is fully compliant with local regulations. Our payroll portal enables you to have full control and overview of your payroll process and staff. "
        image={payrollServices}
        alt="A woman walking on an arrow graph and a man sitting on a circle diagram working on a computer"
        button="Contact our experts"
        link="/contact#form"
      />
      <ImageText
        bg="bg-light-blue"
        reverse="rowreverse"
        size="medium"
        title="Process oriented approach"
        text="<strong>Internago works with payroll using a process oriented approach. </strong><br></br>
          We have over time developed our own process to optimize all the different steps in the payroll cycle for our customers.
          A key feature in our payroll process is to have one project manager, clearly defined steps in the payroll cycle along with a well established payroll calendar."
        image={phonesTilted}
        alt="A person walking up a graph with another person holding the graph"
        active="notactive"
      />
      <ImageTextBg
        size="medium"
        title="Technical integrations"
        text="<strong>We are convinced that technology adds considerable value to the payroll process.</strong><br></br>
        Technical integrations with our customers' systems will result in saving time while increasing quality. 
        We strive to minimize manual processing and find ways for technology to replace repetitive and time consuming tasks in the payroll cycle.
        When we kick off a project, we always make an assessment of the customers' current systems to find out where we could find integration possibilities."
        image={technical}
        alt="A woman walking on an arrow graph and a man sitting on a circle diagram working on a computer"
        button="Contact our experts"
        link="/contact#form"
      />

      <ImageText
        bg="bg-light-blue"
        reverse="rowreverse"
        size="medium"
        title="Quality focus"
        text="<strong>Every payroll project is different and must be given full attention. </strong><br></br>
          International payroll is often complex and needs to be thoroughly analysed and prepared by our experts. 
          At Internago we focus on quality, not quantity. 
          We enjoy complex payroll assignments, and we make sure that we always deliver quality for our customers regardless of the size of the headcount."
        image={computerSmall}
        alt="A person walking up a graph with another person holding the graph"
        active="notactive"
      />

      <GreyAnimation className="margin-top-none">
        <h2>Local experts</h2>
        <div>
          <p>
            <strong>
              Our experienced team has worked in various industries and with a
              wide range of challenges.
            </strong>
            <br />
            <br />
            We can take care of the complex and time-consuming administrative
            tasks before, during and after you enter a new market.
          </p>
        </div>
        <Tabs />
      </GreyAnimation>

      <div className="quotes-wrapper">
        <Quotes
          size="right"
          text="The implementation process went very smooth, and the fact that is was online made it easier and more transparent for us at the HQ to follow the progress, and we could update the necessary information for incorporation, bank and fiscal codes etc. in realtimee<br/><br/>"
          author="Rickard Lundström
          </br>
          CFO, Rototilt Group AB"
        />
        <Quotes
          size="middle"
          text="Internago has handled our international operations very professionally, from setup to continuous management. 
          <br/><br/>
          Their service is professional yet personal, with a solid web portal for managing all documentation.<br/><br/>"
          author="Max Friberg
          </br>
          Founder, Inex One"
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
  );
}

export default Services;
