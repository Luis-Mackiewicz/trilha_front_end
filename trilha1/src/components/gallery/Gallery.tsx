import { useState } from "react";
import "./gallery.module.css";

const images = [
  "https://placekitten.com/600/300",
  "https://placekitten.com/601/300",
  "https://placekitten.com/602/300",
  "https://placekitten.com/603/300",
];

const Gallery = () => {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <button onClick={prevImage} className="carousel-button left">
        ‹
      </button>

      <img
        src={images[current]}
        alt={`Slide ${current}`}
        className="carousel-image"
      />

      <button onClick={nextImage} className="carousel-button right">
        ›
      </button>
    </div>
  );
};

export default Gallery;
