"use strict";

var express = require("express");

var router = express.Router();

var model = require("./dbcon");

router.use(express.urlencoded({
  extended: true
}));
router.use(express.json());
router.get("/", function (req, res) {
  res.render("index", {
    title: "PumpUp Fitness"
  });
});
router.get("/admin", function _callee(req, res) {
  var products;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(model.getProducts());

        case 3:
          products = _context.sent;
          res.render("admin", {
            title: "Admin",
            items: products
          });
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          res.status(500).send("Internal Server Error");

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
router.get("/products", function _callee2(req, res) {
  var products;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(model.getProducts());

        case 3:
          products = _context2.sent;
          console.log(products);
          res.render("products", {
            title: "Products",
            items: products
          });
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          res.status(500).send("Internal Server Error");

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
router.post("/products/new", function _callee3(request, response) {
  var name, category, price, quantity_available, description, newProduct;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          name = request.body.name;
          category = request.body.category;
          price = request.body.price;
          quantity_available = request.body.quantity_available;
          description = request.body.description;
          newProduct = {
            name: name,
            category: category,
            price: price,
            quantity_available: quantity_available,
            description: description
          };
          _context3.next = 9;
          return regeneratorRuntime.awrap(model.addProduct(newProduct));

        case 9:
          response.redirect("/products");
          _context3.next = 16;
          break;

        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          res.status(500).send("Internal Server Error");

        case 16:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 12]]);
});
router.get("/products/search", function _callee4(req, res) {
  var searchQuery, products;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          searchQuery = req.query.searchQuery || ""; // Get the search query from the request parameters

          _context4.next = 4;
          return regeneratorRuntime.awrap(model.searchProducts(searchQuery));

        case 4:
          products = _context4.sent;
          // Call a new function in your model to handle the search
          res.render("products", {
            title: "Products",
            items: products,
            searchQuery: searchQuery
          });
          _context4.next = 12;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);
          res.status(500).send("Internal Server Error");

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
router.get("/manageproducts", function _callee5(req, res) {
  var products;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(model.getProducts());

        case 3:
          products = _context5.sent;
          res.render("manageproducts", {
            title: "Manage Products",
            items: products
          });
          _context5.next = 11;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          res.status(500).send("Internal Server Error");

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
router.get("/manageproducts/edit-product/:id", function _callee6(req, res) {
  var productId, product;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          productId = req.params.id;
          _context6.next = 4;
          return regeneratorRuntime.awrap(model.getProductById(productId));

        case 4:
          product = _context6.sent;

          if (product) {
            _context6.next = 7;
            break;
          }

          return _context6.abrupt("return", res.status(404).send("Product not found"));

        case 7:
          res.render("edit-product", {
            title: "Edit Product",
            product: product
          });
          _context6.next = 14;
          break;

        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](0);
          console.error(_context6.t0);
          res.status(500).send("Internal Server Error");

        case 14:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 10]]);
});
router.post("/manageproducts/update/:id", function _callee7(req, res) {
  var productId, updatedProduct;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          productId = req.params.id;
          updatedProduct = {
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            quantity_available: req.body.quantity_available,
            description: req.body.description
          };
          _context7.next = 5;
          return regeneratorRuntime.awrap(model.updateProduct(productId, updatedProduct));

        case 5:
          res.redirect("/manageproducts");
          _context7.next = 12;
          break;

        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          console.error(_context7.t0);
          res.status(500).send("Internal Server Error");

        case 12:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
router.get("/manageproducts/delete/:id", function _callee8(req, res) {
  var productId;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          productId = req.params.id;
          _context8.next = 4;
          return regeneratorRuntime.awrap(model.deleteProduct(productId));

        case 4:
          res.redirect("/manageproducts");
          _context8.next = 11;
          break;

        case 7:
          _context8.prev = 7;
          _context8.t0 = _context8["catch"](0);
          console.error(_context8.t0);
          res.status(500).send("Internal Server Error");

        case 11:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
module.exports = router;