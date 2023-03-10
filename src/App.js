
import './App.css';
import {ContextText} from './components/ContextText.tsx'
/*
Diseño libre.
Usar al menos 3 componentes.
La informacion y contenido de la tarjeta tambien es libre.
Los datos del empleado pueden ser fijos (crean un objeto con datos estaticos como vimos en clase).
Debe utilizar Typescript y useContext para pasar la informacion del empleado entre componentes.
*/

function App() {
  return (
    <div className="App">
      <ContextText/>
    </div>
  );
}

export default App;
