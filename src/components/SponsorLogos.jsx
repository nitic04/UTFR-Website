import React from 'react';

const SponsorLogos = ({ title, sponsors }) => {
    return (
        <div className="sponsor-section bg-[#e3e3e3] pb-10">
            <h1 className="flex justify-center text-5xl font-bold text-center">{title}</h1>
            <div className="px-16">
                <div className="flex justify-center pt-10 items-center">
                    <div className={`grid ${sponsors.length >= 4 ? 'md:grid-cols-4' : 'md:grid-cols-2'} gap-x-20`}>
                        {sponsors.map((sponsor, index) => (
                            sponsor.url ? (
                                <a key={index} href={sponsor.url} target="_blank" rel="noreferrer">
                                        <img className="sponsorImg" src={sponsor.imageUrl} alt={sponsor.alt || ""} />
                                </a>
                            ) : (
                                <img key={index} className="sponsorImg" src={sponsor.src} alt={sponsor.alt || ""} />
                            )
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SponsorLogos;
