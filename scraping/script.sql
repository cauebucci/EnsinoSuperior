CREATE TABLE IF NOT EXISTS faculdades(
    ID INT AUTO_INCREMENT,
    NU_ANO_CENSO INT,
    CO_IES INT,
    NO_IES VARCHAR(100),
    SG_IES VARCHAR(50),
    NO_MANTENEDORA VARCHAR(100),
    NO_REGIAO_IES VARCHAR(100),
    NO_UF_IES VARCHAR(100),
    NO_MUNICIPIO_IES VARCHAR(100),
    DS_ENDERECO_IES VARCHAR(200),
    DS_NUMERO_ENDERECO_IES VARCHAR(20),
    DS_COMPLEMENTO_ENDERECO_IES VARCHAR(100),
    NO_BAIRRO_IES VARCHAR(100),
    NU_CEP_IES VARCHAR(10),
    NO_LOCAL_OFERTA VARCHAR(200),
    TP_ORGANIZACAO_ACADEMICA INT,
    QT_TEC_TOTAL INT,
    TP_CATEGORIA_ADMINISTRATIVA INT,
    QT_TEC_FUNDAMENTAL_INCOMP_FEM INT,
    QT_TEC_FUNDAMENTAL_INCOMP_MASC INT,
    QT_TEC_FUNDAMENTAL_COMP_FEM INT,
    QT_TEC_FUNDAMENTAL_COMP_MASC INT,
    QT_TEC_MEDIO_FEM INT,
    QT_TEC_MEDIO_MASC INT,
    QT_TEC_SUPERIOR_FEM INT,
    QT_TEC_SUPERIOR_MASC INT,
    QT_TEC_ESPECIALIZACAO_FEM INT,
    QT_TEC_ESPECIALIZACAO_MASC INT,
    QT_TEC_MESTRADO_FEM INT,
    QT_TEC_MESTRADO_MASC INT, 
    QT_TEC_DOUTORADO_FEM INT,
    QT_TEC_DOUTORADO_MASC INT,
    IN_ACESSO_PORTAL_CAPES INT, 
    IN_ACESSO_OUTRAS_BASES INT,
    IN_ASSINA_OUTRA_BASE INT,
    IN_REPOSITORIO_INSTITUCIONAL INT,
    IN_BUSCA_INTEGRADA INT,
    IN_SERVICO_INTERNET INT,
    IN_PARTICIPA_REDE_SOCIAL INT,
    IN_CATALOGO_ONLINE INT,
    QT_PERIODICO_ELETRONICO INT,
    QT_LIVRO_ELETRONICO INT,
    QT_DOC_TOTAL INT,
    QT_DOC_EXE INT,
    QT_DOC_EX_FEMI INT, 
    QT_DOC_EX_MASC INT,
    QT_DOC_EX_SEM_GRAD INT,
    QT_DOC_EX_GRAD  INT,
    QT_DOC_EX_ESP  INT,
    QT_DOC_EX_MEST INT,
    QT_DOC_EX_DOUT INT,
    QT_DOC_EX_INT INT,
    QT_DOC_EX_INT_DE  INT,
    QT_DOC_EX_INT_SEM_DE INT,
    QT_DOC_EX_PARC INT,
    QT_DOC_EX_HOR INT,
    QT_DOC_EX_0_29 INT,
    QT_DOC_EX_30_34 INT,
    QT_DOC_EX_35_39 INT,
    QT_DOC_EX_40_44 INT,
    QT_DOC_EX_45_49 INT,
    QT_DOC_EX_50_54 INT,
    QT_DOC_EX_55_59 INT,
    QT_DOC_EX_60_MAIS INT,
    QT_DOC_EX_BRANCA INT,
    QT_DOC_EX_PRETA INT,
    QT_DOC_EX_PARDA INT,
    QT_DOC_EX_AMARELA INT,
    QT_DOC_EX_INDIGENA INT,
    QT_DOC_EX_COR_ND INT,
    QT_DOC_EX_BRA INT,
    QT_DOC_EX_EST INT,
    QT_DOC_EX_COM_DEFICIENCIA INT,
PRIMARY KEY (ID)

);

