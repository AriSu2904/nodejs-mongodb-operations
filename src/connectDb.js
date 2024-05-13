const { MongoClient } = require('mongodb');

const connectionClient = async (collectionName) => {

    const uri = "mongodb://localhost:27017";

    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("Connected");
        return client;
    }catch (e) {
        console.log(e);
    }
}

module.exports = connectionClient;