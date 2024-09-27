// MainPage.js
import { useState } from 'react';
import NavBar from './NavBar';
import SeedPhrase from './SeedPhrase';
import MnemonicDisplay from './MnemonicDisplay';
import BkChoose from './Choice';

const MainPage = ({ videoSrc }) => {
    const [mnemonic, setMnemonic] = useState('');
    const [isMnemonicDisplayed,setIsMnemonicDisplayed]=useState(false);
    const handleMnemonicDone = () => {
        console.log("Rendered");
        setIsMnemonicDisplayed(true);
    }

    return (
        <div className="relative min-h-screen overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
            >
                <source src={videoSrc} type="video/mp4" />
            </video>
            <NavBar />
            <div className="bg-gray-800 flex flex-col items-center justify-center text-white pt-20">
                <SeedPhrase setMnemonic={setMnemonic} />
                {mnemonic && !isMnemonicDisplayed && (<MnemonicDisplay mnemonic={mnemonic} onDone={handleMnemonicDone} />)}
                {isMnemonicDisplayed && <BkChoose />}
            </div> 
            <div></div>
        </div>
    );
};

export default MainPage;
