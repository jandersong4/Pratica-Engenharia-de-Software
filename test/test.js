const { Oficina } = require("../src/Oficina");
const { Veiculo } = require("../src/Veiculo");

describe("Oficina", () => {
  let oficina;
  let veiculo1;
  let veiculo2;
  let veiculo3;

  beforeEach(() => {
    oficina = new Oficina();
    veiculo1 = new Veiculo("Proprietário1", "Modelo1", "Carro");
    veiculo2 = new Veiculo("Proprietário2", "Modelo2", "Moto");
    veiculo3 = new Veiculo("Proprietário3", "Modelo3", "Caminhão");
  });

  test("adicionarVeiculo adiciona veículo à fila correta", () => {
    oficina.adicionarVeiculo(veiculo1);
    oficina.adicionarVeiculo(veiculo2, true);
    oficina.adicionarVeiculo(veiculo3);

    expect(oficina.listarVeiculosNaFila()).toEqual([
      veiculo2,
      veiculo1,
      veiculo3,
    ]);
  });

  test("repararVeiculo remove veículo da fila após reparo", () => {
    oficina.adicionarVeiculo(veiculo1);
    oficina.adicionarVeiculo(veiculo2, true);

    oficina.repararVeiculo(veiculo1);

    expect(oficina.listarVeiculosNaFila()).toEqual([veiculo2]);
  });

  test("contarVeiculosPorTipo conta veículos corretamente", () => {
    oficina.adicionarVeiculo(veiculo1);
    oficina.adicionarVeiculo(veiculo2, true);
    oficina.adicionarVeiculo(veiculo3);

    const contagem = oficina.contarVeiculosPorTipo();

    expect(contagem).toEqual({ Carro: 1, Moto: 1, Caminhão: 1 });
  });

  test("buscarVeiculoPorModelo encontra veículo por modelo", () => {
    oficina.adicionarVeiculo(veiculo1);
    oficina.adicionarVeiculo(veiculo2, true);
    oficina.adicionarVeiculo(veiculo3);

    const veiculoEncontrado = oficina.buscarVeiculoPorModelo("Modelo2");

    expect(veiculoEncontrado).toEqual(veiculo2);
  });

  test("estimarTempoDeReparo calcula tempo de reparo corretamente", () => {
    oficina.adicionarVeiculo(veiculo1);
    oficina.adicionarVeiculo(veiculo2, true);
    oficina.adicionarVeiculo(veiculo3);

    const tempoEstimado = oficina.estimarTempoDeReparo();

    // Neste exemplo, o tempo estimado é o dobro do número de veículos
    expect(tempoEstimado).toBe(12); // 4 * 3 = 12
  });
});
