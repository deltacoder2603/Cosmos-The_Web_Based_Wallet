// src/SolanaComponent.jsx
import React, { useState } from 'react';
import { Keypair } from '@solana/web3.js';
import bs58 from 'bs58'; 
import CustomCard from './CustomCards';

const SolanaComponent = () => {
    const [cards, setCards] = useState([]);

    const addCard = () => {
        const keypair = Keypair.generate();
        const newCard = {
            walletNumber: `Wallet ${cards.length + 1}`,
            publicKey: keypair.publicKey.toString(),
            privateKey: bs58.encode(keypair.secretKey),
        };
        
        setCards([...cards, newCard]);
    };

    const deleteCard = (index) => {
        const updatedCards = cards.filter((_, i) => i !== index);
        setCards(updatedCards);
    };

    return (
        <div className="relative z-40 ">
            <div className="relative z-40 flex justify-center text-white font-bold italic text-xl pb-10">
                To add your wallet, click on 'Add Wallet.'
            </div>
            <div className='flex justify-center'>
            <button onClick={addCard} class="relative inline-block group">
                <span
                class="relative z-10 px-3.5 py-2 overflow-hidden font-medium leading-tight flex items-centrer justify-center text-indigo-600 transition-colors duration-300 ease-out border-2 border-indigo-600 rounded-lg group-hover:text-white">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span
                class="absolute left-0 w-40 h-40 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-indigo-600 group-hover:-rotate-180 ease"></span>
                <span class="relative text-base font-bold">Add Wallet</span>
                </span>
                <span
                class="absolute bottom-0 right-0 w-full h-9 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-indigo-600 rounded-lg  group-hover:mr-0 group-hover:mb-2"
                data-rounded="rounded-lg"></span>
            </button>
            </div>
            <div className="relative z-40 grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-2 ">
                {cards.map((card, index) => (
                    <CustomCard 
                        key={index} 
                        walletNumber={card.walletNumber} 
                        publicKey={card.publicKey} 
                        privateKey={card.privateKey} 
                        deleteCard={() => deleteCard(index)} 
                    />
                ))}
            </div>
        </div>
    );
};

export default SolanaComponent;
