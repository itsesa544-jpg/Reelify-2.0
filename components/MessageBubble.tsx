import React from 'react';
import type { Message } from '../types';

interface MessageBubbleProps {
  message: Message;
  otherUserAvatar: string;
}

const AudioMessage: React.FC<{ message: Message }> = ({ message }) => (
    <div className={`flex items-center py-2.5 px-3.5 rounded-2xl w-56 ${message.sender === 'me' ? 'bg-[#0084ff]' : 'bg-gray-200'}`}>
        <div className={`w-7 h-7 rounded-full flex justify-center items-center mr-2.5 text-sm ${message.sender === 'me' ? 'bg-white text-[#0084ff]' : 'bg-white text-black'}`}>
            <i className="fas fa-play"></i>
        </div>
        <div className="flex-grow h-5 flex items-center gap-0.5">
            {[10, 15, 8