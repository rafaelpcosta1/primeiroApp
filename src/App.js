import { useState } from "react";

function App() {
  const [usuario, setUsuario] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');

  const [cliente, setCliente] = useState({});

  function handleRegister (e)
  {
    e.preventDefault();

    setCliente({
      nome: usuario,
      email: email,
      idade: idade,
    })

    alert('Cliente registrado com sucesso!')
  }

  return ( // Aqui dentro vai o JSX ou TSX
    <div>
      <h2>Cadastro de Usuário</h2>

      <form onSubmit={ handleRegister }>
        <label>Nome</label> <br/>
        <input 
          placeholder="Digite seu nome" 
          value={usuario}
          onChange={ e => setUsuario(e.target.value)}
        />
        <br/><br/>

        <label>Email</label> <br/>
        <input 
          placeholder="Digite seu email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br/><br/>

        <label>Idade</label> <br/>
        <input 
          placeholder="Digite sua idade"
          value={idade}
          onChange={e => setIdade(e.target.value)}
        />
        <br/><br/>

        <button type="submit">Registrar</button>
      </form>

      <br/><br/>

      <div>
        <span>Bem vindo.: {cliente.nome}</span> <br/>
        <span>Idade..........: {cliente.idade}</span> <br/>
        <span>E-mail........: {cliente.email}</span> <br/>
      </div>
    </div>
  );
}

export default App;
