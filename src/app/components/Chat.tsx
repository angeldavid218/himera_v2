import React from 'react';

export default function Chat() {
  return (
    <div className="w-96 bg-base-200 p-3 m-4">
      <div className="text-xl text-center mb-2">Chat</div>
      <div className="flex gap-2">
        <input type="text" placeholder="Type here" className="input" />
        <button className="btn btn-primary">Send</button>
      </div>
    </div>
  );
}
