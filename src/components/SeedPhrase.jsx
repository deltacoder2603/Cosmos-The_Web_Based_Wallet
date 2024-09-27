import React, { useState } from "react";
import { generateMnemonic } from "bip39";
import TypingAnimation from './TypingAnimation';

const SeedPhrase = ({ setMnemonic }) => {
    const [isGenerated, setIsGenerated] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    const handleGenerateMnemonic = async () => {
        const newMnemonic = generateMnemonic(128); 
        setMnemonic(newMnemonic);
        setFadeOut(true); 
        setTimeout(() => setIsGenerated(true), 300); 
    };

    return (
        <div>
            {!isGenerated && (
                <div className={`transition-opacity duration-300 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
                    <p className="relative z-40 text-white bold text-4xl flex justify-center pt-20">Welcome to the Wallet</p>
                    <p className="relative z-40 text-purple-600 bold text-8xl flex justify-center pl-2">
                        <TypingAnimation text="Coosmos" speed={400} />
                    </p>
                    <div className="relative z-40 flex justify-center text-white bold italic text-xl pt-20">
                        Now to start with, let's first generate your SEED PHRASE
                    </div>
                    <div className="relative z-40 flex justify-center text-white bold italic text-xl">
                        Click on Generate to start Seed Phrase Generation
                    </div>
                    <div className="flex justify-center pt-10 ">
                        <button
                            onClick={handleGenerateMnemonic}
                            className="relative z-40 inline-flex items-center justify-center px-3.5 py-2.5 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-indigo-500 rounded-lg shadow-md group"
                        >
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-500 group-hover:translate-x-0 ease">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </span>
                            <span className="absolute flex items-center text-base font-semibold justify-center w-full h-full text-indigo-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                                Generate
                            </span>
                            <span className="relative text-base font-semibold invisible">Generate</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SeedPhrase;
