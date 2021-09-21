import './App.css';
import Artists from './artistcontent/artists';
import Footer from'./components/footer/footer';
import ScrollButton from './components/scrollButton/scrollButton';
import SwipeableTemporaryDrawer from './components/drawer/drawer';
import Navbar from './components/navbar/navbar'



function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <SwipeableTemporaryDrawer/>
      <Artists/>
     
      <ScrollButton/>
      
      <Footer/>
    </div>
  );
}

export default App;
