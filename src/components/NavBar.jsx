import React from "react";
import cosmosIcon from "../assets/logo.png";

const NavBar = () => {
    return (
        <>
        <div className="flex items-center justify-center pt-6 relative z-20"> 
            <img 
                src={cosmosIcon}
                className="w-9" 
                alt="Cosmos Icon" 
            />
            <p className="text-white text-center text-3xl pl-4 bold ">Cosmos</p>
        </div>
        </>
    );
};

export default NavBar;
