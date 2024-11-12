
import { motion } from 'framer-motion';
import { useRef } from 'react';

const Team = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div>
      <h2 className="p-8 text-5xl font-bold text-center text-violet-400 transition-all duration-300 font-mono">Meet the Team</h2>

      

      <main  className="p-6 flex space-x-6 justify-center pb-10">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 rounded-lg shadow-xl overflow-hidden flex-shrink-0 w-64 transition-all duration-300"
        >
          <a href="https://www.linkedin.com/in/kamal2311/" target='_blank'>
            <div className="p-6">
              <div className="text-center">
                <h3 className="font-semibold text-xl mb-4 text-violet-300">Senior Advisor</h3>
                <motion.img 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src="./team/Kamal.png"
                  alt="img"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-lg font-medium text-gray-200">Kamal Garg</p>
              </div>
            </div>
          </a>
        </motion.div>
    <motion.div 
        whileHover={{ scale: 1.05 }}
        className="bg-gray-800 rounded-lg shadow-xl overflow-hidden flex-shrink-0 w-64 transition-all duration-300"
    >
<a href="https://www.linkedin.com/in/ridhima-m7903/" target='_blank`'>
<div className="p-6">
            <div className="text-center">
                <h3 className="font-semibold text-xl mb-4 text-violet-300">Senior Advisor</h3>
                <motion.img 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src="./team/Ridhima.jpg"
                    alt="img"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-lg font-medium text-gray-200">Ridhima Mahajan</p>
                
            </div>
        </div>
</a>
    </motion.div>
    <motion.div 
        whileHover={{ scale: 1.05 }}
        className="bg-gray-800 rounded-lg shadow-xl overflow-hidden flex-shrink-0 w-64 transition-all duration-300"
    >
        <a href="google.com" target='_blank'>
<div className="p-6">
            <div className="text-center">
                <h3 className="font-semibold text-xl mb-4 text-violet-300">Senior Advisor</h3>
                <motion.img 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src="./team/Aryan.jpg"
                    alt="img"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-lg font-medium text-gray-200">Aryan Chauhan
                </p>
                
            </div>
        </div>
</a>
    </motion.div>
    </main>
    <div className="flex justify-center mb-4">
        <button onClick={scrollLeft} className="mr-2 p-2 bg-violet-400 text-white rounded">←</button>
        <button onClick={scrollRight} className="p-2 bg-violet-400 text-white rounded">→</button>
      </div>

      <main ref={scrollRef} className="p-6 flex overflow-hidden space-x-6 pb-10 hide-scrollbar">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 rounded-lg shadow-xl overflow-hidden flex-shrink-0 w-64 transition-all duration-300"
        >
        <a href="https://www.linkedin.com/in/ujjawal-garg-588585202" target='_blank'>
<div className="p-6">
            <div className="text-center">
                <h3 className="font-semibold text-xl mb-4 text-violet-300">Technical Head</h3>
                <motion.img 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src='./team/Ujjwal.jpg'
                    alt="img"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-lg font-medium text-gray-200">Ujjawal Garg
                </p>
                
            </div>
        </div>
</a>
    </motion.div>
    <motion.div 
        whileHover={{ scale: 1.05 }}
        className="bg-gray-800 rounded-lg shadow-xl overflow-hidden flex-shrink-0 w-64 transition-all duration-300"
    >
        <a href="https://www.linkedin.com/in/mohit-ranjan-77485b23b/" target='_blank'>
<div className="p-6">
            <div className="text-center">
                <h3 className="font-semibold text-xl mb-4 text-violet-300">Technical Head</h3>
                <motion.img 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src="./team/Mohit.jpg"
                    alt="img"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-lg font-medium text-gray-200">Mohit Ranjan</p>
                
            </div>
        </div>
</a>
    </motion.div>
    <motion.div 
        whileHover={{ scale: 1.05 }}
        className="bg-gray-800 rounded-lg shadow-xl overflow-hidden flex-shrink-0 w-64 transition-all duration-300"
    >
        <a href="https://www.linkedin.com/in/atishay-jain-1a6b24251/" target='_blank'>
<div className="p-6">
            <div className="text-center">
                <h3 className="font-semibold text-xl mb-4 text-violet-300">Technical Head</h3>
                <motion.img 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src="./team/atishya.png"
                    alt="img"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-lg font-medium text-gray-200">Atishay Jain
                </p>
                
            </div>
        </div>
</a>
    </motion.div>
    <motion.div 
        whileHover={{ scale: 1.05 }}
        className="bg-gray-800 rounded-lg shadow-xl overflow-hidden flex-shrink-0 w-64 transition-all duration-300"
    >
        <a href="https://www.linkedin.com/in/r1ashwin" target='_blank'>
<div className="p-6">
            <div className="text-center">
                <h3 className="font-semibold text-xl mb-4 text-violet-300">Technical Head</h3>
                <motion.img 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src="./team/Ashwin.jpg"
                    alt="img"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-lg font-medium text-gray-200">Ashwin S Deshpande
                </p>
                
            </div>
        </div>
</a>
    </motion.div>
    <motion.div 
        whileHover={{ scale: 1.05 }}
        className="bg-gray-800 rounded-lg shadow-xl overflow-hidden flex-shrink-0 w-64 transition-all duration-300"
    >
        <a href="https://www.linkedin.com/in/shrankhala-singh-565165269/" target='_blank'>
<div className="p-6">
            <div className="text-center">
                <h3 className="font-semibold text-xl mb-4 text-violet-300">Technical Head</h3>
                <motion.img 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src="./team/shrankhla.jpg"
                    alt="img"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-lg font-medium text-gray-200">Shrankhala Singh
                </p>
                
            </div>
        </div>
