import './App.css';
import reactLogo from './imagenes/react-logo.png';
import Tarea from './componentes/Tarea.js';
import TareaFormulario from './componentes/TareaFormulario';
import ListaDeTareas from './componentes/ListadeTareas';




function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={reactLogo} 
          className='freecodecamp-logo' alt='logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
       <ListaDeTareas />
      </div>
    </div>
  );
}


export default App;
