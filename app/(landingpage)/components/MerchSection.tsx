'use client';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';

import useWindowSize from '@/app/hooks/useWindowSize';

export default function MerchSection() {
  const windowSize = useWindowSize();

  return (
    <div>
      <div className="text-center flex flex-col items-center w-full h-full relative">
        <h1
          className="md:bottom-32 left-0 right-0 text-transparent
           bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#adadad] md:via-[#464646] to-[#000000] text-[90px] md:text-[280px] font-LDR
           md:-translate-y-14
           "
        >
          MERCH
        </h1>

        <Image
          src={'/images_lp/merchIMG.png'}
          alt="merchIMG"
          width={windowSize > 768 ? 670 : 300}
          height={windowSize > 768 ? 670 : 300}
          className={`object-contain z-20 absolute ${windowSize > 768 ? ' top-16' : 'top-10'}`}
        />
        <button className="rounded-md flex justify-center bg-[#CE8C3D] md:hover:bg-[#9A682D]  mt-32 focus:bg-transparent text-white border-2 font-LDR text-lg md:text-2xl px-4 py-1">
          ONLINE STORE
        </button>
      </div>

      <div className="w-full relative ">
        <div className="absolute  w-full h-[1px] top-10 bg-gradient-line"></div>
      </div>

      <div className="flex flex-col justify-center items-center mt-10">
        <div className="w-full h-full mt-10 px-5 lg:px-36">
          <div className="relative w-full h-[143px] mx-auto mt-10 border text-center border-white rounded-xl text-white font-LDR p-8 bg-gradient-to-b from-transparent via-[#c1bebe1a] to-[#c1bebe55] ">
            <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black px-2 whitespace-nowrap">
              <p className="font-LDR text-base md:text-3xl tracking-widest">WHAT PEOPLE ARE SAYING</p>
            </div>
            <div className="">
              <p className="top-12 w-full text-[#b5b5b5] text-base lg:text-lg tracking-wide font-Poppins italic mt-2 lg:mt-5">
                "I love this Game. It's easy to play, art is great and it's f*cking fun!"
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center mt-32 md:mt-20 md:mb-10">
          <div className="w-[350px] h-[200px] md:w-[645px] md:h-[363px]">
            <iframe
              src="https://www.youtube.com/embed/RJQPthD9rx8"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
