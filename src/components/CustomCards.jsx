// src/CustomCards.jsx
import React, { useState } from 'react';

const CustomCard = ({ walletNumber, publicKey, privateKey, deleteCard }) => {
    const [showPrivateKey, setShowPrivateKey] = useState(false);

    const togglePrivateKey = () => {
        setShowPrivateKey((prev) => !prev);
    };

    return (
        <div className="relative w-[710px] border border-solid border-gray-200 rounded-2xl p-6 transition-all duration-500 h-full bg-transparent shadow-lg hover:shadow-2xl">
            <h4 className="flex justify-center pb-10 font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-violet-400">
                {walletNumber}
            </h4>
            <p className="text-sm font-semibold text-white transition-all duration-500 leading-5">
                Public Key: <span className="font-mono">{publicKey}</span>
            </p>
            <p className="text-sm font-semibold text-white transition-all duration-500 leading-5">
                Private Key: <span className="font-mono">{showPrivateKey ? privateKey : '•••••••••••••••••••••••••••••••'}</span>
                <button 
                    onClick={togglePrivateKey} 
                    className="ml-2 text-blue-500 hover:underline">
                    {showPrivateKey ? 'Hide' : 'Show'}
                </button>
            </p>
            <div className='pt-10'>
            <button onClick={deleteCard}
                class="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-red-600 rounded-lg group">
                <span
                class="absolute w-0 h-0 transition-all duration-500 ease-out bg-red-800 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span
                class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                <span class="relative text-base font-semibold">Delete Wallet</span>
            </button>
            </div>
        </div>
    );
};

export default CustomCard;
