// pages/[meetupId]/index.js
import MeetupDetail from "../../components/meetups/meetupDetail";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      address={props.meetupData.address}
      title={props.meetupData.title}
      description={props.meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      { params: { meetupId: "m1" } },
      { params: { meetupId: "m2" } },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  // Log to the terminal, useful for debugging during build
  console.log(meetupId);

  // Fetch or get your meetup data based on meetupId
  return {
    props: {
      meetupData: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/View_of_Santa_Maria_del_Fiore_in_Florence.jpg/480px-View_of_Santa_Maria_del_Fiore_in_Florence.jpg",
        id: meetupId,
        title: `Meetup ${meetupId}`,
        address: "sant colony, 173, street side",
        description: "This is a description of the meetup.",
      },
    },
  };
}

export default MeetupDetails;
