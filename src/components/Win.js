import React from 'react'
import './Win.css'

function Win ({retry, score}) {
  return (
    <div className="win">
        <p className="badge">Vitória</p>
        <h1>Parabéns! Você ganhou</h1>
        <p className="info">Sua pontuação foi <strong>{score}</strong>.</p>
        <button className="btn btn-primary" onClick={retry}>Tentar novamente</button>
    </div>
  )
}

export default Win;