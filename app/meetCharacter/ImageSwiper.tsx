import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import { ImageData, images } from './images';

type ImagesMainPageProps = {
  selectedImage: ImageData | null;
  onClickImage: (image: ImageData) => void;
};

export default function ImageSwiper({ selectedImage, onClickImage }: ImagesMainPageProps) {
  if (!selectedImage) return null;

  const reversedImages = [...images].reverse();
  const [activeSlide, setActiveSlide] = useState<number | null>(0);
  const [isSwiperReady, setSwiperReady] = useState(false);

  return (
    <div className="md:hidden h-full flex justify-center gap-10">
      <Swiper
        className="h-full"
        style={{
          cursor: 'grab',
          opacity: isSwiperReady ? 1 : 0,
        }}
        effect={'coverflow'}
        initialSlide={images.length - 1}
        onSwiper={(swiper) => {
          console.log('hey', swiper);
          setSwiperReady(true);
        }}
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
        {reversedImages.map((imageData, i) => (
          <SwiperSlide key={imageData.id} onClick={() => onClickImage(imageData)}>
            <div className="relative h-full">
              <Image
                className="mx-auto xs:w-[200px] sm:w-[300px]"
                width={250}
                height={324}
                src={imageData.url}
                alt={imageData.description}
              />

              <div
                className={`p-5 mt-5 absolute top-1/2 left-0 bg-opacity-70 bg-black
                     text-white transition-opacity duration-300 ${activeSlide === i ? 'opacity-100' : 'opacity-0'}`}
              >
                <div className="text-sm">
                  <h1 className="font-LDR text-transparent bg-clip-text bg-gradient-to-b from-[#bdbdbd] text-4xl mb-2">
                    {imageData.name}
                  </h1>
                  <p className="font-light">Strength: {imageData.strength}</p>
                  <p className="font-light">Weakness: {imageData.weakness}</p>
                  <p className="mt-3 font-thin">{imageData.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
