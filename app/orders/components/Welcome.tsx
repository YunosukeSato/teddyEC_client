import React from 'react';
import Image from 'next/image';

function Welcome() {
  return (
    <>
      <div className="flex justify-center w-full overflow-hidden lg:h-96 md:h-80 clip-path-custom">
        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-50 blur-md"></div>
        <Image
          src="/images_lp/HeroSection_Background.png"
          alt="Background Image"
          width={1500}
          height={50}
          style={{ objectFit: 'cover', objectPosition: 'bottom' }}
        />
        <div className="absolute lg:top-32 md:top-32 top-24 flex justify-center">
          <div className="mx-16 text-transparent bg-clip-text bg-gradient-to-b from-white lg:text-9xl md:text-7xl text-6xl font-LDR">
            Welcome
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
