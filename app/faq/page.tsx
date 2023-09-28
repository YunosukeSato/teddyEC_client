'use client';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

export default function Page() {
  const questions: Record<string, string> = {
    'What is your refund policy?':
      "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
    'How do I get a refund?':
      "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
    'How do I get a fund?':
      "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  };

  return (
    <div className="mt-32 mb-24">
      <div className="w-full px-4 pt-16">
        <div className="w-full text-center mb-32 relative">
          <h1 className='text-transparent bg-clip-text bg-gradient-to-b from-[#bdbdbd] text-6xl font-LDR mb-10'>
            FAQ<span className="font-Poppins text-5xl">s</span>
          </h1>
          <div className="absolute  w-full h-[1px] top-32 bg-gradient-line"></div>
        </div>

        <div className="flex flex-col gap-10 w-full p-2">
          {Object.keys(questions).map((question, index) => (
            <div key={index} className="bg-white rounded-md">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                      <span className="text-xl font-bold">{question}</span>
                      <ChevronUpIcon className={`${open ? 'transform rotate-180' : ''} h-5 w-5 `} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-base border-t-2">
                      {questions[question]}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
