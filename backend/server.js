const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/scan', (req, res) => {
  const { contractAddress } = req.body;
  const mockRisks = contractAddress.includes('bad') 
    ? ["Withdraw function exposed", "Too many public functions"]
    : [];
  
  const status = mockRisks.length === 0 ? "Safe" : "Risky";
  const score = Math.max(0, 100 - mockRisks.length * 30);

  res.json({ address: contractAddress, status, score, risks: mockRisks });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend on ${PORT}`));
