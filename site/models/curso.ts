import app = require("teem");
import { randomBytes } from "crypto";
import appsettings = require("../appsettings");
import DataUtil = require("../utils/dataUtil");
import GeradorHash = require("../utils/geradorHash");
import intToHex = require("../utils/intToHex");
import Perfil = require("../enums/perfil");

interface Curso {
	ID: number;
    NU_ANO_CENSO: number;
    CO_IES: number;
    NO_CURSO: string;
    NO_CINE_ROTULO: string;
    NO_CINE_AREA_GERAL: string;
    NO_CINE_AREA_ESPECIFICA: string;
    NO_CINE_AREA_DETALHADA: string;
    NO_REGIAO: string;
    NO_UF: string;
    NO_MUNICIPIO: string;
    TP_DIMENSAO: number;
    TP_ORGANIZACAO_ACADEMICA: number;
    TP_CATEGORIA_ADMINISTRATIVA: number;
    TP_REDE: number;
    TP_GRAU_ACADEMICO: number;
    IN_GRATUITO: number;
    TP_MODALIDADE_ENSINO: number;
    TP_NIVEL_ACADEMICO: number;
    QT_CURSO: number;
    QT_VG_TOTAL: number;
    QT_VG_TOTAL_DIURNO: number;
    QT_VG_TOTAL_NOTURNO: number;
    QT_VG_TOTAL_EAD: number;
    QT_VG_NOVA: number;
    QT_VG_PROC_SELETIVO: number;
    QT_VG_REMANESC: number;
    QT_VG_PROG_ESPECIAL: number;
    QT_INSCRITO_TOTAL: number;
    QT_INSCRITO_TOTAL_DIURNO: number;
    QT_INSCRITO_TOTAL_NOTURNO: number;
    QT_INSCRITO_TOTAL_EAD: number;
    QT_INSC_VG_NOVA: number;
    QT_INSC_PROC_SELETIVO: number;
    QT_INSC_VG_REMANESC: number;
    QT_INSC_VG_PROG_ESPECIAL: number;
    QT_ING: number;
    QT_ING_FEM: number;
    QT_ING_MASC: number;
    QT_ING_DIURNO: number;
    QT_ING_NOTURNO: number;
    QT_ING_VG_NOVA: number;
    QT_ING_VESTIBULAR: number;
    QT_ING_ENEM: number;
    QT_ING_AVALIACAO_SERIADA: number;
    QT_ING_SELECAO_SIMPLIFICA: number;
    QT_ING_EGR: number;
    QT_ING_OUTRO_TIPO_SELECAO: number;
    QT_ING_PROC_SELETIVO: number;
    QT_ING_VG_REMANESC: number;
    QT_ING_VG_PROG_ESPECIAL: number;
    QT_ING_OUTRA_FORMA: number;
    QT_ING_0_17: number;
    QT_ING_18_24: number;
    QT_ING_25_29: number;
    QT_ING_30_34: number;
    QT_ING_35_39: number;
    QT_ING_40_49: number;
    QT_ING_50_59: number;
    QT_ING_60_MAIS: number;
    QT_ING_BRANCA: number;
    QT_ING_PRETA: number;
    QT_ING_PARDA: number;
    QT_ING_AMARELA: number;
    QT_ING_INDIGENA: number;
    QT_ING_CORND: number;
    QT_MAT: number;
    QT_MAT_FEM: number;
    QT_MAT_MASC: number;
    QT_MAT_DIURNO: number;
    QT_MAT_NOTURNO: number;
    QT_MAT_0_17: number;
    QT_MAT_18_24: number;
    QT_MAT_25_29: number;
    QT_MAT_30_34: number;
    QT_MAT_35_39: number;
    QT_MAT_40_49: number;
    QT_MAT_50_59: number;
    QT_MAT_60_MAIS: number;
    QT_MAT_BRANCA: number;
    QT_MAT_PRETA: number;
    QT_MAT_PARDA: number;
    QT_MAT_AMARELA: number;
    QT_MAT_INDIGENA: number;
    QT_MAT_CORND: number;
    QT_CONC: number;
    QT_CONC_FEM: number;
    QT_CONC_MASC: number;
    QT_CONC_DIURNO: number;
    QT_CONC_NOTURNO: number;
    QT_CONC_0_17: number;
    QT_CONC_18_24: number;
    QT_CONC_25_29: number;
    QT_CONC_30_34: number;
    QT_CONC_35_39: number;
    QT_CONC_40_49: number;
    QT_CONC_50_59: number;
    QT_CONC_60_MAIS: number;
    QT_CONC_BRANCA: number;
    QT_CONC_PRETA: number;
    QT_CONC_PARDA: number;
    QT_CONC_AMARELA: number;
    QT_CONC_INDIGENA: number;
    QT_CONC_CORND: number;
    QT_ING_NACBRAS: number;
    QT_ING_NACESTRANG: number;
    QT_MAT_NACBRAS: number;
    QT_MAT_NACESTRANG: number;
    QT_CONC_NACBRAS: number;
    QT_CONC_NACESTRANG: number;
    QT_ALUNO_DEFICIENTE: number;
    QT_ING_DEFICIENTE: number;
    QT_MAT_DEFICIENTE: number;
    QT_CONC_DEFICIENTE: number;
    QT_ING_FINANC: number;
    QT_ING_FINANC_REEMB: number;
    QT_ING_FIES: number;
    QT_ING_RPFIES: number;
    QT_ING_FINANC_REEMB_OUTROS: number;
    QT_ING_FINANC_NREEMB: number;
    QT_ING_PROUNII: number;
    QT_ING_PROUNIP: number;
    QT_ING_NRPFIES: number;
    QT_ING_FINANC_NREEMB_OUTROS: number;
    QT_MAT_FINANC: number;
    QT_MAT_FINANC_REEMB: number;
    QT_MAT_FIES: number;
    QT_MAT_RPFIES: number;
    QT_MAT_FINANC_REEMB_OUTROS: number;
    QT_MAT_FINANC_NREEMB: number;
    QT_MAT_PROUNII: number;
    QT_MAT_PROUNIP: number;
    QT_MAT_NRPFIES: number;
    QT_MAT_FINANC_NREEMB_OUTROS: number;
    QT_CONC_FINANC: number;
    QT_CONC_FINANC_REEMB: number;
    QT_CONC_FIES: number;
    QT_CONC_RPFIES: number;
    QT_CONC_FINANC_REEMB_OUTROS: number;
    QT_CONC_FINANC_NREEMB: number;
    QT_CONC_PROUNII: number;
    QT_CONC_PROUNIP: number;
    QT_CONC_NRPFIES: number;
    QT_CONC_FINANC_NREEMB_OUTROS: number;
    QT_ING_RESERVA_VAGA: number;
    QT_ING_RVREDEPUBLICA: number;
    QT_ING_RVETNICO: number;
    QT_ING_RVPDEF: number;
    QT_ING_RVSOCIAL_RF: number;
    QT_ING_RVOUTROS: number;
    QT_MAT_RESERVA_VAGA: number;
    QT_MAT_RVREDEPUBLICA: number;
    QT_MAT_RVETNICO: number;
    QT_MAT_RVPDEF: number;
    QT_MAT_RVSOCIAL_RF: number;
    QT_MAT_RVOUTROS: number;
    QT_CONC_RESERVA_VAGA: number;
    QT_CONC_RVREDEPUBLICA: number;
    QT_CONC_RVETNICO: number;
    QT_CONC_RVPDEF: number;
    QT_CONC_RVSOCIAL_RF: number;
    QT_CONC_RVOUTROS: number;
    QT_SIT_TRANCADA: number;
    QT_SIT_DESVINCULADO: number;
    QT_SIT_TRANSFERIDO: number;
    QT_SIT_FALECIDO: number;
    QT_ING_PROCESCPUBLICA: number;
    QT_ING_PROCESCPRIVADA: number;
    QT_ING_PROCNAOINFORMADA: number;
    QT_MAT_PROCESCPUBLICA: number;
    QT_MAT_PROCESCPRIVADA: number;
    QT_MAT_PROCNAOINFORMADA: number;
    QT_CONC_PROCESCPUBLICA: number;
    QT_CONC_PROCESCPRIVADA: number;
    QT_CONC_PROCNAOINFORMADA: number;
    QT_PARFOR: number;
    QT_ING_PARFOR: number;
    QT_MAT_PARFOR: number;
    QT_CONC_PARFOR: number;
    QT_APOIO_SOCIAL: number;
    QT_ING_APOIO_SOCIAL: number;
    QT_MAT_APOIO_SOCIAL: number;
    QT_CONC_APOIO_SOCIAL: number;
    QT_ATIV_EXTRACURRICULAR: number;
    QT_ING_ATIV_EXTRACURRICULAR: number;
    QT_MAT_ATIV_EXTRACURRICULAR: number;
    QT_CONC_ATIV_EXTRACURRICULAR: number;
    QT_MOB_ACADEMICA: number;
    QT_ING_MOB_ACADEMICA: number;
    QT_MAT_MOB_ACADEMICA: number;
    QT_CONC_MOB_ACADEMICA: number;

}

