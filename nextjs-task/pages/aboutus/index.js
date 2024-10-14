// pages/aboutus/index.js

import Link from 'next/link';

const details = [
  { id: '1', name: 'Yash', role: 'Senior Developer' },
  { id: '2', name: 'Vaibhav', role: 'Backend Developer' },
  { id: '3', name: 'Chaitanya', role: 'Frontend Developer' },
];

function AboutUsPage() {
  return (
    <div>
      <h1>Our Team</h1>
      <ul>
        {details.map((dev) => (
          <li key={dev.id}>
            {/* Use Link without the <a> tag */}
            <Link href={`/aboutus/${dev.id}`}>{dev.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutUsPage;
