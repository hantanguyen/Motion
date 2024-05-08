import Link from "next/link";
import Head from "next/head";
import 'tailwindcss/tailwind.css';
import React, { useState, useEffect } from 'react';

const Notes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const storedNotes = localStorage.getItem("notes");
        if (storedNotes) {
            setNotes(JSON.parse(storedNotes));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const addNote = () => {
        setNotes(prevNotes => [...prevNotes, ""]); 
    };

    const removeNote = (index) => {
        setNotes(prevNotes => {
            const updatedNotes = [...prevNotes];
            updatedNotes.splice(index, 1); 
            return updatedNotes;
        });
    };

    const handleNoteChange = (index, text) => {
        setNotes(prevNotes => {
            const updatedNotes = [...prevNotes];
            updatedNotes[index] = text; 
            return updatedNotes;
        });
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
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 flex items-center">
                <img src="notes.png" alt="Notes Icon" className="mr-2" />Notes
            </h1>
            <button className="btn bg-gray-600 text-white py-2 px-4 rounded-md shadow-md mb-4" onClick={addNote}>
                <img src="edit.png" alt="Edit Icon" className="mr-2" />Create a Note
            </button>
            <div className="notes-container">
                <p className="mb-4">Total Notes: {notes.length}</p> 
                {notes.map((note, index) => (
                    <div key={index} className="input-box bg-white shadow-md rounded-md p-4 mb-4 relative">
                        <textarea
                            className="w-full h-20 resize-none border border-black rounded-md p-2 focus:outline-none focus:ring focus:ring-black"
                            value={note}
                            onChange={(e) => handleNoteChange(index, e.target.value)}
                            placeholder="Enter your note..."
                        />
                        <img src="delete.png" alt="Delete Icon" className="absolute bottom-2 right-2 cursor-pointer" onClick={() => removeNote(index)} />
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Notes;
