import React from 'react';

export default function Chat() {
  return (
    <div className="w-96 bg-base-200 p-4 m-4 rounded-box overflow-y-auto">
      <div className="text-xl text-center mb-2">Chat</div>
      <div className="flex gap-2">
        <input type="text" placeholder="Type here" className="input" />
        <button className="btn btn-primary">Send</button>
      </div>
      <div className="chat chat-start mt-4">
        <div className="chat-bubble">
          It's over Anakin,
          <br />I have the high ground.
        </div>
      </div>
      <div className="chat chat-end mt-2">
        <div className="chat-bubble">You underestimate my power!</div>
      </div>
    </div>
  );
}
