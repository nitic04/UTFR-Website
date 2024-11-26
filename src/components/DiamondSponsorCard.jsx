import React from 'react';
import Fade from 'react-awesome-reveal';

const DiamondSponsorCard = ({ name, url, imageUrl, description }) => {
    return (
        <a href={url} target="_blank" rel="noreferrer">
            <div className="w-[350px] h-[500px] bg-[#dddddd] transition duration-200 rounded-md">
                <div
                className="h-[200px] bg-[#f1f1f1] rounded-t-md"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                }}
                ></div>
                <div className="p-5">
                <h1 className="font-bold text-4xl">{name}</h1>
                <p className="text-base pt-3">{description}</p>
                </div>
            </div>
        </a>
    )
}

export default DiamondSponsorCard;