import React, { useState } from "react";
import Link from "next/link";
import 'tailwindcss/tailwind.css';

export default function FlashCards () {
  return(
    <div className="flex h-screen">
      <div className="flex-none w-1/4 bg-white-800 text-black-100 p-6 relative">
        <img src="/MOTION_LOGO.png" alt="Motion Logo" className="h-88 w-288 mb-4" />
        <h1 className="text-xl font-bold mb-4 pl-2">Menu</h1>
        <a href="/dashboard">
        <button className="flex items-center bg-black text-white px-12 py-2 rounded-md hover:bg-gray-600">
          <img
            src="/dash_home.png"
            alt="Dashboard Icon"
            className="w-6 h-6 mr-2"
          />
          Dashboard
        </button>
        </a>
        <a href="/flashcards">
        <button className="flex text-black mt-5">
          <img
            src="/flashcards.png"
            alt="Flash Cards Icon"
            className="w-6 h-6 mr-2"
          />
          Flash Cards
        </button>
        </a>
        <a href="/calendar">
        <button className="flex text-black mt-5">
          <img
            src="/calendar.png"
            alt="Calendar Icon"
            className="w-6 h-6 mr-2"
          />
          Calendar
        </button>
        </a>
        <a href="/music">
        <button className="flex text-black mt-5">
          <img
            src="/music.png"
            alt="Music List Icon"
            className="w-6 h-6 mr-2"
          />
          Music
        </button>
        </a>
        <div className="absolute inset-y-0 right-0 w-px bg-gray-300"></div>
      </div>
      <div className="w-3/4 bg-white p-6">
        <h1 className="text-xl font-bold mb-4 pl-2">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
        </h1>
        <h2 className="text-4xl font-bold mb-4">Flash Cards</h2>
        <div className="w-20 h-20 bg-gray-300"></div>
      </div>
    </div>
  );
}