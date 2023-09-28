import Image, { StaticImageData } from 'next/image';

type OrderProps = {
  order: {
    url: StaticImageData;
    orderId: number;
    date: string;
    status: string;
    total: number;
  };
};

function Bar(order: OrderProps) {
  const { url, orderId, date, status, total } = order.order;
  return (
    <div className="grid grid-cols-5 mb-5 w-3/4 h-32 font-semibold rounded-lg text-center items-center bg-white">
      <Image
        src={url}
        alt="order image"
        width={50}
        height={50}
        style={{ width: 'auto', height: 'auto' }}
        className="m-auto"
      />
      <div className="font-semibold lg:text-lg md:text-lg text-[10px]">#{orderId}</div>
      <div className="font-semibold lg:text-lg md:text-lg text-[10px]">{date}</div>
      <div
        className={`font-semibold lg:text-lg md:text-lg text-[10px]${status === 'Pending' ? ' text-emerald-500' : ''}`}
      >
        {status}
      </div>
      <div className="font-semibold lg:text-lg md:text-lg text-[10px]">{total}</div>
    </div>
  );
}

export default Bar;
