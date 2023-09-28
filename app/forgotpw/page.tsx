'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export default function Page() {
  const schema = z.object({
    email: z.string().email(),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="mt-32 mb-24">
      <div className="w-full px-1 pt-16">
        <div className="w-full text-center mb-32 relative">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#bdbdbd] text-6xl font-LDR mb-10">
            FORGOT YOUR PASSWORD?
          </h1>
          <div className="absolute  w-full h-[1px] top-32 bg-gradient-line"></div>
        </div>

        <form
          className="flex flex-col gap-10 w-full sm:w-[80%] mx-auto p-2 bg-[#d4d4d4] rounded-md "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div
            className="flex flex-col items-center rounded-md mx-1 my-1  py-8
            bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900 via-pink-900 to-purple-950
            "
          >
            <label className="text-xl text-white mb-3">Enter your email address</label>
            <input
              {...register('email')}
              type="email"
              className="w-[90%] md:w-[40%] p-2 rounded-md
             bg-[#ffffff83]
             text-white focus:outline-none border-2 border-white placeholder:text-white placeholder-opacity-50 px-4 
              "
              placeholder="Insert Email address here"
              
            />
            {errors.email && <p className='text-red-400 pt-2'>Your email is invalid</p>}
          </div>
          <div className="flex flex-col items-center">
            <button className=" w-full md:w-[40%] p-2 text-white text-lg focus:bg-transparent font-LDR bg-[#CE8C3D] hover:bg-[#9A682D] rounded-md outline outline-2">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
