import './App.css';

function App() {
  const name = 'José';


const url = 'https://via.placeholder.com/150';

  return (
    <div className="App">
      <h1>Olá Mundo</h1>
      <p>Meu primeiro App</p>
      <p>Olá, {name}</p>
      <img src={url} alt="Minha Imagem" />
    </div>
  );
}

export default App;
