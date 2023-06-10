import React from 'react'
import "../styles/Contact.scss"

function Contact() {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form action="">
          <div>
            <label htmlFor="">Name</label>
            <input type="text" required placeholder='Abc' />
          </div>

          <div>
            <label htmlFor="">Email</label>
            <input type="email" required placeholder='Abc@email.com' />
          </div>

          <div>
            <label htmlFor="">Message</label>
            <input type="text" required placeholder='Tell us about' />
          </div>

          <button type='submit'>Send</button>
        </form>
      </main>
    </div>
  )
}

export default Contact