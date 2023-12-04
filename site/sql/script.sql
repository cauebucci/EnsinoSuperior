  CREATE DATABASE IF NOT EXISTS ensinosuperior;
  USE ensinosuperior;

  -- DROP TABLE IF EXISTS perfil;
  CREATE TABLE perfil (
    id int NOT NULL AUTO_INCREMENT,
    nome varchar(50) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY nome_UN (nome)
  );

  -- Manter sincronizado com enums/perfil.ts e models/perfil.ts
  INSERT INTO perfil (nome) VALUES ('Administrador'), ('Comum');

  -- DROP TABLE IF EXISTS usuario;
  CREATE TABLE usuario (
    id int NOT NULL AUTO_INCREMENT,
    user varchar(100) NOT NULL,
    nome varchar(100) NOT NULL,
    idperfil int NOT NULL,
    senha varchar(100) NOT NULL,
    token char(32) DEFAULT NULL,
    exclusao datetime NULL,
    criacao datetime NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY usuario_user_UN (user),
    KEY usuario_exclusao_IX (exclusao),
    KEY usuario_idperfil_FK_IX (idperfil),
    CONSTRAINT usuario_idperfil_FK FOREIGN KEY (idperfil) REFERENCES perfil (id) ON DELETE RESTRICT ON UPDATE RESTRICT
  );

  INSERT INTO usuario (user, nome, idperfil, senha, token, criacao) VALUES ('admin', 'Administrador', 1, 'NsSzgX9AXd2G85aiCOrUwAFkiEHrHYljYWpJBCfqOvKr:WD+jsEW/Dswcivs42EZBZREfm+4WaPcZHRPG5LJpD8yr', NULL, NOW());
