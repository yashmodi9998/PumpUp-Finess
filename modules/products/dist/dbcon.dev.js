"use strict";

var _require = require("mongodb"),
    MongoClient = _require.MongoClient,
    ObjectId = _require.ObjectId; // const dbUrl = "mongodb://127.0.0.1:27017/supplements";


var dotenv = require("dotenv");

dotenv.config();
var defaultUser = "admin";
var defaultPassword = "admin"; // Use environment variables if available, otherwise use default values

var username = process.env.DB_USER || defaultUser;
var password = process.env.DB_PWD || defaultPassword;
var dbUrl = "mongodb+srv://".concat(username, ":").concat(password, "@cluster0.kqwupps.mongodb.net/");
var client = new MongoClient(dbUrl);

function connection() {
  return regeneratorRuntime.async(function connection$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          db = client.db("supplements");
          return _context.abrupt("return", db);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}

function getProducts() {
  var results;
  return regeneratorRuntime.async(function getProducts$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(connection());

        case 2:
          db = _context2.sent;
          results = db.collection("products").find({});
          _context2.next = 6;
          return regeneratorRuntime.awrap(results.toArray());

        case 6:
          res = _context2.sent;
          return _context2.abrupt("return", res);

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function getProductById(productId) {
  return regeneratorRuntime.async(function getProductById$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(connection());

        case 2:
          db = _context3.sent;
          return _context3.abrupt("return", db.collection("products").findOne({
            _id: new ObjectId(productId)
          }));

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function addProduct(product) {
  var status;
  return regeneratorRuntime.async(function addProduct$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(connection());

        case 2:
          db = _context4.sent;
          _context4.next = 5;
          return regeneratorRuntime.awrap(db.collection("products").insertOne(product));

        case 5:
          status = _context4.sent;
          console.log("states " + status);

        case 7:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function updateProduct(productId, updatedProduct) {
  return regeneratorRuntime.async(function updateProduct$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(connection());

        case 2:
          db = _context5.sent;
          _context5.next = 5;
          return regeneratorRuntime.awrap(db.collection("products").updateOne({
            _id: new ObjectId(productId)
          }, {
            $set: updatedProduct
          }));

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
}

function deleteProduct(productId) {
  return regeneratorRuntime.async(function deleteProduct$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(connection());

        case 2:
          db = _context6.sent;
          _context6.next = 5;
          return regeneratorRuntime.awrap(db.collection("products").deleteOne({
            _id: new ObjectId(productId)
          }));

        case 5:
        case "end":
          return _context6.stop();
      }
    }
  });
}

function searchProducts(query) {
  var regexQuery, products;
  return regeneratorRuntime.async(function searchProducts$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(connection());

        case 2:
          db = _context7.sent;
          regexQuery = {
            name: {
              $regex: new RegExp(query, "i")
            }
          };
          _context7.next = 6;
          return regeneratorRuntime.awrap(db.collection("products").find(regexQuery).toArray());

        case 6:
          products = _context7.sent;
          return _context7.abrupt("return", products);

        case 8:
        case "end":
          return _context7.stop();
      }
    }
  });
}

module.exports = {
  getProducts: getProducts,
  getProductById: getProductById,
  addProduct: addProduct,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct,
  searchProducts: searchProducts
};