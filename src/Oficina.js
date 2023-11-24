class Oficina {
  constructor() {
    this.filaDeAtendimento = [];
    this.filaPrioritaria = [];
  }

  adicionarVeiculo(veiculo, prioritario = false) {
    if (prioritario) {
      this.filaPrioritaria.push(veiculo);
    } else {
      this.filaDeAtendimento.push(veiculo);
    }
  }

  listarVeiculosNaFila() {
    return this.filaPrioritaria.concat(this.filaDeAtendimento);
  }

  repararVeiculo(veiculo) {
    veiculo.situacaoDeAtendimento = "Veículo reparado. Atendimento Finalizado!";
    const index = this.filaDeAtendimento.indexOf(veiculo);
    if (index !== -1) {
      this.filaDeAtendimento.splice(index, 1);
    } else {
      const prioritarioIndex = this.filaPrioritaria.indexOf(veiculo);
      if (prioritarioIndex !== -1) {
        this.filaPrioritaria.splice(prioritarioIndex, 1);
      }
    }
  }

  contarVeiculosPorTipo() {
    const contagem = {};

    this.listarVeiculosNaFila().forEach((veiculo) => {
      contagem[veiculo.tipo] = (contagem[veiculo.tipo] || 0) + 1;
    });

    return contagem;
  }

  buscarVeiculoPorModelo(modelo) {
    return this.listarVeiculosNaFila().find(
      (veiculo) => veiculo.modelo === modelo
    );
  }

  estimarTempoDeReparo() {
    const tempoMedioPorVeiculo = 4; // tempo em horas por veículo (ajuste conforme necessário)
    const totalVeiculos = this.listarVeiculosNaFila().length;

    return tempoMedioPorVeiculo * totalVeiculos;
  }
}

module.exports = { Oficina };
