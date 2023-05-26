import './Game.css'

const Game = ({
    verifyLetter,
    pickedWord,
    pickedCategory,
    letters,
    guessedLetters,
    wrongLetters,
    guesses,
    score,
    }) => {
  return (
    <div className='game'>
        <p className='points'>
            <span>Pontuação: {score}</span>
        </p>
        <h1>Adivinhe a palavra</h1>
        <h3 className='tip'>
            Dica da palavra: <span>{pickedCategory}</span>
        </h3>
        <p>Você ainda tem {guesses} tentativas(s)</p>
        <div className="wordContainer">
            {letters.map((letter, i) => (
                guessedLetters.includes(letter) ? (
                    <span key={i} className='letter'>
                        {letter}
                    </span>
                ) : (
                    <span key={i} className='blankSquare'></span>
                )
            ))}
        </div>
        <div className="lettersContainer">
            <p>Tente adivinhar a letra da palavra:</p>
            <form>
                <input type="text" name='letter' maxLength={1} required />
                <button>Jogar!</button>
            </form>
        </div>
        <div className="wrongLetterContainer">
            <p>Letras já utilizadas:</p>
            {wrongLetters.map((letter,i) => (
                <span key={i}>{letter}, </span>
            ))}
        </div>
        
    </div>
  )
}

export default Game