import './App.css';
import React from 'react';
function App() {

  const [dados, setDados] = React.useState([{
    Id: 0,
    Nome: 'Felipe',
    Sobrenome: 'Santos',
    Idade: '23',
    Telefone: '+55-86-999981876'
  },
  {
    Id: 1,
    Nome: 'Felipe',
    Sobrenome: 'Santos',
    Idade: '23',
    Telefone: '+55-86-999981876'
  },
  {
    Id: 1,
    Nome: 'Felipe',
    Sobrenome: 'Santos',
    Idade: '23',
    Telefone: '+55-86-999981876'
  }
  ]);


  return (
    <div className="App">
      <h1>Tratar dados com Javascript</h1>
      <form onSubmit={function addPessoas(e) {
        e.preventDefault();
        const dadosPessoa = new FormData(e.target);

        const obtemDados = {
          Id: 1,
          Nome: dadosPessoa.get('nome'),
          Sobrenome: dadosPessoa.get('sobrenome'),
          Idade: dadosPessoa.get('idade'),
          Telefone: dadosPessoa.get('telefone')
        };

        const pessoasAtualizadas = [...dados, obtemDados]
        setDados(pessoasAtualizadas);
        console.log(pessoasAtualizadas);
      }}>
        <input type="text" name="nome" placeholder="Nome" />
        <input type="text" name="sobrenome" placeholder="Sobrenome" />
        <input type="text" name="idade" placeholder="Idade" />
        <input type="text" name="telefone" placeholder="Telefone" />
        <button>Cadastrar Aluno</button>
      </form>
      <form>
        <input type="text" name="buscar" placeholder="Buscar" />
      </form>

      <h2>Quantidade ({dados.length})</h2>

      {dados.map((itemAtual, i) => {
        return (
          <div className="ItemAluno" key={itemAtual.i}>
            <p>Nome: {itemAtual.Nome}</p>
            <p>Sobrenome: {itemAtual.Sobrenome}</p>
            <p>Idade: {itemAtual.Idade}</p>
            <p>Telefone: {itemAtual.Telefone}</p>
            <div>
              <form>
              <button onClick={ function excluir(e) {
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
  );
}
export default App;
