'use client';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <section className="w-full h-screen bg-black flex justify-center ">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src="/images_lp/HeroSection_Background.png"
              alt="Background Image"
              fill
              style={{ objectFit: 'cover', objectPosition: 'bottom' }}
            />
            {/* Adding gradient overlay */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t z-20 from-[#00000084] to-transparent md:hidden"></div>
          </div>
          {/* Container for the Laptop and Mobile Image */}
          {/* Laptop Image */}
          <div className="absolute hidden md:flex justify-center items-start top-0 left-0 bottom-0 w-full h-full">
            <Image
              src="/images_lp/Character_Hero.png"
              alt="Laptop Image"
              fill
              style={{ objectFit: 'contain', objectPosition: 'bottom', height: '100%', widows: '100%' }}
            />
          </div>
          {/* Mobile Image */}
          <div className="absolute flex md:hidden mt-36 justify-center items-start top-0 z-10 left-0 bottom-0 w-full h-full">
            <Image
              src="/images_lp/Character_Doctor.png"
              alt="Mobile Image"
              width={555}
              height={608}
              style={{ objectFit: 'cover', objectPosition: 'bottom', height: '80%', widows: '80%' }}
            />
          </div>
        </div>
        <div className="absolute left-1/2 bottom-10 z-30 -translate-x-1/2 md:hidden">
          <button
            className="font-LDR bg-[#CE8C3D] text-white border-2 border-[#e1e0e0] rounded-md text-center 
                      whitespace-nowrap  transition-colors duration-300 ease-in-out md:text-lg text-lg py-1 px-5"
          >
            LEARN MORE
          </button>
        </div>
      </section>
    </>
  );
}
