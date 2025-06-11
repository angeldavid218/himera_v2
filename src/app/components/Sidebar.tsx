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

const MdOutlineWaves = dynamic(
  () => import('react-icons/md').then((mod) => mod.MdOutlineWaves),
  {
    ssr: false,
    loading: () => <span className="w-5 h-5" />,
  }
);

const TbScanPosition = dynamic(
  () => import('react-icons/tb').then((mod) => mod.TbScanPosition),
  {
    ssr: false,
    loading: () => <span className="w-5 h-5" />,
  }
);

const TbMoneybag = dynamic(
  () => import('react-icons/tb').then((mod) => mod.TbMoneybag),
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
            </Suspense>
            Swap
          </NavLink>
          <NavLink href="/pool">
            <Suspense fallback={<span className="w-5 h-5" />}>
              <MdOutlineWaves className="w-5 h-5" />
            </Suspense>
            Pool
          </NavLink>
          <NavLink href="/positions">
            <Suspense fallback={<span className="w-5 h-5" />}>
              <TbScanPosition className="w-5 h-5" />
            </Suspense>
            Positions
          </NavLink>
          <NavLink href="/staking">
            <Suspense fallback={<span className="w-5 h-5" />}>
              <TbMoneybag className="w-5 h-5" />
            </Suspense>
            Staking
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
