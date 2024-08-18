import React from 'react'

function Contact() {
  return (
    <div id= 'contact'>
        <h1>CONTACT US</h1>
        <form>
            <input type='text' placeholder='Full Name' required/>
            <input type='email' placeholder='Type Your E-mail' required/>
            <input type='phone-number' placeholder='Enter Your Phone Number' required/>
            <textarea placeholder='Write here......' name='message'></textarea>
            <input type='submit' value='Send'/>
        </form>
    </div>
  
)
}

export default Contact