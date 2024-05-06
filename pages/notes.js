import Link from "next/link";
import Head from "next/head";
import 'tailwindcss/tailwind.css';
import React, { useState, useEffect } from 'react';

const Notes = () => {
    const [notes, setNotes] = useState([]);

    // Load notes from localStorage on component mount
    useEffect(() => {
        const storedNotes = localStorage.getItem("notes");
        if (storedNotes) {
            setNotes(JSON.parse(storedNotes));
        }
    }, []);

    // Update localStorage whenever notes state changes
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    // Function to add a new note
    const addNote = () => {
        setNotes(prevNotes => [...prevNotes, ""]); // Add an empty note
    };

    // Function to remove a note
    const removeNote = (index) => {
        setNotes(prevNotes => {
            const updatedNotes = [...prevNotes];
            updatedNotes.splice(index, 1); // Remove note at index
            return updatedNotes;
        });
    };

    // Function to handle note text change
    const handleNoteChange = (index, text) => {
        setNotes(prevNotes => {
            const updatedNotes = [...prevNotes];
            updatedNotes[index] = text; // Update note at index
            return updatedNotes;
        });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 flex items-center">
                <img src="notes.png" alt="Notes Icon" className="mr-2" />Notes
            </h1>
            <button className="btn bg-gray-600 text-white py-2 px-4 rounded-md shadow-md mb-4" onClick={addNote}>
                <img src="edit.png" alt="Edit Icon" className="mr-2" />Create a Note
            </button>
            <div className="notes-container">
                <p className="mb-4">Total Notes: {notes.length}</p> {/* Notes counter */}
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
    );
};

export default Notes;