class Usuario {

	public static async listar(): Promise<Curso[]> {
		let lista: Curso[] = null;

		await app.sql.connect(async (sql) => {
			lista = await sql.query("select * from faculdades") as Curso[];
		});

		return (lista || []);
	}

	public static async obterCursos(): Promise<Curso[]> {
		let lista: Curso[] = null;

		await app.sql.connect(async (sql) => {
			lista = await sql.query("select distinct NO_CURSO from cursos order by NO_CURSO;") as Curso[];
		});

		return (lista || []);
	}

	public static async obter(CO_IES: number, NU_ANO_CENSO: number): Promise<Curso> {
		let lista: Curso[] = null;

		await app.sql.connect(async (sql) => {
			lista = await sql.query("select * from faculdades where CO_IES = ? and NU_ANO_CENSO = ?", [CO_IES, NU_ANO_CENSO]) as Curso[];
		});

		return ((lista && lista[0]) || null);
	}

    public static async buscar(CO_IES: number, NU_ANO_CENSO: number): Promise<Curso[]> {
		let lista: Curso[] = null;

		await app.sql.connect(async (sql) => {
			lista = await sql.query("select * from cursos where CO_IES = ? and NU_ANO_CENSO = ?", [CO_IES, NU_ANO_CENSO]) as Curso[];
		});

		return (lista || []);
	}
}



export = Usuario;
