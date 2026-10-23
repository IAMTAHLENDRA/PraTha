import './App.css';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Celebrations from './components/Celebrations';
import MiniCountdown from './components/MiniCountdown';
import Footer from './components/Footer';
import MusicToggle from './components/MusicToggle';

function App() {
  return (
    <>
      <main>
        <Hero />
        <Celebrations />
        <Countdown />
      </main>
      <Footer />
      <MiniCountdown />
      <MusicToggle />
    </>
  );
}

export default App;
