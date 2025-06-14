import React from 'react';

export default function Navbar() {
  return (
    <div className="flex justify-between p-8">
      <h1 className="text-2xl font-bold mb-6">Himera AI v2</h1>
      <button className="btn  btn-soft shadow-lg shadow-primary/50 ">
        Connect wallet
      </button>
    </div>
  );
}
