'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  PiSwapLight,
  MdOutlineWaves,
  TbScanPosition,
  TbMoneybag,
} from '../lib/icons';
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
    <>
      <div className="bg-base-200 sm:hidden lg:block w-70 rounded-box">
        <div className="p-3">
          <ul className="menu menu-lg rounded-box w-full">
            <NavLink href="/">
              <PiSwapLight className="w-5 h-5" />
              Swap
            </NavLink>
            <NavLink href="/pool">
              <MdOutlineWaves className="w-5 h-5" />
              Pool
            </NavLink>
            <NavLink href="/positions">
              <TbScanPosition className="w-5 h-5" />
              Positions
            </NavLink>
            <NavLink href="/staking">
              <TbMoneybag className="w-5 h-5" />
              Staking
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="dock w-full md:flex lg:hidden flex justify-around items-center">
        <Link href="/" className="btn h-16">
          <PiSwapLight className="w-5 h-5" />
          <span className="dock-label">Swap</span>
        </Link>

        <Link href="/pool" className="btn h-16">
          <MdOutlineWaves className="w-5 h-5" />
          <span className="dock-label">Pool</span>
        </Link>

        <Link href="/positions" className="btn h-16">
          <TbScanPosition className="w-5 h-5" />
          <span className="dock-label">Positions</span>
        </Link>

        <Link href="/staking" className="btn h-16">
          <TbMoneybag className="w-5 h-5" />
          <span className="dock-label">Staking</span>
        </Link>
      </div>
    </>
  );
}
