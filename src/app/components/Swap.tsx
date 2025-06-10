import React from 'react';

export default function Swap() {
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4">
      <legend className="fieldset-legend">You paid</legend>
      <div className="flex gap-2">
        <input type="number" className="input" placeholder="0.0" />
        <select defaultValue="Pick a color" className="select w-24">
          <option disabled={true}>Select token</option>
          <option>ETH</option>
          <option>WETH</option>
        </select>
      </div>
      <legend className="fieldset-legend">You received</legend>
      <div className="flex gap-2">
        <input type="number" className="input" placeholder="0.0" />
        <select defaultValue="Pick a color" className="select w-24">
          <option disabled={true}>Select token</option>
          <option>ETH</option>
          <option>WETH</option>
        </select>
      </div>
      <button className="btn btn-primary mt-4">Swap</button>
    </fieldset>
  );
}
