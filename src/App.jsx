import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Experiences from './Components/Experiences/Experiences'
import Studies from './Components/Studies/Studies'
import Skills from './Components/Skills/Skills'
import Footer from './Components/Footer/Footer'

export const App = () => {
  const [page, setPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  const changePage = async (newPage) => {
    if (newPage !== page) {
      setIsLoading(true);
      setPage(newPage);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div className="App">
      <Navbar page={page} changePage={changePage}/>
      { isLoading
        ? <h1>LOADING ...</h1>
        : page === 'home'
        ? <Home/>
        : page === 'experience'
        ? <Experiences/>
        : page === 'studies'
        ? <Studies/>
        : page === 'skills'
        ? <Skills/>
        : <h1>not implemented</h1>
      }
      <Footer/>
    </div>
  );
}

export default App;
