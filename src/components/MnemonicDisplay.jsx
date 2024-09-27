import React, { useState, useEffect } from "react";

const MnemonicDisplay = ({ mnemonic , onDone}) => {
    const [isDone, setIsDone] = useState(false);
    const [notification, setNotification] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);
    const mnemonicWords = mnemonic.split(' ').join(' ');

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeIn(true);
        }, 500); 

        return () => clearTimeout(timer); 
    }, []);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(mnemonicWords).then(() => {
            setNotification(true);
            setTimeout(() => setNotification(false), 2000); 
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    const delAll = () => {
        setFadeOut(true); 
        setTimeout(() => {setIsDone(true); onDone();}, 300); 
    };

    return (
        <>
            {!isDone ? (
                <div className={`transition-opacity duration-300 ${fadeOut ? 'opacity-0' : (fadeIn ? 'opacity-100' : 'opacity-0')}`}>
                    <p className="relative z-40 text-indigo-300 font-bold text-2xl">
                        Click anywhere on the Seed Phrase below to copy it, then click 'Proceed'
                    </p>
                    <div 
                        className="relative z-40 grid grid-cols-4 mt-8 cursor-pointer"
                        onClick={copyToClipboard}
                    >
                        {mnemonic.split(' ').map((word, index) => (
                            <div
                                key={index}
                                className="p-4 border border-indigo-200 text-center rounded-lg bg-transparent text-indigo-200 transition duration-200 hover:bg-indigo-500 hover:text-white"
                            >
                                {word}
                            </div>
                        ))}
                    </div>
                    {notification && (
                        <div className="fixed bottom-5 right-5 bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-lg">
                            Copied to clipboard!
                        </div>
                    )}
                    <div className="flex justify-center pt-10">
                        <button onClick={delAll}
                            className="relative group inline-flex items-center px-8 py-2.5 overflow-hidden font-medium text-xl text-indigo-600 border-2 border-indigo-600 rounded-lg hover:text-white group hover:bg-gray-50">
                            <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </span>
                            <span className="relative transition-all font-bold duration-300 text-xl group-hover:-translate-x-3">Proceed</span>
                        </button> 
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default MnemonicDisplay;
