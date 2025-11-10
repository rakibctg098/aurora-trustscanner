import { useState } from 'react';

export default function ScannerForm({ setResult, setLoading }) {
  const [address, setAddress] = useState('');

  const handleScan = async () => {
    if (!address) return alert("Enter contract address");
    setLoading(true);
    setResult(null);

    const res = await fetch('https://aurora-trustscanner.onrender.com/scan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contractAddress: address })
    });

    const data = await res.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="form">
      <input
        type="text"
        placeholder="0x123... Contract Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleScan}>Scan Now</button>
    </div>
  );
        }
