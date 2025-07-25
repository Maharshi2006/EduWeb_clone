import './App.css';
import Home from './components/Home';
import About from "./components/About";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Courses from './components/Courses';

function App() {
  return (
    <>
    <div>
        <Navbar />
      </div>
      <Home />
       <About />
      <Courses />
      <Blog /> 
       <Footer />

    </>
  );
}

export default App;