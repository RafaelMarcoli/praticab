import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "raiza",
      sobrenome: "maiara",
      email: "raiza@gmail.com",
      idade: 32,
      peso: 85,
      altura: 1.7,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
