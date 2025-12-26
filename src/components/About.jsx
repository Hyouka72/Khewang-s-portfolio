import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center md:items-start w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>About</p>
        </div>
        <p className='text-xl mt-20 text-justify'>
        I’m Khewang, a Java backend developer passionate about building secure, scalable, and efficient systems. With expertise in Spring Boot, Spring Security, and JWT authentication, I design APIs and backend architectures that prioritize performance, reliability, and user-friendly experiences.
.
        </p> <br />
        <p className='text-xl text-justify'>
         I enjoy solving complex problems, refining legacy code into modern solutions, and ensuring every project I work on is robust, maintainable, and ready to grow. Beyond coding, I thrive on collaborative debugging, sharing knowledge, and continuously exploring new technologies to stay ahead in the ever-evolving world of backend development.
        </p>
      </div>
    </div>
  )
}

export default About
