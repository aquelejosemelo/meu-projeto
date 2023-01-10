import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyNmae from './components/SayMyName';
import Pessoa from './components/Pessoal';

function App() {
 

  return (


    <div className="App">
  
      <HelloWorld />
      <SayMyNmae nome="José"/>
      <SayMyNmae nome="Carlos"/>
      <SayMyNmae nome="Marcelo"/>

      <Pessoa nome="Rodrigo" idade="28" profissao="Psicólogo" foto="https://via.placeholder.com/150" />

    </div>


  );
}

export default App;
