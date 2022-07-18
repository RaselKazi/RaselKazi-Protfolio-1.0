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
      <div className=" animate-pulse absolute bottom-2 left-10 rounded-full h-52 w-52 blur bg-gradient-to-r from-gray-900/40  to-sky-700/40 "></div>
      <div className="animate-pulse absolute top-10 right-12 rounded-full h-52 w-52 blur-sm bg-gradient-to-r from-gray-900/40  to-gray-700 "></div>
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
        <div className="grid grid-cols-1 gap-6   lg:grid-cols-3 ">
          <div className=" flex justify-center items-center">
            <div>
              <a
                href="#Contact"
                className="flex items-center rounded-md  bg-gradient-to-t from-red-300
                to-red-900 hover:scale-105 transition-all duration-300 shadow-lg shadow-red-500/30 text-gray-100 py-2 px-3 my-4"
              >
                <Image
              className=" "
              src="/icon/location.png"
              alt="Picture"
              layout="fixed"
              width={35}
              height={35}
            />

                <span className="ml-2">Chittagong, Bangladesh</span>
              </a>

              <a
                href="#Contact"
                className="flex items-center rounded-md  bg-gradient-to-t from-gray-400
                to-gray-700 hover:scale-105 transition-all duration-300 shadow-xl shadow-gray-500/30 text-gray-100 py-2 px-3 my-4"
              >
                <Image
              className=""
              src="/icon/mobile.png"
              alt="Picture"
              layout="fixed"
              width={35}
              height={35}
            />

                <span className="ml-2">008801830225388</span>
              </a>

              <a
                href="#Contact"
                className="flex items-center rounded-md  bg-gradient-to-t from-pink-400
                to-pink-800 hover:scale-105 transition-all duration-300 shadow-xl shadow-pink-400/30 text-gray-100 py-2 px-3 my-4"
              >
               <Image
              className=" "
              src="/icon/email.png"
              alt="Picture"
              layout="fixed"
              width={35}
              height={35}
            />

                <span className="ml-3">raselkazi080@gmail.com</span>
              </a>
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
