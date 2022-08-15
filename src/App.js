import { useState } from 'react';

import MostrarNome from './components/Nome';

function App() {
  const [nome, setNome] = useState('Rafael Costa');

  function handleChangeName (nome) 
  {
    setNome(nome);
  }

  return ( // Aqui dentro vai o JSX ou TSX
    <div>
      <h1>Bem vindo ao meu primeiro App!</h1>
      <h2>Olá: {nome}</h2>

      <button onClick={ () => handleChangeName('Eu') }>Mudar Nome</button>
    </div>
  );
}

export default App;
