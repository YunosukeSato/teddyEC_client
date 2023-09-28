'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { signUp } from '@/utils/api';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const validationSchema = z
    .object({
      userName: z.string().min(1, { message: 'Username is required' }),
      email: z.string().min(1, { message: 'Email is required' }).email({
        message: 'Must be a valid email',
      }),
      password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
      confirmPassword: z.string().min(1, { message: 'Confirm Password is required' }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ['confirmPassword'],
      message: "Passwords don't match",
    });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  useEffect(() => {
    setIsLoading(true);
    const jwt = localStorage.getItem('tvsm_jwt');
    if (jwt) {
      router.push('/');
    }
    setIsLoading(false);
  }, []);

  const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
    try {
      const { userName, email, password } = data;
      const result = await signUp({ userName, email, password });
      if (!result || result.message) throw new Error(result.message);
      if (result?.jwt) {
        // TODO session.user ---> Zustand?
        // Save data to localStorage instead of cookies
        localStorage.setItem('tvsm_jwt', result.jwt);
        localStorage.setItem('userid', result.user.id);
        localStorage.setItem('username', result.user.username);
        router.push('/');
      }
    } catch (error: any) {
      setErrorMsg(error.message);
    }
  };

  return (
    <>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          <form className="mt-20" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
              <div className="w-full text-center mb-14 relative">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#bdbdbd] text-6xl font-LDR">
                  Sign up
                </h1>
                <div className="absolute w-full h-[1px] top-24 bg-gradient-to-r from-transparent via-[#a1a1a1] to-transparent"></div>
              </div>

              <div className="mt-9 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="space-y-4">
                  {errorMsg && <div className="text-red-500">{errorMsg}</div>}
                  <div>
                    <label htmlFor="userName" className="block text-sm font-medium leading-6 text-white">
                      User name
                    </label>
                    <div className="mt-2">
                      <input
                        className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
                          errors.userName && 'border-red-500'
                        } rounded appearance-none focus:outline-none focus:shadow-outline`}
                        id="userName"
                        type="text"
                        placeholder="Username"
                        {...register('userName')}
                      />
                      {errors.userName && (
                        <p className="text-xs italic text-red-500 mt-2">{errors.userName?.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
                          errors.email && 'border-red-500'
                        } rounded appearance-none focus:outline-none focus:shadow-outline`}
                        id="email"
                        type="email"
                        placeholder="Email"
                        {...register('email')}
                      />
                      {errors.email && <p className="text-xs italic text-red-500 mt-2">{errors.email?.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
                          errors.password && 'border-red-500'
                        } rounded appearance-none focus:outline-none focus:shadow-outline`}
                        id="password"
                        type="password"
                        {...register('password')}
                      />
                      {errors.password && (
                        <p className="text-xs italic text-red-500 mt-2">{errors.password?.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-white">
                      Confirm Password
                    </label>
                    <div className="mt-2">
                      <input
                        className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
                          errors.confirmPassword && 'border-red-500'
                        } rounded appearance-none focus:outline-none focus:shadow-outline`}
                        id="confirmPassword"
                        type="password"
                        {...register('confirmPassword')}
                      />
                      {errors.confirmPassword && (
                        <p className="text-xs italic text-red-500 mt-2">{errors.confirmPassword?.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full mt-5 justify-center rounded-md bg-[#CE8C3D] hover:bg-[#9A682D] focus:bg-transparent 
                border-[1.9px] border-[#e1e0e0]px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </>
      )}
    </>
  );
}
