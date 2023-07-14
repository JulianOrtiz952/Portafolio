import React from 'react';

import Image from '../assets/carnet.jpg';
import service from '../assets/services.png'

const About = () => {
  return(
    
    <section className='section py-5' id='about'> 
    <div className='grid grid-cols-4 max-w-max mx-auto items-center'>
      <div className='col-start-2'><img src={Image} className='max-h-[350px]  hidden lg:flex flex-1 max-w-[420px] '/></div>
      <p className=' font-primary text-[15px] col-start-3 col-span-1'> actualmente tengo 18 años y soy desarrollador de software egresado de academlo, estudio ingenieria de sistemas e intento fortalecer conocimientos consumiendo contenido relacionado, mis pasatiempos son resolver ejercicios de programacion, asi como tambien las competencias de las mismas, la musica y el deporte </p>
    </div>
    
     
      </section>
    
  )
};

export default About;
