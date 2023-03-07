import React from 'react'
import './FindUs.css'
function FindUs() {
  return (
  <div className='find-us'>
   <div className="content">
      <h3 className='text-center'>Welcome to VIT Bhopal!</h3>
      <p className='about'>VIT Bhopal University is a private university in Kothri Kalan in Sehore district, Madhya Pradesh, India. It was established by the Vellore Institute of Technology.</p>
   </div>
    <div className="map-container">
     
    <iframe
      title="VIT Bhopal"
      width="100%"
      height="400"
     
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5357350998565!2d76.8490984144432!3d23.07747642006608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397ce9ceaaaaaaab%3A0xa224b6b82b421f83!2sVellore%20Institute%20of%20Technology%20-%20VIT%20Bhopal!5e0!3m2!1sen!2sin!4v1677695861081!5m2!1sen!2sin"
      allowFullScreen=""
      loading="lazy" 
      aria-hidden="false"
      referrerPolicy="no-referrer-when-downgrade"
      tabIndex="0"
    ></iframe>
    
  </div>
  </div>
  )
}

export default FindUs