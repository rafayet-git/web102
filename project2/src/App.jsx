import './App.css';
import { useState } from 'react';

const App = () => {
  const flashcards = [
    { front: 'Who am i? ', back: 'Rafayet', difficulty: 'easy' },
    { front: 'Who are you?', back: 'A user', difficulty: 'easy' },
    { front: 'Where are you?', back: 'At planet earth', difficulty: 'medium' },
    { front: 'Laugh now.', back: 'HAHAHAHAHAHHAHHAHAHAHAHAHAHAHAHAHAHAHA', difficulty: 'hard' }
  ];
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  const handleNextCardLeft = () => {
    setCurrentCard((currentCard - 1 + flashcards.length) % flashcards.length);
    setIsFlipped(false);
  };
  const handleNextCardRight = () => {
    setCurrentCard((currentCard + 1) % flashcards.length);
    setIsFlipped(false);
  };
  return (

    <div className="App">
      <h1>Flashcards about me</h1>
      <p>A flashcard set (4 cards) for stuff that explains what i am</p>
      <div id={flashcards[currentCard].difficulty} className="flashcard" onClick={handleFlip}>
        <h2>{isFlipped ? flashcards[currentCard].back : flashcards[currentCard].front}</h2>
      </div>
      <button onClick={handleNextCardLeft}>Previous</button>
      <button onClick={handleNextCardRight}>Next</button>
      <h3>Card {currentCard + 1} of {flashcards.length}</h3>
    </div>
  )
}

export default App
