import React from 'react'
import './Gameover.css'

function Gameover({retry, score}) {
  return (
    <div className="gameover">
      <p className="message">Fim de jogo!</p>
      <p className="info">Sua pontuação foi <strong>{score}</strong>.</p>
      <button className="btn btn-primary" onClick={retry}>Tentar novamente</button>
    </div>
  )
}

export default Gameover