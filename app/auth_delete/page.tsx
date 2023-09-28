'use client';

import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const Page = () => {
  // send password to server
  const [password, setPassword] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleDeleteAccount = () => {
    fetch('/api/delete-account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  // form validation
  const schema = z.object({
    password: z.string().min(6, 'Password must be at least 6 characters long.'),
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
    handleDeleteAccount();
  };

  return (
    <div>
      <div className="mt-32 mb-24">
        <div className="w-full px-1">
          <div className="w-full text-center md:mb-32 sm:mb-24 relative">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#bdbdbd] text-6xl font-LDR mb-10">
              Delete your account
            </h1>
            <div className="absolute  w-full h-[1px] top-32 bg-gradient-to-r from-transparent via-[#a1a1a1] to-transparent"></div>
          </div>

          <form
            className="flex flex-col gap-1 w-full sm:w-[80%] mx-auto p-2 bg-[#d4d4d4] rounded-md "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div
              className="text-white flex flex-col items-center rounded-md mx-1 my-1  py-8
            bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900 via-pink-900 to-purple-950
            "
            >
              <label className="mb-2 md:text-xl sm:text-sm text-center">
                Are you sure? Your account information will be deleted from our site.
              </label>
              <p className="md:text-base mb-4 sm:text-xs">
                Forgot your password?{' '}
                <Link href="/forgotpw" className="underline">
                  Click here
                </Link>
              </p> 
              <input
                {...register('password')}
                type="email"
                className="w-[90%] md:w-[40%] p-2 rounded-md
                bg-[#ffffff83]
                text-white focus:outline-none border-2 border-white placeholder:text-white placeholder-opacity-50 px-4 
              "
                placeholder="Insert your password here"
              />
              {errors.password && <p className="text-[#fff530] pt-2">Your password is invalid</p>}
            </div>
            <div className="flex flex-col items-center">
              <button className=" w-full md:w-[40%] p-2 text-white text-lg focus:bg-transparent font-LDR bg-[#CE8C3D] hover:bg-[#9A682D] rounded-md outline outline-2">
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
