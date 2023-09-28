import Welcome from './components/Welcome';
import Bar from './components/Bar';
import item from '../../public/images_lp/Folded Hoodie Sweatshirt Mockup.png';
import item2 from '../../public/images_lp/Enamel Mug Mockup.png';
import Link from 'next/link';

const fakeOrders = [
  {
    url: item,
    orderId: 11111111,
    date: '2023/12/12',
    status: 'Delivered',
    total: 5,
  },
  {
    url: item2,
    orderId: 22222222,
    date: '2023/12/12',
    status: 'Pending',
    total: 5,
  },
];

function page() {
  return (
    <>
      <div className="mt-28 w-full flex flex-col items-center relative">
        <Welcome />
      </div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-5 my-5 w-3/4 h-12 font-semibold rounded-lg text-center items-center text-white bg-fuchsia-950">
          <h2 className="lg:text-lg md:text-lg text-[10px]">PRODUCT</h2>
          <h2 className="lg:text-lg md:text-lg text-[10px]">ORDER ID</h2>
          <h2 className="lg:text-lg md:text-lg text-[10px]">DATE</h2>
          <h2 className="lg:text-lg md:text-lg text-[10px]">STATUS</h2>
          <h2 className="lg:text-lg md:text-lg text-[10px]">TOTAL</h2>
        </div>
        {fakeOrders.map((order) => (
          <Bar order={order} />
        ))}
      </div>
    </>
  );
}

export default page;
