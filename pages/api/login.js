const { MongoClient } = require("mongodb")
const { createHash } = require('crypto');

export default async function handler(req, res) {
    const client = new MongoClient("mongodb+srv://celine:7Oj7HYZZZK6qrA6B@production.mgcr6cu.mongodb.net");

    await client.connect();

    if (!req.body.username || !req.body.password) return res.status(400).send("Please provide a username and password")

	const hashedPassword = createHash("sha256").update(req.body.password).digest("hex")
    const user = await client.db("motion").collection("users").findOne({ username: { $regex: new RegExp(`^${req.body.username}$`, "i")}, password: hashedPassword })

	await client.close()

    if (user) return res.status(200).send({ username: user.username, apiKey: user.apiKey })

    return res.status(400).send('No user found with that information');
  }