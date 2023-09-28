import Image from 'next/image';

export default function HowToPlay() {
  return (
    <>
      <section className="w-full h-[518px] md:h-[680px]">
        <div className="w-full md:hidden flex text-center justify-center">
          <p className="font-LDR text-white text-3xl tracking-widest my-10">HOW TO PLAY?</p>
        </div>
        <div className="md:w-full md:h-full md:flex justify-center md:gap-x-10">
          <div className="w-full md:w-1/2 flex justify-center md:mt-36 md:ml-36">
            <div className="w-[296px] h-[167px] md:w-[645px] md:h-[363px]">
              <iframe
                src="https://www.youtube.com/embed/RJQPthD9rx8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:mt-28 md:mr-36">
            <div className="w-full h-auto mt-7 flex justify-center text-center md:text-left">
              <div className="w-[296px] md:w-full h-auto">
                <div className="w-full md:flex hidden text-center justify-center">
                  <p className="font-LDR text-white text-3xl tracking-widest my-10">HOW TO PLAY?</p>
                </div>
                <p className="text-white font-Poppins text-base md:text-2xl tracking-wi">
                  In this game your goal is either to protect – if you&apos;re playing as Teddies – or to eat – if
                  you&apos;re playing as Monsters – as many kids as possible.
                </p>
              </div>
            </div>
            <div className="text-white font-LDR text-base md:text-2xl flex justify-center">
              <div className="w-[296px] md:w-full my-6 border">
                <button className="w-full flex justify-center bg-[#CE8C3D] md:hover:bg-[#9A682D] focus:bg-transparent md:p-2">
                  DOWNLOAD INSTRUCTIONS
                  <Image
                    src="/images_lp/buttonICON.svg"
                    alt="buttonICON"
                    width={24}
                    height={24}
                    style={{ objectFit: 'cover', objectPosition: 'bottom' }}
                    className="ml-2"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
