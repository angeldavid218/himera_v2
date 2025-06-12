import dynamic from 'next/dynamic';

export const PiSwapLight = dynamic(
  () => import('react-icons/pi').then((mod) => mod.PiSwapLight),
  {
    ssr: false,
    loading: () => <span className="w-5 h-5" />,
  }
);

export const MdOutlineWaves = dynamic(
  () => import('react-icons/md').then((mod) => mod.MdOutlineWaves),
  {
    ssr: false,
    loading: () => <span className="w-5 h-5" />,
  }
);

export const TbScanPosition = dynamic(
  () => import('react-icons/tb').then((mod) => mod.TbScanPosition),
  {
    ssr: false,
    loading: () => <span className="w-5 h-5" />,
  }
);

export const TbMoneybag = dynamic(
  () => import('react-icons/tb').then((mod) => mod.TbMoneybag),
  {
    ssr: false,
    loading: () => <span className="w-5 h-5" />,
  }
);
