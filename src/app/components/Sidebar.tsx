'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="bg-base-200 w-70">
      <div className="p-3">
        <ul className="menu menu-lg rounded-box w-full ">
          <li>
            <Link href="/" className={pathname === '/' ? 'menu-active' : ''}>
              Swap
            </Link>
          </li>
          <li>
            <Link
              href="/pool"
              className={pathname === '/pool' ? 'menu-active' : ''}
            >
              Pool
            </Link>
          </li>
          <li>
            <a>Positions</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
