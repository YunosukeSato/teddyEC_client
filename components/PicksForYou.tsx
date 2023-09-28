import { FC } from 'react';
import Image from "next/image";

interface RecommendationBoxProps {
  imageSrc: string;
  imageName: string;
  bagName: string;
  price: string;
}

const RecommendationBox: FC<RecommendationBoxProps> = ({ imageSrc, imageName, bagName, price }) => (
  <div className="w-full lg:w-[340px] h-[480px] border border-white flex justify-center items-center relative">
    <div className="w-[200px] h-[237px]">
      <Image src={imageSrc} alt={imageName} width={148} height={237} className="ml-8 w-full h-full" />
    </div>
    <div className="absolute bottom-0 left-4">
      <p className="font-semibold">{bagName}</p>
      <span className="text-xs">{price}</span>
    </div>
  </div>
);

const PicksForYou = () => {
  const products = [
    { imageSrc: '/product/bag_large.png', imageName: 'bag image', bagName: 'Teddy Tote Bag', price: '$30.00 CAD' },
    { imageSrc: '/product/bag_large.png', imageName: 'bag image', bagName: 'Teddy Tote Bag', price: '$30.00 CAD' },
    { imageSrc: '/product/bag_large.png', imageName: 'bag image', bagName: 'Teddy Tote Bag', price: '$30.00 CAD' },
    { imageSrc: '/product/bag_large.png', imageName: 'bag image', bagName: 'Teddy Tote Bag', price: '$30.00 CAD' },
  ];

  return (
    <div>
      <p className="text-[32px] text-center">You may also like</p>
      <div className="flex flex-col lg:flex-row w-full mt-[40px] gap-y-8 lg:gap-y-0">
        {products.map((product, index) => (
          <RecommendationBox key={index} {...product} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-x-2 mt-[44px]">
        <button className="text-2xl">See More</button>
        <Image src={'/product/Loading_button.svg'} alt={'Loading Button'} width={45} height={21} />
      </div>
    </div>
  )
}

export default PicksForYou
