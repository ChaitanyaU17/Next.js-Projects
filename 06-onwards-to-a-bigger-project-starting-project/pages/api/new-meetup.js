import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

      const client = await MongoClient.connect('mongodb+srv://chaitanyaumbarkar34:TJzdBoJfGOPCdVj7@cluster0.gfnzr.mongodb.net/');

      const db = client.db();

      const meetupsCollection = db.collection('meetups');

     const result = await meetupsCollection.insertOne(data);

     console.log(result);

     client.close();

     res.status(201).json({ message: 'Meetup Inserted!'});
    }
}

export default handler;