CREATE TABLE IF NOT EXISTS cursos(
    ID INT AUTO_INCREMENT,
    NU_ANO_CENSO INT,
    CO_IES INT,
    NO_CURSO VARCHAR(200),
    NO_CINE_ROTULO VARCHAR(100),
    NO_CINE_AREA_GERAL VARCHAR(100),
    NO_CINE_AREA_ESPECIFICA VARCHAR(100),
    NO_CINE_AREA_DETALHADA VARCHAR(100),
    NO_REGIAO VARCHAR(100),
    NO_UF VARCHAR(100),
    NO_MUNICIPIO VARCHAR(100),
    TP_DIMENSAO INT,
    TP_ORGANIZACAO_ACADEMICA INT,
    TP_CATEGORIA_ADMINISTRATIVA INT,
    TP_REDE INT,
    TP_GRAU_ACADEMICO INT,
    IN_GRATUITO INT,
    TP_MODALIDADE_ENSINO INT,
    TP_NIVEL_ACADEMICO INT,
    QT_CURSO INT,
    QT_VG_TOTAL INT,
    QT_VG_TOTAL_DIURNO INT,
    QT_VG_TOTAL_NOTURNO INT,
    QT_VG_TOTAL_EAD INT,
    QT_VG_NOVA INT,
    QT_VG_PROC_SELETIVO INT,
    QT_VG_REMANESC INT,
    QT_VG_PROG_ESPECIAL INT,
    QT_INSCRITO_TOTAL INT,
    QT_INSCRITO_TOTAL_DIURNO INT,
    QT_INSCRITO_TOTAL_NOTURNO INT,
    QT_INSCRITO_TOTAL_EAD INT,
    QT_INSC_VG_NOVA INT,
    QT_INSC_PROC_SELETIVO INT,
    QT_INSC_VG_REMANESC INT,
    QT_INSC_VG_PROG_ESPECIAL INT,
    QT_ING INT,
    QT_ING_FEM INT,
    QT_ING_MASC INT,
    QT_ING_DIURNO INT,
    QT_ING_NOTURNO INT,
    QT_ING_VG_NOVA INT,
    QT_ING_VESTIBULAR INT,
    QT_ING_ENEM INT,
    QT_ING_AVALIACAO_SERIADA INT,
    QT_ING_SELECAO_SIMPLIFICA INT,
    QT_ING_EGR INT,
    QT_ING_OUTRO_TIPO_SELECAO INT,
    QT_ING_PROC_SELETIVO INT,
    QT_ING_VG_REMANESC INT,
    QT_ING_VG_PROG_ESPECIAL INT,
    QT_ING_OUTRA_FORMA INT,
    QT_ING_0_17 INT,
    QT_ING_18_24 INT,
    QT_ING_25_29 INT,
    QT_ING_30_34 INT,
    QT_ING_35_39 INT,
    QT_ING_40_49 INT,
    QT_ING_50_59 INT,
    QT_ING_60_MAIS INT,
    QT_ING_BRANCA INT,
    QT_ING_PRETA INT,
    QT_ING_PARDA INT,
    QT_ING_AMARELA INT,
    QT_ING_INDIGENA INT,
    QT_ING_CORND INT,
    QT_MAT INT,
    QT_MAT_FEM INT,
    QT_MAT_MASC INT,
    QT_MAT_DIURNO INT,
    QT_MAT_NOTURNO INT,
    QT_MAT_0_17 INT,
    QT_MAT_18_24 INT,
    QT_MAT_25_29 INT,
    QT_MAT_30_34 INT,
    QT_MAT_35_39 INT,
    QT_MAT_40_49 INT,
    QT_MAT_50_59 INT,
    QT_MAT_60_MAIS INT,
    QT_MAT_BRANCA INT,
    QT_MAT_PRETA INT,
    QT_MAT_PARDA INT,
    QT_MAT_AMARELA INT,
    QT_MAT_INDIGENA INT,
    QT_MAT_CORND INT,
    QT_CONC INT,
    QT_CONC_FEM INT,
    QT_CONC_MASC INT,
    QT_CONC_DIURNO INT,
    QT_CONC_NOTURNO INT,
    QT_CONC_0_17 INT,
    QT_CONC_18_24 INT,
    QT_CONC_25_29 INT,
    QT_CONC_30_34 INT,
    QT_CONC_35_39 INT,
    QT_CONC_40_49 INT,
    QT_CONC_50_59 INT,
    QT_CONC_60_MAIS INT,
    QT_CONC_BRANCA INT,
    QT_CONC_PRETA INT,
    QT_CONC_PARDA INT,
    QT_CONC_AMARELA INT,
    QT_CONC_INDIGENA INT,
    QT_CONC_CORND INT,
    QT_ING_NACBRAS INT,
    QT_ING_NACESTRANG INT,
    QT_MAT_NACBRAS INT,
    QT_MAT_NACESTRANG INT,
    QT_CONC_NACBRAS INT,
    QT_CONC_NACESTRANG INT,
    QT_ALUNO_DEFICIENTE INT,
    QT_ING_DEFICIENTE INT,
    QT_MAT_DEFICIENTE INT,
    QT_CONC_DEFICIENTE INT,
    QT_ING_FINANC INT,
    QT_ING_FINANC_REEMB INT,
    QT_ING_FIES INT,
    QT_ING_RPFIES INT,
    QT_ING_FINANC_REEMB_OUTROS INT,
    QT_ING_FINANC_NREEMB INT,
    QT_ING_PROUNII INT,
    QT_ING_PROUNIP INT,
    QT_ING_NRPFIES INT,
    QT_ING_FINANC_NREEMB_OUTROS INT,
    QT_MAT_FINANC INT,
    QT_MAT_FINANC_REEMB INT,
    QT_MAT_FIES INT,
    QT_MAT_RPFIES INT,
    QT_MAT_FINANC_REEMB_OUTROS INT,
    QT_MAT_FINANC_NREEMB INT,
    QT_MAT_PROUNII INT,
    QT_MAT_PROUNIP INT,
    QT_MAT_NRPFIES INT,
    QT_MAT_FINANC_NREEMB_OUTROS INT,
    QT_CONC_FINANC INT,
    QT_CONC_FINANC_REEMB INT,
    QT_CONC_FIES INT,
    QT_CONC_RPFIES INT,
    QT_CONC_FINANC_REEMB_OUTROS INT,
    QT_CONC_FINANC_NREEMB INT,
    QT_CONC_PROUNII INT,
    QT_CONC_PROUNIP INT,
    QT_CONC_NRPFIES INT,
    QT_CONC_FINANC_NREEMB_OUTROS INT,
    QT_ING_RESERVA_VAGA INT,
    QT_ING_RVREDEPUBLICA INT,
    QT_ING_RVETNICO INT,
    QT_ING_RVPDEF INT,
    QT_ING_RVSOCIAL_RF INT,
    QT_ING_RVOUTROS INT,
    QT_MAT_RESERVA_VAGA INT,
    QT_MAT_RVREDEPUBLICA INT,
    QT_MAT_RVETNICO INT,
    QT_MAT_RVPDEF INT,
    QT_MAT_RVSOCIAL_RF INT,
    QT_MAT_RVOUTROS INT,
    QT_CONC_RESERVA_VAGA INT,
    QT_CONC_RVREDEPUBLICA INT,
    QT_CONC_RVETNICO INT,
    QT_CONC_RVPDEF INT,
    QT_CONC_RVSOCIAL_RF INT,
    QT_CONC_RVOUTROS INT,
    QT_SIT_TRANCADA INT,
    QT_SIT_DESVINCULADO INT,
    QT_SIT_TRANSFERIDO INT,
    QT_SIT_FALECIDO INT,
    QT_ING_PROCESCPUBLICA INT,
    QT_ING_PROCESCPRIVADA INT,
    QT_ING_PROCNAOINFORMADA INT,
    QT_MAT_PROCESCPUBLICA INT,
    QT_MAT_PROCESCPRIVADA INT,
    QT_MAT_PROCNAOINFORMADA INT,
    QT_CONC_PROCESCPUBLICA INT,
    QT_CONC_PROCESCPRIVADA INT,
    QT_CONC_PROCNAOINFORMADA INT,
    QT_PARFOR INT,
    QT_ING_PARFOR INT,
    QT_MAT_PARFOR INT,
    QT_CONC_PARFOR INT,
    QT_APOIO_SOCIAL INT,
    QT_ING_APOIO_SOCIAL INT,
    QT_MAT_APOIO_SOCIAL INT,
    QT_CONC_APOIO_SOCIAL INT,
    QT_ATIV_EXTRACURRICULAR INT,
    QT_ING_ATIV_EXTRACURRICULAR INT,
    QT_MAT_ATIV_EXTRACURRICULAR INT,
    QT_CONC_ATIV_EXTRACURRICULAR INT,
    QT_MOB_ACADEMICA INT,
    QT_ING_MOB_ACADEMICA INT,
    QT_MAT_MOB_ACADEMICA INT,
    QT_CONC_MOB_ACADEMICA INT,
PRIMARY KEY (ID)


);

