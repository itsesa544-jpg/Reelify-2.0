import React, { useState, useEffect, useRef } from 'react';
import type { Conversation, User, Message } from '../types';
import MessageBubble from './MessageBubble';

interface ChatScreenProps {
  conversation: Conversation;
  loggedInUser: User;
  onSendMessage: (conversationId: number, message: Omit<Message, 'id'>) => void;
  onBack: () => void;
  onSelectUser: (user: User) => void;
}

const ChatScreen: React.FC<ChatScreenProps> = ({ conversation, loggedInUser, onSendMessage, onBack, onSelectUser }) => {
  const [inputText, setInputText] = useState('');
  const messagesAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the bottom of the chat on initial load and when new messages arrive
    if (messagesAreaRef.current) {
      messagesAreaRef.current.scrollTop = messagesAreaRef.current.scrollHeight;
    }
  }, [conversation.messages]);

  const handleSend = () => {
    const trimmedText = inputText.trim();
    const messageType = trimmedText ? 'text' : 'emoji';

    const newMessage: Omit<Message, 'id'> = {
      sender: 'me',
      text: trimmedText || '👍',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: messageType,
      emoji: messageType === 'emoji' ? '👍' : undefined,
    };
    
    onSendMessage(conversation.id, newMessage);
    setInputText('');
  };
  
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="w-full h-full bg-white text-black flex flex-col">
      {/* Header */}
      <header className="p-2.5 flex items-center shadow-sm z-10 bg-white">
        <button onClick={onBack} className="text-2xl text-[#0084ff] mr-4 p-1.5">
          <i className="fas fa-arrow-left"></i>
        </button>
        <div className="flex-grow flex items-center" onClick={() => onSelectUser(conversation.user)}>
          <img src={conversation.user.avatar} alt={conversation.user.name} className="w-10 h-10 rounded-full mr-2.5 object-cover" />
          <div>
            <h3 className="text-base font-semibold">{conversation.user.name}</h3>
            <p className="text-xs text-gray-500">Active now</p>
          </div>
        </div>
        <div className="flex items-center text-[#0084ff] text-2xl gap-5 px-2">
          <button><i className="fas fa-phone-alt"></i></button>
          <button><i className="fas fa-video"></i></button>
          <button><i className="fas fa-info-circle"></i></button>
        </div>
      </header>
      
      {/* Messages Body */}
      <main ref={messagesAreaRef} className="flex-grow overflow-y-auto p-4 bg-white">
        <div className="flex flex-col gap-2">
          {conversation.messages.map(message => (
            <MessageBubble key={message.id} message={message} otherUserAvatar={conversation.user.avatar} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="p-2.5 flex items-center border-t border-gray-200 bg-white">
        <div className="flex items-center text-[#0084ff] text-2xl gap-4 px-2">
            <i className="fas fa-plus-circle"></i>
            <i className="fas fa-camera"></i>
            <i className="fas fa-image"></i>
            <i className="fas fa-microphone"></i>
        </div>
        <div className="flex-grow bg-gray-100 rounded-2xl px-3.5 py-2 flex items-center mx-2">
            <input 
                type="text"
                placeholder="Message..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full bg-transparent border-none outline-none text-base"
            />
             <i className="fas fa-smile text-gray-500 text-xl"></i>
        </div>
        <button onClick={handleSend} className="text-[#0084ff] text-2xl px-2">
             <i className={`fas ${inputText.length > 0 ? 'fa-paper-plane' : 'fa-thumbs-up'}`}></i>
        </button>
      </footer>
    </div>
  );
};

export default ChatScreen;