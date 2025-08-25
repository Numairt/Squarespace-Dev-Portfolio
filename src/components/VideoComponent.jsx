import React, { useState } from "react";
import { Play, X } from "lucide-react";

const VimeoBackgroundPlayer = () => {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const vimeoId = "355949646";

  const openPlayer = () => {
    setIsPlayerOpen(true);
  };

  const closePlayer = () => {
    setIsPlayerOpen(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black my-32">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`}
          className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 object-cover"
          style={{
            width: "100vw",
            height: "56.25vw", // 16:9 aspect ratio
            minHeight: "100vh",
            minWidth: "177.78vh", // 16:9 aspect ratio
          }}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>

      {/* Overlay with Play Button */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <button
          onClick={openPlayer}
          className="group flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
        >
          <Play
            className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform duration-300"
            fill="white"
          />
        </button>
      </div>

      {/* Video Player Modal */}
      {isPlayerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-8 lg:py-32 lg:px-24">
          <div className="relative w-full max-w-4xl lg:max-w-5xl">
            {/* Close Button */}
            <button
              onClick={closePlayer}
              className="absolute -top-6 md:-top-8 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Video Player */}
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&color=ffffff&title=0&byline=0&portrait=0`}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Vimeo Video Player"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VimeoBackgroundPlayer;
