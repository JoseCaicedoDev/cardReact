import './App.css';
import Testimony from './components/Testimony';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1>Creando Card con React</h1>
        <Testimony
          name='Shawn Wang'
          imageName='shawn'
          state='Singapur'
          position='Ingeniero de Software'
          work='Amazon'
          testi='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
          />
        <Testimony
          name='Shawn Wang'
          imageName='shawn'
          state='Singapur'
          position='Ingeniero de Software'
          work='Amazon'
          testi='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
          />
      </div>
    </div>
  );
}

export default App;
