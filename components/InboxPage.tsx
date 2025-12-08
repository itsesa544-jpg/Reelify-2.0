import React from 'react';
import type { Conversation, User } from '../types';

interface InboxPageProps {
  conversations: Conversation[];
  onSelectConversation: (conversation: Conversation) => void;
  onSelectUser: (user: User) => void; // Keep for profile navigation
}

const InboxPage: React.FC<InboxPageProps> = ({ conversations, onSelectConversation }) => {
    const getConversationDetails = (convo: Conversation) => {
        const lastMsg = convo.messages[convo.messages.length - 1];
        if (!lastMsg) {
            return { text: 'No messages yet', timestamp: '' };
        }

        let text = '';
        switch(lastMsg.type) {
            case 'audio':
                text = 'Audio message';
                break;
            case 'emoji':
                text = lastMsg.emoji || '👍';
                break;
            default:
                text = lastMsg.text;
        }
        
        const prefix = lastMsg.sender === 'me' ? 'You: ' : '';

        return { text: `${prefix}${text}`, timestamp: lastMsg.timestamp };
    };

  return (
    <div className="w-full h-full bg-white text-black flex flex-col">
        <header className="p-4 border-b sticky top-0 bg-white z-10">
            <div className="flex justify-between items-center">
                 <div className="w-10"></div>
                 <h1 className="text-xl font-bold">Chats</h1>
                 <button className="text-gray-600">
                     <i className="fas fa-edit text-xl"></i>
                 </button>
            </div>
        </header>

        <main className="flex-grow overflow-y-auto">
            {conversations.map(convo => {
                const { text, timestamp } = getConversationDetails(convo);
                return (
                    <button 
                        key={convo.id} 
                        onClick={() => onSelectConversation(convo)}
                        className="w-full text-left flex items-center gap-4 px-4 py-3 hover:bg-gray-100 active:bg-gray-200 transition-colors"
                    >
                        <img src={convo.user.avatar} alt={convo.user.name} className="w-14 h-14 rounded-full object-cover" />
                        <div className="flex-grow overflow-hidden">
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold text-base truncate">{convo.user.name}</h3>
                                <p className="text-xs text-gray-500 shrink-0 ml-2">{timestamp}</p>
                            </div>
                            <p className="text-sm text-gray-600 truncate">{text}</p>
                        </div>
                    </button>
                );
            })}
        </main>
    </div>
  );
};

export default InboxPage;