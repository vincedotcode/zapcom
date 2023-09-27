import React from 'react';

const Banner = ({ images, text, buttonText }) => {
  return (
    <div className="relative bg-cover bg-center h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {images.map((imageUrl, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center ${
            index === 0 ? 'z-10' : 'z-0'
          } ${index === 0 ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
        <div className="slide-in-left">
          <h1 className="text-4xl md:text-6xl font-semibold mb-4">{text}</h1>
          <button className="border-solid border-2 border-cyan-500 hover:bg-cyan-500 text-white py-2 px-6 rounded">
            {buttonText}
          </button>
        </div>
      </div>

      <style jsx>{`
        .slide-in-left {
          animation: slideInLeft 1s ease-in-out forwards;
        }

        @keyframes slideInLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
