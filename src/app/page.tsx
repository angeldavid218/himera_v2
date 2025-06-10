'use client';
import Swap from './components/Swap';
export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Swap tokens</h1>
      <Swap />
    </div>
  );
}
