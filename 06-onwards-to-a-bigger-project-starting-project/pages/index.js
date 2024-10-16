// pages/index.js
import { MongoClient } from 'mongodb';
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/View_of_Santa_Maria_del_Fiore_in_Florence.jpg/480px-View_of_Santa_Maria_del_Fiore_in_Florence.jpg',
    address: 'Ashvi Bk, 143, Sangamner',
    description: 'This is the first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/View_of_Santa_Maria_del_Fiore_in_Florence.jpg/480px-View_of_Santa_Maria_del_Fiore_in_Florence.jpg',
    address: 'Umbri Balapur, 173, Sangamner',
    description: 'This is the second meetup!',
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // Here, you can fetch data from an API or database if needed.

  const client = await MongoClient.connect('mongodb+srv://chaitanyaumbarkar34:TJzdBoJfGOPCdVj7@cluster0.gfnzr.mongodb.net/');

      const db = client.db();

      const meetupsCollection = db.collection('meetups');

      const meetups = await meetups.collection.find().toArray();

      client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      })),
    },
    revalidate: 1, // Revalidate the page every second to keep it up-to-date
  };
}

export default HomePage;
