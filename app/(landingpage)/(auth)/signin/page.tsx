'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from '@/utils/api';
import { useEffect, useState } from 'react';

export default function Page() {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const validationSchema = z.object({
    email: z.string().min(1, { message: 'Username is required' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
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
    const jwt = localStorage.getItem('tvsm_jwt');
    if (jwt) {
      router.push('/');
    }
    setIsLoading(false);
  }, []);

  const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
    try {
      const result = await signIn(data);
      if (!result || result.message) throw new Error(result.message);
      if (result?.jwt) {
        // TODO session.user ---> Zustand?
        // Save data to localStorage instead of cookies
        localStorage.setItem('tvsm_jwt', result.jwt);
        localStorage.setItem('userid', result.user.id);
        localStorage.setItem('username', result.user.username);

        // TODO session.user ---> Zustand?
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
                  Sign in
                </h1>
                <div className="absolute w-full h-[1px] top-24 bg-gradient-to-r from-transparent via-[#a1a1a1] to-transparent"></div>
              </div>

              <div className="mt-9 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="space-y-4">
                  {errorMsg && <div className="text-red-500">{errorMsg}</div>}
                  <div>
                    <label htmlFor="userName" className="block text-sm font-medium leading-6 text-white">
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
                          errors.email && 'border-red-500'
                        } rounded appearance-none focus:outline-none focus:shadow-outline`}
                        id="email"
                        type="email"
                        placeholder="Username"
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
                    <div className="text-sm text-right mt-2">
                      <Link href="/forgotpw" className="font-semibold text-[#CE8C3D] hover:text-[#9A682D]">
                        Forgot password?
                      </Link>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full mt- justify-center rounded-md bg-[#CE8C3D] hover:bg-[#9A682D] focus:bg-transparent
                  border-[1.9px] border-[#e1e0e0]px-3 py-1.5 text-base font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                    >
                      Sign in
                    </button>
                  </div>
                  <div className="mt-2 text-center text-white text-sm">
                    <span>Don't have an account? </span>
                    <Link href="/signup" className="font-semibold text-[#CE8C3D] hover:text-[#9A682D]">
                      Sign up
                    </Link>
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
