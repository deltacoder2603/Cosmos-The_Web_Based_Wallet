// src/BkChoose.jsx
import React, { useState } from "react";
import EthereumComponent from "./EthereumComponent";
import SolanaComponent from "./SolanaComponent";

const BkChoose = () => {
    const [selectedBlockchain, setSelectedBlockchain] = useState(null);

    const handleClick = (blockchain) => {
        setSelectedBlockchain(blockchain);
    };

    return (
        <>
            {selectedBlockchain === null ? (
                <>
                    <p className="relative z-30 text-white text-2xl font-bold">
                        Choose Blockchain on which you want to generate your wallet
                    </p>
                    <div className="space-x-10 pt-10 pr-10">
                        <button
                            className="rounded-lg px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600"
                            onClick={() => handleClick('ethereum')}
                        >
                            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span className="relative text-2xl font-bold text-indigo-600 transition duration-300 group-hover:text-white ease">Ethereum</span>
                        </button>
                        <button
                            className="rounded-lg px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600"
                            onClick={() => handleClick('solana')}
                        >
                            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span className="relative font-bold text-indigo-600 text-2xl transition duration-300 group-hover:text-white ease">Solana</span>
                        </button>
                    </div>
                </>
            ) : selectedBlockchain === 'ethereum' ? (
                <EthereumComponent />
            ) : (
                <SolanaComponent />
            )}
        </>
    );
};

export default BkChoose;
