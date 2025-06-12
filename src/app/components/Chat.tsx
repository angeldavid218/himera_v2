import React from 'react';

export default function Chat() {
  return (
    <div className="w-96 bg-base-200 p-4 m-4 rounded-box overflow-y-auto sm:w-full sm:m-0 md:w-96 sm:mb-25">
      <div className="text-xl text-center mb-2">Chat</div>
      <div className="flex gap-2">
        <input type="text" placeholder="Type here" className="input" />
        <button className="btn btn-primary">Send</button>
      </div>
      <div className="chat chat-start mt-4">
        <div className="chat-bubble chat-bubble-primary">
          It's over Anakin,
          <br />I have the high ground.
        </div>
      </div>
      <div className="chat chat-end mt-2">
        <div className="chat-bubble chat-bubble-info">
          You underestimate my power!
        </div>
      </div>
    </div>
  );
}
