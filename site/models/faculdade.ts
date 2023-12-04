import app = require("teem");
import { randomBytes } from "crypto";
import appsettings = require("../appsettings");
import DataUtil = require("../utils/dataUtil");
import GeradorHash = require("../utils/geradorHash");
import intToHex = require("../utils/intToHex");
import Perfil = require("../enums/perfil");

interface Faculdade {
	ID: number;
    NU_ANO_CENSO: number;
    CO_IES: number;
    NO_IES: string;
    SG_IES: string;
    NO_MANTENEDORA: string;
    NO_REGIAO_IES: string;
    NO_UF_IES: string;
    NO_MUNICIPIO_IES: string;
    DS_ENDERECO_IES: string;
    DS_NUMERO_ENDERECO_IES: string;
    DS_COMPLEMENTO_ENDERECO_IES: string;
    NO_BAIRRO_IES: string;
    NU_CEP_IES: string;
    NO_LOCAL_OFERTA: string;
    TP_ORGANIZACAO_ACADEMICA: number;
    QT_TEC_TOTAL: number;
    TP_CATEGORIA_ADMINISTRATIVA: number;
    QT_TEC_FUNDAMENTAL_INCOMP_FEM: number;
    QT_TEC_FUNDAMENTAL_INCOMP_MASC: number;
    QT_TEC_FUNDAMENTAL_COMP_FEM: number;
    QT_TEC_FUNDAMENTAL_COMP_MASC: number;
    QT_TEC_MEDIO_FEM: number;
    QT_TEC_MEDIO_MASC: number;
    QT_TEC_SUPERIOR_FEM: number;
    QT_TEC_SUPERIOR_MASC: number;
    QT_TEC_ESPECIALIZACAO_FEM: number;
    QT_TEC_ESPECIALIZACAO_MASC: number;
    QT_TEC_MESTRADO_FEM: number;
    QT_TEC_MESTRADO_MASC: number; 
    QT_TEC_DOUTORADO_FEM: number;
    QT_TEC_DOUTORADO_MASC: number;
    IN_ACESSO_PORTAL_CAPES: number; 
    IN_ACESSO_OUTRAS_BASES: number;
    IN_ASSINA_OUTRA_BASE: number;
    IN_REPOSITORIO_INSTITUCIONAL: number;
    IN_BUSCA_INTEGRADA: number;
    IN_SERVICO_INTERNET: number;
    IN_PARTICIPA_REDE_SOCIAL: number;
    IN_CATALOGO_ONLINE: number;
    QT_PERIODICO_ELETRONICO: number;
    QT_LIVRO_ELETRONICO: number;
    QT_DOC_TOTAL: number;
    QT_DOC_EXE: number;
    QT_DOC_EX_FEMI: number; 
    QT_DOC_EX_MASC: number;
    QT_DOC_EX_SEM_GRAD: number;
    QT_DOC_EX_GRAD : number;
    QT_DOC_EX_ESP : number;
    QT_DOC_EX_MEST: number;
    QT_DOC_EX_DOUT: number;
    QT_DOC_EX_INT: number;
    QT_DOC_EX_INT_DE : number;
    QT_DOC_EX_INT_SEM_DE: number;
    QT_DOC_EX_PARC: number;
    QT_DOC_EX_HOR: number;
    QT_DOC_EX_0_29: number;
    QT_DOC_EX_30_34: number;
    QT_DOC_EX_35_39: number;
    QT_DOC_EX_40_44: number;
    QT_DOC_EX_45_49: number;
    QT_DOC_EX_50_54: number;
    QT_DOC_EX_55_59: number;
    QT_DOC_EX_60_MAIS: number;
    QT_DOC_EX_BRANCA: number;
    QT_DOC_EX_PRETA: number;
    QT_DOC_EX_PARDA: number;
    QT_DOC_EX_AMARELA: number;
    QT_DOC_EX_INDIGENA: number;
    QT_DOC_EX_COR_ND: number;
    QT_DOC_EX_BRA: number;
    QT_DOC_EX_EST: number;
    QT_DOC_EX_COM_DEFICIENCIA: number;

}

class Usuario {

	public static async listar(): Promise<Faculdade[]> {
		let lista: Faculdade[] = null;

		await app.sql.connect(async (sql) => {
			lista = await sql.query("select * from faculdades") as Faculdade[];
		});

		return (lista || []);
	}

    public static async buscar(id: number): Promise<Faculdade[]> {
		let lista: Faculdade[] = null;

		await app.sql.connect(async (sql) => {
			lista = await sql.query("select * from faculdades where CO_IES = ?", [id]) as Faculdade[];
		});

		return (lista || []);
	}

	public static async obterFaculdades(): Promise<Faculdade[]> {
		let lista: Faculdade[] = null;

		await app.sql.connect(async (sql) => {
			lista = await sql.query("select distinct CO_IES, SG_IES, NO_IES from faculdades order by NO_IES;") as Faculdade[];
		});

		return (lista || []);
	}

    public static async buscarEstados(): Promise<Faculdade[]> {
		let lista: Faculdade[] = null;

		await app.sql.connect(async (sql) => {
			lista = await sql.query("select distinct NO_UF_IES from faculdades order by NO_UF_IES;") as Faculdade[];
		});

		return (lista || []);
	}

    public static async buscarMunicipios(): Promise<Faculdade[]> {
		let lista: Faculdade[] = null;

		await app.sql.connect(async (sql) => {
			lista = await sql.query("select distinct NO_MUNICIPIO_IES from faculdades order by NO_MUNICIPIO_IES;") as Faculdade[];
		});

		return (lista || []);
	}

    public static async filtrar(estado: string, municipio: string, curso: string): Promise<Faculdade[]> {
		let lista: Faculdade[] = null;

		
		let where = "";
		let parametros: any[] = [];

		if (estado) {
			if (where)
				where += " AND ";
			where += "F.NO_UF_IES = ?";
			parametros.push(estado);
		}

		
		if (municipio) {
			if (where)
				where += " AND ";
			where += "F.NO_MUNICIPIO_IES = ?";
			parametros.push(municipio);
		}

		if (curso) {
			if (where)
				where += " AND ";
			where += "C.NO_CURSO = ?";
			parametros.push(curso);
		}
		
		if (where)
			where = " WHERE " + where + " order by NO_IES";

		await app.sql.connect(async (sql) => {
			lista = await sql.query("select distinct F.CO_IES, F.NO_UF_IES, F.NO_MUNICIPIO_IES, F.SG_IES, F.NO_IES from faculdades F inner join Cursos C on C.CO_IES = F.CO_IES"  + where, parametros) as Faculdade[];
		});

		return lista;
	}

	public static async obter(CO_IES: number, NU_ANO_CENSO: number): Promise<Faculdade> {
		let lista: Faculdade[] = null;

		await app.sql.connect(async (sql) => {
			lista = await sql.query("select * from faculdades where CO_IES = ? and NU_ANO_CENSO = ?", [CO_IES, NU_ANO_CENSO]) as Faculdade[];
		});

		return ((lista && lista[0]) || null);
	}
}



export = Usuario;
