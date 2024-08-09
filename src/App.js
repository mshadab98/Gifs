import logo from './logo.svg';
import './App.css';
import RandomGifs from './components/RandomGifs';
import Tags from './components/Tags';

function App() {
  return (
      <>
      <div className='w-full h-screen flex flex-col bg-slate-700 relative overflow-x-hidden items-center'>
        <h1 className='bg-white w-11/12 mt-[40px] px-10 py-2 text-4xl font-bold mx-auto rounded-lg text-center'>
          RANDOM GIFS
        </h1>
        <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
          <RandomGifs/>
          <Tags/>
        </div>
      </div>
      
      
      </>
  );
}

export default App;
