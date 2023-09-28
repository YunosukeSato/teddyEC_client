'use client'

import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image"
import { useState } from "react";

type CartItemProps = {
  item: {
    id: number | null | undefined;
    name: string;
    price: number;
    image: string;
    quantity: number;
  };
  onRemove: (id: number) => void;
  onQuantityChange: (id: number, quantity: number) => void;
};

const CartItem = ({ item, onRemove, onQuantityChange }: CartItemProps) => {
  const [counter, setCounter] = useState(item.quantity || 1);

  const decreaseCount = () => {
    if (counter > 1) {
      const newCounter = counter - 1;
      setCounter(newCounter);
      if (item.id !== null && item.id !== undefined) {
        onQuantityChange(item.id, newCounter);
      }
    }
  };
  
  const increaseCount = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    if (item.id !== null && item.id !== undefined) {
      onQuantityChange(item.id, newCounter);
    }
  };
  
  const handleInputChange = (event: { target: { value: string } }) => {
    const value = parseInt(event.target.value);
    if (item.id !== null && item.id !== undefined && !isNaN(value) && value > 0) {
      setCounter(value);
      onQuantityChange(item.id, value); 
    }
  };
  
  const handleRemoveClick = () => {
    if (item.id !== null && item.id !== undefined) {
      onRemove(item.id);
    }
  };


  return (
    <div className="py-4 gap-3 border-b border-zinc-500 flex flex-col sm:flex-row justify-between items-center">
      {/* Left */}
      <div className="flex items-center gap-x-2">
        <div className="bg-white w-[120px] h-[120px]">
          <Image 
            src={item.image}
            alt={'item image'} 
            width={100} 
            height={100}
            className="w-[80px] h-[80px]"
          />
        </div>
        <div>
          <p className="font-bold mb-2 text-xl">{item.name}</p>
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
              className="inline hover:bg-gray-300  rounded-md px-[12px] py-[2px] hover:text-zinc-800 border"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="cursor-pointer">
        <p>$<span className="text-3xl font-bold">{(counter * item.price).toFixed(2)}</span></p>
        <div className="flex gap-x-1 items-center mt-2 justify-center" onClick={handleRemoveClick}>
          <FontAwesomeIcon icon={faTrashCan} />
          <p className="hover:text-gray-300">Remove</p>
        </div>
      </div>
    </div>
  )
}
export default CartItem