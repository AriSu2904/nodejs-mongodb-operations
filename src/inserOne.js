const connectionClient = require("./connectDb");

const insertOne = async () => {
    const client = await connectionClient();
    const collection = await client.db('latihan').collection('user');

    try {
        await collection.insertOne({name: "Ari Susanto", age: 23});
    }catch (e){
        console.log(e);
    }finally {
        await client.close();
    }
}

insertOne().catch(console.error);