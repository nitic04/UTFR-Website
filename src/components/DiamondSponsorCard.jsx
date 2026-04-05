import React from 'react';


const DiamondSponsorCard = ({ name, url, imageUrl, description }) => {
    return (
        <a href={url} target="_blank" rel="noreferrer" className="block w-full h-full">
            <div className="w-full max-w-[700px] mx-auto h-full min-h-[400px] md:min-h-[425px] flex flex-col bg-[#dddddd] hover:shadow-xl transition duration-200 rounded-md overflow-hidden">
                <div className="h-[120px] sm:h-[150px] bg-[#f1f1f1] flex px-6 items-center justify-center">
                    <img
                        src={imageUrl}
                        alt={`${name} logo`}
                        className="h-full max-h-[100px] sm:max-h-[140px] md:max-h-[180px] w-auto px-2 sm:px-4 py-2 object-contain"
                    />
                </div>
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-start">
                    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center md:text-left">{name}</h1>
                    <p className="text-sm sm:text-base pt-2 sm:pt-3 text-center md:text-left">{description}</p>
                </div>
            </div>
        </a>
    );
}

export default DiamondSponsorCard;
