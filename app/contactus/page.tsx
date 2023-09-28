'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { BiPhoneCall } from 'react-icons/bi';
import { IoMailOutline } from 'react-icons/io5';
import { FiMapPin } from 'react-icons/fi';
import { Share,Facebook,Instagram } from 'iconsax-react';

export default function Page() {
  const schema = z.object({
    Name: z.string().nonempty().min(1),
    email: z.string().email(),
    phoneNumber: z
      .string()
      .regex(/^[0-9]*$/)
      .min(10)
      .max(15),
    message: z.string().nonempty(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="mt-16 md:mt-32 mb-24">
      <div className="w-full px-1 pt-16">
        <div className="w-full text-center mb-10 md:mb-20 relative">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#bdbdbd] text-5xl md:text-6xl font-LDR  first-letter mb-3 md:mb-10">
            CONTACT US
          </h1>
          <p className="text-[#bdbdbd] text-sm md:text-lg">Any question or remarks? Just write us a message!</p>
          <div className="absolute  w-full h-[1px] top-32 bg-gradient-line"></div>
        </div>

        <form
          className="flex flex-col gap-10 w-full sm:w-[80%] mx-auto p-2 bg-[#bebdbd] rounded-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex justify-center flex-col md:flex-row">
            <div
              className="flex flex-col items-left rounded-md  py-8 h-full w-full md:w-1/3 text-white p-10 mb-5 md:m-0
            bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900 via-pink-900 to-purple-950
            "
            >
              <h1 className="mb-1 font-bold text-base tracking-widest">Contact Information</h1>
              <p className="mb-5 md:mb-10 text-gray-400 text-sm">We are here for you!</p>
              <div className="flex gap-2 items-center my-3">
                <BiPhoneCall />
                <p className="text-[#ececec]">+1 778 123 456</p>
              </div>
              <div className="flex gap-2 items-center my-3">
                <IoMailOutline />
                <p className="text-[#ececec]">teddies@mosters.com</p>
              </div>
              <div className="flex gap-2 my-3">
                <FiMapPin />
                <div>
                  <p className="text-[#ececec]">101 E 1st Avenue, Vancouver BC</p>
                  <p className="text-[#ececec]">YVR321 Canada</p>
                </div>
              </div>
              <div className="flex gap-3 mt-3 md:mt-24">
                <div className="bg-white rounded-full inline-flex items-center p-2">
                  <Facebook size="22" color="black" />
                </div>
                <div className="bg-[#CE8C3D] rounded-full inline-flex items-center p-2">
                  <Instagram size="22" color="black" />
                </div>
                <div className="bg-white rounded-full inline-flex items-center p-2">
                  <Share size="22" color="black" />
                </div>
              </div>
            </div>

            <div className="h-full w-full md:w-2/3 md:m-5">
              <div className="w-full text-white mb-3">
                <p className="text-sm md:mb-1">Full Name</p>
                <input
                  {...register('Name')}
                  className="md:w-[100%] h-[40px] p-2 rounded-md bg-[#ffffff83] text-black focus:outline-none
                 border-2 border-white placeholder:text-black placeholder-opacity-50 px-4"
                />
                {errors.Name && <p className="text-red-400 pt-2">Name is required</p>}
              </div>
              <div className="flex gap-1 md:gap-5 mb-3">
                <div className="flex flex-col w-2/5">
                  <label className="text-sm text-white md:mb-1">Email</label>
                  <input
                    {...register('email')}
                    className="md:w-[100%] h-[40px] p-2 rounded-md bg-[#ffffff83] text-black focus:outline-none
                 border-2 border-white placeholder:text-black placeholder-opacity-50 px-4"
                  />
                  {errors.email && <p className="text-red-400 pt-2">Invalid email address</p>}
                </div>
                <div className="flex flex-col w-3/5">
                  <label className="text-sm text-white md:mb-1">Phone Number</label>
                  <input
                    {...register('phoneNumber')}
                    className="md:w-[100%] h-[40px] p-2 rounded-md bg-[#ffffff83] text-black focus:outline-none
                border-2 border-white placeholder:text-black placeholder-opacity-50 px-4"
                  />
                  {errors.phoneNumber && <p className="text-red-400 pt-2">Invalid phone number</p>}
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-col">
                  <label className="text-sm text-white md:mb-1">Write your Message...</label>
                  <textarea
                    {...register('message')}
                    className="md:w-[100%] h-[150px] pt-2 pb-6 px-4 rounded-md bg-[#ffffff83] text-black focus:outline-none
             border-2 border-white placeholder:text-zinc-500 placeholder-opacity-50 text-sm"
                    placeholder="Type your message here..."
                  />
                  {errors.message && <p className="text-red-400 pt-2">Message is required</p>}
                </div>
              </div>
              <div className="flex justify-end">
                <button className="w-full md:w-[25%] p-1 my-3 text-white border-white text-base focus:bg-transparent font-LDR bg-[#CE8C3D] hover:bg-[#9A682D] rounded-md outline outline-2">
                  Send MESSAGE
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
