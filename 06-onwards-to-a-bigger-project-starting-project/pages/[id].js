// pages/[id].js
import { useRouter } from 'next/router';

function MeetupDetailsPage({ meetupData }) {
  const router = useRouter();

  // If fallback is set to 'blocking', this prevents rendering until data is available
  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <h1>{meetupData.title}</h1>
      <img src={meetupData.image} alt={meetupData.title} />
      <address>{meetupData.address}</address>
      <p>{meetupData.description}</p>
    </section>
  );
}

export async function getStaticPaths() {
  // Fetch the list of meetups or IDs from your data source
  const dummyData = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];

  const paths = dummyData.map((meetup) => ({
    params: { id: meetup.id },
  }));

  return {
    paths,
    fallback: 'blocking', // Can be true, false, or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;

  // Fetch data based on the ID (use your actual API or database here)
  const dummyData = {
    id: id,
    title: `Meetup ${id}`,
    image: 'https://via.placeholder.com/300',
    address: `123 Address Street for meetup ${id}`,
    description: `This is a description for meetup ${id}.`,
  };

  return {
    props: {
      meetupData: dummyData,
    },
    revalidate: 10, // Optional: Revalidate data every 10 seconds
  };
}

export default MeetupDetailsPage;
