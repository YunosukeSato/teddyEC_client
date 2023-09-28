import Image from 'next/image';

function OnlineMerch() {
  return (
    <>
      <div className="flex justify-center w-full overflow-hidden h-96 clip-path-custom">
        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-50 blur-md"></div>
        <Image
          src="/images_lp/HeroSection_Background.png"
          alt="Background Image"
          width={1500}
          height={50}
          style={{ objectFit: 'cover', objectPosition: 'bottom' }}
        />
        <div className="absolute top-36 flex justify-center">
          <Image
            src="/images_lp/Subtract.png"
            alt="Subtract Image"
            width={100}
            height={100}
            style={{ objectFit: 'cover', objectPosition: 'bottom' }}
          />
          <div className=" mx-16 text-transparent bg-clip-text bg-gradient-to-b from-white text-8xl font-LDR">
            MERCH
          </div>
          <Image src="/images_lp/Subtract.png" alt="Subtract Image" width={100} height={100} />
        </div>
      </div>
    </>
  );
}

export default OnlineMerch;
