import {useState} from 'react'

function App() {

  //faz a interação com o campo input de peso
  const [peso, setPeso] = useState('');
  //faz a interação com o campo input de altura
  const [altura, setAltura] = useState('');
  //informa o resultado ao ususario
  const [mensagem, setMenssagem] = useState('');

  function calcular(){
    //formula de calculo de IMC
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    //condições
    if(imc < 18.6){
      setMenssagem("Você está abaixo do peso! Seu IMC:" +  + imc.toFixed(2))
    }else if (imc >= 18.6 && imc < 24.9){
      setMenssagem("Peso Ideal! Seu IMC:" + + imc.toFixed(2))
    }else if (imc >= 24.9 && imc < 34.9){
      setMenssagem("Você está levemente acima do peso! Seu IMC:" +  + imc.toFixed(2))
    }else if (imc > 34.9){
      setMenssagem("Você está possivelmente obeso. Cuidado! Seu IMC:" +  + imc.toFixed(2))
    }
  }
  return (
    <div className="App">
      <h1>Calculadora IMC</h1>
      <span>Descubra se você está acima do seu peso!</span>
      <div class="area-input">
        <input
        type="text"
        placeholder="Peso em (kg) Ex: 90kg"
        value={peso}
        //capura os dados preenchidos pelo ususario
        onChange={(e) => setPeso(e.target.value)}
        />
        <input
        type="text"
        placeholder="Altura em (cm) Ex: 164"
        value={altura}
        //capura os dados preenchidos pelo ususario
        onChange={(e) => setAltura(e.target.value)}
        />
        <button onClick={calcular}>Calcular</button>
      </div>
      <h2>{mensagem}</h2>
    </div>
  );
}

export default App;
