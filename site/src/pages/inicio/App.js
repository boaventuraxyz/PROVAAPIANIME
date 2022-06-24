
import {Link} from 'react-router-dom'

import './App.scss'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to='/add'>add</Link>
          <Link to='/consultar'>consultar</Link>
        </nav>
      </header>
    </div>
  );
}
