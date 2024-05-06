import React, { useState } from 'react';

const Flashcards = () => {
  const [flashcards, setFlashcards] = useState([
    { id: 1, question: 'What is React?', answer: 'A JavaScript library for building user interfaces.' },
    { id: 2, question: 'What is JSX?', answer: 'A syntax extension for JavaScript.' },
    // Add more flashcards as needed
  ]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const nextCard = () => {
    setCurrentCardIndex(currentCardIndex === flashcards.length - 1 ? 0 : currentCardIndex + 1);
    setIsFlipped(false); // Ensure card is not flipped when moving to the next card
  };

  const prevCard = () => {
    setCurrentCardIndex(currentCardIndex === 0 ? flashcards.length - 1 : currentCardIndex - 1);
    setIsFlipped(false); // Ensure card is not flipped when moving to the previous card
  };

  const handleAddCard = () => {
    if (newQuestion.trim() === '' || newAnswer.trim() === '') {
      alert('Please enter both question and answer.');
      return;
    }
    const newCard = {
      id: Date.now(), // Use timestamp as ID
      question: newQuestion.trim(),
      answer: newAnswer.trim(),
    };
    setFlashcards([...flashcards, newCard]);
    setNewQuestion('');
    setNewAnswer('');
  };

  return (
    <div className="flashcards-container">
      <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
        <div className="front">{flashcards[currentCardIndex].question}</div>
        <div className="back">{flashcards[currentCardIndex].answer}</div>
      </div>
      <div className="navigation">
        <button onClick={prevCard}>Previous</button>
        <button onClick={nextCard}>Next</button>
      </div>
      <div className="add-card">
        <input
          type="text"
          placeholder="Enter question"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter answer"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
        />
        <button onClick={handleAddCard}>Add Card</button>
      </div>
    </div>
  );
};

export default Flashcards;
