import './App.css';
import reactLogo from './imagenes/react-logo.png';
import Tarea from './componentes/Tarea.js';





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
        <Tarea
        texto='Aprender React' />
      </div>
    </div>
  );
}


export default App;
