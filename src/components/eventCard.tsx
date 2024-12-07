"use client"; // Mark this file as a client-side component

import React, { useState } from 'react';
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '900',
  display: 'swap',
  style: 'normal',
});

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  imageUrl: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  date,
  time,
  imageUrl,
}) => {
  return (
    <div className="max-w-xs w-56 rounded-xl overflow-hidden shadow-lg bg-gray-950 transform hover:scale-105 transition-transform duration-300">
      <div className="relative group">
        <img
          className="w-full h-28 object-cover rounded-t-xl"
          src={imageUrl}
          alt={title}
        />
        <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-xs py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Events
        </button>
      </div>
      <div className="p-3">
        <h2 className="text-md font-semibold text-neutral-100">{title}</h2>
        <p className="text-xs text-neutral-100 mt-1">{description}</p>
        <div className="mt-2 text-neutral-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-neutral-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4v4m0-8H8m4 0h4"
                />
              </svg>
              <span className="text-xs">{date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-neutral-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4v4m0-8H8m4 0h4"
                />
              </svg>
              <span className="text-xs">{time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EventSlider: React.FC = () => {
  const [showSecondRow, setShowSecondRow] = useState(false);

  const events = [
    {
      title: 'Music Fest',
      description: 'Enjoy live music performances.',
      date: '2024-12-10',
      time: '7:00 PM',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Art Exhibition',
      description: 'Explore modern art pieces.',
      date: '2024-12-15',
      time: '3:00 PM',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Tech Talk',
      description: 'Learn about new technologies.',
      date: '2024-12-20',
      time: '5:00 PM',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Food Fair',
      description: 'Taste dishes from around the world.',
      date: '2024-12-25',
      time: '12:00 PM',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Photography Workshop',
      description: 'Improve your photography skills.',
      date: '2024-12-30',
      time: '10:00 AM',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Gaming Tournament',
      description: 'Join the ultimate gaming competition.',
      date: '2024-12-31',
      time: '2:00 PM',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Cooking Class',
      description: 'Learn to cook international cuisines.',
      date: '2024-12-28',
      time: '4:00 PM',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Yoga Retreat',
      description: 'Relax and rejuvenate at our yoga retreat.',
      date: '2024-12-18',
      time: '9:00 AM',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  const toggleRow = () => {
    setShowSecondRow((prevState) => !prevState);
  };

  return (
    <div className="relative pt-[250px]">
      {/* First Row of Cards */}
      <div
        className={`flex justify-center gap-4 p-3 transition-all duration-500 ease-in-out ${
          showSecondRow ? 'transform translate-y-[-200%]' : ''
        }`}
      >
        <h1 className={`${montserrat.className} text-1xl font-bold text-center mb-12`}>
          UPCOMING EVENTS
        </h1>
        {events.slice(0, 4).map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            description={event.description}
            date={event.date}
            time={event.time}
            imageUrl={event.imageUrl}
          />
        ))}
      </div>

      {/* Button to Trigger Row Slide */}
      <div className="absolute w-full text-center mt-6 z-10">
        <div className="flex justify-center gap-4">
          {/* Up Arrow Button */}
          <button
            onClick={toggleRow}
            className="p-2 bg-gray-950 text-white rounded-full transform transition-all duration-300 hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>

          {/* Down Arrow Button */}
          <button
            onClick={toggleRow}
            className="p-2 bg-gray-950 text-white rounded-full transform transition-all duration-300 hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 9l7 7 7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Second Row of Cards */}
      <div
        className={`flex justify-center gap-4 p-3 mt-4 transition-all duration-500 ease-in-out ${
          showSecondRow ? 'transform translate-y-[-105%]' : 'transform translate-y-[100%]'
        }`}
      >
        <h1 className={`${montserrat.className} text-1xl font-bold text-center mb-12`}>
          UPCOMING EVENTS
        </h1>
        {events.slice(4).map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            description={event.description}
            date={event.date}
            time={event.time}
            imageUrl={event.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default EventSlider;
