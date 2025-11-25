

import React, { useState, useRef } from 'react';
import { 
    BackIcon, 
    UploadIcon, 
    HashtagIcon, 
    AtIcon, 
    ContentDisclosureIcon, 
    ChevronRightIcon, 
    LockIcon,
    ChatBubbleIcon,
    DuetIcon,
    PublishIcon,
    ShopBagIcon
} from '../constants';

interface PostCreationPageProps {
    onBack: () => void;
}

const ToggleSwitch: React.FC<{ enabled: boolean; onChange: (enabled: boolean) => void }> = ({ enabled, onChange }) => {
    return (
        <button
            onClick={() => onChange(!enabled)}
            className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${
                enabled ? 'bg-cyan-400' : 'bg-gray-200'
            }`}
        >
            <span
                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
                    enabled ? 'translate-x-6' : 'translate-x-1'
                }`}
            />
        </button>
    );
};

const VisibilityOption: React.FC<{label: string, value: string, selectedValue: string, onChange: (value: string) => void}> = ({label, value, selectedValue, onChange}) => (
    <label className="flex items-center cursor-pointer">
        <input 
            type="radio" 
            name="visibility"
            value={value}
            checked={selectedValue === value}
            onChange={(e) => onChange(e.target.value)}
            className="w-4 h-4 accent-purple-600"
        />
        <span className="ml-2 font-medium">{label}</span>
    </label>
);


const PostCreationPage: React.FC<PostCreationPageProps> = ({ onBack }) => {
    const [videoPreview, setVideoPreview] = useState<string | null>(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [visibility, setVisibility] = useState('Public');
    const [allowComments, setAllowComments] = useState(true);
    const [allowDuet, setAllowDuet] = useState(true);
    
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleVideoUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith('video/')) {
            const url = URL.createObjectURL(file);
            setVideoPreview(url);
        } else {
            alert('Please select a video file.');
        }
    };

    return (
        <div className="w-full h-full bg-white text-black flex flex-col">
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="video/*"
                onChange={handleFileChange}
            />

            {/* Header */}
            <header className="p-4 flex items-center shrink-0 border-b">
                <button onClick={onBack} className="mr-4">
                    <BackIcon className="w-6 h-6 text-black" />
                </button>
                <h1 className="text-lg font-bold">New Video Upload</h1>
            </header>

            {/* Main Content */}
            <main className="flex-grow overflow-y-auto p-4 space-y-6">
                <div className="flex gap-4">
                    <div
                        onClick={handleVideoUploadClick}
                        className="w-32 h-48 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-center text-gray-500 cursor-pointer overflow-hidden"
                    >
                       {videoPreview ? (
                            <video src={videoPreview} className="w-full h-full object-cover" controls={false} muted autoPlay loop />
                        ) : (
                            <>
                                <UploadIcon className="w-8 h-8 text-gray-400 mb-2" />
                                <span className="text-xs">Tap to upload video</span>
                            </>
                        )}
                    </div>
                    <div className="flex-grow space-y-2">
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full bg-gray-100 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <textarea
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full h-28 bg-gray-100 p-3 rounded-lg border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button className="bg-gray-200 text-sm font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1"><HashtagIcon /> Hashtags</button>
                    <button className="bg-gray-200 text-sm font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1"><AtIcon /> Friends</button>
                </div>

                <div className="border-t pt-4 space-y-4">
                     <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <ShopBagIcon className="text-gray-600"/>
                            <span className="font-semibold">Tag products</span>
                        </div>
                        <button className="flex items-center gap-1 text-gray-500">
                            <ChevronRightIcon />
                        </button>
                    </div>
                    <div className="border-t"></div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <ContentDisclosureIcon className="text-gray-600"/>
                            <span className="font-semibold">Content disclosure</span>
                        </div>
                        <button className="flex items-center gap-1 text-gray-500">
                            Everyone <ChevronRightIcon />
                        </button>
                    </div>
                </div>

                {/* Visibility Section */}
                <div className="border-t pt-4">
                    <h3 className="font-bold mb-3">Visibility</h3>
                    <div className="space-y-3">
                        <p className="text-sm text-gray-500">Who can watch this video</p>
                        <div className="flex items-center gap-8">
                            <VisibilityOption label="Public" value="Public" selectedValue={visibility} onChange={setVisibility} />
                            <VisibilityOption label="Unlisted" value="Unlisted" selectedValue={visibility} onChange={setVisibility} />
                            <VisibilityOption label="Private" value="Private" selectedValue={visibility} onChange={setVisibility} />
                        </div>
                    </div>
                </div>

                {/* Interactivity Section */}
                <div className="border-t pt-4 space-y-3">
                    <h3 className="font-bold mb-2">Interactivity</h3>
                    <div className="flex justify-between items-center py-2 border-b">
                         <div className="flex items-center gap-3">
                            <ChatBubbleIcon className="text-gray-600"/>
                            <span className="font-semibold">Allow Comments</span>
                        </div>
                        <ToggleSwitch enabled={allowComments} onChange={setAllowComments} />
                    </div>
                     <div className="flex justify-between items-center py-2">
                         <div className="flex items-center gap-3">
                            <DuetIcon className="text-gray-600"/>
                            <span className="font-semibold">Allow Duet/Stitch</span>
                        </div>
                        <ToggleSwitch enabled={allowDuet} onChange={setAllowDuet} />
                    </div>
                </div>

            </main>
            
            {/* Footer */}
            <footer className="p-4 flex items-center gap-4 shrink-0 border-t bg-white">
                <button className="flex-1 bg-gray-200 text-black font-bold py-3 rounded-lg">Save as Draft</button>
                <button className="flex-1 bg-red-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2">
                    <PublishIcon /> Publish
                </button>
            </footer>
        </div>
    );
};

export default PostCreationPage;
