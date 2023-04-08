//deifinção de variáveis
const cepInput = document.getElementById("cep");
const addressForm = document.getElementById("adress-form");
const streetInput = document.getElementById("street");
const complementInput = document.getElementById("element");
const cityInput = document.getElementById("city");

const numberInput = document.getElementById("number-house");
const neighborhoodInput = document.getElementById("neighborhood");
const regionInput = document.getElementById('region');


// Validação do Input CEP
cepInput.addEventListener("keypress", (e) => {
  const onlyNumbers = /[0-9]|\./;
  const key = String.fromCharCode(e.keyCode);

  console.log(key);

  console.log(onlyNumbers.test(key));

  // Somente números
  if (!onlyNumbers.test(key)) {
    e.preventDefault();
    return;
  }
});


cepInput.addEventListener("keyup", (e) => {
    const inputValue = e.target.value;
  
    // Checando se o CEP é válido
    if (inputValue.length === 8) {
      getAddress(inputValue);
    }
  });

  //Adquirindo dados da API
const getAddress = async (cep) => {
    
    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;
  
    const resposta = await fetch(apiUrl);
  
    const data = await resposta.json();
  
    console.log(data);

    streetInput.value = data.logradouro;
    cityInput.value = data.localidade;
    neighborhoodInput.value = data.bairro;
    regionInput.value = data.uf;

}