import React from 'react'
import '../Footer/Footer.css'

const Footer = ({active}) => {
  return (
    <div className='footer'>
      <div className="info">
        <h4 className={active==="footerpage"?"active":""}>Contact</h4>
        <h2>Get in Touch</h2>
        <p>Want to Chart? Just shoot me a dm with a direct question on <span><a href="https://www.linkedin.com/in/erukala-srihari-675a42285/">LinkedIn</a></span> <br /> and I'll respond whenever I can. I will Igrone all soliciting. </p>
      </div>
    </div>
  )
}

export default Footer
