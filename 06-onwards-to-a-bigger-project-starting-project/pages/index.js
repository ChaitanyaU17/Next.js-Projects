// pages/index.js
import Head from "next/head";
import { Fragment } from "react";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_MEETUPS = [
//   {
//     id: 'm1',
//     title: 'A First Meetup',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/View_of_Santa_Maria_del_Fiore_in_Florence.jpg/480px-View_of_Santa_Maria_del_Fiore_in_Florence.jpg',
//     address: 'Ashvi Bk, 143, Sangamner',
//     description: 'This is the first meetup!',
//   },
//   {
//     id: 'm2',
//     title: 'A Second Meetup',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/View_of_Santa_Maria_del_Fiore_in_Florence.jpg/480px-View_of_Santa_Maria_del_Fiore_in_Florence.jpg',
//     address: 'Umbri Balapur, 173, Sangamner',
//     description: 'This is the second meetup!',
//   },
// ];

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list of highly active React meetups!" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export async function getStaticProps() {
  try {
    const client = await MongoClient.connect(
      "mongodb+srv://chaitanyaumbarkar34:TJzdBoJfGOPCdVj7@cluster0.gfnzr.mongodb.net/<DATABASE_NAME>?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.find().toArray();
    client.close();

    return {
      props: {
        meetups: meetups.map((meetup) => ({
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
          id: meetup._id.toString(),
        })),
      },
      revalidate: 1,
    };
  } catch (error) {
    console.error("Error fetching meetups:", error);
    return {
      props: {
        meetups: [],
      },
    };
  }
}

export default HomePage;
