const { Oficina } = require("./src/Oficina");
const { Veiculo } = require("./src/Veiculo");

// Criar instâncias de veículos
const veiculo1 = new Veiculo("Joao", "Honda Civic", "Carro");
const veiculo2 = new Veiculo("Maria", "Kawazaki Ninja", "Moto");
const veiculo3 = new Veiculo("Ana", "Hilux", "Carro");

// Criar instância da oficina
const oficina = new Oficina();

// Adicionar veículos à fila de atendimento
oficina.adicionarVeiculo(veiculo1);
oficina.adicionarVeiculo(veiculo2, true); // Adicionar veículo prioritário
oficina.adicionarVeiculo(veiculo3);

// Listar veículos na fila
console.log("Veículos na fila de atendimento:");
console.log(oficina.listarVeiculosNaFila());

// Contar veículos por tipo
console.log("\nContagem de veículos por tipo:");
console.log(oficina.contarVeiculosPorTipo());

// Buscar veículo por modelo
const modeloParaBuscar = "Modelo2";
console.log(`\nBuscando veículo com modelo ${modeloParaBuscar}:`);
console.log(oficina.buscarVeiculoPorModelo(modeloParaBuscar));

// Estimar tempo de reparo
console.log("\nEstimativa de tempo de reparo:");
console.log(`Tempo estimado: ${oficina.estimarTempoDeReparo()} horas`);

// Reparar um veículo
const veiculoParaReparar = veiculo1;
oficina.repararVeiculo(veiculoParaReparar);
console.log(`\nReparando veículo ${veiculoParaReparar.modelo}:`);
console.log("Veículos na fila de atendimento:");
console.log(oficina.listarVeiculosNaFila());
