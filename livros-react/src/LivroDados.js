import React, { useState } from 'react';
import ControleLivros from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';

export default function LivroDados() {
  const controleLivro = new ControleLivros([]);
  const controleEditora = new ControleEditora([]);

  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  const navigate = useNavigate();

  const tratarCombo = (event) => {
    const { value } = event.target;
    setCodEditora(Number(value));
  };

  const incluir = (event) => {
    event.preventDefault();
    const autoresArray = autores.split('\n').map((autor) => autor.trim());

    const novoLivro = {
      codigo: 0, 
      titulo,
      resumo,
      autores: autoresArray,
      codEditora,
    };

    controleLivro.incluir(novoLivro);
    navigate('/');
  };

  return (
    <main>
      <h1>Inclusão de Livro</h1>
      <form onSubmit={incluir}>
        <div>
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="resumo">Resumo:</label>
          <textarea
            id="resumo"
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="autores">Autores (um por linha):</label>
          <textarea
            id="autores"
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="codEditora">Editora:</label>
          <select
            id="codEditora"
            value={codEditora}
            onChange={tratarCombo}
          >
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Incluir</button>
      </form>
    </main>
  );
}
