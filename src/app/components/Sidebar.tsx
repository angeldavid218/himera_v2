'use client';
import React, { Suspense } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

// Dynamically import the icon with SSR disabled
const PiSwapLight = dynamic(
  () => import('react-icons/pi').then((mod) => mod.PiSwapLight),
  {
    ssr: false,
    loading: () => <span className="w-5 h-5" />,
  }
);

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link href={href} className={isActive ? 'menu-active' : ''}>
        {children}
      </Link>
    </li>
  );
};

export default function Sidebar() {
  return (
    <div className="bg-base-200 w-70 rounded-box">
      <div className="p-3">
        <ul className="menu menu-lg rounded-box w-full">
          <NavLink href="/">
            <Suspense fallback={<span className="w-5 h-5" />}>
              <PiSwapLight className="w-5 h-5" />
            </Suspense>{' '}
            Swap
          </NavLink>
          <NavLink href="/pool">Pool</NavLink>
          <li>
            <a>Positions</a>
          </li>
          <li>
            <a>Staking</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
