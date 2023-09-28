'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { SidebarData } from './SidebarData';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  return (
    <nav className="h-full w-1/12 bg-gradient-to-t from-[#7D42B8] to-[#000000] text-white">
      <div className="mt-6 mb-12">
        <div className="flex justify-center text-center">
          <Image
            src="/admin/menu-logo.png"
            alt="logo"
            width={89}
            height={80}
            style={{ objectFit: 'cover', objectPosition: 'bottom' }}
          />
        </div>
        <div className="flex justify-center text-center font-Poppins text-3xl font-bold">
          <h1>TvsM</h1>
        </div>
      </div>
      <div>
        <ul className="text-white">
          {SidebarData.map((value, key) => {
            return (
              <li key={key} className="mb-4">
                <div className="flex justify-center">
                  <div
                    className={`inline-flex p-1 rounded-md ${hoveredIcon === value.id ? 'bg-white' : 'bg-[#CE8C3D]'}`}
                    onMouseEnter={() => setHoveredIcon(value.id)}
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                    <Link href={value.link}>
                      <FontAwesomeIcon
                        icon={value.icon}
                        style={{ color: hoveredIcon === value.id ? '#CE8C3D' : '#ffffff' }}
                      />
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
