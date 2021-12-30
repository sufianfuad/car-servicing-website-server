const express = require('express');
//express
const app = express();
//cors
const cors = require('cors');
//
const { MongoClient } = require('mongodb');
//dotenv
require('dotenv').config();

const port = process.env.PORT || 7000;

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//==========

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.i3fcr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

console.log(uri);
async function run() {
    try {
        await client.connect();
        console.log('Database connected successfully');
        const database = client.db('car-servicing')
        const servicesCollection = database.collection('services');
    }
    finally {
        // await client.close();   
    }
}
run.catch(console.dir);
//==============

app.get('/', (req, res) => {
    res.send('Database Connected successfully');
})

app.listen(port, () => {
    console.log(`Running at ${port}`);
})