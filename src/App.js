import {useState, useEffect } from 'react'
import { BANCO_DE_PALAVRAS } from './palavras.js';
import Start_screen from './components/Start_screen.js';
import Game from './components/Game.js'
import Win from './components/Win.js'
import Gameover from './components/Gameover.js'
import './App.css';

const stages=[
  {id: 0, name:'start'},
  {id: 1, name:'game'},
  {id: 2, name:'end'},
  {id: 3, name:'win'},
]

function App() {
  const [word, setWord ] = useState("")
  const [category, setCategory] = useState("")
  
  const [stage, setStage] = useState(stages[0].name)
  const [dica, setDica] = useState([])
  const [palavras] = useState(BANCO_DE_PALAVRAS)
  const [letras, setLetras] = useState([])
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [tentativas, setTentativas] = useState(10)
  const [tentativas_letras, setTentativas_letras] = useState([])
  const [score, setScore] = useState(0)

  function chooseWordCategory() {
    const randomIndex = Math.floor(Math.random() * palavras.length)
    const selected = palavras[randomIndex]
    const letras = selected.palavra.split("")
    const dica = selected.dica

    return { word: selected.palavra, category: selected.categoria, letras, dica }
  }

  function iniciar_jogo () {
    const { word, category, letras, dica } = chooseWordCategory()
    setWord(word)
    setCategory(category)
    setLetras(letras)
    setDica(dica)
    setStage(stages[1].name)
  }

  function verifyLetter (letra) {
    if(!letra) return;
    const normalizedLetter = letra.toLowerCase();

    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return;
    }

    if(letras.includes(normalizedLetter)){
      setGuessedLetters((acutalGuessed) => [
        ...acutalGuessed,
        normalizedLetter
      ])
      
      setScore((score) => score + 10);

    }

    else{
      setWrongLetters((actualWrong) => [
        ...actualWrong,
        normalizedLetter
      ])

      setTentativas((tentativas) => tentativas - 1);
    }
  }

  useEffect(() => {
      const uniqueLetters = [...new Set(letras)];

      if (guessedLetters.length === uniqueLetters.length && uniqueLetters.length > 0) {
        setStage(stages[3].name);
      }

      if (tentativas <= 0) {
          setStage(stages[2].name);
      }
  }, [guessedLetters, tentativas, letras]);

  function retry () {
    setStage(stages[0].name);

    setCategory("")
    setLetras([])
    setGuessedLetters([])
    setWrongLetters([])
    setScore(0)
    setWord("")
    setTentativas(10)
  }

  function fim () {
    setStage(stages[2].name);
  }

  return (
    <div className="App">
      {stage === "start" && <Start_screen iniciar_jogo={iniciar_jogo} />}
      {stage === "game" && <Game fim={fim} verifyLetter={verifyLetter} score={score} word={word} category={category} letras={letras} tentativas={tentativas} letrasadvinhadas={guessedLetters} letraserradas={wrongLetters} dica={dica}/>}
      {stage === "end" && <Gameover retry={retry} score={score}/>}
      {stage === "win" && <Win retry={retry} score={score}/>}
    </div>
  );
}

export default App;
