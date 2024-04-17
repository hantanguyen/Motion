const { MongoClient } = require("mongodb")
const { createHash, randomBytes} = require('crypto');

export default async function handler(req, res) {
    const client = new MongoClient(process.env.MONGO_URL);

    await client.connect();

    if (!req.body.username || !req.body.password) return res.status(400).send("Please provide a username and password")

    const user = await client.db("motion").collection("users").findOne({ username: { $regex: new RegExp(`^${req.body.username}$`, "i")} })

    if (user) return res.status(400).send("User already exists")

    const hashedPassword = createHash("sha256").update(req.body.password).digest("hex")
    const apiKey = randomBytes(8).toString('hex');

    await client.db("motion").collection("users").insertOne({ username: req.body.username, password: hashedPassword, apiKey })
    await client.close()

    return res.status(200).send('Sign up successful');
  }