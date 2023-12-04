import ItemNomeado = require("../data/itemNomeado");
import ListaNomeada = require("../data/listaNomeada");
import Estado = require("../enums/estado");

// Manter sincronizado com enums/estado.ts e sql/cidades.sql
const estados = new ListaNomeada([
	new ItemNomeado(Estado.AC, "Acre"),
	new ItemNomeado(Estado.AL, "Alagoas"),
	new ItemNomeado(Estado.AP, "Amapá"),
	new ItemNomeado(Estado.AM, "Amazonas"),
	new ItemNomeado(Estado.BA, "Bahia"),
	new ItemNomeado(Estado.CE, "Ceará"),
	new ItemNomeado(Estado.DF, "Distrito Federal"),
	new ItemNomeado(Estado.ES, "Espírito Santo"),
	new ItemNomeado(Estado.GO, "Goiás"),
	new ItemNomeado(Estado.MA, "Maranhão"),
	new ItemNomeado(Estado.MS, "Mato Grosso do Sul"),
	new ItemNomeado(Estado.MT, "Mato Grosso"),
	new ItemNomeado(Estado.MG, "Minas Gerais"),
	new ItemNomeado(Estado.PA, "Pará"),
	new ItemNomeado(Estado.PB, "Paraíba"),
	new ItemNomeado(Estado.PR, "Paraná"),
	new ItemNomeado(Estado.PE, "Pernanbuco"),
	new ItemNomeado(Estado.PI, "Piauí"),
	new ItemNomeado(Estado.RJ, "Rio de Janeiro"),
	new ItemNomeado(Estado.RN, "Rio Grande do Norte"),
	new ItemNomeado(Estado.RS, "Rio Grande do Sul"),
	new ItemNomeado(Estado.RO, "Rondônia"),
	new ItemNomeado(Estado.RR, "Roraima"),
	new ItemNomeado(Estado.SC, "Santa Catarina"),
	new ItemNomeado(Estado.SP, "São Paulo"),
	new ItemNomeado(Estado.SE, "Sergipe"),
	new ItemNomeado(Estado.TO, "Tocantins")
]);

export = estados;