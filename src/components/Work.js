import React from 'react';

import rickAndMorty from '../assets/rickandmorty.png'

import ecommerce from '../assets/ecommerce.png'

import pokeapi from '../assets/pokeapi.png'

const Work = () => {
  return (<section className='section' id='work'>
  <div className='max-w-max mx-auto'>
    <div className='grid grid-cols-2 items-center gap-4 max-w-max mx-auto '>
          
                <img src={rickAndMorty} className='max-h-[250px] rounded-md hidden lg:flex flex-1 max-w-[320px]'/>
                <a className='text-gradient btn-link'> Rick And Morty App</a>
            
              <a className='text-gradient btn-link'>PokeApi</a>
                <img src={pokeapi} className='max-h-[250px] rounded-md hidden lg:flex flex-1 max-w-[320px]'/>
                
                <img src={ecommerce} className='max-h-[250px] rounded-md hidden lg:flex flex-1 max-w-[320px]'/>
                <a className='text-gradient btn-link'> eccomerce</a>
           
    </div>
    </div>
  </section>)
};

export default Work;
