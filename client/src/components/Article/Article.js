import Badge from '../components/Badge/Badge';

// Inside the JSX
<p>
  <strong>Verification Status:</strong>
  {verification ? <Badge status={verification.status} /> : 'Loading...'}
</p>