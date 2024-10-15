// pages/[meetupId].js

import { useRouter } from 'next/router';
import MeetupItem from './MeetupItem';

function MeetupDetailsPage() {
  const router = useRouter();
  const meetupId = router.query.meetupId;

  // Dummy data for demonstration. Replace with your data fetching logic.
  const dummyData = {
    id: meetupId,
    title: 'A First Meetup',
    image: 'https://via.placeholder.com/300',
    address: '123, Main Street, City',
    description: 'This is a first meetup.',
  };

  return (
    <section>
      <h1>{dummyData.title}</h1>
      <img src={dummyData.image} alt={dummyData.title} />
      <address>{dummyData.address}</address>
      <p>{dummyData.description}</p>
    </section>
  );
}

export default MeetupDetailsPage;
