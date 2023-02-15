import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Matheus',
      sobrenome: 'Martins',
      email: 'matheus@dev.com',
      idade: 200,
      peso: 70,
      altura: 1.8,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
