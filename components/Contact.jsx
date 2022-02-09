import React from "react";
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
      className=" relative overflow-hidden dark:bg-gray-900 px-4 pb-12 sm:mb-0"
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
                className="flex  text-gray-900 rounded-md my-2 dark:text-gray-100 dark:hover:text-blue-500 hover:text-blue-500"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="">Chittagong, Bangladesh</span>
              </a>

              <a
                href="#Contact"
                className="flex text-gray-900  my-4 dark:text-gray-100 dark:hover:text-blue-500 hover:text-blue-500"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>

                <span className="">008801830225388</span>
              </a>

              <a
                href="#Contact"
                className="flex   text-gray-900 rounded-md dark:text-gray-100 dark:hover:text-blue-500 hover:text-blue-500"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>

                <span className="">raselkazi080@gmail.com</span>
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
