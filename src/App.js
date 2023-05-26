//CSS
import './App.css';
//REACT
import { useCallback, useEffect, useState } from 'react';
//data
import { wordsList } from './data/words';
//COMPONENTS
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'},
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  //seleciona uma categoria aleatória
  const pickWordAndPickCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
  console.log(category);

    //seleciona uma palavra aleatória
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    console.log(word);

    return {word, category};
  }

  //leva para a tela de jogo
  const startGame = () => { 
    //seleciona a palavra e a categoria
    const {word, category} = pickWordAndPickCategory();

    //criar um array com as letras da palavra
    let wordLetters = word.split('');
    wordLetters = wordLetters.map((l) => l.toLowerCase()); //deixa todas as letras minúsculas
    

    console.log(word, category);
    console.log(wordLetters);

    //atualiza os estados
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
    
    setGameStage(stages[1].name);
  };

  //processa a palavra secreta
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  //reinicia o jogo
  const retry = () => {
    setGameStage(stages[0].name);
  };
  

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && (
        <Game 
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
          />
        )}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
