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
import { useIsMobile } from '../hooks/useMobile';
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
  const isMobile = useIsMobile();

  return (
    <>
      <div
        className="bg-base-200 w-70 rounded-box"
        style={{ display: isMobile ? 'none' : 'block' }}
      >
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
      <div
        className="dock w-full flex justify-around items-center"
        style={{ display: isMobile ? 'flex' : 'none' }}
      >
        <button className="btn h-16">
          <PiSwapLight className="w-5 h-5" />
          <span className="dock-label">Swap</span>
        </button>

        <button className="btn h-16">
          <MdOutlineWaves className="w-5 h-5" />
          <span className="dock-label">Pool</span>
        </button>

        <button className="btn h-16">
          <TbScanPosition className="w-5 h-5" />
          <span className="dock-label">Positions</span>
        </button>

        <button className="btn h-16">
          <TbMoneybag className="w-5 h-5" />
          <span className="dock-label">Staking</span>
        </button>
      </div>
    </>
  );
}
