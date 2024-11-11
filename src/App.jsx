import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Alumini from './alumini';
import Team from './team';
import Resources from './resources';
export default function Manga() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="min-h-screen     text-gray-100 font-mono    absolute top-0 z-[-2] h-max w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
            <nav className="bg-gray-900 p-6 shadow-lg">
                <div className="container mx-auto flex justify-between items-center">
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold text-violet-400 font-mono  transition-all duration-300"
                    >
                        WELCOME
                    </motion.span>
                    <ul className="flex space-x-4">
                        <motion.li
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg font-mono hover:text-violet-400 transition-all duration-300 cursor-pointer"
                        >
                            Upcoming Event:
                            <span className="hover:text-red-400 transition-all duration-300"> SPECTRA </span>
                        </motion.li>
                    </ul>
                </div>
            </nav>
            {/* Announcements */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                className="container mx-auto p-10"
            >
                <h2 className="text-4xl font-bold text-violet-400 mb-8 font-mono ">
                    <h2 className="hover:text-red-500 transition-all duration-300">Announcements</h2></h2>
                <div className=" bg-violet-400 bg-opacity-5 space-y-8 mb-4">
                    <motion.div
                        whileHover={{
                            scale: 1.03,
                            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                            backgroundColor: "rgba(76, 29, 149, 0.8)",
                        }}
                        className="flex space-x-6 hover:text-red-400 transition-all duration-300 p-6 rounded-lg shadow-xl" >
                        {/* <img
                            src="/api/placeholder/96/96"
                            className="w-32 h-32 object-cover rounded-lg shadow-md"
                            alt='s'
                        /> */}
                        <div>
                            <h3 className="font-semibold text-2xl mb-3  hover:text-red-500 transition-all duration-300  text-violet-300">Important Update</h3>
                            <p className="text-gray-300 leading-relaxed font-light  hover:text-lg hover:font-extrabold  transition-all duration-400">
                            μCR is about to embark on an amazing ride with SPECTRA , our biggest tech event of the year! 
                            Brace yourselves for an unforgettable journey where you’ll get hands-on experience building your very own hovercraft! 
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
            <Resources />
            <Team />
            <section className="container mx-auto p-10">
                <h2 className="text-4xl font-bold text-violet-400 mb-8 font-mono">Past Events</h2>
                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center bg-gray-800 rounded-lg overflow-hidden shadow-xl"
                    >
                        <img src="./IMG_20240910_174740435_HDR.jpg" alt="Event 1" className="w-1/3 object-cover h-64 p-4" />
                        <div className="p-6 w-2/3">
                            <h3 className="text-2xl font-semibold text-violet-300 mb-2">Orientation for the first years</h3>
                            <p className="text-gray-400">A diverse group of students gathered for the UCR Orientation, each eager to dive into the exciting world of automation and technology. The session kicked off with an overview of the cutting-edge robotics programs offered, highlighting opportunities for hands-on learning, interdisciplinary collaboration, and research initiatives. As they networked with faculty, industry professionals, and seniors, a shared sense of excitement filled the room—fueling their ambition to explore new technologies, solve complex challenges, and contribute to the future of robotics.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-row-reverse items-center bg-gray-800 rounded-lg overflow-hidden shadow-xl"
                    >
                        <img src="./elixir.jpeg" alt="Event 2" className="w-1/3 object-cover h-64 p-3 rounded-xl" />
                        <div className="p-6 w-2/3">
                            <h3 className="text-2xl font-semibold text-violet-300 mb-2">ELIXIR</h3>
                            <p className="text-gray-400">In ELIXIR, students were guided step-by-step through the process of building a gesture-controlled robot, which they would later use in an upcoming hands-on session. The workshop began with an introduction to the fundamental components—sensors, actuators, and microcontrollers—that would allow the robot to respond to human movements. With the support of expert seniors, students learned how to code the necessary algorithms and wire the hardware, fine-tuning each element to ensure their robots could accurately interpret gestures. This session not only sharpened their technical skills but also inspired creativity, as they saw how their ideas could come to life through hands-on robotics.</p>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* <Alumini/> */}

            <footer className="bg-gray-900 text-gray-300 py-2">
                        
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-2xl font-bold text-violet-400">Follow µCR </h3>
                            <p className="mt-2">Connect with us on social media</p>
                        </div>
                        <div className="flex space-x-4 px-5">

                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-violet-500 transition-colors duration-300">
                                <i className="fab fa-instagram text-gray-300 hover:text-white transition-colors duration-300"><img src="https://imgs.search.brave.com/_3B2Ev7N0wC3w0m-le4loyK5gRcOrnImthKqiH3LifE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9pbnN0YWdy/YW0taWNvbi01MTJ4/NTEyLWdnaDh4M2Nu/LnBuZw" alt="" /></i>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-violet-500 transition-colors duration-300">
                                <i className="fab fa-linkedin-in text-gray-300 hover:text-white transition-colors duration-300"><img src="https://imgs.search.brave.com/MspQtFIstYWh9I8XCeYe5l4nU74LF8jy4FSQ1wvWJAU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvMTc0LzE3NDg1/Ny5wbmc" alt="" /></i>
                            </a>
                        </div>
                    </div>
                    <div className="mt-3 mb-3 text-center">
                        <p>&copy; 2024 µCR. All rights reserved. <a className='font-bold text-violet-500' href="https://www.linkedin.com/in/yash-gupta-21b526282/" target='_blank'>Made by 🦉</a></p>
                        <p> </p>
                    </div>
                </div>
            </footer>
        </div>

    );
}