import React from 'react'
import Image from "next/image";
export default function CertificateList({item}) {
  return (
    <div className=" relative  cursor-pointer group overflow-hidden p-1 border-2 border-dashed border-sky-600 rounded-xl">
            <Image
              className="rounded-xl saturate-50 transition duration-300 "
              src={`/image/Certificate/${item.img}.jpg`}
              alt="Picture of the author"
              layout="responsive"
              width={400}
              height={300}
            />
            <div className=" flex flex-col justify-center items-center p-2 sm:py-4 sm:px-6 absolute top-48 left-0 w-full h-full  opacity-0 transition-all duration-500  bg-gradient-to-t from-gray-900  to-gray-900/80 group-hover:top-0 group-hover:opacity-100">

            <p className=" text-sm sm:text-lg my-2 sm:my-2 md:text-xl lg:text-2xl font-bold text-gray-100">
         {item.title}
        </p>
        <p className=" hidden sm:block my-3  text-xs sm:text-xs lg:text-sm text-gray-400 text-center">
        {item.discretion}
        </p>
        <a
            target="_blank"
            className=" px-2 sm:px-3 font-bold text-sm sm:text-xl  text-white transition duration-200 rounded-md  bg-gradient-to-t from-pink-800 to-pink-500 hover:scale-110 focus:shadow-outline focus:outline-none shadow-xl shadow-pink-500/40 text-center"
            href={item.source}
            rel="noreferrer"
          >
            <button>Certificate</button>
          </a>
            </div>
          </div>
  )
}
