//const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //Insert new doc into Users(name, age, location)
    db.collection('Users').insertOne({
        name: 'Andrew',
        age: 25,
        location: 'Philadelphia'
    }, (err, result) => {
        if(err) {
          return console.log('Unable to insert user', err);
        }
        console.log(result.ops);
      });

    //client.close();
});