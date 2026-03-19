const { MongoClient } = require("mongodb");

const urls = {
  a: "mongodb://127.0.0.1:27017/service-a",
  b: "mongodb://127.0.0.1:27017/service-b",
  x: "mongodb://127.0.0.1:27017/service-x",
};

// 📖 READ
async function readDatabase() {
  const clientA = new MongoClient(urls.a);
  const clientB = new MongoClient(urls.b);
  const clientX = new MongoClient(urls.x);

  await Promise.all([
    clientA.connect(),
    clientB.connect(),
    clientX.connect()
  ]);

  const [aData, bData, xData] = await Promise.all([
    clientA.db().collection("data").find().toArray(),
    clientB.db().collection("data").find().toArray(),
    clientX.db().collection("data").find().toArray()
  ]);

  console.log("\nservice-a =", aData);
  console.log("service-b =", bData);
  console.log("service-x =", xData);

  await Promise.all([
    clientA.close(),
    clientB.close(),
    clientX.close()
  ]);
}

// 🧹 CLEAR
async function clearDatabase() {
  const clientA = new MongoClient(urls.a);
  const clientB = new MongoClient(urls.b);
  const clientX = new MongoClient(urls.x);

  await Promise.all([
    clientA.connect(),
    clientB.connect(),
    clientX.connect()
  ]);

  await Promise.all([
    clientA.db().collection("items").deleteMany({}),
    clientB.db().collection("users").deleteMany({}),
    clientX.db().collection("events").deleteMany({})
  ]);

  console.log("🧹 All databases cleared");

  await Promise.all([
    clientA.close(),
    clientB.close(),
    clientX.close()
  ]);
}

readDatabase()