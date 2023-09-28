'use client';

import Image from 'next/image';
import PicksForYou from '@/components/PicksForYou';
import { fetchDataFromApi } from '@/utils/api';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice';
import { FC, useEffect, useState } from 'react';
import NavBar from '@/app/(landingpage)/components/NavBar';
import Button from '@/components/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface Product {
  attributes: any;
  id: number;
  name: string;
  price: number;
  materials?: string;
  estimatedArrivalDate?: string;
}

interface ImageThumbnailProps {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  onClick: (id: number) => void;
}
const ImageThumbnail: FC<ImageThumbnailProps> = ({ id, src, alt, width, height, className, onClick }) => (
  <div className="w-[80px] sm:w-[115px] h-[95px] bg-white flex justify-center items-center" onClick={() => onClick(id)}>
    <Image src={src} alt={alt} width={width} height={height} className={className} />
  </div>
);
const ProductDetail: any = ({ params }: { params: { id: string } }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [imageArray, setImageArray] = useState<string[]>([]);
  const [activeImage, setActiveImage] = useState<string>('');
  const [product, setProduct] = useState<Product | null>(null);
  const dispatch = useDispatch();
  const notify = () => {
    toast.success(`Success! You got ${counter} items in your cart`, {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const handleThumbnailClick = (id: number) => {
    setActiveImage(imageArray[id]);
  };
  const [counter, setCounter] = useState(1);
  const decreaseCount = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  const increaseCount = () => {
    setCounter(counter + 1);
  };

  const handlePurchase = () => {
    if (!isLoggedIn) {
      alert('Please login first');
      return;
    }
    if (product) {
      dispatch(
        addItem({
          id: product.id,
          name: product.attributes.name,
          price: product.attributes.price,
          quantity: counter,
          image: activeImage,
        })
      );
      notify();
    }
  };

  const handleInputChange = (event: { target: { value: string } }) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value > 0) {
      setCounter(value);
    }
  };
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        if (params?.id) {
          const { data } = await fetchDataFromApi(`/api/products/${params.id}?populate=*`);
          setProduct(data);
          const images = data.attributes?.image?.data.map((img: any) => img.attributes?.url);
          setImageArray(images);
          if (images.length > 0) {
            setActiveImage(images[0]);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProductData();
  }, [params.id]);

  return (
    <div className="text-white w-full md:max-w-[1440px]">
      <ToastContainer />
      <NavBar />
      <div className="pt-[186px] pb-[123px] px-4">
        <Link href={'/online-shop'} className="text-xl">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-1" />
          Back
        </Link>
        <div className="lg:pt-[75px] flex flex-row justify-center items-center">
          {/* Left */}
          <div className="w-full md:w-auto flex-[1] xl:flex-[1.5] flex flex-col-reverse xl:flex-row items-center md:gap-y-4">
            <div className="flex flex-row xl:flex-col gap-y-2 gap-x-2 sp:gap-x-4 xl:gap-x-0">
              {imageArray.map((src, index) => (
                <ImageThumbnail
                  id={index}
                  src={src}
                  alt={'bag image'}
                  width={50}
                  height={86}
                  className="object-cover w-[50px] h-[80px]"
                  onClick={handleThumbnailClick}
                />
              ))}
            </div>
            <div className="xl:ml-10 mb-4 lg:mb-0">
              <div className="w-full md:w-[350px] lg:w-[400px] xl:w-[552px] h-[400px] bg-white flex justify-center items-center">
                <Image
                  src={activeImage}
                  alt={'bag image'}
                  width={200}
                  height={300}
                  className="w-[200px] h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="flex-[1] mt-6 lg:mt-0">
            {product ? (
              <>
                <p className="text-[32px] xl:text-[40px] font-semibold">{product?.attributes?.name}</p>
                <span className="text-[24px] xl:text-[32px] font-medium">${product?.attributes?.price} CAD</span>
                <p className="font-medium opacity-75">Shipping Calculated at Checkout</p>
                <p className="mt-[20px]">Materials: {product?.attributes?.materials}</p>
                <p>Estimated Date of Arrival: {product?.attributes?.estimatedArrivalDate}</p>
                <p className="mt-[30px]">
                  <span className="opacity-75">Pay in 4 interest-free instalments of $197.50 with</span> SHOP PAY.
                </p>
                <button className="opacity-75">Learn More</button>
                <div className="mt-4 text-2xl flex gap-x-2 items-center">
                  <button
                    onClick={decreaseCount}
                    className="inline hover:bg-gray-300 rounded-md px-[12px] py-[2px] hover:text-zinc-800 border"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={counter}
                    onChange={handleInputChange}
                    className="w-16 text-center text-zinc-800"
                  />
                  <button
                    onClick={increaseCount}
                    className="inline hover:bg-gray-300 rounded-md px-[12px] py-[2px] hover:text-zinc-800 border"
                  >
                    +
                  </button>
                </div>
              </>
            ) : (
              <p>Loading...</p>
            )}
            <div className="flex justify-center items-center mt-[34px]" onClick={handlePurchase}>
              <Button>PURCHASE NOW</Button>
            </div>
          </div>
        </div>
        {/* TODO will be here */}
        <div className="mt-32 ">{/* <PicksForYou /> */}</div>
      </div>
    </div>
  );
};
export default ProductDetail;
