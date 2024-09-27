import React from 'react';
import MainPage from './components/MainPage';

function App() {
    const videoSource = "src/assets/bg.mp4";

    return (
        <>
            <MainPage videoSrc={videoSource} />        
        </>
    );
}

export default App;
