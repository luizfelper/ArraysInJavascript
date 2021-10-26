import './App.css';
import React from 'react';
import { BiTrash } from 'react-icons/bi';
import { FaSearch } from 'react-icons/fa';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import {AiOutlineGithub} from 'react-icons/ai';


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
  }
  ]);

  const [DadosDaBusca, setDadosDaBusca] = React.useState([{}]);

  return (
    <div>
      <div className="App">
        <h2 className="TituloApp">Tratar dados com Javascript</h2>
        <div className="boxCadastrar">
                <form onSubmit={function addPessoas(e) {
                    e.preventDefault();
                    const dadosPessoa = new FormData(e.target); //Captura os dados do formulário em geral

                    const obtemDados = { //Captura os dados dos campos em específico
                        Id: dadosPessoa.get('Id'),
                        Nome: dadosPessoa.get('nome'),
                        Matricula: dadosPessoa.get('matricula'),
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
                    <h3>Id</h3>
                    <input type="number" name="Id" placeholder="Id" />
                    <h3>Nome:</h3>
                    <input type="text" name="nome" placeholder="Nome" />
                    <h3>Matrícula:</h3>
                    <input type="number" name="matricula" placeholder="Matricula" />
                    <h3>Idade:</h3>
                    <input type="number" name="idade" placeholder="Idade" />
                    <h3>Telefone:</h3>
                    <input type="number" name="telefone" placeholder="Telefone" />
                    <div className="boxBtnCadastrar">
                        <button className="btnCad"><BsFillPlusSquareFill />Cadastrar</button>
                    </div>
                </form>
            </div>
        <form className="boxBuscar">
          <input id="nome" type="text" name="buscar" placeholder="Buscar por nome..." />
          <button className="btnBuscar" onClick={function buscar(e) { // Busca elemento no array pelo nome
          e.preventDefault();

          const name = document.querySelector("#nome");
          const value = name.value;
          const boxResultadoCerto = document.querySelector(".boxResultadoCerto"); //Captura o Elemento HTML com id boxResultados
          const boxResultadoErrado = document.querySelector(".boxResultadoErrado"); //Captura o Elemento HTML com id boxResultados
          
          const encontrarDados = dados.find(dados => dados.Nome === value); //Função do Javascript que busca elemento no array passando como parâmentro o value do input

          /* console.log(encontrarDados); */

          if(dados.find(dados => dados.Nome === value && true)){
            setDadosDaBusca(encontrarDados); //Atualiza o array de busca
            boxResultadoErrado.classList.remove("active"); // Adiciona a classe active ao elemento HTML com id boxResultados
            boxResultadoCerto.classList.add("active"); // Adiciona a classe active ao elemento HTML com id boxResultados
          }else {
            boxResultadoCerto.classList.remove("active"); // Adiciona a classe active ao elemento HTML com id boxResultados
            boxResultadoErrado.classList.add("active"); // Adiciona a classe active ao elemento HTML com id boxResultados
          }
          
        }}><FaSearch /></button>
        </form>

        <div className="boxResultadoBusca">
          <div className="boxResultadoCerto">
            <h3>Resultado da busca:</h3>
            <p>Id: {DadosDaBusca.Id} - Nome: {DadosDaBusca.Nome} - Sobrenome: {DadosDaBusca.Sobrenome} 
              - Idade: {DadosDaBusca.Idade} - Telefone: {DadosDaBusca.Telefone}</p>
          </div>
          <div className="boxResultadoErrado">
            <h3>Resultado da busca:</h3>
            <p>Não encontrado</p>
          </div>
        </div>

       <h2>Alunos ({dados.length})</h2>

        <div className="boxListas">
          {dados.map((itemAtual, i) => {
            return (
              <div className="ItemAluno" key={itemAtual.i}>
                <p>Id: {itemAtual.Id}</p>
                <p>Nome: {itemAtual.Nome}</p>
                <p>Sobrenome: {itemAtual.Sobrenome}</p>
                <p>Idade: {itemAtual.Idade}</p>
                <p>Telefone: {itemAtual.Telefone}</p>
                <div>
                  <form>
                    <button className="btnExcluir" onClick={function excluir(e) { // Função para excluir elemento do array
                      e.preventDefault();
                      delete dados[i];
                      const dadosAtuais = dados.filter(item => item !== null);
                      setDados(dadosAtuais);
                      console.log(dados);
                    }}><BiTrash></BiTrash></button>
                  </form>

                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="footer">
        <div className="dadosFooter">
          <p>Aplicação criada em ReactJS com a finalidade de Estudos de Inserção, Busca e Remoção de items em Array de objetos.</p>
          <p>Desenvolvido por Felipe Fontenele | <AiOutlineGithub /> <a href="https://github.com/luizfelper" target="_blank">github.com/luizfelper</a></p>
        </div>
      </div>
    </div>
  );
}
export default App;
