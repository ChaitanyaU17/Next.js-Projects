// src/pages/api/tasks.js
import { MongoClient } from 'mongodb';

const MONGO_URI = 'mongodb+srv://chaitanyaumbarkar34:46cPTS1SYgGvEotI@cluster0.rmg8i.mongodb.net/';
const DB_NAME = 'todoDatabase';
const COLLECTION_NAME = 'tasks';

export default async function handler(req, res) {
  const client = await MongoClient.connect(MONGO_URI);
  const db = client.db(DB_NAME);
  const tasksCollection = db.collection(COLLECTION_NAME);

  if (req.method === 'GET') {
    // Fetch tasks from the database
    const tasks = await tasksCollection.find().toArray();
    res.status(200).json(tasks);
  } else if (req.method === 'POST') {
    // Insert a new task into the database
    const newTask = req.body;
    const result = await tasksCollection.insertOne(newTask);
    res.status(201).json(result.ops[0]);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  client.close();
}
