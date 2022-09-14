import Testimony from './components/Testimony';
import { TestimonyList } from './components/testimonyList';
import { useEffect, useState } from 'react';

function App() {

  const [testimonies, setTestimonies] = useState(null)
  useEffect(()=>{
    TestimonyList(setTestimonies)
  }, [])

  return (
    <>
      <div className='max-w-screen-lg mx-auto text-center flex flex-col items-center'>
        <h1 className='text-gray-700 font-extrabold text-2xl sm:text-5xl my-7'>Testimonials cards with react</h1>
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
            ) : <p className='my-20 text-4xl text-gray-700 font-semibold'>Cargando...</p>
        }
      </div>
    </>
  );
}

export default App;
