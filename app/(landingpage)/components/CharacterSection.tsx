'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import useWindowSize from '@/app/hooks/useWindowSize';

const CharacterSection = () => {
  const size = useWindowSize();
  const smWindowSize = 420;

  return (
    size > 0 && (
      <section
        id="characters-section"
        className="relative bg-no-repeat bg-bg_2 xs:bg-fill sm:bg-cover bg-center border-t-2 border-b-2 w-full xs:h-screen sm:h-full pt-20 darkened-gradient"
      >
        <h1 className="text-center relative z-20 text-3xl mb-28 font-LDR text-white">MEET THE CHARACTERS</h1>
        <Swiper
          style={{ cursor: 'grab' }}
          effect={'coverflow'}
          initialSlide={2}
          breakpoints={{
            smWindowSize: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            580: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          loop={true}
          coverflowEffect={{
            stretch: 570,
            depth: 400,
            modifier: size < smWindowSize ? 1 : 0,
            slideShadows: true,
          }}
          modules={[EffectCoverflow]}
        >
          <SwiperSlide>
            <Image
              className="mx-auto xs:w-[250px] sm:w-[300px]"
              src="/characters/teddy01.png"
              alt="teddy1"
              width={316}
              height={409}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="mx-auto xs:w-[250px] sm:w-[300px]"
              src="/characters/monster01.png"
              alt="monster01"
              width={316}
              height={409}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="mx-auto xs:w-[250px] sm:w-[300px]"
              src="/characters/teddy02.png"
              alt="teddy02"
              width={316}
              height={409}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="mx-auto xs:w-[250px] sm:w-[300px]"
              src="/characters/monster02.png"
              alt="monster02"
              width={316}
              height={409}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              className="mx-auto xs:w-[250px] sm:w-[300px]"
              src="/characters/teddy01.png"
              alt="teddy1"
              width={316}
              height={409}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="mx-auto xs:w-[250px] sm:w-[300px]"
              src="/characters/monster01.png"
              alt="monster01"
              width={316}
              height={409}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="mx-auto xs:w-[250px] sm:w-[300px]"
              src="/characters/monster02.png"
              alt="monster02"
              width={316}
              height={409}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="mx-auto xs:w-[250px] sm:w-[300px]"
              src="/characters/teddy02.png"
              alt="teddy2"
              width={316}
              height={409}
            />
          </SwiperSlide>
        </Swiper>
        <div className="xs:absolute bottom-10 left-0 right-0 sm:relative sm:mt-48 sm:mb-14 flex justify-center items-center font-LDR">
          <button className="z-20 bg-[#CE8C3D] hover:bg-[#9A682D] focus:bg-transparent py-2 px-6 rounded-md outline outline-2 text-2xl my-6 md:my-2 text-white">
            SEE MORE
          </button>
        </div>
      </section>
    )
  );
};

export default CharacterSection;
