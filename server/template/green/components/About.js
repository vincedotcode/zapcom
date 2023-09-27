import React, { useEffect, useRef, useState } from 'react';

const About = ({ imageSrc, title, paragraph, buttonText }) => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin around the viewport
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={aboutRef}
      className={`container mx-auto flex flex-col lg:flex-row items-center container xl:max-w-screen-xl mx-auto py-32 px-6 ${
        isVisible ? 'visible' : '' // Add a class when element is visible
      }`}
    >
      {/* Column for Image */}
      <div className={`lg:w-2/5 ${isVisible ? 'fade-in-image' : ''}`}>
        <img src={imageSrc.src} alt="About Image" className="w-auto h-auto" />
      </div>

      {/* Column for Text */}
      <div className="lg:w-3/5 mt-4 lg:mt-0 lg:ml-8">
        <h2 className={`text-3xl font-semibold mt-6 ${isVisible ? 'slide-in-title' : ''}`}>
          {title}
        </h2>
        <div className="mt-3 w-10 bg-black text-black h-1"></div>

        <p className="mt-4 text-gray-600">{paragraph}</p>
        <button className="bg-green-800 hover:bg-green-800 text-white py-2 px-6 rounded mt-4">
          {buttonText}
        </button>
      </div>

      {/* CSS for animations */}
      <style jsx>
        {`
          /* Slide-in Animation */
          @keyframes slideInFromBottom {
            0% {
              transform: translateY(100%);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }

          /* Fade-in Animation */
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          /* Apply the animations to elements */
          .slide-in-title {
            animation: slideInFromBottom 0.5s ease-in-out;
          }

          .fade-in-image {
            animation: fadeIn 1s ease-in-out;
          }

          /* Custom class for visibility */
          .visible {
            opacity: 1;
            transform: none;
            transition: opacity 0.5s, transform 0.5s;
          }
        `}
      </style>
    </div>
  );
};

export default About;
