
import { useState } from 'react';
import {Link} from 'react-router-dom'
import {Consultar} from '../../api/filme'

import './consultar.scss'

export default function AppConsulta() {
    const [anime, setAnime] = useState('')
    const [id, setId] = useState(0)
    const [nome, setNome] = useState('')


    async function Listar(){
        const resp = await Consultar();
        setAnime(resp)
    }
    
  return (
    <div className="AppConsulta">
      <button onClick={Listar}>Listar</button>

      <table>
        <tr>
            <th>Id</th>
            <th>Nome</th>
        </tr>
        {anime.map(item =>
            <tr>
                <td>{item.id} </td>
                <td>{item.nome} </td>
            </tr>
            )}
      </table>
            <Link to='/'>Voltar</Link>
    </div>
  );
}


