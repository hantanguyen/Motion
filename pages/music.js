import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import 'tailwindcss/tailwind.css';

const SpotifyEmbedder = () => {
    const [playlistUrl, setPlaylistUrl] = useState('');
    const [embedCode, setEmbedCode] = useState(null);

    const handleEmbed = () => {
        const match = playlistUrl.match(/https:\/\/open\.spotify\.com\/playlist\/([a-zA-Z0-9]+)/);

        if (match) {
            const playlistId = match[1];
            const iframeCode = `
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator"
            width="100%" height="152" frameBorder="0" allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
          `;
          setEmbedCode(iframeCode);
        } else {
            alert("Invalid Spotify playlist URL");
        }
    };

return (
    <div className="flex h-screen">
      <div className="flex-none w-1/4 bg-white-800 text-black-100 p-6 relative">
        <img
          src="/MOTION_LOGO.png"
          alt="Motion Logo"
          className="h-82 w-288 m1-10 pr-8 pb-4"
        />
        <h1 className="text-xl pb-2 font-bold mb-4 pl-2">Menu</h1>
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
        <a href="/notes">
          <button className="flex text-black mt-5">
            <img src="/notes.png" alt="Note Icon" className="w-6 h-6 mr-2" />
            Notes
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

        <hr className="my-4 mt-96" />

        <a href="/settings">
          <button className="flex text-black mb-6">
            <img
              src="/settings.png"
              alt="Settings Icon"
              className="w-6 h-6 mr-2"
            />
            Settings
          </button>
        </a>

        <a href="/logout">
          <button className="flex text-black mb-12">
            <img
              src="/Logout .png"
              alt="Logout Icon"
              className="w-6 h-6 mr-2"
            />
            Logout
          </button>
        </a>

        <div className="absolute inset-y-0 right-0 w-px bg-gray-300"></div>
      </div>
      <div className="flex-grow flex justify-center items-center bg-200 p-6">
        <div className="spotify-embedder w-full max-w-lg text-center">
          <h2 className="text-2xl font-bold mb-6">Embed a Spotify Playlist</h2>
          <input
          type="text"
          value={playlistUrl}
          onChange={(e) => setPlaylistUrl(e.target.value)}
          placeholder="Enter Spotify Playlist URL"
          className="border rounded p-3 w-full mb-4"
          />
          <button
          onClick={handleEmbed}
          className="bg-black text-white px-12 py-3 rounded-md hover:bg-gray-600 transition"
          >
            Embed
          </button>

          {embedCode && (
            <div
            className="spotify-embed mt-10"
            dangerouslySetInnerHTML={{ __html: embedCode }}
            />
          )}
        </div>
      </div>
    </div>
    );
}

export default SpotifyEmbedder;