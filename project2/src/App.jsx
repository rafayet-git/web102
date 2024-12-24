import './App.css';
import { useState } from 'react';

const App = () => {
  const flashcards = [
    { front: 'Who am i? ', back: 'Rafayet', difficulty: 'easy' },
    { front: 'Who are you?', back: 'A user', difficulty: 'easy' },
    { front: 'Where are you?', back: 'At planet earth', difficulty: 'medium' },
    { front: 'Laugh now.', back: 'Haha', difficulty: 'hard' }
  ];
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [answer, setAnswer] = useState('');
  const [streak, setStreak] = useState(0);
  const [highStreak, setHighStreak] = useState(0);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    // No cheating
    if (!isFlipped && !isCorrect) {
      setStreak(0);
    }
  };

  const handleNextCardLeft = () => {
    setCurrentCard((currentCard - 1 + flashcards.length) % flashcards.length);
    setIsFlipped(false);
    setIsCorrect(false);
    setIsSubmitted(false);
  };

  const handleNextCardRight = () => {
    setCurrentCard((currentCard + 1) % flashcards.length);
    setIsFlipped(false);
    setIsCorrect(false);
    setIsSubmitted(false);
  };
  
  const handleStreak = () => {
    setStreak(streak + 1);
    if (streak >= highStreak) {
      setHighStreak(streak + 1);
    }
  }
  const handleCorrect = () => {
    setIsSubmitted(true);
    if (!isCorrect && answer === flashcards[currentCard].back) {
      setIsCorrect(true);
      handleStreak();
    }
  }

  return (

    <div className="App">
      <h1>Flashcards about me</h1>
      <p>A flashcard set (4 cards) for stuff that explains what i am</p>
      <h2>Streak: {streak}, Highest Streak: {highStreak}</h2>
      <div id={flashcards[currentCard].difficulty} className="flashcard" onClick={handleFlip}>
        <h2>{isFlipped ? flashcards[currentCard].back : flashcards[currentCard].front}</h2>
      </div>
      <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
      <button onClick={handleCorrect}>Submit</button>
      <button onClick={handleNextCardLeft}>Previous</button>
      <button onClick={handleNextCardRight}>Next</button>
      {isCorrect ? <p>Correct!</p> : isSubmitted && <p>Incorrect!</p>}
      <h3>Card {currentCard + 1} of {flashcards.length}</h3>
    </div>
  )
}

export default App
