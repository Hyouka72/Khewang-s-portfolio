import React from 'react';

import game from '../assets/portfolio/game.png';
import reactWeather from '../assets/portfolio/weatherProject.png';
import park from "../assets/portfolio/parkslot.png";
import ems from "../assets/portfolio/ems.png";
import blog from "../assets/portfolio/blogpost.png";


const Portfolio = () => {
    const portfolios =[ 
        {
            id: 3,
            src: park,
            href:"https://hyouka45.github.io/weather-web-application/",
            code:"https://github.com/Hyouka72/ParkingSlot"
        },
        {
            id: 4,
            src: ems,
            href:"https://hyouka45.github.io/weather-web-application/",
            code:"https://github.com/Hyouka72/Employee-management-system-"
        },
        {
            id: 5,
            src: blog,
            href:"https://hyouka45.github.io/weather-web-application/",
            code:"https://github.com/Hyouka72/Blogging"
        },
        
        {
            id: 1,
            src: game,
            href:"https://hyouka45.github.io/rock-paper-sissor-game-/",
            code:"https://github.com/Hyouka72/rock-paper-sissor-game-.git",
        },
        
        {
            id: 2,
            src: reactWeather,
            href:"https://hyouka45.github.io/weather-web-application/",
            code:"https://github.com/Hyouka72/weather-web-application.git"
        }
    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full  text-white md:h-screen '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8  flex flex-col justify-center items-center md:items-start'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
        </div>
      
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
        {
            portfolios.map(({id, src, href, code})=>(
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="" className='rounded-md duration-150 hover:scale-105 '/>
                <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-150  hover:scale-105' onClick={() => href && window.open(code, "_blank")} >Source Code</button>
                </div>
            </div>   
            ))
        }
           
        </div>
      </div>
    </div>
  )
}

export default Portfolio
