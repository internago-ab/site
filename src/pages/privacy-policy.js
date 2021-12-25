import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Cta from "../components/cta"
import "../components/thank-you.css"

const PrivacyPolicy = () => (
  <Layout>
    <Seo title="Privacy-policy" />
    <section className="section ">
      <div className="medium privacy">
        <h2 className='heading'>Data and Privacy policy</h2>
        <p>
          Your privacy and data is of key concern to us at Internago and we will
          always take the appropriate actions to protect your information.
          <br></br>
          <br></br>
          <strong>Privacy and Third Party Disclosure of Data</strong>
          <br></br>
          Internago only provides business to business services. If you get in
          touch with Internago via email, phone, post or other form of
          communication, we may keep records of those correspondences and their
          content in order to be able to respond to you or document a complaint.
          <br></br>
          <br></br>
          If you wish for your information to be deleted or corrected from our
          systems, you can contact us directly by sending an email to:
          info@internago.com<br></br>
          <br></br>
          Internago will not provide any of your personal information to other
          companies or individuals for marketing purposes without your explicit
          consent.<br></br>
          <br></br>
          Our website contains links to other websites and social media. Once
          redirected to another website, this notice is no longer applicable.
          <br></br>
          <br></br>
          As part of its obligations when providing services like company
          formation and payroll services, Internago is required to provide
          certain information to public authorities and partners in order to
          fulfil your request.<br></br>
          <br></br>
          This information includes personal data and as a condition for the
          purchase of a service from Internago the customer agrees in disclosure
          of his/her personal data to certain authorities and partners. If you
          have questions regarding how we treat personal data when we deliver
          our services, please get in touch with your project manager at
          Internago.<br></br>
          <br></br>
          If you apply for a job at Internago, we will collect, process and
          store the information you have sent us for recruitment-related
          purposes, such as contacting you and performing screening and
          interviews.<br></br>
          <br></br>
          As a general rule, we store personal data of our customers for the
          duration of our contract with them. We may retain information such as
          billing or ﬁnancial information for longer than that in order to
          comply with applicable laws as well as for the establishment, exercise
          or defence of legal claims. <br></br>
          <br></br>
          This privacy policy can be subject to change, so please make sure to
          check this website in order to always be informed on the latest
          content.
          <br></br>
          <br></br>
          <strong>Data Security</strong>
          <br></br>
          Whenever you as a customer provide sensitive information (for example
          a credit card number to make a purchase), Internago will take all
          reasonable steps to protect it, such as encrypting the credit card
          number. Internago recognizes the special responsibility that comes
          with the hosting of personal data and we want our customers to
          consider Internago as a trusted place for data storage.
          <br></br>
          <br></br>
          <strong>
            The Customer’s Responsibility for the Account at Internago
          </strong>
          <br></br>
          The customer should always log out of any account when finishing a
          session, to ensure that others cannot access the customer’s private
          personal information. The customer should always take this precaution
          regardless of which computer/handheld is used.
          <br></br>
          <br></br>
          <strong>Internagos Web Security involves:</strong>
          <br></br>– Fully updated software at all time
          <br></br>– Necessary firewalls in place
          <br></br>– The use of HTTPS (Hyper Text Transfer Protocol Secure)
          <br></br>– Strong passwords
        </p>
      </div>
    </section>
    <Cta content="next" />
  </Layout>
)

export default PrivacyPolicy
