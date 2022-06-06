CREATE DATABASE Anime;
USE Anime;

CREATE TABLE tb_anime (

	id_anime	int primary key auto_increment not null unique,
    nm_anime 	varchar(200)
);