import Livro from '../modelo/Livro';

const livros: Livro[] = [
  new Livro(1, 1, 'Livro 1', 'Resumo do Livro 1', ['Autor 1', 'Autor 2']),
  new Livro(2, 2, 'Livro 2', 'Resumo do Livro 2', ['Autor 3']),
  new Livro(3, 3, 'Livro 3', 'Resumo do Livro 3', ['Autor 4', 'Autor 5']),
];

class ControleLivros {
  private livros: Livro[];

  constructor(livros: Livro[]) {
    this.livros = livros;
  }

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo =
      this.livros.reduce((max, livro) => Math.max(max, livro.codigo), 0) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex((livro) => livro.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}

export default ControleLivros;