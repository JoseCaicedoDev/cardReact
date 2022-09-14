import './App.css';
import Testimony from './components/Testimony';
import { TestimonyList } from './components/testimonyList';
import { useEffect, useState } from 'react';

function App() {

  const [testimonies, setTestimonies] = useState(null)
  useEffect(()=>{
    TestimonyList(setTestimonies)
  }, [])

  return (
    <div className="App">
      <div className='container mx-auto'>
        <h1 className='text-gray-700 font-extrabold text-xl sm:text-5xl my-7'>Testimonials cards with react</h1>
        {
          testimonies != null ?
          testimonies.map( testimony =>
          <Testimony
            key={testimony.id}
            name={testimony.name}
            imageName={testimony.avatar}
            state={testimony.location}
            position={testimony.designation}
            testi={testimony.message}
            />
            ) : 'no hay'
        }
      </div>
    </div>
  );
}

export default App;