</a>
    </motion.div>
    <motion.div 
        whileHover={{ scale: 1.05 }}
        className="bg-gray-800 rounded-lg shadow-xl overflow-hidden flex-shrink-0 w-64 transition-all duration-300"
    >
        <a href="https://www.linkedin.com/in/ayush-dubey-122a75271/" target='_blank'>
<div className="p-6">
            <div className="text-center">
                <h3 className="font-semibold text-xl mb-4 text-violet-300">Management Head</h3>
                <motion.img 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src="./team/ayushPa.png"
                    alt="img"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-lg font-medium text-gray-200">Ayush Dubey
                </p>
                
            </div>
        </div>
</a>
    </motion.div>
    <motion.div 
        whileHover={{ scale: 1.05 }}
        className="bg-gray-800 rounded-lg shadow-xl overflow-hidden flex-shrink-0 w-64 transition-all duration-300"
    >
        <a href="https://www.linkedin.com/in/deepanshu-singhal-030221270/" target='_blank'>
<div className="p-6">
            <div className="text-center">
                <h3 className="font-semibold text-xl mb-4 text-violet-300">Management Head</h3>
                <motion.img 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src="./team/deepanshu.jpg"
                    alt="img"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-lg font-medium text-gray-200">Deepanshu Singhal
                </p>
                
            </div>
        </div>
</a>
    </motion.div>
    <motion.div 
        whileHover={{ scale: 1.05 }}
        className="bg-gray-800 rounded-lg shadow-xl overflow-hidden flex-shrink-0 w-64 transition-all duration-300"
    >
        <a href="https://www.linkedin.com/in/ishika-arora-8b82a1289" target='_blank'>
<div className="p-6">
            <div className="text-center">
                <h3 className="font-semibold text-xl mb-4 text-violet-300">Management Head</h3>
                <motion.img 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src="./team/Ishika.jpg"
                    alt="img"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-lg font-medium text-gray-200">Ishika Arora
                </p>
                
            </div>
        </div>
</a>
    </motion.div>

    <motion.div 
        whileHover={{ scale: 1.05 }}
        className="bg-gray-800 rounded-lg shadow-xl overflow-hidden flex-shrink-0 w-64 transition-all duration-300"
    >
        <a href="https://www.linkedin.com/in/amulaya-agarwal-492024207/" target='_blank'>
<div className="p-6">
            <div className="text-center">
                <h3 className="font-semibold text-xl mb-4 text-violet-300">Finance Head</h3>
                <motion.img 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src="./team/amulya.jpg"
                    alt="img"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-lg font-medium text-gray-200">Amulaya Agarwal
                </p>
                
            </div>
        </div>
</a>
    </motion.div>
    <motion.div 
        whileHover={{ scale: 1.05 }}
        className="bg-gray-800 rounded-lg shadow-xl overflow-hidden flex-shrink-0 w-64 transition-all duration-300"
    >
        <a href="https://www.linkedin.com/in/sujay-kumar-srivastava-564a412a5" target='_blank'>
<div className="p-6">
            <div className="text-center">
                <h3 className="font-semibold text-xl mb-4 text-violet-300">Finance Head</h3>
                <motion.img 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src="./team/Sujay.jpg"
                    alt="img"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-lg font-medium text-gray-200">Sujay Kumar Srivastava
                </p>
                
            </div>
        </div>
</a>
    </motion.div>
    <motion.div 
        whileHover={{ scale: 1.05 }}
        className="bg-gray-800 rounded-lg shadow-xl overflow-hidden flex-shrink-0 w-64 transition-all duration-300"
    >
        <a href="https://www.linkedin.com/in/ayush-pandey-b86659291/" target='_blank'>
<div className="p-6">
            <div className="text-center">
                <h3 className="font-semibold text-xl mb-4 text-violet-300">Digital Head</h3>
                <motion.img 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src="./team/ayushdu.png"
                    alt="img"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-lg font-medium text-gray-200">Ayush Pandey
                </p>
                
            </div>
        </div>
</a>
    </motion.div>

    <motion.div 
        whileHover={{ scale: 1.05 }}
        className="bg-gray-800 rounded-lg shadow-xl overflow-hidden flex-shrink-0 w-64 transition-all duration-300"
    >
        <a href="https://www.linkedin.com/in/divyanshi-gupta-7a65bb2b6" target='_blank'>
<div className="p-6">
            <div className="text-center">
                <h3 className="font-semibold text-xl mb-4 text-violet-300">Creative Head</h3>
                <motion.img 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src="./team/divyanshi.png"
                    alt="img"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-lg font-medium text-gray-200">Divyanshi Gupta
                </p>
            </div>
        </div>
        </a>
    </motion.div>
    <motion.div 
        whileHover={{ scale: 1.05 }}
        className="bg-gray-800 rounded-lg shadow-xl overflow-hidden flex-shrink-0 w-64 transition-all duration-300"
        >
        <a href="https://www.linkedin.com/in/sarthak-khurana-b11b52252" target='_blank'>
<div className="p-6">
            <div className="text-center">
                <h3 className="font-semibold text-xl mb-4 text-violet-300">Maketing Head</h3>
                <motion.img 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src="./team/Sarthak.jpg"
                    alt="img"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                <p className="text-lg font-medium text-gray-200">Sarthak Khurana
                </p>
            </div>
        </div>
                    </a>
    </motion.div>
</main>
    </div>
  )
}

export default Team;
