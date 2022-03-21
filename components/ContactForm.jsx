import { useForm } from "react-hook-form";
import React, { useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(process.env.YOUR_SERVICE_ID);
    emailjs
      .sendForm(
        process.env.YOUR_SERVICE_ID,
        process.env.YOUR_TEMPLATE_ID,
        form.current,
        process.env.YOUR_USER_ID
      )
      .then(
        (result) => {
          Swal.fire(
            `Good job!  ${data.name}`,
            "Your Message was sent successfully!",
            "success"
          );
        },
        (error) => {
          Swal.fire("Oops...", "Something went wrong!", "error");
        }
      );
  };

  return (
    <form ref={form} onSubmit={handleSubmit(onSubmit)}>
      <div className="  px-6">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 ">
          <div className="w-full mx-2">
            <label className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-200">
              Name
            </label>

            <input
              className="w-full px-4 py-2 text-gray-300 bg-gray-800 border border-gray-600 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none"
              type="text"
              placeholder="Name"
              {...register("name", { required: true, maxLength: 50 })}
            />
            <p className="my-2 text-xs italic text-red-500">
              {errors.name?.type === "required" && "Please input Your Name"}
            </p>
          </div>

          <div className="w-full mx-2 mt-4 md:mt-0">
            <label className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-200">
              E-mail
            </label>
            <input
              className=" w-full px-4 py-2 text-gray-300 bg-gray-800 border border-gray-600 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none"
              type="email"
              placeholder="Email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            <p className="my-2 text-xs italic text-red-500">
              {errors.Email?.type === "required" && "Please Email is required"}
            </p>
          </div>
        </div>
        <div>
          <div className=" mt-4 pl-2 ">
            <label className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-200">
              Message
            </label>

            <textarea
              className="w-full px-4 py-2 text-gray-300 bg-gray-800 border border-gray-600 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none"
              {...register("message", { required: true, max: 300 })}
            ></textarea>
            <p className="my-2 text-xs italic text-red-500">
              {errors.message?.type === "required" &&
                "Please Email is required"}
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 font-medium text-white transition duration-200 rounded-full  bg-gradient-to-t from-cyan-500
                  to-blue-600 hover:scale-110 focus:shadow-outline focus:outline-none mr-4 bg-cyan-500 shadow-xl shadow-cyan-500/30"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
