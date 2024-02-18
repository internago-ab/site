import React from "react"

function Message(props) {

  return (
    <section
      className='message cta'
    >
      <div className="content">
        <h2>Important Security Alert</h2>
        <p>We have recently become aware of unauthorized emails being sent out falsely in our name, requesting recipients to make payments. If you have received any email from us during this period asking for payments, please do not click on any links within those emails. We advise you to delete the email immediately.</p>
      </div>
    </section>
  )
}

export default Message
