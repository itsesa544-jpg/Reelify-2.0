import React, { useState } from 'react';
// FIX: Added BackIcon import for the new header.
import { AddImagePlaceholderIcon, LocationPinIcon, CloseIcon, BackIcon } from '../constants';
import type { ShopPost } from '../types';

interface ShopPostCreationPageProps {
  // FIX: Added imageUrl and onBack props to make the component controlled and align with parent component's logic.
  imageUrl: string;
  onBack: () => void;
  onPublish: (postData: Omit<ShopPost, 'id' | 'seller' | 'rating' | 'reviews' | 'views' | 'imageUrls'>) => void;
}

const InputField: React.FC<{ label: string, placeholder: string, value: string, onChange: (val: string) => void, type?: string, required?: boolean, icon?: React.ReactNode }> = ({ label, placeholder, value, onChange, type = "text", required = false, icon }) => (
    <div>
        <label className="text-sm font-semibold text-gray-600 mb-1 block">{label}</label>
        <div className="relative">
            {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2">{icon}</div>}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required={required}
                className={`w-full bg-gray-100 border border-gray-300 rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-green-500 ${icon ? 'pl-10' : ''}`}
            />
        </div>
    </div>
);

const TextareaField: React.FC<{ label: string, placeholder: string, value: string, onChange: (val: string) => void }> = ({ label, placeholder, value, onChange }) => (
    <div>
        <label className="text-sm font-semibold text-gray-600 mb-1 block">{label}</label>
        <textarea
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={4}
            className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 text-black resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
        />
    </div>
);

const SelectField: React.FC<{ label: string, value: string, onChange: (val: string) => void, children: React.ReactNode }> = ({ label, value, onChange, children }) => (
    <div>
        <label className="text-sm font-semibold text-gray-600 mb-1 block">{label}</label>
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none bg-no-repeat bg-right pr-8"
            style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundSize: '1.5em 1.5em' }}
        >
            {children}
        </select>
    </div>
);

const RadioGroup: React.FC<{ label: string, name: string, options: string[], selected: string, onChange: (val: string) => void }> = ({ label, name, options, selected, onChange }) => (
    <div>
        <label className="text-sm font-semibold text-gray-600 mb-2 block">{label}</label>
        <div className="flex gap-4">
            {options.map(option => (
                <label key={option} className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name={name}
                        value={option}
                        checked={selected === option}
                        onChange={(e) => onChange(e.target.value)}
                        className="w-4 h-4 accent-green-600"
                    />
                    <span className="text-sm font-medium">{option}</span>
                </label>
            ))}
        </div>
    </div>
);


const ShopPostCreationPage: React.FC<ShopPostCreationPageProps> = ({ imageUrl, onBack, onPublish }) => {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');
    const [condition, setCondition] = useState<'New' | 'Used'>('New');
    const [location, setLocation] = useState('');
    const [deliveryOption, setDeliveryOption] = useState('Courier');
    const [deliveryCharge, setDeliveryCharge] = useState<'Included' | 'Separate'>('Included');
    
    const handlePublish = (e: React.FormEvent) => {
        e.preventDefault();
        if (!productName || !price) {
            alert('Please fill in all required fields and upload at least one image.');
            return;
        }

        onPublish({
            title: productName,
            price,
            description,
            category,
            size,
            color,
            condition,
            location,
            deliveryOption,
            deliveryCharge,
        });
    };

    return (
        <div className="w-full h-full bg-gray-50 text-black flex flex-col">
            <header className="p-4 flex items-center shrink-0 border-b bg-white sticky top-0 z-10">
                <button onClick={onBack} className="p-2 rounded-full hover:bg-gray-200">
                    <BackIcon className="text-black" />
                </button>
                <h1 className="text-lg font-bold ml-4">List a New Product</h1>
            </header>
            <div className="flex-grow overflow-y-auto">
                <form onSubmit={handlePublish} className="w-full max-w-2xl mx-auto p-4 space-y-6">
                    {/* Section 1: Product Images */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h2 className="text-lg font-bold mb-4">1. Product Image</h2>
                        <div className="grid grid-cols-4 gap-4">
                             {/* FIX: Display the single image passed via props instead of managing an array of images. */}
                            <div className="relative aspect-square">
                                <img src={imageUrl} alt="product preview" className="w-full h-full object-cover rounded-lg" />
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Product Details */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h2 className="text-lg font-bold mb-4">2. Product Details</h2>
                        <div className="space-y-4">
                            <InputField label="Product Name" placeholder="e.g., Stylish Wireless Headphones" value={productName} onChange={setProductName} required />
                            <InputField label="Price (in BDT)" placeholder="12500" value={price} onChange={setPrice} type="number" required icon={<span className="text-gray-500 font-semibold">৳</span>} />
                            <TextareaField label="Description" placeholder="Describe your product in detail..." value={description} onChange={setDescription} />
                        </div>
                    </div>

                    {/* Section 3: Specifications */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h2 className="text-lg font-bold mb-4">3. Specifications</h2>
                        <div className="space-y-4">
                            <SelectField label="Category" value={category} onChange={setCategory}>
                                <option value="">Select a category</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Fashion">Fashion</option>
                                <option value="Home Goods">Home Goods</option>
                                <option value="Other">Other</option>
                            </SelectField>
                            <InputField label="Size (optional)" placeholder="e.g., M, L, XL or 42, 43" value={size} onChange={setSize} />
                            <InputField label="Color (optional)" placeholder="e.g., Red, Blue, Black" value={color} onChange={setColor} />
                            <RadioGroup label="Condition" name="condition" options={['New', 'Used']} selected={condition} onChange={(val) => setCondition(val as 'New' | 'Used')} />
                        </div>
                    </div>

                    {/* Section 4: Delivery Details */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h2 className="text-lg font-bold mb-4">4. Delivery Details</h2>
                        <div className="space-y-4">
                            <InputField label="Location" placeholder="e.g., Dhaka" value={location} onChange={setLocation} icon={<LocationPinIcon/>} />
                            <SelectField label="Delivery Option" value={deliveryOption} onChange={setDeliveryOption}>
                                <option value="Courier">Courier</option>
                                <option value="Hand To-Hand">Hand To-Hand</option>
                            </SelectField>
                            <RadioGroup label="Delivery Charge" name="deliveryCharge" options={['Included in price', 'Separate charge']} selected={deliveryCharge === 'Included' ? 'Included in price' : 'Separate charge'} onChange={(val) => setDeliveryCharge(val === 'Included in price' ? 'Included' : 'Separate')} />
                        </div>
                    </div>
                    
                     <div className="p-2 sticky bottom-0 bg-gray-50/80 backdrop-blur-sm">
                         <button type="submit" className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition-colors">
                            Publish Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ShopPostCreationPage;