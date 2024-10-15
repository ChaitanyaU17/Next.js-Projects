// pages/api/meetups/[id].js

export default async function handler(req, res) {
    const { id } = req.query;
  
    // Replace this with your actual data fetching logic, e.g., from a database
    const dummyData = [
      {
        id: '1',
        title: 'A First Meetup',
        image: 'https://via.placeholder.com/300',
        address: '123, Main Street, City',
        description: 'This is a first meetup.',
      },
      {
        id: '2',
        title: 'A Second Meetup',
        image: 'https://via.placeholder.com/300',
        address: '456, Another Street, City',
        description: 'This is a second meetup.',
      },
    ];
  
    const meetup = dummyData.find((meetup) => meetup.id === id);
  
    if (meetup) {
      res.status(200).json(meetup);
    } else {
      res.status(404).json({ message: 'Meetup not found' });
    }
  }
  