import {con} from './connection.js'

export async function Adicionar (anime){
    const comando = 
    `
    INSERT INTO	tb_anime (id_anime, nm_anime)
	VALUES (?, ?)
    `
    const [resposta] = await con.query(comando, [anime.id, anime.nome])
    anime.id = resposta.insertId;
    return anime
}
export async function Listar(){
    const comando = 
    `
    SELECT id_anime 	id,
			nm_anime	nome
	FROM 	tb_anime
    `
    const [resposta] = await con.query(comando)
    return resposta
}
