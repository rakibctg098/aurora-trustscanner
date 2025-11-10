import { useState } from 'react';
import ScannerForm from './components/ScannerForm.jsx';
import ResultCard from './components/ResultCard.jsx';
import './App.css';

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="app">
      <header>
        <h1>AURORA TrustScanner</h1>
        <p>Scan Smart Contracts for Security Risks</p>
      </header>

      <ScannerForm setResult={setResult} setLoading={setLoading} />
      {loading && <div className="spinner">Scanning...</div>}
      {result && <ResultCard result={result} />}
    </div>
  );
}

export default App;
