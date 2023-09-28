'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { useState } from 'react';

export default function Page() {
  const [activeSlide, setActiveSlide] = useState<number | null>(null);

  return (
    <div className="mt-32 mb-24">
      <div className="w-full text-center mb-10 md:mb-0 relative">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#bdbdbd] text-6xl font-LDR sticky translate-y-3 z-50  md:static">
          About us
        </h1>
        <div className="bg-gradient-line w-full h-[1px] mt-24 hidden md:block"></div>
        <div className="bg-bg_2 bg-cover bg-center w-full h-[550px] absolute top-0 left-0 px-4 pt-10 md:hidden"></div>
      </div>

      <section
        id="characters-section"
        className="relative md:bg-bg_3 h-[550px] bg-no-repeat bg-center bg-cover w-full xs:h-screen sm:h-full md:py-20 darkened-gradient"
      >
        <div className="md:hidden h-full">
          <Swiper
            className="h-full" // Mobile Size
            style={{ cursor: 'grab' }}
            effect={'coverflow'}
            initialSlide={2}
            onSwiper={(swiper) => console.log('hey', swiper)}
            loop={false}
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
            coverflowEffect={{
              stretch: 570,
              depth: 400,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow]}
          >
            {/* SwiperSlides for Mobile go here */}
            {['about_man.png', 'about_bear.png', 'about_woman.png'].map((src, i) => (
              <SwiperSlide key={src}>
                <div className="relative h-full">
                  <Image
                    className="mx-auto xs:w-[200px] sm:w-[300px]"
                    src={`/image_aboutus/${src}`}
                    alt={src.replace('.png', '')}
                    width={250}
                    height={324}
                  />
                  <div
                    className={`p-5 mt-5 absolute top-1/2 left-0 bg-opacity-70 bg-black
                     text-white transition-opacity duration-300 ${activeSlide === i ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <p className="text-sm">
                      <span className="text-[#e49234]">We Make Games</span>(WMG) is a board game design and publishing
                      company based in Vancouver BC dedicated in designing great themed board games. Working in innovative
                      and imaginative themes to deliver great quality games.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden md:flex justify-center items-center h-full mb-14">
          {/* PC Size */}
          <div className="relative mx-5">
            <Image
              className="xs:w-[220px] sm:w-[270px]"
              src="/image_aboutus/about_man.png"
              alt="man"
              width={316}
              height={409}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center text-white text-left opacity-0 transition-opacity duration-300 hover:opacity-100">
              <p className="m-5 text-sm">
                <span className="text-[#e49234]">We Make Games</span>(WMG) is a board game design and publishing company
                based in Vancouver BC dedicated in designing great themed board games. Working in innovative and
                imaginative themes to deliver great quality games.
              </p>
            </div>
          </div>
          <div className="relative mx-5">
            <Image
              className="xs:w-[300px] sm:w-[350px]"
              src="/image_aboutus/about_bear.png"
              alt="bear"
              width={316}
              height={409}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center text-white text-left opacity-0 transition-opacity duration-300 hover:opacity-100">
              <p className="m-5 text-sm">
                <span className="text-[#e49234]">We Make Games</span>(WMG) is a board game design and publishing company
                based in Vancouver BC dedicated in designing great themed board games. Working in innovative and
                imaginative themes to deliver great quality games.
              </p>
            </div>
          </div>
          <div className="relative mx-5">
            <Image
              className="xs:w-[220px] sm:w-[270px]"
              src="/image_aboutus/about_woman.png"
              alt="woman"
              width={316}
              height={409}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center text-white text-left opacity-0 transition-opacity duration-300 hover:opacity-100">
              <p className="m-5 text-sm">
                <span className="text-[#e49234]">We Make Games</span>(WMG) is a board game design and publishing company
                based in Vancouver BC dedicated in designing great themed board games. Working in innovative and
                imaginative themes to deliver great quality games.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-gradient-line w-full h-[1px] hidden md:block"></div>
      <div className="w-full h-[1px] bg-gradient-line mt-5 xs:block md:hidden" />
      <h1 className="text-white text-xl font-thin text-center mt-5">"Quick, Chaotic, Fan!"</h1>
      <div className="w-full h-[1px] bg-gradient-line mt-5 xs:block md:hidden" />
    </div>
  );
}
