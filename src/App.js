import MostrarNome from "./components/Nome";

function App() {
  return ( // Aqui dentro vai o JSX ou TSX
    <div>
      <h1>Bem vindo ao meu primeiro App!</h1>
      <MostrarNome nome="Leila Mônica" idade="28" />
      <br />
      <MostrarNome nome="Rafael" idade="30"/>
    </div>
  );
}

export default App;
