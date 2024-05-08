import React, { useState } from "react";
import Link from "next/link";
import { v4 as uuidv4 } from 'uuid';
import 'tailwindcss/tailwind.css';

const Flashcards = () => {
  const [sets, setSets] = useState([]);
  const [selectedSet, setSelectedSet] = useState(null);
  const [newSetName, setNewSetName] = useState('');
  const [newTerm, setNewTerm] = useState('');
  const [newDefinition, setNewDefinition] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);

  const handleCreateSet = () => {
    const newSet = {
      id: uuidv4(),
      name: newSetName,
      flashcards: [],
    };
    setSets([...sets, newSet]);
    setNewSetName('');
  };

  const handleAddFlashcard = () => {
    if (!selectedSet) return;

    const updatedSet = {
      ...selectedSet,
      flashcards: [
        ...selectedSet.flashcards,
        { id: uuidv4(), term: newTerm, definition: newDefinition },
      ],
    };

    const updatedSets = sets.map((set) => (set.id === selectedSet.id ? updatedSet : set));
    
    setSets(updatedSets);
    setSelectedSet(updatedSet);
    setNewTerm('');
    setNewDefinition('');
  };

  const handleSelectSet = (set) => {
    setSelectedSet(set);
    setCurrentFlashcardIndex(0);
    setIsFlipped(false);
  };

  const handleDeleteFlashcard = (flashcardId) => {
    if (!selectedSet) return;

    const updatedFlashcards = selectedSet.flashcards.filter(
      (flashcard) => flashcard.it !== flashcardId
    );

    const updatedSet = {
      ...selectedSet,
      flashcards: updatedFlashcards,
    };

    const updatedSets = sets.map((set) => (set.id === selectedSet.id ? updatedSet : set));

    setSets(updatedSets);
    setSelectedSet(updatedSet);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNextCard = () => {
    if (selectedSet && currentFlashcardIndex < selectedSet.flashcards.length - 1) {
      setCurrentFlashcardIndex(currentFlashcardIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevCard = () => {
    if (selectedSet && currentFlashcardIndex > 0) {
      setCurrentFlashcardIndex(currentFlashcardIndex - 1);
      setIsFlipped(false);
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
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Flashcards</h1>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Create Flashcard Set</h2>
          <input
          className="border p-2 w-1/2"
          placeholder="Set Name"
          value={newSetName}
          onChange={(e) => setNewSetName(e.target.value)}
          />
          <button
          className="bg-black text-white px-12 py-3 rounded-md hover:bg-gray-600 transition"
          onClick={handleCreateSet}
          >
            Create Set
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Flashcard Sets</h2>
          <div className="flex flex-wrap gap-2">
            {sets.map((set) => (
              <button
              key={set.id}
              className={`p-2 border ${set.id === selectedSet?.id ? 'bg-white' : ''}`}
              onClick={() => handleSelectSet(set)}
              >
              {set.name}
              </button>
            ))}
          </div>
        </div>

        {selectedSet && (
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Add Flashcard to "{selectedSet.name}"</h2>
              <input
              className="border p-2"
              placeholder="Term"
              value={newTerm}
              onChange={(e) => setNewTerm(e.target.value)}
              />
              <input
              className="border p-2 ml-2"
              placeholder="Definition"
              value={newDefinition}
              onChange={(e) => setNewDefinition(e.target.value)}
              />
              <button
              className="bg-black text-white px-12 py-3 rounded-md hover:bg-gray-600 transition"
              onClick={handleAddFlashcard}
              >
                Add Flashcard
              </button>
            </div>

            {selectedSet.flashcards.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-2">Study Flashcards</h2>
                <div
                className={`p-6 border bg-gray-100 cursor-pointer text-center ${
                  isFlipped ? 'bg-yellow-200' : 'bg-gray-100'
                }`}
                onClick={handleFlip}
                >
                  {isFlipped
                  ? selectedSet.flashcards[currentFlashcardIndex].definition
                  : selectedSet.flashcards[currentFlashcardIndex].term}
                </div>
                <div className="flex justify-between mt-4">
                  <button
                  className={`p-2 border ${currentFlashcardIndex > 0 ? '' : 'opacity-50'}`}
                  onClick={handlePrevCard}
                  disabled={currentFlashcardIndex === 0}
                  >
                    Previous
                  </button>
                  <button
                  className={`p-2 border ${
                    currentFlashcardIndex < selectedSet.flashcards.length - 1
                      ? ''
                      : 'opacity-50'
                  }`}
                  onClick={handleNextCard}
                  disabled={currentFlashcardIndex >= selectedSet.flashcards.length - 1}
                  >
                    Next
                  </button>
                </div>
              </div>  
            )}

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Manage Flashcards</h2>
              <div className="grid grid-cols-2 gap-4">
                {selectedSet.flashcards.map((flashcard) => (
                  <div key={flashcard.id} className="flex items-center justify-between border p-2">
                    <div>
                      <strong>Term:</strong> {flashcard.term}
                      <br />
                      <strong>Definition:</strong> {flashcard.definition}
                    </div>
                    <button
                    className="bg-red-500 text-white p-2"
                    onClick={() => handleDeleteFlashcard(flashcard.if)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>  
        )}
      </div>
    </div>
  );
};

export default Flashcards;