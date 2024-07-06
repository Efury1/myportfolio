import Image from "next/image";
import './styles.css';
import React from "react";

interface ImageViewerProps {
  selectedImage: string;
  description: string;
  onNext: () => void;
  onPrev: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  selectedImage,
  description,
  onNext,
  onPrev,
}) => {
  return (
    <div className="image-viewer">
      <div className="image-container">
        <Image
          src={selectedImage}
          alt={selectedImage}
          width={500} 
          height={300} 
          className="image py-2"
        />    
        <div className="description-container group block max-w-xs mx-auto rounded-lg p-7 bg-cream shadow-lg space-y-3 pd-5 my-5 text-brown">
          <p className="description">{description}</p>
        </div>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-0 text-brown py-14 px-4 md:py-28 md:px-5 text-3xl md:text-5xl"
          onClick={onPrev}
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-0 text-brown py-14 px-4 md:py-28 md:px-5 text-3xl md:text-5xl"
          onClick={onNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageViewer;
