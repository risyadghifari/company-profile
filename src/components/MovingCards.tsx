import React from "react";

const MovingCard = () => {
  // Card data
  const cardData = [
    { 
      bgColor: "bg-pink-600", 
      thumbnail: "https://via.placeholder.com/300x150", 
      title: "Feeling Fake:", 
      description: "A deep dive into exploring identity and authenticity.",
      buttonText: "Learn More"
    },
    { 
      bgColor: "bg-blue-600", 
      thumbnail: "https://via.placeholder.com/300x150", 
      title: "Your gender IS NOT a trend", 
      description: "Understanding the complexity of gender beyond trends.",
      buttonText: "Read More"
    },
    { 
      bgColor: "bg-red-600", 
      thumbnail: "https://via.placeholder.com/300x150", 
      title: "EP.02", 
      description: "Continuing the conversation in our second episode.",
      buttonText: "Watch Now"
    },
    { 
      bgColor: "bg-green-600", 
      thumbnail: "https://via.placeholder.com/300x150", 
      title: "7 Steps for Queer Folks", 
      description: "A guide to navigating life as a queer individual.",
      buttonText: "Get Started"
    },
    { 
      bgColor: "bg-purple-900", 
      thumbnail: "https://via.placeholder.com/300x150", 
      title: "Consent Manifesto", 
      description: "The importance of consent in all aspects of life.",
      buttonText: "Explore"
    },
    { 
      bgColor: "bg-orange-500", 
      thumbnail: "https://via.placeholder.com/300x150", 
      title: "\"Coming Out\" doesn't have to be a moment.", 
      description: "Understanding the journey of coming out as a continuous process.",
      buttonText: "Read More"
    },
  ];

  return (
    <div
      className="bg-black min-h-screen flex items-center justify-center py-10 overflow-hidden relative"
      style={{
        maskImage: "linear-gradient(to bottom, transparent, black 2%, black 2%, transparent)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent, black 2%, black 2%, transparent)",
      }}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 p-10 w-full h-full gap-4">
        {/* Loop through columns */}
        {Array(4)
          .fill(null)
          .map((_, colIndex) => (
            <div
              key={colIndex}
              className={`space-y-4 ${colIndex % 2 === 0 ? "animate-scroll-up" : "animate-scroll-down"}`}
              style={{
                animationDuration: "120s", // Adjust speed for smoother effect
              }}
            >
              {/* Loop through card data */}
              {Array(3) // Dynamically ensure enough duplicates
                .fill(cardData)
                .flat()
                .map((card, index) => (
                  <div
                    key={`${colIndex}-${index}`}
                    className={`${card.bgColor} text-white rounded-lg shadow-lg p-4 flex flex-col hover:animate-none`} // Add hover class
                    style={{
                      width: "100%",
                      aspectRatio: "1/1.25", // Aspect ratio to make cards smaller
                      animation: "scroll 90s linear infinite", // Apply animation
                    }}
                  >
                    {/* Thumbnail */}
                    <img
                      src={card.thumbnail}
                      alt={card.title}
                      className="w-full h-20 object-cover rounded-t-lg mb-4" // Adjust height for thumbnail
                    />
                    {/* Title and Description */}
                    <div className="flex flex-col flex-grow justify-between">
                      <h3 className="text-lg font-bold">{card.title}</h3>
                      <p className="text-sm mt-2">{card.description}</p>
                    </div>
                    {/* Button */}
                    <div className="mt-4 flex justify-end">
                      <button className="bg-white text-black py-1 px-4 rounded-full text-xs font-bold hover:bg-gray-200 transition">
                        {card.buttonText}
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovingCard;
