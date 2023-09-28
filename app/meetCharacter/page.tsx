'use client';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { useState } from 'react';
import ImagesPage from './ImagesPage';
import ImagesMainPage from './ImagesMainPage';
import { images, ImageData } from './images';
import ImageSwiper from './ImageSwiper';
import Link from 'next/link';

export default function Page() {
  const defaultImage = images.find((Image) => Image.id === 1) || null;

  const [selectedImage, setSelectedImage] = useState(defaultImage);

  const onClickImage = (image: ImageData) => {
    setSelectedImage(image);
  };

  return (
    <div className="mt-32 mb-16">
      <div className="w-full text-center mb-10 md:mb-0 relative">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#bdbdbd] text-4xl md:text-6xl font-LDR sticky translate-y-3 z-40  md:static">
          MEET THE CHARACTERS
        </h1>
        <div className="bg-gradient-line w-full h-[1px] mt-24 hidden md:block"></div>
      </div>

      <section
        id="characters-section"
        className="relative bg-bg_2 h-[550px] bg-no-repeat bg-center bg-cover w-full xs:h-screen sm:h-full md:py-20 darkened-gradient"
      >
        {/* Mobile Size */}
        <ImageSwiper onClickImage={onClickImage} selectedImage={selectedImage} />

        {/* PC Size */}
        <div className="hidden md:block">
          <ImagesMainPage onClickImage={onClickImage} selectedImage={selectedImage} />
        </div>
        <div className="hidden md:flex justify-center mx-20">
          <ImagesPage onClickImage={onClickImage} />
        </div>
      </section>
      <div className="mt-10 ml-10">
        <Link href="/" className="font-semibold text-white text-xl hover:text-[#CE8C3D]">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
