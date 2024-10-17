// pages/api/new-meetup.js
import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        // Replace <DATABASE_NAME> with your actual database name
        const connectionString = 'mongodb+srv://chaitanyaumbarkar34:TJzdBoJfGOPCdVj7@cluster0.gfnzr.mongodb.net/<DATABASE_NAME>?retryWrites=true&w=majority';

        try {
            // Connect to MongoDB
            const client = await MongoClient.connect(connectionString);
            const db = client.db();

            // Access the collection
            const meetupsCollection = db.collection('meetups');

            // Insert the meetup data into the collection
            const result = await meetupsCollection.insertOne(data);
            console.log('Insert result:', result);

            // Close the connection
            client.close();

            // Send a success response
            res.status(201).json({ message: 'Meetup inserted successfully!' });
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
            res.status(500).json({ message: 'Inserting data failed!' });
        }
    } else {
        // Respond with a 405 if the method is not POST
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}

export default handler;
