import React from 'react'
import './FindUs.css'
function FindUs() {
  return (
    <section className='find-us-section'>
      <section className="find-us-pane content">
        <h1 className='find-us-heading'>Welcome to VIT Bhopal!</h1>
        <p className='find-us-text'>
          VIT Bhopal University is a private university in Kothri Kalan in Sehore district,
          Madhya Pradesh, India. It was established by the Vellore Institute of Technology.
        </p>
      </section>
      <aside className="find-us-pane map">
        <iframe
          title="VIT Bhopal Location"
          width="100%"
          height="400"
          className='map-frame'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5357350998565!2d76.8490984144432!3d23.07747642006608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397ce9ceaaaaaaab%3A0xa224b6b82b421f83!2sVellore%20Institute%20of%20Technology%20-%20VIT%20Bhopal!5e0!3m2!1sen!2sin!4v1677695861081!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy" 
          aria-hidden="false"
          referrerPolicy="no-referrer-when-downgrade"
          tabIndex="0">
        </iframe>
      </aside>
    </section>
  )
}

export default FindUs