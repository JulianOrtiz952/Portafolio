import React from 'react';

import Image from '../assets/Foto de perfil Slack.jpg';

import { FaYoutube, FaDribbble, FaGithub, FaWhatsapp, FaLinkedin} from 'react-icons/fa';

import { TypeAnimation } from 'react-type-animation';

import { motion } from 'framer-motion';

import {fadeIn} from '../variants'

const Banner = () => {
  return(
   <section className='section' id='home'>
    <div className='container mx-auto'>
      <div>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <h1 className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
            Julian <span className=''> Ortiz</span>
          </h1>
          <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='mr-2'> Yo soy</span>
              <TypeAnimation sequence={[
                'Desarrollador',
                2000,
                'Diseñador',
                2000,
                'soñador',
                2000,
              ]} 
              className=' text-green-300'
              wrapper='span'
              repeat={Infinity}/>
          </div>
          <div className='flex max-w-max mx-auto items-center gap-3 py-3'>
            <div> 
          <img src={Image} className='max-h-[450px] rounded-full hidden lg:flex flex-1 max-w-[320px]'/> 
            </div>
          <div className=' text-gradient btn-link text-[25px]'> sueño, pienso, actuo y lo materializo.</div>
          </div>
         
        </div>
      </div>
    </div>
  </section>
  );
};

export default Banner;
