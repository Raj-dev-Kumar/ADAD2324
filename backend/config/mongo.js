const { MongoClient } = require('mongodb');
require('dotenv').config()
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = process.env.MONGOURL;
const client = new MongoClient(url);

// Database Name
const dbName = 'project';


  // Use connect method to connect to the server
  try {
    client.connect();
    console.log('Conexão com servidor MongoDB realizada com sucesso');
    const db = client.db(dbName);
    module.exports = db
    
  } catch (error) {
    console.log("Error")
    const db = {}
    module.exports = db
    
  }


  // the following code examples can be pasted here...



