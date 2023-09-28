import Image from 'next/image';
import { ImageData } from './images';

type ImagesMainPageProps = {
  selectedImage: ImageData | null;
  onClickImage: (image: ImageData) => void;
};

export default function ImagesMainPage({ selectedImage }: ImagesMainPageProps) {
  if (!selectedImage) return null;

  return (
    <div className="h-full w-full mb-14 gap-40">
      <div className="flex justify-center">
        <div>
          <Image className="p-3" src={selectedImage.url} alt={selectedImage.description} width={316} height={409} />
        </div>

        <div className="relative w-[400px] p-10 h-full bg-black bg-opacity-50 self-center items-center text-white text-left">
          <div className="absolute -top-24 right-0 bg-gradient-line w-full h-[1px] mt-24 hidden md:block" />
          <div className="absolute bottom-0 right-0 bg-gradient-line w-full h-[1px] mt-24 hidden md:block" />
          <div className="text-sm">
            <h1 className="font-LDR text-transparent bg-clip-text bg-gradient-to-b from-[#bdbdbd] text-3xl mb-2">
              {selectedImage.name}
            </h1>
            <p className="font-light">Strength: {selectedImage.strength}</p>
            <p className="font-light">Weakness: {selectedImage.weakness}</p>
            <p className="mt-3 font-thin">{selectedImage.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
