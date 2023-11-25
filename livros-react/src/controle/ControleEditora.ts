import Editora from '../modelo/Editora';

const editoras: Editora[] = [
    new Editora(1, 'Editora A'),
    new Editora(2, 'Editora B'),
    new Editora(3, 'Editora C'),
  ];

  class ControleEditora {
    private editoras: Editora[];
  
    constructor(editoras: Editora[]) {
      this.editoras = editoras;
    }
  
    getEditoras(): Editora[] {
      return this.editoras;
    }
  
    getNomeEditora(codEditora: number): string | undefined {
      const editoraEncontrada = this.editoras.find((editora) => editora.codEditora === codEditora);
      return editoraEncontrada ? editoraEncontrada.nome : undefined;
    }
  }
  
  export default ControleEditora;