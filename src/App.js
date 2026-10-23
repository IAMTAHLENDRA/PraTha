import './App.css';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Celebrations from './components/Celebrations';
import MiniCountdown from './components/MiniCountdown';

function App() {
  return (
    <>
      <main>
        <Hero />
        <Countdown />
        <Celebrations />
      </main>
      <MiniCountdown />
    </>
  );
}

export default App;
