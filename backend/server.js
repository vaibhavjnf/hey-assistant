const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const uri = "mongodb+srv://vaibhav362:jvdmaJ59tAOcROpI@cluster0.mongodb.net/hey-assistant?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.static("public"));
app.use(express.json());

app.post("/submit-routine", async (req, res) => {
  console.log(req.body.userInput);

  try {
    await client.connect();
    const db = client.db("hey-assistant");
    const routinesCollection = db.collection("routines");

    const newRoutine = {
      userInput: req.body.userInput,
    };

    const result = await routinesCollection.insertOne(newRoutine);
    console.log("Document inserted with _id:", result.insertedId);
    res.sendStatus(200);
  } catch (err) {
    console.error("Error inserting document:", err);
    res.sendStatus(500);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
