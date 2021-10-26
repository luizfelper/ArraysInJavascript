import './App.css';
import React from 'react';
function App() {

  const [dados, setDados] = React.useState([{
    Id: 0,
    Nome: 'Bruno',
    Sobrenome: 'Santos',
    Idade: '23',
    Telefone: '+55-86-999981876'
  },
  {
    Id: 1,
    Nome: 'Felipe',
    Sobrenome: 'Fontenele',
    Idade: '23',
    Telefone: '+55-86-999981876'
  },
  {
    Id: 2,
    Nome: 'Marcos',
    Sobrenome: 'Santos',
    Idade: '23',
    Telefone: '+55-86-999981876'
  }
  ]);


  return (
    <div>
      <div className="App">
        <h2>Tratar dados com Javascript</h2>
        <div className="boxCadastrar">
          <form onSubmit={function addPessoas(e) {
            e.preventDefault();
            const dadosPessoa = new FormData(e.target); //Captura os dados do formulário em geral

            const obtemDados = { //Captura os dados dos campos em específico
              Id: 1,
              Nome: dadosPessoa.get('nome'),
              Sobrenome: dadosPessoa.get('sobrenome'),
              Idade: dadosPessoa.get('idade'),
              Telefone: dadosPessoa.get('telefone')
            };

            const pessoasAtualizadas = [...dados, obtemDados] //Adiciona os dados na lista de pessoas
            setDados(pessoasAtualizadas); //Atualiza a lista de pessoas
            console.log(pessoasAtualizadas);
            
            // Limpar formulário
            let inputs = document.querySelectorAll('input');
            inputs.forEach(input => input.value = '');
            
          }}>
            <h3>Nome:</h3>
            <input type="text" name="nome" placeholder="Nome" />
            <h3>Sobrenome:</h3>
            <input type="text" name="sobrenome" placeholder="Sobrenome" />
            <h3>Idade:</h3>
            <input type="number" name="idade" placeholder="Idade" />
            <h3>Telefone:</h3>
            <input type="number" name="telefone" placeholder="Telefone" />
            <div className="boxBtnCadastrar">
              <button className="btnCad">Cadastrar</button>
            </div>
          </form>
        </div>
        <form className="boxBuscar">
          <input id="nome" type="text" name="buscar" placeholder="Buscar" />
          <button onClick={function buscar(e) { // Busca elemento no array pelo nome
          e.preventDefault();
          const name = document.querySelector("#nome");
          const value = name.value;

          const encontrarDados = dados.find(dados => dados.Nome === value); //Função do Javascript que busca elemento no array passando como parâmentro o value do input
          console.log(encontrarDados);
        }}>Buscar</button>
        </form>

        <h2>Alunos ({dados.length})</h2>

        <div className="boxListas">
          {dados.map((itemAtual, i) => {
            return (
              <div className="ItemAluno" key={itemAtual.i}>
                <p>Nome: {itemAtual.Nome}</p>
                <p>Sobrenome: {itemAtual.Sobrenome}</p>
                <p>Idade: {itemAtual.Idade}</p>
                <p>Telefone: {itemAtual.Telefone}</p>
                <div>
                  <form>
                    <button onClick={function excluir(e) {
                      e.preventDefault();
                      delete dados[i];
                      const dadosAtuais = dados.filter(item => item !== null);
                      setDados(dadosAtuais);
                      console.log(dados);
                    }}>Remover</button>
                  </form>

                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}
export default App;
