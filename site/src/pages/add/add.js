
import {Link} from 'react-router-dom'
import {Adicionar} from '../../api/filme'
import { useState } from 'react'

import './add.scss'

export default function AppAdd() {
    const [id, setId] = useState(0)
    const [nome, setNome] = useState('')

    async function Novo(){
        try {
            let r;
            if (id === 0){
                r = await Adicionar(nome)
            }
        } catch(err){
            
        }
    }
  return (
    <div className="AppAdd">
      <div className='container'>
            <input value={nome}  onChange={e => setNome(e.target.value)} />
            <button onClick={Novo}>ADD</button>
            <Link to='/'>voltar</Link>
      </div>
    </div>
  );
}

