// src/App.jsx
import Hero from './Components/Hero';
import Navbar from './Components/Navbar'; // Import Navbar as default
import SliderTab from './Components/SliderTab/SliderTab';
import Intro from './Components/Intro/Intro';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <br />
      <Intro />
      <SliderTab />
      <br />
      <Footer />
    </div>
  );
}

export default App;
