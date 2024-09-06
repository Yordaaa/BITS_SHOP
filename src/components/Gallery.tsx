import React, { useState } from 'react';

interface GalleryProps {
    images: {
        public_id: string;
        secure_url: string;
    }[];
}

export const Gallery: React.FC<GalleryProps> = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    console.log(images);
    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div className="px-4 mx-auto max-w-screen-sm text-center">
            <div id="indicators-carousel" className="relative w-full mx-auto">
                <div className="relative h-72 overflow-hidden rounded-lg  flex items-center justify-center">
                    {images.map((img, index) => (
                        <div key={index} className={`duration-700 ease-in-out transition-opacity ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`} data-carousel-item="active">
                            <img src={img.secure_url} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover" alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group" onClick={prevSlide}>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                        <i className="fas fa-arrow-left w-4 h-4" />
                    </span>
                </button>
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group" onClick={nextSlide}>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                        <i className="fas fa-arrow-right w-4 h-4" />
                    </span>
                </button>
            </div>
            <div className="flex justify-center items-center mt-8 space-x-4">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img.secure_url}
                        onClick={() => setActiveIndex(index)}
                        className={`w-[15%] h-[70px] object-cover rounded-lg cursor-pointer transform transition duration-300 hover:scale-110 ${activeIndex === index ? 'w-[31%] h-[130px]' : ''}`}
                        alt={`Thumbnail ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
