import React from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";
import TagTitle from "./TagTitle";
import { motion } from "framer-motion";
import { reveal, contactAnimation, veal, easing } from "../utils/Animations";
import { useScroll } from "../hook/useScroll";
export default function Contact() {
  const [element, controls] = useScroll();
  return (
    <div
      ref={element}
      id="Contact"
      className=" relative overflow-hidden bg-gray-900 dark:bg-gray-900 px-4 pb-12 sm:mb-0"
    >
      <div className=" absolute bottom-2 left-10 rounded-full h-52 w-52 blur-xl bg-gradient-to-r from-gray-900/40  to-sky-700/40 "></div>
      <div className=" absolute top-10 right-12 rounded-full h-52 w-52 blur-xl bg-gradient-to-r from-gray-900/40  to-gray-700 "></div>
      <TagTitle title={"Contact Section"}></TagTitle>
      <motion.section
        initial="hidden"
        animate="show"
        variants={contactAnimation}
        transition={{
          delay: 0.2,
          ease: easing,
          duration: 1.5,
          stiffness: 300,
        }}
        className="py-4 mx-auto  md:w-5/6 rounded-2xl shadow-2xl bg-gray-500/10 backdrop-blur  border border-sky-500/30"
      >
        <div className="grid grid-cols-1  gap-10  lg:grid-cols-3 ">
          <div className=" flex justify-center items-center">
            <div>
            <div className=" flex items-center  relative group transition-all duration-300 cursor-pointer mb-7">
              <div className="flex items-center  relative p-4 mr-6  rounded-full bg-gray-500/20 text-sky-500/80 z-10 backdrop-blur-md border border-sky-500/40 font-bold text-gray-300 group transition-all duration-300 cursor-pointer"><div className=" top-3/4 left-4  absolute bg-sky-500/80 h-4 w-8 group-hover:h-6 group-hover:w-10 rounded-full blur transition-all duration-300">
                </div> <Image
              className=" group-hover:scale-110 scale-75 transition-all duration-300"
              src="/icon/location.png"
              alt="Picture"
              layout="fixed"
              width={35}
              height={35}
            />
</div>
       
                
        
<div className="flex items-center  relative p-3  rounded-full bg-gray-500/20 text-sky-500/80 z-10 backdrop-blur-md border border-sky-500/40 font-bold text-gray-300 group-hover:translate-x-2 transition-all duration-500"><div className=" top-3/4 left-4  absolute bg-sky-500/80 h-4 w-10/12 rounded-full blur-lg"></div> <span className="ml-2 text-lg  duration-500">Chittagong, Bangladesh</span></div>
                
                
                
           </div>

           <div className=" flex items-center  relative group transition-all duration-300 cursor-pointer mb-7">
              <div className="flex items-center  relative p-4 mr-6  rounded-full bg-gray-500/20 text-sky-500/80 z-10 backdrop-blur-md border border-sky-500/40 font-bold text-gray-300 group transition-all duration-300 cursor-pointer"><div className=" top-3/4 left-4  absolute bg-sky-500/80 h-4 w-8 group-hover:h-6 group-hover:w-10 rounded-full blur transition-all duration-300">
                </div> <Image
              className=" group-hover:scale-110 scale-75 transition-all duration-300"
              src="/icon/mobile.png"
              alt="Picture"
              layout="fixed"
              width={35}
              height={35}
            />
</div>
       
                
        
<div className="flex items-center  relative p-3  rounded-full bg-gray-500/20 text-sky-500/80 z-10 backdrop-blur-md border border-sky-500/40 font-bold text-gray-300 group-hover:translate-x-2 transition-all duration-500 px-10"><div className=" top-3/4 left-4  absolute bg-sky-500/80 h-4 w-10/12 rounded-full blur-lg"></div> <span className="text-lg  duration-500">008801830225388</span></div>
                
                
                
           </div> 

           <div className=" flex items-center  relative group transition-all duration-300 cursor-pointer mb-7">
              <div className="flex items-center  relative p-4 mr-6  rounded-full bg-gray-500/20 text-sky-500/80 z-10 backdrop-blur-md border border-sky-500/40 font-bold text-gray-300 group transition-all duration-300 cursor-pointer"><div className=" top-3/4 left-4  absolute bg-sky-500/80 h-4 w-8 group-hover:h-6 group-hover:w-10 rounded-full blur transition-all duration-300">
                </div> <Image
              className=" group-hover:scale-110 scale-75 transition-all duration-300"
              src="/icon/email.png"
              alt="Picture"
              layout="fixed"
              width={35}
              height={35}
            />
</div>
       
                
        
<div className="flex items-center  relative p-3  rounded-full bg-gray-500/20 text-sky-500/80 z-10 backdrop-blur-md border border-sky-500/40 font-bold text-gray-300 group-hover:translate-x-2 transition-all duration-500"><div className=" top-3/4 left-4  absolute bg-sky-500/80 h-4 w-10/12 rounded-full blur-lg"></div> <span className="ml-2 text-lg  duration-500">raselkazi080@gmail.com</span></div>
                
                
                
           </div>
           
      
 

            </div>
          </div>

          <div className=" sm:px-6 sm:pb-4 col-span-2 my-6">
            <ContactForm></ContactForm>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
