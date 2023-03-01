import React from 'react'
import './Findus.css'
function FindUs() {
  return (
    <>
   <div className="content">
    <h3 className='text-center'>Welcome to VIT-Bhopal</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid inventore earum nobis pariatur eius quo ab consequatur beatae ex! In soluta suscipit cum, labore consequuntur dicta laboriosam consectetur asperiores et ab fuga sapiente minima id quisquam dolorem a iure dolorum distinctio, adipisci optio voluptates ea modi? Consequatur, possimus voluptates velit nemo aut porro ab iure non perferendis quod recusandae, ipsum alias aspernatur voluptatem minima excepturi, fuga perspiciatis facere necessitatibus consequuntur.</p>
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
      referrerpolicy="no-referrer-when-downgrade"
      tabIndex="0"
    ></iframe>
    
  </div>
  </>
  )
}

export default FindUs