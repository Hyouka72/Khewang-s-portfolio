import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactimg from '../assets/react.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import springboot from '../assets/springboot.png';
import postman from '../assets/postman.png';
import postgres from '../assets/postgres.png';
import mongodb from '../assets/mongodb.png';
import Cplusplus from '../assets/C++.png';


const Experience = () => {
    const skills = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500 hover:shadow-[0_5px_15px_5px_orange]"
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: " shadow-blue-500 hover:shadow-[0_5px_15px_5px_blue]"
        }, {
            id: 3,
            src: javascript,
            title: "JAVASCRIPT",
            style: " shadow-yellow-500 hover:shadow-[0_5px_15px_5px_yellow]"
        }, {
            id: 4,
            src: reactimg,
            title: "REACT",
            style: " shadow-blue-600 hover:shadow-[0_5px_15px_5px_darkblue]"
        }, {
            id: 5,
            src: tailwind,
            title: "TAILWIND",
            style: " shadow-sky-400 hover:shadow-[0_5px_15px_5px_skyblue]"
        },
        {
            id: 6,
            src: github,
            title: "GITHUB",
            style: " shadow-gray-400 hover:shadow-[0_5px_15px_5px_gray]"
        },
        {
            id: 7,
            src: springboot,
            title: "SPRINGBOOT",
            style: " shadow-lime-400 hover:shadow-[0_5px_15px_5px_lightgreen]"
        },
        {
            id: 8,
            src: mongodb,
            title: "MONGODB",
            style: " shadow-green-400 hover:shadow-[0_5px_15px_5px_green]"
        },
        {
            id: 9,
            src: postgres,
            title: "POSTGRES",
            style: " shadow-sky-200 hover:shadow-[0_5px_15px_5px_skyblue]"
        },
        {
            id: 11,
            src: Cplusplus,
            title: "C++",
            style: " shadow-blue-400 hover:shadow-[0_5px_15px_5px_blue]"
        },
        {
            id: 10,
            src: postman,
            title: "POSTMAN",
            style: " shadow-orange-400 hover:shadow-[0_5px_15px_5px_orange]"
        },
    ]
    return (
        <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen '>
            <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-white pt-20'>
                <div className=' flex flex-col justify-center items-center md:items-start'>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Tech Stack</p>
                    <p className='py-6'>These are the technologis I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center px-12 sm:px-0'>
                    {
                        skills.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md py-10  hover:scale-105 duration-150 rounded-lg ${style}`}>
                                <img src={src} alt="" className='w-20  mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Experience