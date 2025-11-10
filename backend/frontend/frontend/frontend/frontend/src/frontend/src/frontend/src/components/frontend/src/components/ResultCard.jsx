export default function ResultCard({ result }) {
  const { status, score, risks, address } = result;

  return (
    <div className={`result ${status.toLowerCase()}`}>
      <h3>Scan Result</h3>
      <p><strong>Contract:</strong> {address.slice(0, 10)}...</p>
      <p className="status"><strong>{status}</strong> | Score: {score}/100</p>

      {risks.length > 0 ? (
        <ul>
          {risks.map((r, i) => <li key={i}>Warning: {r}</li>)}
        </ul>
      ) : (
        <p>No risks detected!</p>
      )}
    </div>
  );
}
