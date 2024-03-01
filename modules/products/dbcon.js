const { MongoClient, ObjectId } = require("mongodb");
// const dbUrl = "mongodb://127.0.0.1:27017/supplements";
const dotenv = require("dotenv");
dotenv.config();
const defaultUser = "admin";
const defaultPassword = "admin";

// Use environment variables if available, otherwise use default values
const username = process.env.DB_USER || defaultUser;
const password = process.env.DB_PWD || defaultPassword;
const dbUrl = `mongodb+srv://${username}:${password}@cluster0.kqwupps.mongodb.net/`;

const client = new MongoClient(dbUrl);

async function connection() {
  db = client.db("supplements");
  return db;
}
async function getProducts() {
  db = await connection();
  var results = db.collection("products").find({});
  res = await results.toArray();
  return res;
}
async function addProduct(product) {
  db = await connection();
  var status = await db.collection("products").insertOne(product);
  console.log("states " + status);
}

async function searchProducts(query) {
  db = await connection();

  const regexQuery = { name: { $regex: new RegExp(query, "i") } };

  const products = await db.collection("products").find(regexQuery).toArray();

  return products;
}
module.exports = { getProducts, addProduct, searchProducts };
