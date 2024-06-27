import './App.css';
import Calculator from './components/calculator';
import ConsecutiveThreesChecker from './components/ConsecutiveThreesChecker';
import FrequentCharacter from './components/FrequentCharacter';
import Number from './components/number';
import PangramChecker from './components/PangramChecker';
import SentenceReverser from './components/SentenceReverser';
function App() {
  return (
    <div className="App">
      <Number/>
      <Calculator/>
      <FrequentCharacter/>
      <PangramChecker/>
      <ConsecutiveThreesChecker/>
      <SentenceReverser/>
    </div>
  );
}

export default App;
