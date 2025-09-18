// Selecionando os elementos do DOM que vamos usar
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

/*
  FUNÇÃO DA ANIMAÇÃO

  Este é o cérebro da nossa animação. Ele é surpreendentemente simples.
  1. Adicionamos um "ouvinte de evento" (event listener) no botão 'Criar conta'.
  2. Quando o botão é clicado, adicionamos a classe 'right-panel-active' ao nosso container principal.
  3. O CSS que escrevemos em 'auth.css' cuida de toda a mágica da animação quando essa classe está presente.
*/
signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});


/*
  1. Fazemos o mesmo para o botão 'Faça Login'.
  2. Desta vez, quando ele é clicado, REMOVEMOS a classe 'right-panel-active'.
  3. O container volta ao seu estado original, e o CSS anima essa transição de volta.
*/
signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
