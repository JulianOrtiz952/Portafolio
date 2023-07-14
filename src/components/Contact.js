import React from 'react';
import { FaGithub, FaLinkedin, FaMailBulk, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
  <section className='section' id='contact'>
  <div className='flex items-center  max-w-max mx-auto gap-6 lg:top-0'>
            <button className='btn btn-lg'>Contactame</button>
            <a href='#' className=' text-gradient btn-link'> mi portafolio</a>
          </div>
          <div className='flex py-3 gap-2 max-w-max mx-auto'>
            <a href='https://github.com/JulianOrtiz952'>
              <FaGithub/>
            </a>
            {/* <a href='#'>
              <FaMailBulk/>
            </a> */}
            <a href='https://www.linkedin.com/in/julian-ortiz-a00009266/'>
              <FaLinkedin/>
            </a>
          </div>
  </section>
  )
}

export default Contact;
