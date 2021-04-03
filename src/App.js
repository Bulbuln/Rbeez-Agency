import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Inedx from './Components/Index';
import { useEffect } from 'react';
import Footer from './Components/Footer/Footer';

function App() {

  useEffect(()=> {
    window.addEventListener('scroll', () => {
      
      let articles = document.querySelectorAll('.article ');
    
  
  
      articles.forEach(article => { 
          let contentPosition = article.getBoundingClientRect().top;
          let screenPosition = window.innerHeight ;
          if (contentPosition < screenPosition) {
  
              article.classList.add('active')
              
          } 
          else {
              article.classList.remove('active')
          }
              
      })
      
  
  
  })
  
  },[])

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Inedx/>
      <Footer/>

    </div>
  )
}

export default App;
