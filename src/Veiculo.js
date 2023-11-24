class Veiculo {
  constructor(proprietario, modelo, tipo) {
    this.proprietario = proprietario;
    this.modelo = modelo;
    this.tipo = tipo;
    this.situacaoDeAtendimento = "Aguardando reparo";
  }
}

module.exports = { Veiculo };
