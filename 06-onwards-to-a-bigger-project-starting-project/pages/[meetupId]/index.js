// pages/[meetupId]/index.js
import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetail from "../../components/meetups/meetupDetail";
import { Fragment } from 'react';
import Head from 'next/head';

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head> 
      <MeetupDetail
      image={props.meetupData.image}
      address={props.meetupData.address}
      title={props.meetupData.title}
      description={props.meetupData.description}
    />
    </Fragment>
    
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect('mongodb+srv://chaitanyaumbarkar34:TJzdBoJfGOPCdVj7@cluster0.gfnzr.mongodb.net/<DATABASE_NAME>?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString()}
    }))
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect('mongodb+srv://chaitanyaumbarkar34:TJzdBoJfGOPCdVj7@cluster0.gfnzr.mongodb.net/<DATABASE_NAME>?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const selectedMeetup = await meetupsCollection.findOne({_id: new ObjectId(meetupId)});

  client.close();

  // Fetch or get your meetup data based on meetupId
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
        image: selectedMeetup.image
      }
    },
  };
}

export default MeetupDetails;
