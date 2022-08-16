import { useState } from "react";

function App() {
  const [input, setInput] = useState('');
  const [tatefas, setTarefas] = useState([
    'Maria Eloah',
    'Emylle',
    'Henrique'
  ]);


  function handleRegister (e)
  {
    e.preventDefault();

    setTarefas([...tatefas, input]);
    setInput('');
  }

  return ( // Aqui dentro vai o JSX ou TSX
    <div>
      <h2>Cadastro de Usuário</h2>

      <form onSubmit={ handleRegister }>
        <label>Nome da tarefa</label> <br/>
        <input 
          placeholder="Digite uma tarefa" 
          value={input}
          onChange={ e => setInput(e.target.value)}
        />
        <br/><br/>

        <button type="submit">Registrar</button>
      </form>

      <br/><br/>

      <ul>
        {tatefas.map( tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
