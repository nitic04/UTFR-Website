import React, { useState } from 'react';
import UT23Cutout from '../assets/HistoricCarPhotos/UT23/UT23_Cutout.png';
import AeroModal from './CarDiagramModals/AeroModal';

const CarPartsDiagram = () => {

    const dotCoordinates = [
        { x: 0.1, y: 3.25 },
        { x: 0.4, y: 3 },
        // Add more dot coordinates as needed
    ];

    const [selectedDot, setSelectedDot] = useState(null);

    const handleDotClick = (dotIndex) => {
        setSelectedDot(dotIndex);
    };

    const modalComponents = [
        AeroModal // Import your modal component for Dot 1
    ];

    const ModalComponent = selectedDot !== null ? modalComponents[selectedDot] : null;

  return (
    <div>
        <div className='h-screen'>
            <img className="" src={UT23Cutout} alt="" />

            {dotCoordinates.map((dot, index) => (
            <div
                key={index}
                className={`dot ${selectedDot === index ? 'active' : ''}`}
                style={{
                    top: `${dot.y * 100}vh`, // Convert relative coordinates to vh
                    left: `${dot.x * 100}vw`, // Convert relative coordinates to vw
                }}
                onClick={() => handleDotClick(index)}
            ></div>
            ))}

            {ModalComponent && (
            <div className="modal">
                <div className="modal-content">
                    <ModalComponent />
                </div>
            </div>
            )}

        </div>
    </div>
  )
}

export default CarPartsDiagram
