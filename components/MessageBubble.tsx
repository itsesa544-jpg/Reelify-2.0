import React from 'react';
import type { Message } from '../types';

interface MessageBubbleProps {
  message: Message;
  otherUserAvatar: string;
  loggedInUsername: string;
}

const AudioMessage: React.FC<{ message: Message, isOutgoing: boolean }> = ({ message, isOutgoing }) => (
    <div className={`flex items-center py-2.5 px-3.5 rounded-2xl w-56 ${isOutgoing ? 'bg-[#0084ff]' : 'bg-gray-200'}`}>
        <div className={`w-7 h-7 rounded-full flex justify-center items-center mr-2.5 text-sm ${isOutgoing ? 'bg-white text-[#0084ff]' : 'bg-white text-black'}`}>
            <i className="fas fa-play"></i>
        </div>
        <div className="flex-grow h-5 flex items-center gap-0.5">
            {[10, 15, 8, 18, 12].map((h, i) => (
                <div key={i} className="w-1 bg-current rounded-sm" style={{ height: `${h}px`, animation: `wave 1s infinite ${i * 0.1}s` }}></div>
            ))}
        </div>
        <span className="text-xs opacity-70 ml-2">{message.audioData?.duration}</span>
    </div>
);

const EmojiMessage: React.FC<{ isOutgoing: boolean }> = ({ isOutgoing }) => (
    <div className={`text-4xl text-[#0084ff] cursor-pointer ${isOutgoing ? 'self-end' : 'ml-11 mb-2.5'}`}>
        <i className="fas fa-thumbs-up"></i>
    </div>
);

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, otherUserAvatar, loggedInUsername }) => {
    const isOutgoing = message.senderId === loggedInUsername;

    if (message.type === 'emoji') {
        return <EmojiMessage isOutgoing={isOutgoing} />;
    }

    if (isOutgoing) {
        return (
            <div className="self-end max-w-[75%]">
                {message.type === 'audio' ? (
                    <AudioMessage message={message} isOutgoing={isOutgoing} />
                ) : (
                    <div className="bg-[#0084ff] text-white py-2.5 px-3.5 rounded-2xl rounded-br-lg">
                        <p className="text-base leading-snug">{message.text}</p>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="flex items-end gap-2 max-w-[75%]">
            <img src={otherUserAvatar} className="w-7 h-7 rounded-full mb-1 object-cover" alt="avatar" />
            <div>
                {message.type === 'audio' ? (
                    <AudioMessage message={message} isOutgoing={isOutgoing} />
                ) : (
                    <div className="bg-gray-200 text-black py-2.5 px-3.5 rounded-2xl rounded-bl-lg">
                        <p className="text-base leading-snug">{message.text}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MessageBubble;