var express = require("express");
var router = express.Router();
const model = require("./dbcon");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get("/", (req, res) => {
  res.render("index", { title: "PumpUp Fitness" });
});

router.get("/admin", async (req, res) => {
  try {
    let products = await model.getProducts();
    res.render("admin", { title: "Admin", items: products });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/products", async (req, res) => {
  try {
    let products = await model.getProducts();
    console.log(products);
    res.render("products", { title: "Products", items: products });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/products/new", async (request, response) => {
  try {
    let name = request.body.name;
    let category = request.body.category;
    let price = request.body.price;
    let quantity_available = request.body.quantity_available;
    let description = request.body.description;

    var newProduct = {
      name: name,
      category: category,
      price: price,
      quantity_available: quantity_available,
      description: description,
    };
    await model.addProduct(newProduct);
    response.redirect("/products");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/products/search", async (req, res) => {
  try {
      const searchQuery = req.query.searchQuery || ""; // Get the search query from the request parameters
      let products = await model.searchProducts(searchQuery); // Call a new function in your model to handle the search
      res.render("products", { title: "Products", items: products, searchQuery });
  } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
