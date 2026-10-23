import './App.css';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Celebrations from './components/Celebrations';
import MiniCountdown from './components/MiniCountdown';
import Footer from './components/Footer';
import MusicToggle from './components/MusicToggle';
import Petals from './components/Petals';
import Gallery from './components/Gallery';

function App() {
  return (
    <>
      <main>
        <Hero />
        <div className="after-hero">
          <Petals count={18} />
          <Celebrations />
          <Gallery />
          <Countdown />
          <Footer />
        </div>
      </main>
      <MiniCountdown />
      <MusicToggle />
    </>
  );
}

export default App;
