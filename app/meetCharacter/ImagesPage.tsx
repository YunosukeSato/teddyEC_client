import Image from 'next/image';
import { images } from './images';
import { ImageData } from './images';


interface ImagesPageProps {
  onClickImage: (image: ImageData) => void;
}

export default function ImagesPage({ onClickImage }: ImagesPageProps) {
  return (
    <div className='flex'>
      {images.map((image, index) => (
        <div key={index} onClick={() => onClickImage(image)}>
          <Image
            className='p-3'
            src={image.url}
            alt={image.description}
            width={316}
            height={409}
          />
        </div>
      ))}
    </div>
  );
}


