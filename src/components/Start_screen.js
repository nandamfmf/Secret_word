import './Start_screen.css';

function Start_screen({iniciar_jogo}) {
  return (
    <div className='start'>
        <h2>Advinhe a palavra correta</h2>
        <p>Clique no botão abaixo para jogar</p>
        <button onClick={iniciar_jogo}>Iniciar</button>
    </div>
  )
}

export default Start_screen