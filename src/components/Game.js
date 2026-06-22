import React, { useState, useRef } from 'react'
import './Game.css'

function Game({ fim, verifyLetter, score, tentativas, word, category, letras, letrasadvinhadas, letraserradas, dica }) {
  
  const [letra, setLetra] = useState("")
  const letterInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letra)
    
    setLetra("")

    letterInputRef.current.focus();
  }
  
  return (
    <div className="Gamegeral">
      <p>Pontuação: <span> {score} </span></p>

      <p>Dica sobre a palavra: {dica} </p>
      <div>Categoria: {category}</div>
      {/*<div>Palavra: {word}</div>*/}

      <div className="wordContainer">
        {letras.map((letra, idx) => (
          <span className='letter' key={idx}>
            {letrasadvinhadas.includes(letra) ? letra : ""}
          </span>
        ))}
      </div>

      <div className='letrasutilizadas'>
        <p>Letras erradas já utilizadas: <span>{Array.isArray(letraserradas) ? letraserradas.join(', ') : ''}</span></p>
      </div>

      <div className="tentativas">
        <p>Você ainda tem <span>{tentativas}</span> tentativas</p>
      </div>

      <div className="jogar">
      <form onSubmit={handleSubmit}>
        <input type="text" required onChange={(e) => setLetra(e.target.value)} value={letra} ref={letterInputRef} autoFocus maxLength={1}/>
      </form>
      <button onClick={() => verifyLetter(letra)}>Jogar</button>
      </div>
      <button onClick={fim}>Finalizar</button>
    </div>
  )
}

export default Game