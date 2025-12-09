import React from 'react';
import type { Conversation, User } from '../types';

interface InboxPageProps {
  conversations: Conversation[];
  onSelectConversation: (conversation: Conversation) => void;
  loggedInUser: User;
  allUsers: User[];
}

const ChatRow: React.FC<{ conversation: Conversation; onSelect: () => void; loggedInUser: User; allUsers: User[] }> = ({ conversation, onSelect, loggedInUser, allUsers }) => {
    const lastMessage = conversation.messages[conversation.messages.length - 1];
    const otherParticipantId = conversation.participantIds.find(id => id !== loggedInUser.username);
    const otherUser = allUsers.find(u => u.username === otherParticipantId);

    if (!otherUser) {
      return null;
    }

    return (
        <button onClick={onSelect} className="w-full flex items-center p-3 text-left hover:bg-gray-50 transition-colors border-b">
            <img src={otherUser.avatar} alt={otherUser.name} className="w-14 h-14 rounded-full mr-4 object-cover"/>
            <div className="flex-grow overflow-hidden">
                <h3 className="font-semibold text-base text-black">{otherUser.name}</h3>
                {lastMessage && (
                    <p className="text-sm text-gray-500 truncate">
                        {lastMessage.senderId === loggedInUser.username ? 'You: ' : ''}
                        {lastMessage.type === 'audio' ? 'Audio message' : lastMessage.text}
                        <span className="mx-1">·</span>
                        {lastMessage.timestamp}
                    </p>
                )}
            </div>
        </button>
    );
};

const InboxPage: React.FC<InboxPageProps> = ({ conversations, onSelectConversation, loggedInUser, allUsers }) => {
  const userConversations = conversations.filter(c => c.participantIds.includes(loggedInUser.username));

  return (
    <div className="w-full h-full bg-white text-black flex flex-col">
        <header className="p-4 border-b sticky top-0 bg-white z-10">
            <div className="flex justify-between items-center">
                 <img src={loggedInUser.avatar} alt="My profile" className="w-10 h-10 rounded-full" />
                 <h1 className="text-xl font-bold">Chats</h1>
                 <button className="text-gray-600" aria-label="New message">
                     <i className="fas fa-edit text-xl"></i>
                 </button>
            </div>
        </header>

        <main className="flex-grow overflow-y-auto">
            {userConversations.length > 0 ? (
                userConversations.map(convo => (
                    <ChatRow key={convo.id} conversation={convo} onSelect={() => onSelectConversation(convo)} loggedInUser={loggedInUser} allUsers={allUsers} />
                ))
            ) : (
                 <div className="text-center py-20 text-gray-500">
                    <p>No messages yet.</p>
                </div>
            )}
        </main>
    </div>
  );
};

export default InboxPage;