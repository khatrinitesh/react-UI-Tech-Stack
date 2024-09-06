import React from 'react';

const Chat = () => {
  return (
    <>
    {/* Chat Bubble with colors */}
    <div className="chat chat-start">
  <div className="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
</div>
<div className="chat chat-start">
  <div className="chat-bubble chat-bubble-secondary">
    Put me on the Council and not make me a Master!??
  </div>
</div>
<div className="chat chat-start">
  <div className="chat-bubble chat-bubble-accent">
    That's never been done in the history of the Jedi. It's insulting!
  </div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-success">You have been given a great honor.</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-warning">To be on the Council at your age.</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-error">It's never happened before.</div>
</div>
    {/* Chat with header and footer */}
    <div className="chat chat-start">
  <div className="chat-header">
    Obi-Wan Kenobi
    <time className="text-xs opacity-50">2 hours ago</time>
  </div>
  <div className="chat-bubble">You were the Chosen One!</div>
  <div className="chat-footer opacity-50">Seen</div>
</div>
<div className="chat chat-start">
  <div className="chat-header">
    Obi-Wan Kenobi
    <time className="text-xs opacity-50">2 hour ago</time>
  </div>
  <div className="chat-bubble">I loved you.</div>
  <div className="chat-footer opacity-50">Delivered</div>
</div>
    {/* /Chat with image, header and footer */}
    <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="chat-header">
    Obi-Wan Kenobi
    <time className="text-xs opacity-50">12:45</time>
  </div>
  <div className="chat-bubble">You were the Chosen One!</div>
  <div className="chat-footer opacity-50">Delivered</div>
</div>
<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="chat-header">
    Anakin
    <time className="text-xs opacity-50">12:46</time>
  </div>
  <div className="chat-bubble">I hate you!</div>
  <div className="chat-footer opacity-50">Seen at 12:46</div>
</div>
    {/* Chat with image */}
    <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
</div>
<div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="chat-bubble">It was you who would bring balance to the Force</div>
</div>
<div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="chat-bubble">Not leave it in Darkness</div>
</div>
      {/* chat-start and chat-end */}
      <div className="chat chat-start">
  <div className="chat-bubble">
    It's over Anakin,
    <br />
    I have the high ground.
  </div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble">You underestimate my power!</div>
</div>
    </>
  );
}

export default Chat;
