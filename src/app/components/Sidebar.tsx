import React from 'react';

export default function Sidebar() {
  return (
    <div className="bg-base-200 w-70">
      <div className="p-3">
        <ul className="menu menu-lg rounded-box w-full ">
          <li>
            <a>Swap</a>
          </li>
          <li>
            <a>Pool</a>
          </li>
          <li>
            <a>Positions</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
